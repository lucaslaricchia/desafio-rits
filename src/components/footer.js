import React from "react";
import { Grid } from "@material-ui/core";
import logoPreto from "../assets/Imagens/rits-preta.png";
import logoFacebook from "../assets/Imagens/facebook.png";
import logoTwitter from "../assets/Imagens/logo-twitter.png";
import logoInstagram from "../assets/Imagens/logo-instagram.png";
import logoLinkedin from "../assets/Imagens/logo-linkedin.png";
import logoYoutube from "../assets/Imagens/logo-youtube.png";

import "../styles/components/footer.css";
export default function Footer() {
  return (
    <Grid container className="footer">
      <Grid container className="content-wrapper">
        <Grid item xs={3}>
          <img src={logoPreto} className="logo-rits" alt="Logo Rits" />
        </Grid>

        <Grid item xs={4} className="social-icons">
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
        </Grid>

        <Grid container className="copyright">
          <Grid item xs={4}>
            <p>
              Copyright © 2020 - Rits Tecnologia. Todos os direitos reservados.
            </p>
          </Grid>
          <Grid item xs={1}>
          <p>rits</p>
          </Grid>
          
        </Grid>
      </Grid>
    </Grid>
  );
}
