import React, { useEffect } from "react";
import toggle from "../function/toggle";
import "./day19.css";

export default function Day19() {
  useEffect(() => {
    toggle();
  });
  return (
    <>
      <div className="frame day19">
        <div className="center_d19">
          <input type="radio" name="rd" id="check-1" />
          <label for="check-1" className="circle" id="c1"></label>
          <input type="radio" name="rd" id="check-2" />
          <label for="check-2" className="circle" id="c2"></label>
          <input type="radio" name="rd" id="check-3" />
          <label for="check-3" className="circle" id="c3"></label>
          <div className="active"></div>
          <div className="bg"></div>
        </div>
      </div>
      <div className="css100_description">
        <h3>Slider with Radio Buttons</h3>
        <p>
          Why use JavaScript when you can use CSS? Selectors can be wildly
          combined with each other.
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10300349"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/ZEovLgy"
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
