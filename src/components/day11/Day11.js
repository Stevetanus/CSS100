import React from "react";
import "./day11.css";

export default function Day11() {
  return (
    <>
      <div className="frame day11">
        <div className="invisible-men">
          <div className="leg left">
            <div className="shoe"></div>
          </div>
          <div className="leg right">
            <div className="shoe"></div>
          </div>
        </div>
        <div className="floor_d11"></div>
      </div>
      <div className="css100_description">
        <h3>Walking Boots</h3>
        <p>
          These boots are made for walking. Where are they going and for how
          long?
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10294158"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/wvjdGeK"
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
