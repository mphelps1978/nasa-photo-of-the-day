import React, { useState, useEffect } from "react";
import IotdCard from "./Iotd-Card";

import "../App.css";
import Axios from "axios";

export default function Iotd() {
  const [iotd, setIodt] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=YXLRymXrded1Mm7xdzPA27oNNlk30JdaApwhVOoP",
    )
      .then(response => {
        console.log("response: ", response);
        setIodt(response.data);
      })
      .catch(error => {
        console.log("Something Happend", error);
      });
  }, []);

  // Display a loading message while the data is fetching

  // Display your component as normal after the data has been fetched
  return (
    <div className="container">
      {/* {iotd.map((iotd, index) => {
        return (
          <IotdCard
            key={index}
            title={title}
            date={date}
            hdurl={hdurl}
            explanation={explanation}
          />
        );
      })} */}
    </div>
  );
}
