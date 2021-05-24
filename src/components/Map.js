import React, { useContext, useRef } from "react";
import { mapsKey } from "../api/config";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { PhotoContext } from "../context/PhotoContext";

const Map = () => {
  const mapRef = useRef(null);
  const {
    images,
    coordinates,
    setCoordinates,
    zoom,
    setZoom,
    selectedImage,
    setSelectedImage,
  } = useContext(PhotoContext);

  const unselectedMarker = {
    path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
    fillColor: "#ea4336",
    fillOpacity: 1,
    strokeColor: "#ffffff",
    strokeWeight: 0.8,
    scale: 0.25,
  };

  const options = {
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
  };

  function handleLoad(map) {
    mapRef.current = map;
  }

  function changePositionHandler() {
    if (!mapRef.current) return;
    const newPos = mapRef.current.getCenter().toJSON();
    setCoordinates(newPos);
  }

  function changeZoomHandler() {
    if (!mapRef.current) return;
    const newZoom = mapRef.current.getZoom();
    setZoom(newZoom);
  }

  return (
    <LoadScript googleMapsApiKey={mapsKey}>
      <GoogleMap
        onLoad={handleLoad}
        mapContainerClassName="gmap-container"
        center={coordinates}
        zoom={zoom}
        options={options}
        onDragEnd={changePositionHandler}
        onZoomChanged={changeZoomHandler}
      >
        {images.length &&
          images.map((image) => (
            <Marker
              key={image.id}
              onClick={() => setSelectedImage(image)}
              icon={image.id === selectedImage?.id ? null : unselectedMarker}
              position={{
                lat: Number(image.latitude),
                lng: Number(image.longitude),
              }}
            ></Marker>
          ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
