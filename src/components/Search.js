import React from "react";
import Container from "./Container";
import Map from "./Map";

const Search = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} Images</h2>
      <Map />
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
