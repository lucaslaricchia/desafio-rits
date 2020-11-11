import React from "react";

import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import "../styles/components/videoList.css";
export default function VideoList() {
  return (
    <div className="videolist-container">
      <div className="video-div">
          <div className="video"></div>
      </div>
      <div className="list-div">
        <FiChevronUp className="arrow" />
        <div className="scroll">
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
          <p>HELLO</p>
        </div>
        <FiChevronDown className="arrow" />
      </div>
    </div>
  );
}
