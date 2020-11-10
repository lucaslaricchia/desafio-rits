import React from "react";

import hero from "../assets/Imagens/visiomed.png";
import logo from "../assets/Imagens/logo-rits.png";

import Card from "../components/card";

import "../styles/pages/landing.css";

export default function Landing() {
  return (
    <div id="landing-page">
      <div className="primeira-div">

        <div className="image-wrapper">
          <img src={hero} alt="hero" className="hero-image" />
          <header>
            <img src={logo} className="logo-rits" alt="Logo Rits" />
            <nav>
              <ul>
                <li>
                  <a href="/">Menu 1</a>
                </li>
                <li>
                  <a href="/">Menu 2</a>
                </li>
                <li>
                  <a href="/">Menu 3</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>

        <div className="content-wrapper">
            <Card props={{descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}}/>
        </div>
      </div>
      <div className="segunda-div"></div>
    </div>
  );
}
