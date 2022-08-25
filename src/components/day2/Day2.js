import React from "react";
import { useNavigate } from "react-router-dom";
import "./day2.css";

export default function Day2() {
  let navigate = useNavigate();
  return (
    <div>
      <div class="frame">
        <div class="center">
          <div class="menu-icon">
            <div class="line-1 no-animation"></div>
            <div class="line-2 no-animation"></div>
            <div class="line-3 no-animation"></div>
          </div>
        </div>
      </div>
      <button onClick={() => navigate("/")}>Back to home!</button>
    </div>
  );
}
