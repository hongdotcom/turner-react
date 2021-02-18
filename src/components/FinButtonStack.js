import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BaseButton from "./BaseButton";

const useStyles = makeStyles((theme) => ({
  stack: {
    width: "100%",
    marginTop: "55vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    color: "white",
  },
}));
const details = {
  buttonText1: "Apply Personal ->",
  buttonText2: "Apply Business ->",
  buttonColor1: "#00BFFF",
  buttonColor2: "white",
  buttonBgColor1: "white",
  buttonBgColor2: "#00BFFF",
};
export default function FinButtonStack() {
  const classes = useStyles();
  return (
    <div className={classes.stack}>
      <BaseButton
        text={details.buttonText1}
        textColor={details.buttonColor1}
        bgColor={details.buttonBgColor1}
      >
        <i className="far fa-arrow-alot-circle-right"></i>
      </BaseButton>
      <BaseButton
        text={details.buttonText2}
        textColor={details.buttonColor2}
        bgColor={details.buttonBgColor2}
      />
    </div>
  );
}
