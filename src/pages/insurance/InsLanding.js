import React from "react";
import Header from "../../components/Header";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import bg from "../../static/images/ins_bg.jpg";
// import secbg from "../../static/images/sec_bg.png";
import InsButtonStack from "../../components/InsButtonStack";
import SecSection from "../../components/SecSection";

const details = {
  text: "Welcome to Turner Insurance",
  color: "white",
  navColor: "white",
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
function InsLanding() {
  return (
    <>
      <Background customStyle={details.customStyle} />
      <Navbar navColor={details.navColor} />
      <Header text={details.text} color={details.color} />
      <InsButtonStack />
      <SecSection />
    </>
  );
}

export default InsLanding;
