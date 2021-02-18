import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    marginTop: "5%",
    marginBottom: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80px",
  },
  text: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2.5vw",
    fontWeight: "600",
  },
}));

export default function SecHeader(props) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h1
        className={classes.text}
        style={{
          color: props.color,
          fontSize: props.fontSize,
          opacity: props.opacity,
          zIndex: props.zIndex,
        }}
      >
        {props.text}{" "}
      </h1>
    </div>
  );
}
