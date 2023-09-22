import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import the 'L' object
import 'leaflet/dist/leaflet.css';


const customMarkerIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const MapComponent = () => {
  const center = [51.505, -0.09]; // Replace with your desired map center coordinates

  return (
    <MapContainer center={center} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={customMarkerIcon}>
        <Popup>
          A custom marker icon!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
