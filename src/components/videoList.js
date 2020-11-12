import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import image1 from "../assets/Imagens/iStock-1.png";
import image2 from "../assets/Imagens/iStock-995745018.png";
import image3 from "../assets/Imagens/iStock-480806516.png";
import image2x1 from "../assets/Imagens/iStock-1@2x.png";
import image2x2 from "../assets/Imagens/iStock-995745018@2x.png";
import image2x3 from "../assets/Imagens/iStock-480806516@2x.png";
import playButton from "../assets/Imagens/botaoplaypequeno.png";
import bigPlayButton from "../assets/Imagens/Grupo 13601.png";

import "../styles/components/videoList.css";
export default function VideoList() {
  const [images, setImages] = useState([image1, image2, image3]);
  const [images2x, setImages2x] = useState([image2x1, image2x2, image2x3]);
  const [videoSelected, setSelected] = useState(0);

  function handleTopClick() {
    if (videoSelected > 0) {
      setSelected(videoSelected - 1);
    }
  }

  function handleBottomClick() {
    if (videoSelected < 4) {
      setSelected(videoSelected + 1);
    }
  }

  return (
    <div className="videolist-container">
      <div className="video-div">
        <div className="video">
        <img src={images2x[videoSelected]} alt="Logo Instagram" className="videoImage"/>
          <div className="overlay" />
          <img src={bigPlayButton} className="playbutton" alt="playbutton" />
        </div>
        <p>Ana e João</p>
      </div>
      <div className="list-div">
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
          <div className="thumb" onClick={() => setSelected(0)}>
            <div
              className="thumb-base"
              style={{
                "box-shadow": `${
                  videoSelected === 0
                    ? " 0 0 0 4px white"
                    : " 0 0 0 4px rgba(255, 255, 255,0)"
                }`,
              }}
            >
              <img src={images[0]} alt="Logo Instagram" />
              <div className="overlay" />
              <img src={playButton} className="playbutton" alt="playbutton" />
            </div>
            <div
              className="thumb-triangle"
              style={{
                "border-right": `${
                  videoSelected === 0
                    ? "15px solid rgb(255, 255, 255)"
                    : "15px solid rgba(255, 255, 255,0)"
                }`,
              }}
            />
          </div>
          <div className="thumb" onClick={() => setSelected(1)}>
            <div
              className="thumb-base"
              style={{
                "box-shadow": `${
                  videoSelected === 1
                    ? " 0 0 0 4px white"
                    : " 0 0 0 4px rgba(255, 255, 255,0)"
                }`,
              }}
            >
              <img src={images[1]} alt="Logo Instagram" />
              <div className="overlay" />
              <img src={playButton} className="playbutton" alt="playbutton" />
            </div>
            <div
              className="thumb-triangle"
              style={{
                "border-right": `${
                  videoSelected === 1
                    ? "15px solid rgb(255, 255, 255)"
                    : "15px solid rgba(255, 255, 255,0)"
                }`,
              }}
            />
          </div>
          <div className="thumb" onClick={() => setSelected(2)}>
            <div
              className="thumb-base"
              style={{
                "box-shadow": `${
                  videoSelected === 2
                    ? " 0 0 0 4px white"
                    : " 0 0 0 4px rgba(255, 255, 255,0)"
                }`,
              }}
            >
              <img src={images[2]} alt="Logo Instagram" />
              <div className="overlay" />
              <img src={playButton} className="playbutton" alt="playbutton" />
            </div>
            <div
              className="thumb-triangle"
              style={{
                "border-right": `${
                  videoSelected === 2
                    ? "15px solid rgb(255, 255, 255)"
                    : "15px solid rgba(255, 255, 255,0)"
                }`,
              }}
            />
          </div>
          <div className="thumb" onClick={() => setSelected(3)}>
            <div
              className="thumb-base"
              style={{
                "box-shadow": `${
                  videoSelected === 3
                    ? " 0 0 0 4px white"
                    : " 0 0 0 4px rgba(255, 255, 255,0)"
                }`,
              }}
            >
              <img src={images[3]} alt="Logo Instagram" />
              <div className="overlay" />
              <img src={playButton} className="playbutton" alt="playbutton" />
            </div>
            <div
              className="thumb-triangle"
              style={{
                "border-right": `${
                  videoSelected === 3
                    ? "15px solid rgb(255, 255, 255)"
                    : "15px solid rgba(255, 255, 255,0)"
                }`,
              }}
            />
          </div>
          <div className="thumb" onClick={() => setSelected(4)}>
            <div
              className="thumb-base"
              style={{
                "box-shadow": `${
                  videoSelected === 4
                    ? " 0 0 0 4px white"
                    : " 0 0 0 4px rgba(255, 255, 255,0)"
                }`,
              }}
            >
              <img src={images[4]} alt="Logo Instagram" />
              <div className="overlay" />
              <img src={playButton} className="playbutton" alt="playbutton" />
            </div>
            <div
              className="thumb-triangle"
              style={{
                "border-right": `${
                  videoSelected === 4
                    ? "15px solid rgb(255, 255, 255)"
                    : "15px solid rgba(255, 255, 255,0)"
                }`,
              }}
            />
          </div>
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
      </div>
    </div>
  );
}
