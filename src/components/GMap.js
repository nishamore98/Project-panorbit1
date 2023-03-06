import React from "react";
import GoogleMapReact from "google-map-react";

export default function GMap(props) {
  const { lat, lng } = props;
  const Marker = () => <div className="marker">Your Marker</div>;
  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
  };
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDgbwfiIo0vIym11NZjZxdE7z3e5zs4lRU" }}
        defaultCenter={{ lat: Number(lat), lng: Number(lng) }}
        defaultZoom={10}
        options={mapOptions}
      >
        <Marker lat={Number(lat)} lng={Number(lng)} />
      </GoogleMapReact>
    </div>
  );
}
