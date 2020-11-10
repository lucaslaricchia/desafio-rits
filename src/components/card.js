import React from "react";

import cardImage from "../assets/Imagens/Video-1.png";
import "../styles/components/card.css";

export default function Card({ props }) {
  const descriptionText = props.descriptionText;

  return (
    <div className="card-container">
      <div className="image">
        <img src={cardImage} alt="Card" />
      </div>
      <div className="text">
        <p>{descriptionText}</p>
        <hr></hr>
        <h1>CATEGORIA</h1>
      </div>
    </div>
  );
}
