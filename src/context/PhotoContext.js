import React, { createContext, useState, useRef, useEffect } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const PhotoContext = createContext();

const apiUrl = "https://api.flickr.com/services/rest/";

const PhotoContextProvider = (props) => {
  const cache = useRef({});
  const [searchEntry, setSearchEntry] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [zoom, setZoom] = useState(10);
  const [coordinates, setCoordinates] = useState({
    lat: 41.390205,
    lng: 2.154007,
  });

  // Store the token
  useEffect(() => {
    const radius = zoom * 0.8;
    const sanitizedTags = query
      .replace(/ +(?= )/g, "")
      .toLowerCase()
      .trim();

    const params = {
      method: "flickr.photos.search",
      api_key: apiKey,
      tags: sanitizedTags,
      per_page: 24,
      format: "json",
      nojsoncallback: 1,
      extras: "geo",
      lat: coordinates.lat,
      lon: coordinates.lng,
      radius: radius,
      has_geo: 1,
      radius_units: "mi",
    };

    const queryString = Object.entries(params)
      .map(([param, value]) => `${param}=${value}`)
      .join("&");

    const endpoint = apiUrl + "?" + queryString;

    if (cache.current[endpoint]) {
      setImages(cache.current[endpoint]);
      setLoading(false);
      return;
    }

    axios
      .get(endpoint)
      .then((response) => {
        cache.current[endpoint] = response.data.photos.photo;
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  }, [query, coordinates, zoom]);

  return (
    <PhotoContext.Provider
      value={{
        images,
        loading,
        setQuery,
        searchEntry,
        setSearchEntry,
        coordinates,
        setCoordinates,
        zoom,
        setZoom,
      }}
    >
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
