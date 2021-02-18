import React from "react";
import CenterColumnLayout from "./CenterColumnLayout";
import SecHeader from "./SecHeader";

const details = {
  text: "Welcome to Turner Insurance",
  color: "#4D4949",
};

export default function InsSecHeader() {
  return (
    <CenterColumnLayout>
      <SecHeader color={details.color} text={details.text} />
    </CenterColumnLayout>
  );
}
