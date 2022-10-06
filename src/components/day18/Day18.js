import React, { useEffect } from "react";
import toggle from "../function/toggle";
import "./day18.css";

export default function Day18() {
  useEffect(() => {
    toggle();
  });
  return (
    <>
      <div className="frame day18">
        <div className="top"></div>
        <div className="ball"></div>
        <div className="bottom"></div>
        <div className="ellipse">
          <div className="grey"></div>
          <div className="green"></div>
        </div>
      </div>
      <div className="css100_description">
        <h3>Elastic</h3>
        <p>
          I thought for a long time about the best way to achieve this effect.
          In the end, the solution was easier than expected.
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10299668"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/QWraKpp"
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
