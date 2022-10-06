import React, { useEffect } from "react";
import toggle from "../function/toggle";
import "./day17.css";

export default function Day17() {
  useEffect(() => {
    toggle();
  });
  return (
    <>
      <div className="frame day17">
        <div className="stripes_d17">
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
        </div>
        <div className="square_d17">
          <svg className="triangle_d17">
            <polygon
              className="left"
              points="0,117 68,0 121,93 98,93 68,41 11,140"
            ></polygon>
            <polygon
              className="right"
              points="68,0 91,0 160,117 46,117 59,93 121,93"
            ></polygon>
            <polygon
              className="bottom"
              points="68,41 79,59 46,117 160,117 147,140 11,140"
            ></polygon>
          </svg>
        </div>
      </div>
      <div className="css100_description">
        <h3>Penrose Triangle</h3>
        <p>
          CSS makes even the impossible possible. Can you find out how it was
          done?
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10298968"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/QWrOmry"
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
