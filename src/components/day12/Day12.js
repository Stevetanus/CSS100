import React from "react";
import "./day12.css";

export default function Day12() {
  return (
    <>
      <div className="frame day12">
        <div className="quote_d12">
          <p>
            I know quite certainly that I myself have no special talent;
            curiosity,
            <span className="tooltip">
              obsession
              <span className="info">
                <span className="pronounce">
                  [əbˈseʃ(ə)n]<span className="fa fa-volume-up"></span>
                </span>
                <span className="text">
                  <b>Obsession</b>, a persistent disturbing preoccupation with
                  an often unreasonable idea or feeling.
                </span>
              </span>
            </span>{" "}
            and dogged endurance, combined with self-criticism have brought me
            to my ideas.
          </p>
          <p className="author">Albert Einstein</p>
        </div>
      </div>
      <div className="css100_description">
        <h3>Tooltip</h3>
        <p>
          I'm quite sure, you already know what obsession means. But you can
          look it up anyways.
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10294862"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/NWMgxQZ"
          >
            Source
          </a>
        </p>
      </div>
    </>
  );
}
