import React from "react";
import "./day6.css";

export default function Day6() {
  return (
    <div class="frame day6">
      <div class="center_d6">
        <div class="profile_d6">
          <div class="photo">
            <img
              src="https://external-preview.redd.it/1MUVOL28eu6cxTd0XESfSdsXLiulj5tn_v1Ebmo8O-o.jpg?auto=webp&s=d61c463a67c7bea6b7b8cc1426569cbd7d5cd231"
              alt="profile photo"
            />
            <div class="circle1"></div>
            <div class="circle2"></div>
          </div>
          <div class="name">Steven Thibe</div>
          <div class="job">Front-end Developer</div>
          <div class="connection">
            <button class="btn">Follow</button>
            <button class="btn">Message</button>
          </div>
        </div>
        <div class="statistic_d6">
          <div class="box">
            <div class="number">7</div>
            <div class="type">Posts</div>
          </div>
          <div class="box">
            <div class="number">0</div>
            <div class="type">Likes</div>
          </div>
          <div class="box">
            <div class="number">0</div>
            <div class="type">Followers</div>
          </div>
        </div>
      </div>
    </div>
  );
}
