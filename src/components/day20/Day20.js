import React from "react";
import "./day20.css";

export default function Day20() {
  return (
    <div class="frame day20">
      <input type="checkbox" id="cb" />
      <label for="cb" class="button">
        Send mail
      </label>
      <label for="cb" class="button reset">
        Reset
      </label>
      <div class="circle"></div>
      <div class="circle-outer"></div>
      <svg class="icon mail">
        {/* <!-- 信封四方形 --> */}
        <polyline id="letter1" points="119,1 119,69 1,69 1,1"></polyline>
        {/* <!-- 開關三角形 --> */}
        <polyline id="letter2" points="119,1 60,45 1,1 119,1"></polyline>
      </svg>
      <svg class="icon plane">
        {/* <!-- 飛翼三角形 --> */}
        <polyline points="119,1 1,59 106,80 119,1"></polyline>
        {/* <!-- 飛機中間線和基座 --> */}
        <polyline points="119,1 40,67 43,105 69,73"></polyline>
      </svg>
    </div>
  );
}
