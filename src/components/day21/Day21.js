import React from "react";
import "./day21.css";

export default function Day21() {
  return (
    <div class="frame day21">
      <svg class="pacman">
        <circle cx="50" cy="50" r="25" />
      </svg>
      <svg class="eye">
        <circle cx="6" cy="6" r="6" />
      </svg>
      <svg class="dots">
        <polyline points="0,7 240,7" />
      </svg>
    </div>
  );
}
