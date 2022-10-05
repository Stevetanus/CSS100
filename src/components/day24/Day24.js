import React from "react";
import "./day24.css";

export default function Day24() {
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
      </div>
    </>
  );
}
