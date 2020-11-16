import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import ReactPlayer from "react-player/youtube";

import image1 from "../assets/Imagens/iStock-1.png";
import image2 from "../assets/Imagens/iStock-995745018.png";
import image3 from "../assets/Imagens/iStock-480806516.png";
import image4 from "../assets/Imagens/gato.jpg";
import image5 from "../assets/Imagens/carla.jpg";
import playButton from "../assets/Imagens/botaoplaypequeno.png";
import bigPlayButton from "../assets/Imagens/Grupo 13601.png";

import "../styles/components/videoList.css";
export default function VideoList() {
  const [play, setPlay] = useState(false);
  const [images] = useState([image1, image2, image3, image4, image5]);
  const [description] = useState([
    "Ana e João",
    "Maria",
    "Carla, Roberta e Renata",
    "Gato",
    "Beatriz",
  ]);
  const links = [
    "https://youtu.be/uMcKNRj2u6U",
    "https://youtu.be/FHH6hIc2GyE",
    "https://youtu.be/6dGJPYYZ1K4",
    "https://youtu.be/EaICfnmbtes",
    "https://youtu.be/WmSvHY7u4WI",
  ];

  const [videoSelected, setSelected] = useState(0);

  function handleTopClick() {
    if (videoSelected > 0) {
      setPlay(false);
      setSelected(videoSelected - 1);
    }
  }

  function handleBottomClick() {
    if (videoSelected < 4) {
      setPlay(false);
      setSelected(videoSelected + 1);
    }
  }

  return (
    <Grid container className="videolist-container">
      <Grid item xs={8}  className="video-div" onClick={() => setPlay(true)}>
        {play ? (
          <ReactPlayer
            playing={true}
            width="770px"
            height="439px"
            url={links[videoSelected]}
          />
        ) : (
          <div className="video">
            <img
              src={images[videoSelected]}
              alt="Logo Instagram"
              className="videoImage"
            />
            <div className="overlay" />
            <img src={bigPlayButton} className="playbutton" alt="playbutton" />
          </div>
        )}
        <p>{description[videoSelected]}</p>
        
      </Grid>
      <Grid item xs={12} md={3} className="list-div">
        <div
          className="arrow-up"
          style={{
            color: `${
              videoSelected === 0 ? "rgba(255,255,255,0.5)" : "rgb(255,255,255)"
            }`,
          }}
        >
          <FiChevronUp onClick={() => handleTopClick()} className="arrow" />
        </div>
        <div className="scroll">
          {images.map((item, index) => {
            return (
              <div
                className="thumb"
                onClick={() => {
                  setPlay(false);
                  setSelected(index);
                }}
              >
                <div
                  className="thumb-base"
                  style={{
                    "box-shadow": `${
                      videoSelected === index
                        ? " 0 0 0 4px white"
                        : " 0 0 0 4px rgba(255, 255, 255,0)"
                    }`,
                  }}
                >
                  <img src={images[index]} alt="Logo Instagram" />
                  <div className="overlay" />
                  <img
                    src={playButton}
                    className="playbutton"
                    alt="playbutton"
                  />
                </div>
                <div
                  className="thumb-triangle"
                  style={{
                    "border-right": `${
                      videoSelected === index
                        ? "15px solid rgb(255, 255, 255)"
                        : "15px solid rgba(255, 255, 255,0)"
                    }`,
                  }}
                />
              </div>
            );
          })}
        </div>
        <div
          className="arrow-down"
          style={{
            color: `${
              videoSelected === 4 ? "rgba(255,255,255,0.5)" : "rgb(255,255,255)"
            }`,
          }}
        >
          <FiChevronDown
            onClick={() => handleBottomClick()}
            className="arrow"
          />
        </div>
      </Grid>
    </Grid>
  );
}
