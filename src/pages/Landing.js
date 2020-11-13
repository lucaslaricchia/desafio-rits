import React from "react";

import Card from "../components/card";
import VideoList from "../components/videoList";
import Carroussel from "../components/carroussel";
import CustomizedAccordions from "../components/accordion";
import ItemList from "../components/itemList";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/pages/landing.css";

export default function Landing() {
  return (
    <div id="landing-page">
      <div className="primeira-div">
        <div className="image-wrapper">
          <Carroussel />
          <Header />
        </div>
        <div className="content-wrapper">
          <Card
            props={{
              descriptionText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            }}
          />
          <Card
            props={{
              descriptionText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            }}
          />
          <Card
            props={{
              descriptionText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            }}
          />
        </div>
      </div>
      <div className="segunda-div">
        <div className="content-wrapper">
          <h1>Trilhas de conhecimento</h1>
          <div className="videos">
            <VideoList />
          </div>
        </div>
      </div>
      <div className="terceira-div">
        <div className="content-wrapper">
          <ItemList />
        </div>
      </div>
      <div className="quarta-div">
        <div className="content-wrapper">
          <h1>Perguntas Frequentes</h1>
          <div className="frequent-questions">
            <CustomizedAccordions />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
