import React from "react";
import { Grid } from "@material-ui/core";

export default function CardContent(props) {
  return (
    <Grid item xs={12} lg={12} md={12} style={props.customStyle}>
      {props.children}
    </Grid>
  );
}
