import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import ins_bg from "../static/images/ins_bg.jpg";

const useStyles = makeStyles((theme) => ({
  // bgContainer: {
  //   position: "relative",
  //   zIndex: 1,
  //   opacity: 1,
  //   minHeight: "100%",
  //   minWidth: "100%",
  // },
  bgImg: {
    backgroundImage: `url(${ins_bg})`,
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    zIndex: -1,
    opacity: 0.9,
    minHeight: "100%",
    minWidth: "100%",
  },
}));

export default function Background() {
  const classes = useStyles();
  return (
    <div className={classes.bgImg}>
      <CssBaseline />

      <h1> Welcome to Insurance</h1>
    </div>
  );
}
