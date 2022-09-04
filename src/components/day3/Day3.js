import React from "react";
import { useNavigate } from "react-router-dom";
import "./day3.css";

export default function Day2() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="frame day3">
        <div className="center">
          <div className="circle">
            <div class="sky"></div>
            <div class="sun"></div>
            <div class="side-left"></div>
            <div class="side-right"></div>
            <div class="shadow"></div>
            <div class="ground"></div>
          </div>
        </div>
      </div>
      <button onClick={() => navigate("/")}>Back to home!</button>
    </div>
  );
}
