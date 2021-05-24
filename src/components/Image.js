import React from "react";

const Image = ({ url, title, onClick, className }) => (
  <li onClick={onClick} className={className}>
    <img src={url} alt={title} />
  </li>
);

export default Image;
