import React from "react";
import { Grid } from "@material-ui/core";

export default function CenterColumnLayout(props) {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      alignContent="center"
      style={props.customStyle}
    >
      {props.children}
    </Grid>
  );
}
