import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    marginTop: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
  },
  text: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "3vw",
    fontWeight: "600",
  },
}));

export default function SecHeader(props) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h1 className={classes.text} style={{ color: props.color }}>
        {props.text}{" "}
      </h1>
    </div>
  );
}
