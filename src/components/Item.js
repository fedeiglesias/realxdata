import React from "react";
import Container from "./Container";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} clearSearchEntry={true} />
    </div>
  );
};

export default Item;
