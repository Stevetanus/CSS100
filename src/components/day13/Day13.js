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
    <div class="frame day13">
      <div class="profile_d13" id="profile-1">
        <img
          src="https://images.unsplash.com/photo-1623067375368-356c275fb83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          class="square-pic"
          alt="Yangming Mountain"
        />
        <div class="overlay"></div>
        <div class="plus"></div>
      </div>
      <div class="profile_d13" id="profile-2">
        <img
          src="https://images.unsplash.com/photo-1555952024-28eefb1d21fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          class="square-pic"
          alt="Jade Mountain"
        />
        <div class="overlay"></div>
        <div class="plus"></div>
      </div>
      <div class="profile_d13" id="profile-3">
        <img
          src="https://images.unsplash.com/photo-1566924443997-a2448e9c6f01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          class="square-pic"
          alt="Ren'ai Township"
        />
        <div class="overlay"></div>
        <div class="plus"></div>
      </div>
      <div class="profile_d13" id="profile-4">
        <img
          src="https://images.unsplash.com/photo-1552461871-ce4f9fb3b438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          class="square-pic"
          alt="Jianshi Township"
        />
        <div class="overlay"></div>
        <div class="plus"></div>
      </div>
      <div class="detail_d13" id="detail-1">
        <div class="close"></div>
        <img
          class="header detail-header"
          src="https://images.unsplash.com/photo-1575467627652-0c597f6dba77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="Alishan"
        />
        <div class="cover">
          <img
            src="https://images.unsplash.com/photo-1618243329711-359c196ffb38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="unsplash icon"
          />
        </div>
        <div class="infos">
          <div class="name">Unsplash Photographers</div>
          <div class="action">
            <div class="btn">
              <span class="fa fa-phone"></span>
            </div>
            <div class="btn">
              <span class="fa fa-comment"></span>
            </div>
            <div class="btn">
              <span class="fa fa-heart"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
