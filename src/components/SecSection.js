import React from "react";
import CenterColumnLayout from "./CenterColumnLayout";
import mvi2 from "../static/images/mvi2.png";
import SecHeader from "./SecHeader";
import RowLayout from "./RowLayout.js";
import { Grid } from "@material-ui/core";
// import Background from "./Background";
import SmImage from "./SmImage";

const details = {
  customStyle0: {
    // backgroundColor: "#FFEDED",
    // backgroundColor: "white",
    // background: "rgb(168, 15, 73)",
    background:
      "linear-gradient(90deg, rgba(168,15,73,1) 0%, rgba(208,26,95,1) 35%, rgba(255,255,255,1) 100%)",
    spacing: 2,
  },
  customStyle1: {
    // backgroundColor: "rgba(64,194,214,0.4)",
    backgroundColor: "rgba(255,255,255,0.4)",
    height: "80vh",
    width: "70vw",
    borderRadius: "8%",
    padding: "50px",
    marginLeft: "15vw",
    marginRight: "15vw",
    zIndex: 1,
    xs: 12,
    alignItems: "center",
    justifyContent: "space-around",
  },
  customStyle2: {
    opacity: "0.9 !important",
    backgroundColor: "white",
    height: "40vh",
    width: "10ßvw",
    borderRadius: "2%",
    xs: 3,
    zIndex: 1,
    spacing: 3,
  },
  customStyle3: {
    display: "flex",
    src: `url(${mvi2})`,
  },
  // customStyle5: {
  //   backgroundColor: "#FFEDED",
  //   width: "100vw",
  //   display: "flex",
  //   justifyContent: "center",
  //   borderRadius: "10%",
  // },
};
export default function SecSection() {
  return (
    <>
      <CenterColumnLayout customStyle={details.customStyle0}>
        <SecHeader
          xs="12"
          color="#4D4949"
          text="Our Insurance Options at a glance"
        />
        <RowLayout customStyle={details.customStyle1}>
          <Grid item xs={12}>
            <SecHeader
              color="black"
              opacity="1"
              zIndex="2"
              text="Motor Vehicle Insurance(MVI)"
              fontSize="2rem"
            />
          </Grid>
          <Grid item xs={3}>
            <RowLayout customStyle={details.customStyle2}>
              <SecHeader
                color="black"
                opacity="1"
                fontSize="0.6rem"
                text="Comprehensive Everyday Plus"
              />
            </RowLayout>
          </Grid>
          <Grid item xs={3} spacing={4}>
            <RowLayout customStyle={details.customStyle2}>
              <SecHeader
                color="black"
                opacity="1"
                fontSize="0.6rem"
                text="Third Party Property Damage"
              />
              <Grid item xs={12}>
                <SmImage
                  customStyle={details.customStyle3}
                  src={details.customStyle3.src}
                />
              </Grid>
            </RowLayout>
          </Grid>

          <Grid item xs={3} spacing={4}>
            <RowLayout customStyle={details.customStyle2}>
              <SecHeader
                color="black"
                opacity="1"
                fontSize="1rem"
                text="Third Party, Fire & Theft"
              />
            </RowLayout>
          </Grid>
        </RowLayout>
      </CenterColumnLayout>
    </>
  );
}
