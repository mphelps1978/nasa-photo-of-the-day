import React from "react";
import Iotd from "./Iotd";
import styled from "styled-components";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
  Button,
} from "reactstrap";

const CardWrapper = styled.div`
  margin-left: 800px;
  padding-top: 100px;
  margin-bottom: 100%;
`;

const TitleWrapper = styled.h2`
  color: #333333;
  font-size: 3rem;
  ${"" /* text-align: center; */}
  margin-top: 20px;
`;
const IotdCard = props => {
  console.log(props);
  if (!props.url) return <h3>Loading...</h3>;
  return (
    <CardWrapper>
      <Card style={{ textalign: "center", maxWidth: "800px" }}>
        <CardTitle>
          <TitleWrapper>{props.title}</TitleWrapper>
          <CardSubtitle>{props.date}</CardSubtitle>
          <CardSubtitle>Credit: {props.credit}</CardSubtitle>
        </CardTitle>
        <CardImg
          top
          width="50%"
          src={props.url}
          alt={props.title}
          style={{ maxWidth: "100%" }}
        />
        <CardSubtitle style={{ fontSize: "1.25rem", paddingTop: "20px" }}>
          {props.explanation}
        </CardSubtitle>
        <Button
          style={{
            width: "25%",
            marginLeft: "35%",
            marginTop: "20px",
          }}
          onClick={() => window.open(props.hdurl, "_blank")}
        >
          Click for High Resolution
        </Button>
      </Card>
    </CardWrapper>
  );
};

export default IotdCard;
