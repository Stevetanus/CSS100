import React from "react";
import { useNavigate } from "react-router-dom";

export default function Day2() {
  let navigate = useNavigate();
  return (
    <div>
      <p>Day2</p>
      <button onClick={() => navigate("/")}>Back to home!</button>
    </div>
  );
}
