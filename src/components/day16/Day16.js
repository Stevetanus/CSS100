import React, { useEffect } from "react";
import toggle from "../function/toggle";
import "./day16.css";

export default function Day16() {
  useEffect(() => {
    toggle();
  });
  return (
    <>
      <div className="frame day16">
        <div className="blobb_d16"></div>
        <div className="blobb-ring"></div>
        <svg className="octagon">
          <polygon points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" />
        </svg>
        <svg className="triangle_d16">
          <polygon points="53,0 106,90 0,90" />
        </svg>
        <div className="octa-sparkles">
          <div className="sparkle s1"></div>
          <div className="sparkle s2"></div>
          <div className="sparkle s3"></div>
          <div className="sparkle s4"></div>
        </div>
        <div className="triangle-sparkles">
          <div className="sparkle s1"></div>
          <div className="sparkle s2"></div>
          <div className="sparkle s3"></div>
        </div>
      </div>
      <div className="css100_description">
        <h3>Blobby</h3>
        <p>
          It appears, wobbles, changes its shape and disappears again. Just like
          that.
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10298189"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/jOxGoQg"
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
