import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GreenCard from "./greencard";
import { Grid } from "@material-ui/core";

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
      <GreenCard
        number={3}
        text={"Culpa qui officia deserunt mollit anim id est"}
      />,
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
      <GreenCard
        number={11}
        text={"Lorem ipsum dolor sit amet, consectetur"}
      />,
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
    <Grid container className="itemlist-wrapper">
      <Grid
        item
        xs={12}
        md={10}
        style={{textAlign: "center", marginTop:'80px', marginBottom: '20px' }}
      >
        <h1>Como funciona?</h1>
      </Grid>

      <Grid item xs={5} md={2} className="buttons-div">
        <div
          className={`${selected === 1 ? "button button-inactive" : "button"}`}
          onClick={decrement}
        >
          <FiChevronLeft size={70} strokeWidth={"1px"} />
        </div>
        <div
          className={`${selected === 4 ? "button button-inactive" : "button"}`}
          onClick={increment}
        >
          <FiChevronRight size={70} strokeWidth={"1px"} />
        </div>
      </Grid>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          key={selected}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames={scrollAnimation}
        >
          <Grid
            container
            spacing={3}
          >
            {items[selected - 1].map((item) => {
              return (
                <Grid item xs={12} md={4}style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                  {item}
                </Grid>
              );
            })}
          </Grid>
        </CSSTransition>
      </SwitchTransition>

      <Grid
        container
        style={{ display: 'flex', alignItems: "center", justifyContent: "center", marginBottom: '100px'}}
      >
        <Grid item xs={12} md={4}>
          <a
            className="link-button"
            href="/desafio-rits/"
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
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          className="dots"
          style={{alignItems: "center", justifyContent: "flex-end" }}
        >
          {itemList.map((item) => {
            return (
              <div
                key={item}
                className={`${item === selected ? "dot dot-active" : "dot"}`}
              />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
