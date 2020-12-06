import React from "react";
import data from "./sfpopos-data.json";

function POPOSDetails(props) {
  const { id } = props.match.params; // Location index
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
      </div>
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{title}</h1>
        <p className="POPOSDetails-desc">{desc}</p>
        <p className="POPOSDetails-hours">{hours}</p>
        <p className="POPOSDetails-features">{features}</p>
        <p className="POPOSDetails-geo">
          {geo.lat} {geo.lon}
        </p>
      </div>
    </div>
  );
}

export default POPOSDetails;
