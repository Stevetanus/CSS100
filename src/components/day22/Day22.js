import React from "react";
import "./day22.css";

export default function Day22() {
  return (
    <div class="frame day22">
      <div class="center">
        <div class="headline">
          <div class="small">my daily</div>progress
        </div>
        <div class="circle-big">
          <div class="text">
            2022<div class="small">kcal</div>
          </div>
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="progress" cx="57" cy="57" r="52" />
          </svg>
        </div>
        <div class="circles-small">
          <div class="circle-small">
            <div class="text">
              8787<div class="small">steps</div>
            </div>
            <svg>
              <circle class="bg" cx="40" cy="40" r="37" />
              <circle class="progress one" cx="40" cy="40" r="37" />
            </svg>
          </div>
          <div class="circle-small">
            <div class="text">
              8.7<div class="small">km</div>
            </div>
            <svg>
              <circle class="bg" cx="40" cy="40" r="37" />
              <circle class="progress two" cx="40" cy="40" r="37" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
