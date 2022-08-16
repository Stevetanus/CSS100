import React from "react";
import { useNavigate } from "react-router-dom";
import "./day1.css";

export default function Day1() {
  let navigate = useNavigate();
  return (
    <>
      <div className="frame">
        <div className="center">
          <div className="number">
            <div className="one-one"></div>
            <div className="one-two"></div>
            <div className="zero-one"></div>
            <div className="zero-two"></div>
          </div>

          <p>DAYS</p>
          <p>CSS CHALLENGE</p>
        </div>
      </div>
      <button onClick={() => navigate("/")}>Back to home!</button>
    </>
  );
}
