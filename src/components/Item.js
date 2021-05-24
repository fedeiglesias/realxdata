import React from "react";
import Container from "./Container";
import Map from "./Map";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Map />
      <Container searchTerm={searchTerm} clearSearchEntry={true} />
    </div>
  );
};

export default Item;
