import React from "react";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import bg from "../../static/images/home_bg.png";

const details = {
  text: "Welcome to Turner Home",
  color: "#03539D",
  url: `url(${bg})`,
  navColor: "#4D4949",
};
export default function HomeLanding() {
  return (
    <>
      <Background url={details.url} />
      <Navbar navColor={details.navColor} />
    </>
  );
}


