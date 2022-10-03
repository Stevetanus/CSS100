import React from "react";
import "./day24.css";

export default function Day24() {
  return (
    <div class="frame day26">
      <input type="checkbox" id="button" class="hidden" />
      <label for="button" class="button">
        Finish
        <img
          src="https://100dayscss.com/codepen/checkmark-green.svg"
          alt="green mark"
        />
      </label>
      <svg class="circle">
        <circle cx="30" cy="30" r="29" />
      </svg>
    </div>
  );
}
