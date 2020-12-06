import React from "react";
import "./POPOSpace.css";

function POPOSSpace({ name, image, address }) {
  return (
    <div className="POPOSSpace">
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="Hello"
        className="POPOSSpace"
      />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  );
}

export default POPOSSpace;
