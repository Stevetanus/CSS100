import React, { useEffect } from "react";
import toggle from "../function/toggle";
import "./day27.css";

export default function Day27() {
  useEffect(() => {
    toggle();
  });
  return (
    <>
      <div className="frame day27">
        <div className="list">
          <div className="head">
            <div className="title">Friday</div>
            <div className="subtitle">October 7, 2022</div>
          </div>
          <ul>
            <li>
              <input type="checkbox" name="item-1" id="item-1" />
              <label htmlFor="item-1" className="text">
                Read iThelp articles
              </label>
              <label htmlFor="item-1" className="button"></label>
              <svg className="checkmark" width="15px" height="10px">
                <polyline points="1,5 6,9 14,1" />
              </svg>
            </li>
            <li>
              <input type="checkbox" name="item-2" id="item-2" />
              <label htmlFor="item-2" className="text">
                Sign up Iron 30
              </label>
              <label htmlFor="item-2" className="button"></label>
              <svg className="checkmark" width="15px" height="10px">
                <polyline points="1,5 6,9 14,1" />
              </svg>
            </li>
            <li>
              <input type="checkbox" name="item-3" id="item-3" />
              <label htmlFor="item-3" className="text">
                Learn and compose
              </label>
              <label htmlFor="item-3" className="button"></label>
              <svg className="checkmark" width="15px" height="10px">
                <polyline points="1,5 6,9 14,1" />
              </svg>
            </li>
            <li>
              <input type="checkbox" name="item-4" id="item-4" />
              <label htmlFor="item-4" className="text">
                Become a blogger
              </label>
              <label htmlFor="item-4" className="button"></label>
              <svg className="checkmark" width="15px" height="10px">
                <polyline points="1,5 6,9 14,1" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div className="css100_description">
        <h3>Checklist</h3>
        <p>
          What's the great thing about working through your to-do list? That's
          right, the relieving feeling when you can check off the tasks.
        </p>
        <p>
          <a
            className="reflink"
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10303877"
          >
            Iron article
          </a>
          <a
            className="reflink"
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/KKRRbBp"
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
