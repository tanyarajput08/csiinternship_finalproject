import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const locationEmojiIcon = new L.DivIcon({
  html: '<span style="font-size:2rem;">📍</span>',
  className: '',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MapComponent = ({ shipment, width = '100%', height = '100%' }) => {
  if (!shipment || !shipment.source || !shipment.destination) {
    return <div style={{ color: '#888', margin: '2rem 0' }}>No route data available for this shipment.</div>;
  }
  const source = shipment.source.coords;
  const destination = shipment.destination.coords;
  const route = [source, destination];

  return (
    <div style={{ height, width, borderRadius: '12px', overflow: 'hidden' }}>
      <MapContainer center={source} zoom={11} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='© OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={route} color="blue" />
        <Marker position={source} icon={locationEmojiIcon}>
          <Popup>Sender ({shipment.source.name})</Popup>
        </Marker>
        <Marker position={destination} icon={locationEmojiIcon}>
          <Popup>Receiver ({shipment.destination.name})</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent; 