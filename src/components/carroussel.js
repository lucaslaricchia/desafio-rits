import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "../styles/components/carroussel.css";

import Hero1 from "../assets/Imagens/visiomed.png";
import Hero2 from "../assets/Imagens/hero2.jpg";
import Hero3 from "../assets/Imagens/hero3.jpg";

export default function Carroussel() {
  const [images] = useState([
    <img src={Hero1} alt="hero1" />,
    <img src={Hero2} alt="hero2" />,
    <img src={Hero3} alt="hero3" />,
  ]);
  const [index, setIndex] = useState(0);
  const [scrollAnimation, setScrollAnimation] = useState("scroll");

  function right() {
    if (index < 2) {
      setScrollAnimation("scroll");
      setTimeout(() => setIndex(index + 1), 50);
    }
  }

  function left() {
    if (index > 0) {
      setScrollAnimation("scrollreverso");
      setTimeout(() => setIndex(index - 1), 50);
    }
  }

  return (
    <div className="carroussel-container">
      <SwitchTransition mode={"in-out"}>
        <CSSTransition
          key={index}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames={scrollAnimation}
        >
          {images[index]}
        </CSSTransition>
      </SwitchTransition>
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
