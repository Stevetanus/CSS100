import React, { useEffect } from "react";
import toggle from "../function/toggle";
import "./day1.css";

export default function Day1() {
  useEffect(() => {
    toggle();
  }, []);
  return (
    <>
      <div className="frame day1">
        <div className="center">
          <div className="number_d1">
            <div className="one-one"></div>
            <div className="one-two"></div>
            <div className="zero-one"></div>
            <div className="zero-two"></div>
          </div>
          <span className="day_d1">days</span>
          <span className="challenge">css chanllenge</span>
        </div>
      </div>
      <div className="css100_description">
        <h3>100 Days CSS</h3>
        <p>
          An easy start into the challenge with a custom build number with
          gradient.
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10288572"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/XWqdjwr"
          >
            Source
          </a>
        </p>
      </div>
      <div className="menu_right">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
    </>
  );
}
