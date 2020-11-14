import React from "react";

import logoPreto from "../assets/Imagens/rits-preta.png";
import logoFacebook from "../assets/Imagens/facebook.png";
import logoTwitter from "../assets/Imagens/logo-twitter.png";
import logoInstagram from "../assets/Imagens/logo-instagram.png";
import logoLinkedin from "../assets/Imagens/logo-linkedin.png";
import logoYoutube from "../assets/Imagens/logo-youtube.png";

export default function Footer() {
  return (
    <footer>
      <div className="content-wrapper">
        <div className="footer-top-section">
          <img src={logoPreto} className="logo-rits" alt="Logo Rits" />
          <div className="social-icons">
            <a href="https://www.facebook.com/ritstecnologia/">
              <img src={logoFacebook} alt="Logo Facebook" />
            </a>
            <a href="/">
              <img src={logoTwitter} alt="Logo Twitter" />
            </a>
            <a href="https://www.instagram.com/ritstecnologia/">
              <img src={logoInstagram} alt="Logo Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/rits-tecnologia/">
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
  );
}
