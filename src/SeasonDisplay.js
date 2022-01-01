import React from "react";
import "./SeasonDisplay.css";

const seasonsConfig = {
  Winter: {
    text: "Blur it is chilly",
    iconName: "snowflake",
  },
  Summer: {
    text: "Let us hit the beach",
    iconName: "sun",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const seasons = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonsConfig[seasons]
  // const text =
  //   seasons === "Summer" ? "Let us hit the beach" : "Blurr! It's chilly";
  // const iconName = seasons === "Summer" ? "sun" : "snowflake";

  return (
    <div className={`season-display ${seasons}`}>
      <i className={`massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon`}></i>
    </div>
  );
};


export default SeasonDisplay;
