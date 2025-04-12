import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { fetchLiveBuses, fetchBusRoute } from '../api/transport';

// Fix default marker icons (Leaflet issue)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function MapComponent() {
  const [buses, setBuses] = useState([]);
  const [routePath, setRoutePath] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);

  // Fetch live buses and route path
  useEffect(() => {
    const loadData = async () => {
      const liveBuses = await fetchLiveBuses('london'); // Example: London buses
      setBuses(liveBuses);

      const route = await fetchBusRoute('123'); // Example: Bus route 123
      setRoutePath(route.path);
    };
    loadData();

    const interval = setInterval(loadData, 15000); // Refresh every 15s
    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer 
      center={[51.505, -0.09]} 
      zoom={13} 
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {/* Bus Route Line */}
      <Polyline 
        positions={routePath} 
        color="blue" 
        weight={6} 
        opacity={0.7} 
      />

      {/* Live Bus Markers */}
      {buses.map((bus) => (
        <Marker 
          key={bus.id} 
          position={[bus.lat, bus.lon]}
          eventHandlers={{
            click: () => setSelectedBus(bus),
          }}
        >
          <Popup>
            <div>
              <h3>Bus {bus.route}</h3>
              <p>To: {bus.destination}</p>
              <p>Next stop: {bus.next_stop}</p>
              <p>Last update: {new Date(bus.timestamp).toLocaleTimeString()}</p>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Selected Bus Info Panel (custom UI) */}
      {selectedBus && (
        <div className="bus-info-panel">
          <h2>Bus {selectedBus.route}</h2>
          <p>Direction: {selectedBus.direction}</p>
          <button onClick={() => setSelectedBus(null)}>Close</button>
        </div>
      )}
    </MapContainer>
  );
}