import React, { useRef } from "react";
import "./day2.css";

export default function Day2() {
  const menuIconRef = useRef(null);
  return (
    <>
      <div>
        <div className="frame day2">
          <div className="center">
            <div
              ref={menuIconRef}
              className="menu-icon"
              onClick={() => {
                const lines = document.querySelectorAll(".no-animation");
                lines.forEach((line) => {
                  line.classList.remove("no-animation");
                });
                menuIconRef.current.classList.toggle("active");
              }}
            >
              <div className="line-1 no-animation"></div>
              <div className="line-2 no-animation"></div>
              <div className="line-3 no-animation"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="css100_description">
        <h3>Menu Icon</h3>
        <p>
          Used on almost every website by now, simple but impressively animated
          it becomes a real eye-catcher.
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10289065"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/qBYZgxr"
          >
            Source
          </a>
        </p>
      </div>
    </>
  );
}
