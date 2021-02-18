import React from "react";
import Header from "../../components/Header";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import bg from "../../static/images/ins_bg.jpg";
import test_bg from "../../static/images/test_bg.png";
import InsButtonStack from "../../components/InsButtonStack";
import InsSecHeader from "../../components/InsSecHeader";
import InsSecBackground from "../../components/InsSecBackground";
const details = {
  text: "Welcome to Turner Insurance",
  color: "white",
  url: `url(${bg})`,
  url2: `url(${test_bg})`,
  navColor: "white",
};
function InsLanding() {
  return (
    <>
      <Background url={details.url} />
      <Navbar navColor={details.navColor} />
      <Header text={details.text} color={details.color} />
      <InsButtonStack />
      <InsSecBackground url={details.url2} />
      <InsSecHeader />
    </>
  );
}

export default InsLanding;
