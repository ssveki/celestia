"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { LatLngExpression } from "leaflet";
import L from "leaflet";

interface MapProps {
  center: LatLngExpression;
  zoom?: number;
}

export default function Map({ center, zoom = 16 }: MapProps) {
  const [iconSize, setIconSize] = useState(40);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIconSize(77);
      } else {
        setIconSize(40);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const customIcon = new L.Icon({
    iconUrl: "/icons/map-pin.svg",
    iconSize: [iconSize, iconSize],
    iconAnchor: [iconSize / 2, iconSize],
    popupAnchor: [0, -iconSize],
  });

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      zoomControl={false} 
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%", borderRadius: "inherit" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={center} icon={customIcon}>
        <Popup>
          <strong>Планетарий Celestia</strong>
          <br />
          Екатеринбург, ул. Маршала Жукова, дом 12
        </Popup>
      </Marker>

      <style>{`
        .leaflet-control-attribution {
          display: none !important;
        }
        
        .leaflet-container .leaflet-tile {
          filter: invert(1) hue-rotate(180deg) brightness(0.9) contrast(0.8) grayscale(0.5);
        }
        
          filter: none;
        }
        
          background: #131313;
        }
      `}</style>
    </MapContainer>
  );
}