import React from "react";

import cardImage from "../assets/Imagens/Video-1.png";
import "../styles/components/card.css";

export default function Card({ props }) {
  const descriptionText = props.descriptionText;

  return (
    <div className="card-container">
      <div className="image">
        <img src={cardImage} alt="Card" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <div className="overlay"></div>
      </div>
      <div className="text">
        <p>{descriptionText}</p>
        <div className="line">
          <div className="line-yellow"></div>
        </div>
        <h1>CATEGORIA</h1>
      </div>
    </div>
  );
}
