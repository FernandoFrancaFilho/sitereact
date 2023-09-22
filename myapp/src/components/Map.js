import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const customMarkerIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const MapComponent = () => {
  const center = [51.505, -0.09]; // Replace with your desired map center coordinates

  return (
    <Map center={center} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={customMarkerIcon}>
        <Popup>
          A custom marker icon!
        </Popup>
      </Marker>
    </Map>
  );
};

export default MapComponent;
