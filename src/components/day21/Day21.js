import React from "react";
import "./day21.css";

export default function Day21() {
  return (
    <>
      <div className="frame day21">
        <svg className="pacman">
          <circle cx="50" cy="50" r="25" />
        </svg>
        <svg className="eye">
          <circle cx="6" cy="6" r="6" />
        </svg>
        <svg className="dots">
          <polyline points="0,7 240,7" />
        </svg>
      </div>
      <div className="css100_description">
        <h3>Pac-Man</h3>
        <p>
          Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka
          Waka Waka Waka Waka Waka…
        </p>
      </div>
    </>
  );
}
