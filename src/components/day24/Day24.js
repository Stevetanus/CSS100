import React, { useEffect } from "react";
import toggle from "../function/toggle";
import "./day24.css";

export default function Day24() {
  useEffect(() => {
    toggle();
  });
  return (
    <>
      <div className="frame day24">
        <input type="checkbox" id="button" className="hidden" />
        <label for="button" className="button">
          Finish
          <img
            src="https://100dayscss.com/codepen/checkmark-green.svg"
            alt="green mark"
          />
        </label>
        <svg className="circle">
          <circle cx="30" cy="30" r="29" />
        </svg>
      </div>
      <div className="css100_description">
        <h3>Button</h3>
        <p>
          Do you really wanna let your users guess if their actions were
          successful? No! So give them some feedback if they click a button.
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10303323"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/OJZvzBJ"
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
