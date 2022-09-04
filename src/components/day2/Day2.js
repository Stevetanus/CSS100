import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./day2.css";

export default function Day2() {
  let navigate = useNavigate();
  const menuIconRef = useRef(null);
  return (
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
      <button onClick={() => navigate("/")}>Back to home!</button>
    </div>
  );
}
