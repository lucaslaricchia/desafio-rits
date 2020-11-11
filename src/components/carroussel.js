import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "../styles/components/carroussel.css";

import Hero1 from "../assets/Imagens/visiomed.png";
import Hero2 from "../assets/Imagens/hero2.jpg";
import Hero3 from "../assets/Imagens/hero3.jpg";

export default function Carroussel() {
  const [images, setImages] = useState([Hero1, Hero2, Hero3]);
  const [index, setIndex] = useState(0);

  function right() {
    if (index < 2) {
      setIndex(index + 1);
    }
  }

  function left() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div
      className="carroussel-container"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="buttons">
        <FiChevronLeft onClick={() => left()} className="arrow" />
        <FiChevronRight onClick={() => right()} className="arrow" />
      </div>
      <div className="dots">
        <div className={index === 0 ? "dot" : "dot-inactive"}></div>
        <div className={index === 1 ? "dot" : "dot-inactive"}></div>
        <div className={index === 2 ? "dot" : "dot-inactive"}></div>
      </div>
    </div>
  );
}
