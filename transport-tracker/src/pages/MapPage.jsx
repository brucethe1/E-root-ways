// src/components/MapPage.js
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix leaflet default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapPage = () => {
  // Enhanced route data with coordinates
  const routes = {
    first: {
      name: "Imiso",
      color: "red",
      stops: [
        { name: "D851", coords: [-1.950, 30.050] },
        { name: "D872", coords: [-1.955, 30.055] },
        { name: "Runda", coords: [-1.965, 30.065] }
      ]
    },
    second: {
      name: "Gakista Route",
      color: "blue",
      stops: [
        { name: "Gakist", coords: [-1.940, 30.040] },
        { name: "Karykma", coords: [-1.945, 30.045] }
      ]
    }
  };

  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedStop, setSelectedStop] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      width: '100%',
      position: 'relative'
    }}>
      {/* Collapsible Sidebar */}
      <div style={{
        width: isSidebarOpen ? '300px' : '0',
        padding: isSidebarOpen ? '20px' : '0',
        backgroundColor: '#f8f9fa',
        borderRight: '1px solid #ddd',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}>
        {isSidebarOpen && (
          <>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
              Transport Routes
              <button 
                onClick={() => setIsSidebarOpen(false)}
                style={{ float: 'right', background: 'none', border: 'none' }}
              >
                ◄
              </button>
            </h1>
            
            {Object.values(routes).map((route) => (
              <div key={route.name} style={{ marginBottom: '30px' }}>
                <h2 
                  style={{ 
                    color: route.color, 
                    cursor: 'pointer',
                    padding: '5px',
                    backgroundColor: selectedRoute?.name === route.name ? '#f0f0f0' : 'transparent'
                  }}
                  onClick={() => setSelectedRoute(route)}
                >
                  {route.name}
                </h2>
                
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {route.stops.map((stop) => (
                    <li
                      key={stop.name}
                      style={{
                        padding: '8px',
                        margin: '5px 0',
                        cursor: 'pointer',
                        backgroundColor: selectedStop?.name === stop.name ? '#e3f2fd' : 'transparent'
                      }}
                      onClick={() => setSelectedStop(stop)}
                    >
                      {stop.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Sidebar Toggle (when closed) */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          style={{
            position: 'absolute',
            left: '0',
            top: '10px',
            zIndex: 1000,
            background: '#fff',
            border: '1px solid #ddd',
            padding: '5px 10px'
          }}
        >
          ►
        </button>
      )}

      {/* Map Area */}
      <div style={{ flex: 1 }}>
        <MapContainer 
          center={[-1.9536, 30.0605]} 
          zoom={13} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          
          {/* Selected Route Line */}
          {selectedRoute && (
            <Polyline
              positions={selectedRoute.stops.map(stop => stop.coords)}
              color={selectedRoute.color}
            />
          )}

          {/* Selected Stop Marker */}
          {selectedStop && (
            <Marker position={selectedStop.coords}>
              <Popup>{selectedStop.name}</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;