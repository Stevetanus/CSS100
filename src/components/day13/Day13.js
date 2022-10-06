import React, { useEffect } from "react";
import "./day13.css";

export default function Day13() {
  useEffect(() => {
    let detail = document.querySelector(".detail_d13");
    let profiles = document.querySelectorAll(".profile_d13");

    profiles.forEach((profile) => {
      profile.addEventListener("click", () => {
        detail.classList.add("active");
      });
    });

    let closeBtn = document.querySelector(".close");

    closeBtn.addEventListener("click", function () {
      detail.classList.remove("active");
    });
  }, []);
  return (
    <>
      <div className="frame day13">
        <div className="profile_d13" id="profile-1">
          <img
            src="https://images.unsplash.com/photo-1623067375368-356c275fb83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            className="square-pic"
            alt="Yangming Mountain"
          />
          <div className="overlay"></div>
          <div className="plus"></div>
        </div>
        <div className="profile_d13" id="profile-2">
          <img
            src="https://images.unsplash.com/photo-1555952024-28eefb1d21fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            className="square-pic"
            alt="Jade Mountain"
          />
          <div className="overlay"></div>
          <div className="plus"></div>
        </div>
        <div className="profile_d13" id="profile-3">
          <img
            src="https://images.unsplash.com/photo-1566924443997-a2448e9c6f01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
            className="square-pic"
            alt="Ren'ai Township"
          />
          <div className="overlay"></div>
          <div className="plus"></div>
        </div>
        <div className="profile_d13" id="profile-4">
          <img
            src="https://images.unsplash.com/photo-1552461871-ce4f9fb3b438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            className="square-pic"
            alt="Jianshi Township"
          />
          <div className="overlay"></div>
          <div className="plus"></div>
        </div>
        <div className="detail_d13" id="detail-1">
          <div className="close"></div>
          <img
            className="header detail-header"
            src="https://images.unsplash.com/photo-1575467627652-0c597f6dba77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="Alishan"
          />
          <div className="cover">
            <img
              src="https://images.unsplash.com/photo-1618243329711-359c196ffb38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="unsplash icon"
            />
          </div>
          <div className="infos">
            <div className="name">Unsplash Photographers</div>
            <div className="action">
              <div className="btn">
                <span className="fa fa-phone"></span>
              </div>
              <div className="btn">
                <span className="fa fa-comment"></span>
              </div>
              <div className="btn">
                <span className="fa fa-heart"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="css100_description">
        <h3>Byciclopter</h3>
        <p>
          Which side of the card do you want to use? Either drive or fly to work
          in the morning?
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10295592"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/BaxZEXG"
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
