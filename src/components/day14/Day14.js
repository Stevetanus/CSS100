import React, { useEffect } from "react";
import toggle from "../function/toggle";
import "./day14.css";

export default function Day14() {
  useEffect(() => {
    toggle();
  });
  return (
    <>
      <div className="frame day14">
        <div className="card_d14">
          <div className="flip">
            <div className="front">
              <img
                src="https://100dayscss.com/codepen/bycicle.svg"
                alt="bike"
              />
              <div className="street">
                <div className="stripe-1"></div>
                <div className="stripe-2"></div>
                <div className="stripe-3"></div>
                <div className="stripe-4"></div>
                <div className="stripe-5"></div>
                <div className="stripe-6"></div>
                <div className="stripe-7"></div>
                <div className="stripe-8"></div>
                <div className="stripe-9"></div>
              </div>
            </div>
            <div className="back">
              <img
                src="https://100dayscss.com/codepen/helicopter.svg"
                alt="helicopter"
              />
              <div className="sky">
                <div className="cloud-1"></div>
                <div className="cloud-2"></div>
                <div className="cloud-3"></div>
                <div className="cloud-4"></div>
                <div className="cloud-5"></div>
                <div className="cloud-6"></div>
                <div className="cloud-7"></div>
                <div className="cloud-8"></div>
                <div className="cloud-9"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="css100_description">
        <h3>Upload</h3>
        <p>
          Yes, you can actually drag and drop a file in there. But don't worry,
          the upload process is faked.
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10296347"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/OJZjrjx"
          >
            Source
          </a>
        </p>
      </div>
      <div className="menu_right">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
    </>
  );
}
