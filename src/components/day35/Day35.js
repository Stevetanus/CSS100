import React from "react";
import "./day35.css";

export default function Day35() {
  return (
    <div className="frame day35">
      <div className="center">
        <svg width="100px" height="100px" viewBox="0 0 100 100">
          <circle className="bg" cx="50" cy="50" r="46" />
          <circle className="loader" cx="50" cy="50" r="46" />
        </svg>
      </div>
    </div>
  );
}
