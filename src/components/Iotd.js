import React, { useState, useEffect } from "react";
import IotdCard from "./Iotd-Card";

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
    <IotdCard
      key={iotd.index}
      title={iotd.title}
      credit={iotd.copyright}
      date={iotd.date}
      url={iotd.url}
      explanation={iotd.explanation}
      hdurl={iotd.hdurl}
    />
  );
}
