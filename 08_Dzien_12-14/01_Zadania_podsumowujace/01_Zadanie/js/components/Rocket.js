import React from "react";
import { connect } from "react-redux";

const imgSrc = "https://www.raletta.in/images/rocket.gif";

const Rocket = ({ isLaunched }) => (
  <img
    alt="rocket"
    src={imgSrc}
    className={`rocket ${isLaunched ? "launched" : ""}`}
  />
);

export default Rocket
