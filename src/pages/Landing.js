import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Card from "../components/card";
import VideoList from "../components/videoList";
import Carroussel from "../components/carroussel";
import CustomizedAccordions from "../components/accordion";
import ItemList from "../components/itemList";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/pages/landing.css";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
  contentWrapper: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "-70px",
    marginBottom: "80px",
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <Grid container>
        <Grid item xs={12}>
          <div className="image-wrapper">
            <Carroussel />
            <Header />
          </div>
        </Grid>
        <Grid container spacing={2} className={classes.contentWrapper}>
          <Grid item s={12} xm={3}>
            <Card
              props={{
                descriptionText:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
              }}
            />
          </Grid>
          <Grid item s={12} xm={3}>
            <Card
              props={{
                descriptionText:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
              }}
            />
          </Grid>
          <Grid item s={12} xm={3}>
            <Card
              props={{
                descriptionText:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="segunda-div">
        <Grid container className="content-wrapper">
          <Grid item xs={12}>
            <h1>Trilhas de conhecimento</h1>
          </Grid>
            <Grid item className="videos">
              <VideoList />
            </Grid>
        </Grid>
      </Grid>
      <Grid container className="terceira-div">
        <Grid item xs={12} className="content-wrapper">
          <ItemList />
        </Grid>
      </Grid>
      <Grid container className="quarta-div">
        <Grid container className="content-wrapper">
          <Grid item xs={12} md={4}>
            <h1>Perguntas Frequentes</h1>{" "}
          </Grid>
          <Grid item xs={12} md={8}>
            <CustomizedAccordions />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
