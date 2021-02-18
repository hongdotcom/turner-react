import React from "react";
import Header from "../../components/Header";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import bg from "../../static/images/fin_bg.jpg";

const details = {
  text: "Welcome to Turner Claim",
  color: "#03539D",
  url: `url(${bg})`,
  navColor: "#4D4949",
  customStyle: {
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundImage: `url(${bg})`,
    zIndex: -1,
    opacity: 1,
    minHeight: "100%",
    minWidth: "100%",
  },
};

export default function ClaimLanding() {
  return (
    <>
      <Background customStyle={details.customStyle} />
      <Navbar navColor={details.navColor} />
      <Header text={details.text} color={details.color} />
    </>
  );
}
