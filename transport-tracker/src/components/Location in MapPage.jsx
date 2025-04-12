import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

// 1. Put the LocationMarker component definition HERE (before your main MapPage component)
function LocationMarker() {
  const map = useMap();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    map.locate({
      setView: true,
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }).on('locationfound', (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, 16);
    }).on('locationerror', (e) => {
      alert(`Geolocation error: ${e.message}. Showing Kigali center.`);
      map.flyTo([-1.9536, 30.0605], 14);
    });
  }, [map]);

  return position && (
    <Marker position={position}>
      <Popup>
        <b>Your Location</b><br/>
        <small>Kigali, Rwanda</small>
      </Popup>
    </Marker>
  );
}

// 2. Then use it INSIDE your MapContainer like this:
const MapPage = () => {
  return (
    <MapContainer 
      center={[-1.9536, 30.0605]} 
      zoom={14}
      style={{ height: '100vh' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {/* Place LocationMarker as a child of MapContainer */}
      <LocationMarker />
      
      {/* Other map components... */}
    </MapContainer>
  );
};