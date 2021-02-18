import React from "react";
import Header from "../../components/Header";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import bg from "../../static/images/fin_bg.jpg";
import FinButtonStack from "../../components/FinButtonStack";

const details = {
  text: "Welcome to Turner Finance",
  color: "#03539D",
  url: `url(${bg})`,
  navColor: "#4D4949",
};

export default function FinLanding() {
  return (
    <>
      <Background url={details.url} />
      <Navbar navColor={details.navColor} />
      <Header text={details.text} color={details.color} />
      <FinButtonStack />
    </>
  );
}
