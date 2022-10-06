import React from "react";
import "./day22.css";

export default function Day22() {
  return (
    <>
      <div className="frame day22">
        <div className="center">
          <div className="headline">
            <div className="small">my daily</div>progress
          </div>
          <div className="circle-big">
            <div className="text">
              2022<div className="small">kcal</div>
            </div>
            <svg>
              <circle className="bg" cx="57" cy="57" r="52" />
              <circle className="progress" cx="57" cy="57" r="52" />
            </svg>
          </div>
          <div className="circles-small">
            <div className="circle-small">
              <div className="text">
                8787<div className="small">steps</div>
              </div>
              <svg>
                <circle className="bg" cx="40" cy="40" r="37" />
                <circle className="progress one" cx="40" cy="40" r="37" />
              </svg>
            </div>
            <div className="circle-small">
              <div className="text">
                8.7<div className="small">km</div>
              </div>
              <svg>
                <circle className="bg" cx="40" cy="40" r="37" />
                <circle className="progress two" cx="40" cy="40" r="37" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="css100_description">
        <h3>Fitness Tracker</h3>
        <p>
          Don't sit on your chair all day long. Get up, jump, run, exercice and
          burn some calories.
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10302167"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/BaxrNLQ"
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
