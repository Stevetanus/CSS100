import React from "react";
import "./day20.css";

export default function Day20() {
  return (
    <>
      <div className="frame day20">
        <input type="checkbox" id="cb" />
        <label for="cb" className="button">
          Send mail
        </label>
        <label htmlFor="cb" className="button reset">
          Reset
        </label>
        <div className="circle"></div>
        <div className="circle-outer"></div>
        <svg className="icon mail">
          {/* <!-- 信封四方形 --> */}
          <polyline id="letter1" points="119,1 119,69 1,69 1,1"></polyline>
          {/* <!-- 開關三角形 --> */}
          <polyline id="letter2" points="119,1 60,45 1,1 119,1"></polyline>
        </svg>
        <svg className="icon plane">
          {/* <!-- 飛翼三角形 --> */}
          <polyline points="119,1 1,59 106,80 119,1"></polyline>
          {/* <!-- 飛機中間線和基座 --> */}
          <polyline points="119,1 40,67 43,105 69,73"></polyline>
        </svg>
      </div>
      <div className="css100_description">
        <h3>Send Mail</h3>
        <p>
          Surprise your visitors with a nice animation instead of a simple
          "request sent".
        </p>
      </div>
    </>
  );
}
