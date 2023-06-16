import React from "react";
import DarciaSally from "./DarciaSally.jpg";

const Rocket = ({ isLaunched }) => (
  <img

    className={`rocket ${isLaunched ? "launched" : ""}`}
  />
);

export default Rocket;
