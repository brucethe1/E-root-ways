import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapView = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>Bus Stop Here!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
