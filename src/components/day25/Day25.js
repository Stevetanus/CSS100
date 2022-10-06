import React, { useEffect } from "react";
import toggle from "../function/toggle";
import "./day25.css";

export default function Day25() {
  useEffect(() => {
    const marker_d25 = document.querySelector(".marker_d25");
    const card_d25 = document.querySelector(".card_d25");
    marker_d25.addEventListener("click", () => {
      card_d25.classList.add("active");
      marker_d25.classList.add("inactive");
    });

    card_d25.addEventListener("click", () => {
      card_d25.classList.remove("active");
      marker_d25.classList.remove("inactive");
    });
    toggle();
  }, []);
  return (
    <>
      <div className="frame day25">
        <div className="center_d25">
          <img src="./images/tw.svg" alt="taiwan" />
          <div className="marker_d25">
            <svg width="24px" height="36px" viewBox="0 0 48 72">
              <path d="M24,0 C11.406,0 0,10.209 0,22.806 C0,35.4 10.407,50.436 24,72 C37.593,50.436 48,35.4 48,22.806 C48,10.209 36.597,0 24,0 L24,0 Z M24,33 C19.029,33 15,28.971 15,24 C15,19.029 19.029,15 24,15 C28.971,15 33,19.029 33,24 C33,28.971 28.971,33 24,33 L24,33 Z"></path>
            </svg>
            <div className="shadow"></div>
          </div>
          <div className="card_d25">
            <img
              src="https://100dayscss.com/codepen/surfshop.jpg"
              className="banner"
              alt="surfshop"
              width="240"
              height="60"
            />
            <p className="name">Wushi Fishing Harbor</p>
            <p className="road">
              No. 19, Wushigang Rd.
              <br />
              Toucheng Township
            </p>
            <div className="actions">
              <a href="/day25" title="儲存" className="save">
                Save
              </a>
              <span className="divide"></span>
              <a href="/day25" title="如何去" className="route">
                Route
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="css100_description">
        <h3>Map Marker</h3>
        <p>
          Did I just placed a marker in the middle of some water to get a nice
          color contrast? Maybe. Click on it for a nice transition.
        </p>
        <p>
          <a
            className="reflink"
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10303782"
          >
            Iron article
          </a>
          <a
            className="reflink"
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/gOzzqNM"
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
