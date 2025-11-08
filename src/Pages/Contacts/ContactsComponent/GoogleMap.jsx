import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [23.8103, 90.4125];

export const GoogleMap = () => {

  return (
    <div>
        <MapContainer
        center={position}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
        className="rounded-lg"
        >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
            <Popup>Dhaka City</Popup>
        </Marker>
        </MapContainer>
    </div>
  )
}
