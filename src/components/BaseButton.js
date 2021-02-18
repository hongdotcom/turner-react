import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "20vw",
    color: "white",
    backgroundColor: "red",
    fontFamily: "Mulish, sans-serif",
    fontSize: "1.8vw",
    fontWeight: "600",
    textDecoration: "none",
    listStyleType: "none",
  },
  link: {
    height: "10vh",
    textDecoration: "none",
    listStyleType: "none",
  },
}));
export default function BaseButton(props) {
  const classes = useStyles();
  return (
    <Link className={classes.link} to={props.link}>
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
    </Link>
  );
}
