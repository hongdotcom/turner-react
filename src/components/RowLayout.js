import React from "react";
import { Grid } from "@material-ui/core";

export default function RowLayout(props) {
  return (
    <Grid container direction="row" style={props.customStyle}>
      {props.children}
    </Grid>
  );
}
