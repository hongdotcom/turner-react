import React from "react";
import CenterColumnLayout from "../CenterColumnLayout";
import SecHeader from "../SecHeader";

const details = {
  text: "Our Insurance Options at a glance",
  color: "#4D4949",
  customStyle: {
    // backgroundColor: "black",
  },
};

export default function InsSecHeader(props) {
  return (
    <CenterColumnLayout customStyle={details.customStyle}>
      <SecHeader color={details.color} text={props.text} />
    </CenterColumnLayout>
  );
}
