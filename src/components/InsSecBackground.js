import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bgImg: {
    backgroundColor: "#FFC5B8",
    display: "inline-block",
    zIndex: -2,
    opacity: 1,
    Height: "2000px",
    Width: "1000px",
    borderRadius: "50%",
    padding: "1000px",
  },
}));

export default function InsSceBackground(props) {
  const classes = useStyles();
  return <div className={classes.bgImg}></div>;
}
