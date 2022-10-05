import React from "react";
import "./day23.css";

export default function Day23() {
  return (
    <>
      <div className="frame day23">
        <div className="circle"></div>
        <div className="line left"></div>
        <div className="line right"></div>
        <div className="bracket left"></div>
        <div className="bracket right"></div>
        <div className="small top">more</div>
        <div className="big">practices</div>
        <div className="small bottom">less excuses</div>
        <div className="hide top"></div>
        <div className="hide bottom"></div>
      </div>
      <div className="css100_description">
        <h3>Animated Typography</h3>
        <p>
          Some big, bold and beautiful animated typography will enhance every
          boring header section.
        </p>
      </div>
    </>
  );
}
