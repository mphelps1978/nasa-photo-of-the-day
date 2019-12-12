import React from "react";
import Iotd from "./Iotd";

const IotdCard = props => {
  console.log(props);
  // if (!props.photoOfTheDay) return <h3>Loading...</h3>;
  return (
    <div className="card" key={props.index}>
      <p>{props.title}</p>
      <p>{props.date}</p>
      <img className="image" alt={props.title} src={props.hdurl}></img>
      <p>{props.explanation}</p>

      <p>{props.hudurl}</p>
    </div>
  );
};

export default IotdCard;
