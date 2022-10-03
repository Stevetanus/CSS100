import React from "react";
import "./day5.css";

export default function Day5() {
  return (
    <div class="frame day5">
      <div class="card_d5">
        <div class="header">
          <span class="title big">IRON REPORT</span>
          <span class="date small">08. Sep - 14. Sep</span>
          <span class="type small">Views</span>
          <span class="value big">306</span>
        </div>
        <div class="legend">
          <span class="red">Expectation</span>
          <span class="blue">Views</span>
        </div>
        <div class="statistic">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
          <div class="data red">
            <svg>
              <polyline points="9,1 50,16 90,20 130,25 171,30 211,35 251,40"></polyline>
            </svg>
            <div class="points">
              <div class="point-1">
                <div class="tooltip">200</div>
              </div>
              <div class="point-2">
                <div class="tooltip">160</div>
              </div>
              <div class="point-3">
                <div class="tooltip">150</div>
              </div>
              <div class="point-4">
                <div class="tooltip">145</div>
              </div>
              <div class="point-5">
                <div class="tooltip">130</div>
              </div>
              <div class="point-6">
                <div class="tooltip">115</div>
              </div>
              <div class="point-7">
                <div class="tooltip">100</div>
              </div>
            </div>
          </div>
          <div class="data blue">
            <svg>
              <polyline points="9,39 50,55 90,58 130,70 171,75 211,75 251, 80"></polyline>
            </svg>
            <div class="points">
              <div class="point-1">
                <div class="tooltip">104</div>
              </div>
              <div class="point-2">
                <div class="tooltip">69</div>
              </div>
              <div class="point-3">
                <div class="tooltip">66</div>
              </div>
              <div class="point-4">
                <div class="tooltip">35</div>
              </div>
              <div class="point-5">
                <div class="tooltip">16</div>
              </div>
              <div class="point-6">
                <div class="tooltip">16</div>
              </div>
              <div class="point-7">
                <div class="tooltip">0</div>
              </div>
            </div>
          </div>
        </div>
        <div class="days">
          <span class="day">9/08</span>
          <span class="day">9/09</span>
          <span class="day">9/10</span>
          <span class="day">9/11</span>
          <span class="day">9/12</span>
          <span class="day">9/13</span>
          <span class="day">9/14</span>
        </div>
      </div>
    </div>
  );
}
