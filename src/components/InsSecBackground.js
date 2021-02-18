import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bgImg: {
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    zIndex: -1,
    opacity: 1,
    minHeight: "100%",
    minWidth: "100%",
  },
}));

export default function InsSceBackground(props) {
  const classes = useStyles();
  return (
    <div className={classes.bgImg} style={{ backgroundImage: props.url }}></div>
  );
}
