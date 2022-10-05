import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="frame day0">
      <div className="center">
        <div className="numbers">
          <div className="three zero">
            <svg viewBox="0 0 120 80">
              <path
                fill="#323535"
                d="M0 0 h40 l10 10 v20 l-20 10 l20 10 v20 l-10 10 h-40 l10 -10 h20 l10 -10 l-25 -15 v-10 l25 -15 l-10 -10 h-20 l-10 -10 z"
              />

              <path
                fill="#323535"
                d="M70 0 h40 l10 40 l-10 40 h-40 l-10 -40 l10 -40 z"
              />
              <path
                fill="#eab676"
                d="M75 12 h30 l8 28 l-8 28 h-30 l-8 -28 l8 -28 z"
              />
            </svg>
          </div>
        </div>
        <div className="days">Days</div>
        <div className="iron">Iron Man</div>
      </div>
    </div>
  );
}
