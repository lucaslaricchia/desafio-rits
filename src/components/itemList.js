import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GreenCard from "./greencard";

import "../styles/components/itemList.css";

export default function ItemList() {
  const [buttonText, setButtonText] = useState("LINK");
  const [itemList] = useState([1, 2, 3, 4]);
  const [selected, setSelected] = useState(1);
  const [scrollAnimation, setScrollAnimation] = useState("scroll");
  const items = [
    [
      <GreenCard number={1} text={"Lorem ipsum dolor sit amet, consectetur"} />,
      <GreenCard number={2} text={"Excepteur sint occaecat cupidatat non"} />,
      <GreenCard number={3} text={"Culpa qui officia deserunt mollit anim id est"} />,
    ],
    [
      <GreenCard number={4} text={"Sed ut perspiciatis unde omnis iste"} />,
      <GreenCard number={5} text={"Ut enim ad minima veniam, quis nostrum"} />,
      <GreenCard number={6} text={"At vero eos et accusamus et iusto odo"} />,
    ],
    [
      <GreenCard number={7} text={"Et harum quidem rerum facilis est et"} />,
      <GreenCard number={8} text={"Lorem ipsum dolor sit amet, consectetur"} />,
      <GreenCard number={9} text={"Nam libero tempore, cum soluta nobis"} />,
    ],
    [
      <GreenCard number={10} text={"ed quia non numquam eius modi tempora"} />,
      <GreenCard number={11} text={"Lorem ipsum dolor sit amet, consectetur"} />,
      <GreenCard number={12} text={"Ut enim ad minima veniam, quis nostrum"} />,
    ],
  ];

  function increment() {
    if (selected < 4) {
      setScrollAnimation("scroll");
      setTimeout(() => setSelected(selected + 1), 50);
    }
  }
  function decrement() {
    if (selected > 1) {
      setScrollAnimation("scrollreverso");
      setTimeout(() => setSelected(selected - 1), 50);
    }
  }

  return (
    <div className="itemlist-wrapper">
      <h1>Como funciona?</h1>
      <div className="buttons-div">
        <div
          className={`${selected === 1 ? "button button-inactive" : "button"}`}
          onClick={decrement}
        >
          <FiChevronLeft size={55} strokeWidth={"1px"} />
        </div>
        <div
          className={`${selected === 4 ? "button button-inactive" : "button"}`}
          onClick={increment}
        >
          <FiChevronRight size={55} strokeWidth={"1px"} />
        </div>
      </div>

      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          key={selected}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames={scrollAnimation}
        >
          <div className="item-list">
            {items[selected - 1].map((item) => {
              return item;
            })}
          </div>
        </CSSTransition>
      </SwitchTransition>

      <a
        className="link-button"
        href="/"
        onMouseOver={() => setButtonText("VER REGULAMENTO")}
        onMouseLeave={() => setButtonText("LINK")}
      >
        <SwitchTransition mode="out-in">
          <CSSTransition
            classNames="fade"
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            key={buttonText}
          >
            <div>{buttonText}</div>
          </CSSTransition>
        </SwitchTransition>
      </a>
      <div className="dots">
        {itemList.map((item) => {
          return (
            <div
              key={item}
              className={`${item === selected ? "dot dot-active" : "dot"}`}
            />
          );
        })}
      </div>
    </div>
  );
}
