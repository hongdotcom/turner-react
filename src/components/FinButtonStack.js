import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BaseButton from "./BaseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  stack: {
    width: "100%",
    marginTop: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    color: "white",
  },
  space: {
    width: "10vw",
    height: "auto",
    justifyItems: "right",
    justifyContent: "end",
    display: "flex",
  },
}));
const details = {
  buttonText1: "Apply Personal",
  buttonText2: "Apply Business",
  buttonColor1: "#18A0FB",
  buttonColor2: "white",
  buttonBgColor1: "white",
  buttonBgColor2: "#18A0FB",
  icon: <FontAwesomeIcon icon={faArrowRight} size="sm" />,
  url1: "/claim",
  url2: "/home",
};
export default function ButtonStack() {
  const classes = useStyles();
  return (
    <div className={classes.stack}>
      <BaseButton
        text={details.buttonText1}
        textColor={details.buttonColor1}
        bgColor={details.buttonBgColor1}
        icon={details.icon}
        space={details.buttonSpace}
        link={details.url2}
      ></BaseButton>

      <div className={classes.space}></div>
      <BaseButton
        text={details.buttonText2}
        textColor={details.buttonColor2}
        bgColor={details.buttonBgColor2}
        icon={details.icon}
        space={details.buttonSpace}
        link={details.url1}
      />
    </div>
  );
}
