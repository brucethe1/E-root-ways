// src/pages/Home.jsx
import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import SearchBar from '../components/SearchBar';

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom bus icon
const busIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/477/477103.png',
  iconSize: [30, 30],
});

const Home = () => {
  const mapRef = useRef();
  const [userLocation, setUserLocation] = useState([-1.9536, 30.0605]); // Default to Kigali
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [nearbyBuses, setNearbyBuses] = useState([]);
  const [parkStations, setParkStations] = useState([]);

  // Mock data for bus stops
  const busStops = {
    "City Center": [-1.9536, 30.0605],
    "Kimironko": [-1.9365, 30.1301],
    "Remera": [-1.9526, 30.1049],
    "Nyabugogo": [-1.9441, 30.0619],
    "Kicukiro": [-1.9686, 30.1244],
    "Gisozi": [-1.9439, 30.0907]
  };

  // Mock route data
  const routes = {
    "route1": {
      name: "City Center - Kimironko",
      stops: ["City Center", "Remera", "Kimironko"],
      path: [
        [-1.9536, 30.0605],
        [-1.9526, 30.1049],
        [-1.9365, 30.1301]
      ],
      distance: "8.5 km",
      duration: "25 min",
      fare: "500 RWF",
      buses: ["RA 101", "RA 102"]
    },
    "route2": {
      name: "City Center - Nyabugogo",
      stops: ["City Center", "Kicukiro", "Nyabugogo"],
      path: [
        [-1.9536, 30.0605],
        [-1.9686, 30.1244],
        [-1.9441, 30.0619]
      ],
      distance: "6.2 km",
      duration: "20 min",
      fare: "400 RWF",
      buses: ["RA 201", "RA 202"]
    }
  };

  // Mock park stations
  const mockParkStations = [
    { name: "City Park", location: [-1.9540, 30.0610], buses: ["RA 101", "RA 201"] },
    { name: "Remera Park", location: [-1.9520, 30.1050], buses: ["RA 102"] }
  ];

  // Mock nearby buses
  const mockNearbyBuses = [
    { id: "bus1", name: "RA 101", location: [-1.9530, 30.0610], route: "route1", arrival: "3 min" },
    { id: "bus2", name: "RA 201", location: [-1.9532, 30.0608], route: "route2", arrival: "5 min" }
  ];

  // Detect user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          mapRef.current.flyTo([latitude, longitude], 14);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  // Handle search
  const handleSearch = (from, to) => {
    // Find routes that include both from and to stops
    const availableRoutes = Object.values(routes).filter(route => 
      route.stops.includes(from) && route.stops.includes(to)
    );

    if (availableRoutes.length > 0) {
      setSelectedRoute(availableRoutes[0]);
      setParkStations(mockParkStations);
      setNearbyBuses(mockNearbyBuses);
      
      // Center map on the route
      const routeBounds = L.latLngBounds(availableRoutes[0].path);
      mapRef.current.flyToBounds(routeBounds);
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h1>Kigali Transport Finder</h1>
        <SearchBar onSearch={handleSearch} stops={busStops} />
        
        {selectedRoute && (
          <div className="route-info">
            <h2>Selected Route</h2>
            <h3>{selectedRoute.name}</h3>
            <p><strong>Distance:</strong> {selectedRoute.distance}</p>
            <p><strong>Duration:</strong> {selectedRoute.duration}</p>
            <p><strong>Fare:</strong> {selectedRoute.fare}</p>
            
            <h4>Available Buses:</h4>
            <ul>
              {selectedRoute.buses.map(bus => (
                <li key={bus}>{bus}</li>
              ))}
            </ul>
          </div>
        )}

        {nearbyBuses.length > 0 && (
          <div className="nearby-buses">
            <h3>Nearby Buses</h3>
            <ul>
              {nearbyBuses.map(bus => (
                <li key={bus.id}>
                  <strong>{bus.name}</strong> - Arriving in {bus.arrival}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Map */}
      <div className="map-container">
        <MapContainer 
          center={userLocation} 
          zoom={14} 
          style={{ height: '100%', width: '100%' }}
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          {/* User location */}
          <Marker position={userLocation}>
            <Popup>Your Location</Popup>
          </Marker>

          {/* Selected route */}
          {selectedRoute && (
            <>
              <Polyline
                positions={selectedRoute.path}
                color="blue"
                weight={5}
              />
              {selectedRoute.path.map((position, index) => (
                <Marker key={`stop-${index}`} position={position}>
                  <Popup>{selectedRoute.stops[index]}</Popup>
                </Marker>
              ))}
            </>
          )}

          {/* Park stations */}
          {parkStations.map((station, index) => (
            <Marker key={`station-${index}`} position={station.location}>
              <Popup>
                <strong>{station.name}</strong><br />
                Buses: {station.buses.join(', ')}
              </Popup>
            </Marker>
          ))}

          {/* Nearby buses */}
          {nearbyBuses.map(bus => (
            <Marker 
              key={`bus-${bus.id}`} 
              position={bus.location}
              icon={busIcon}
            >
              <Popup>
                <strong>Bus {bus.name}</strong><br />
                Route: {routes[bus.route]?.name}<br />
                Arriving in: {bus.arrival}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Home;