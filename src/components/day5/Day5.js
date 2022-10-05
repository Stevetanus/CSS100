import React from "react";
import "./day5.css";

export default function Day5() {
  return (
    <>
      <div className="frame day5">
        <div className="card_d5">
          <div className="header">
            <span className="title big">IRON REPORT</span>
            <span className="date small">08. Sep - 14. Sep</span>
            <span className="type small">Views</span>
            <span className="value big">306</span>
          </div>
          <div className="legend">
            <span className="red">Expectation</span>
            <span className="blue">Views</span>
          </div>
          <div className="statistic">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <div className="data red">
              <svg>
                <polyline points="9,1 50,16 90,20 130,25 171,30 211,35 251,40"></polyline>
              </svg>
              <div className="points">
                <div className="point-1">
                  <div className="tooltip">200</div>
                </div>
                <div className="point-2">
                  <div className="tooltip">160</div>
                </div>
                <div className="point-3">
                  <div className="tooltip">150</div>
                </div>
                <div className="point-4">
                  <div className="tooltip">145</div>
                </div>
                <div className="point-5">
                  <div className="tooltip">130</div>
                </div>
                <div className="point-6">
                  <div className="tooltip">115</div>
                </div>
                <div className="point-7">
                  <div className="tooltip">100</div>
                </div>
              </div>
            </div>
            <div className="data blue">
              <svg>
                <polyline points="9,39 50,55 90,58 130,70 171,75 211,75 251, 80"></polyline>
              </svg>
              <div className="points">
                <div className="point-1">
                  <div className="tooltip">104</div>
                </div>
                <div className="point-2">
                  <div className="tooltip">69</div>
                </div>
                <div className="point-3">
                  <div className="tooltip">66</div>
                </div>
                <div className="point-4">
                  <div className="tooltip">35</div>
                </div>
                <div className="point-5">
                  <div className="tooltip">16</div>
                </div>
                <div className="point-6">
                  <div className="tooltip">16</div>
                </div>
                <div className="point-7">
                  <div className="tooltip">0</div>
                </div>
              </div>
            </div>
          </div>
          <div className="days">
            <span className="day">9/08</span>
            <span className="day">9/09</span>
            <span className="day">9/10</span>
            <span className="day">9/11</span>
            <span className="day">9/12</span>
            <span className="day">9/13</span>
            <span className="day">9/14</span>
          </div>
        </div>
      </div>
      <div className="css100_description">
        <h3>Statistic</h3>
        <p>
          In a world of numbers, it is important to be able to interpret them
          correctly. Beautiful statistics help to capture these data.
        </p>
      </div>
    </>
  );
}
