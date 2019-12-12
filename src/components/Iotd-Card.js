import React from "react";
import Iotd from "./Iotd";

const IotdCard = props => {
  console.log(props);
  if (!props.photoOfTheDay) return <h3>Loading...</h3>;
  return (
    <div className="iotd-card" key={props.index}>
      <img className="iotd-image" alt={props.title} src={props.hdurl}></img>
      <p>{props.title}</p>
      <p>{props.date}</p>
      <p>{props.hudurl}</p>
    </div>
  );
};

export default IotdCard;
