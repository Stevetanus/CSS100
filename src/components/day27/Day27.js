import React from "react";
import "./day27.css";

export default function Day27() {
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
              <label for="item-1" className="text">
                Read iThelp articles
              </label>
              <label for="item-1" className="button"></label>
              <svg className="checkmark" width="15px" height="10px">
                <polyline points="1,5 6,9 14,1" />
              </svg>
            </li>
            <li>
              <input type="checkbox" name="item-2" id="item-2" />
              <label for="item-2" className="text">
                Sign up Iron 30
              </label>
              <label for="item-2" className="button"></label>
              <svg className="checkmark" width="15px" height="10px">
                <polyline points="1,5 6,9 14,1" />
              </svg>
            </li>
            <li>
              <input type="checkbox" name="item-3" id="item-3" />
              <label for="item-3" className="text">
                Learn and compose
              </label>
              <label for="item-3" className="button"></label>
              <svg className="checkmark" width="15px" height="10px">
                <polyline points="1,5 6,9 14,1" />
              </svg>
            </li>
            <li>
              <input type="checkbox" name="item-4" id="item-4" />
              <label for="item-4" className="text">
                Become a blogger
              </label>
              <label for="item-4" className="button"></label>
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
      </div>
    </>
  );
}