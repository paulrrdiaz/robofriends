import React from "react";
import Card from "components/Card";

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error("nooooo!");
  // }

  return robots.map((robot, index) => <Card key={index} {...robot} />);
};

export default CardList;
