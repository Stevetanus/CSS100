import React from "react";
import { useNavigate } from "react-router-dom";
import "./day3.css";

export default function Day2() {
  // let navigate = useNavigate();
  return (
    <div class="frame day3">
      <div class="center">
        <div class="circle_d3">
          <div class="sky"></div>
          <div class="sun"></div>
          <div class="leftside"></div>
          <div class="rightside"></div>
          <div class="shadow"></div>
          <div class="ground"></div>
        </div>
      </div>
    </div>
  );
}
