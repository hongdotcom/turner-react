import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: "red",
    fontFamily: "Mulish, sans-serif",
    fontSize: "1.8vw",
    fontWeight: "600",
    width: "28%",
    height: "10vh",
  },
}));
export default function BaseButton(props) {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      style={{
        color: props.textColor,
        backgroundColor: props.bgColor,
      }}
    >
      {props.text}
      &nbsp;&nbsp;&nbsp;
      {props.icon}
    </Button>
  );
}
