import React, { useEffect } from "react";
import "./day26.css";

export default function Day26() {
  useEffect(() => {
    const buttons_d26 = document.querySelectorAll(".button_d26");

    const cards_d26 = document.querySelectorAll(".card_d26");
    for (let i = 0; i < 3; i++) {
      buttons_d26[i].addEventListener("click", () => {
        cards_d26[i].classList.remove("active");
        cards_d26[i].classList.add("inactive");
        if (i === 2) {
          cards_d26[0].classList.remove("inactive");
          cards_d26[0].classList.add("active");
        } else {
          cards_d26[i + 1].classList.remove("inactive");
          cards_d26[i + 1].classList.add("active");
        }
      });
    }
  }, []);
  return (
    <>
      <div className="frame day26">
        <div className="card_d26 active">
          <div className="number-bg"></div>
          <div className="number">1</div>
          <div className="text">
            <span className="headline">The Couch</span>
            <p>
              If you want to grow, get outside
              <br />
              your comfort zone.
            </p>
          </div>
          <div className="button_d26">Ok</div>
        </div>
        <div className="card_d26">
          <div className="number-bg"></div>
          <div className="number">2</div>
          <div className="text">
            <span className="headline">Falling is learning</span>
            <p>
              Pick yourself up, dust yourself off,
              <br />
              and start again.
            </p>
          </div>
          <div className="button_d26">Ok</div>
        </div>
        <div className="card_d26">
          <div className="number-bg"></div>
          <div className="number">3</div>
          <div className="text">
            <span className="headline">Flowers and rainbows</span>
            <p>
              Always be yourself,
              <br />
              unless you can be an unicorn.
            </p>
          </div>
          <div className="button_d26">Ok</div>
        </div>
      </div>
      <div className="css100_description">
        <h3>Motivational Modal</h3>
        <p>
          What's worse than a motivational quote? Three motivational quotes...
          so don't focus on the text and click through them quickly.
        </p>
      </div>
    </>
  );
}
