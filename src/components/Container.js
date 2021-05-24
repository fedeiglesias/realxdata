import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm, clearSearchEntry = false }) => {
  const { images, loading, setQuery, setSearchEntry } =
    useContext(PhotoContext);
  useEffect(() => {
    setQuery(searchTerm);
    if (clearSearchEntry) setSearchEntry("");
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
