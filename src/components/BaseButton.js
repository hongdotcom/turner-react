import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: "red",
    margin: "20px",
    fontFamily: "Mulish, sans-serif",
    fontSize: "2vw",
    padding: "1vw",
    // boxShadow: "0 8px 12px 0 , 0 6px 20px 0",
    // boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
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
      {props.icon}
    </Button>
  );
}
