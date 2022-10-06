import React from "react";
import "./day4.css";

export default function Template() {
  return (
    <>
      <div className="frame day4">
        <div className="center_d4">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>
      </div>
      <div className="css100_description">
        <h3>Loading</h3>
        <p>
          The best are always websites that do not need a loading status. If
          they do, here would be a calming one.
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10289651"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/OJZXZwW"
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
