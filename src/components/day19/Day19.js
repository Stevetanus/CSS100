import React from "react";
import "./day19.css";

export default function Day19() {
  return (
    <div class="frame day19">
      <div class="center_d19">
        <input type="radio" name="rd" id="check-1" />
        <label for="check-1" class="circle" id="c1"></label>
        <input type="radio" name="rd" id="check-2" />
        <label for="check-2" class="circle" id="c2"></label>
        <input type="radio" name="rd" id="check-3" />
        <label for="check-3" class="circle" id="c3"></label>
        <div class="active"></div>
        <div class="bg"></div>
      </div>
    </div>
  );
}
