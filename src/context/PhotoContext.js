import React, { createContext, useState, useRef } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
  const cache = useRef({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchEntry, setSearchEntry] = useState("");

  const runSearch = (query, clearSearchEntry) => {
    if (clearSearchEntry) setSearchEntry("");

    const sanatizedQuery = query
      .toLowerCase()
      .trim()
      .replace(/ +(?= )/g, "");

    const endpoint = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${sanatizedQuery}&per_page=24&format=json&nojsoncallback=1`;

    console.log(cache.current);

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
  };

  return (
    <PhotoContext.Provider
      value={{ images, loading, runSearch, searchEntry, setSearchEntry }}
    >
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
