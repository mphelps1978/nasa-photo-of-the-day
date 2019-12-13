import React from "react";
import Iotd from "./components/Iotd";
import "./App.css";
import styled from "styled-components";

const AppTitle = styled.h1`
  color: #555555
  font-family: "Roboto Mono", monospace;
`;

function App() {
  return (
    <div className="App">
      <AppTitle>NASA Photo of the Day</AppTitle>
      <Iotd />
    </div>
  );
}

export default App;
