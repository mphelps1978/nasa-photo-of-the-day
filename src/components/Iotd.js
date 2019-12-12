import React, { useState, useEffect } from "react";
import IotdCard from "./Iotd-Card";

import "../App.css";
import Axios from "axios";

export default function Iotd() {
  const [iotd, setIodt] = useState(Object);

  useEffect(() => {
    Axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=YXLRymXrded1Mm7xdzPA27oNNlk30JdaApwhVOoP",
    )
      .then(response => {
        console.log("response: ", response.data);
        setIodt(response.data);
      })
      .catch(error => {
        console.log("Something Happend", error);
      });
  }, []);

  return (
    <div className="container">
      <IotdCard
        key={iotd.index}
        title={iotd.title}
        date={iotd.date}
        hdurl={iotd.hdurl}
        explanation={iotd.explanation}
      />
    </div>
  );
}
