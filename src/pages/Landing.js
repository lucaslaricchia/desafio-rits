import React from "react";

import hero from "../assets/Imagens/visiomed.png";
import logo from "../assets/Imagens/logo-rits.png";
import logoPreto from "../assets/Imagens/rits-preta.png";
import logoFacebook from "../assets/Imagens/facebook.png";
import logoTwitter from "../assets/Imagens/logo-twitter.png";
import logoInstagram from "../assets/Imagens/logo-instagram.png";
import logoLinkedin from "../assets/Imagens/logo-linkedin.png";
import logoYoutube from "../assets/Imagens/logo-youtube.png";

import Card from "../components/card";
import VideoList from "../components/videoList";
import Carroussel from "../components/carroussel";
import ItemList from "../components/itemList";
import "../styles/pages/landing.css";

export default function Landing() {
  return (
    <div id="landing-page">
      <div className="primeira-div">
        <div className="image-wrapper">
          <Carroussel />
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
          <div className="frequent-questions"></div>
        </div>
      </div>
      <footer>
        <div className="content-wrapper">
          <div className="footer-top-section">
            <img src={logoPreto} className="logo-rits" alt="Logo Rits" />
            <div className="social-icons">
              <a href="/">
                <img src={logoFacebook} alt="Logo Facebook" />
              </a>
              <a href="/">
                <img src={logoTwitter} alt="Logo Twitter" />
              </a>
              <a href="/">
                <img src={logoInstagram} alt="Logo Instagram" />
              </a>
              <a href="/">
                <img src={logoLinkedin} alt="Logo Linkedin" />
              </a>
              <a href="/">
                <img src={logoYoutube} alt="Logo Youtube" />
              </a>
            </div>
          </div>
          <div className="copyright">
            <p>
              Copyright © 2020 - Rits Tecnologia. Todos os direitos reservados.
            </p>
            <p>rits</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
