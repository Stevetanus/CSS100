import React, { useEffect } from "react";
import toggle from "../function/toggle";
import "./day3.css";

export default function Day3() {
  useEffect(() => {
    toggle();
  });
  return (
    <>
      <div className="frame day3">
        <div className="center">
          <div className="circle_d3">
            <div className="sky"></div>
            <div className="sun"></div>
            <div className="leftside"></div>
            <div className="rightside"></div>
            <div className="shadow"></div>
            <div className="ground"></div>
          </div>
        </div>
      </div>
      <div className="css100_description">
        <h3>The Pyramide</h3>
        <p>
          Not as challenging as the real pyramids in Egypt, but the shadow path
          is not easy.
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10289349"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/gOzMgEY"
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
