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
    [<GreenCard />, <GreenCard />, <GreenCard />],
    [<GreenCard />, <GreenCard />, <GreenCard />],
    [<GreenCard />, <GreenCard />, <GreenCard />],
    [<GreenCard />, <GreenCard />, <GreenCard />],
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
      setTimeout(() => setSelected(selected -1), 50);
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

      <div
        className="link-button"
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
      </div>
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
