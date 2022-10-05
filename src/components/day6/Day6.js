import React from "react";
import "./day6.css";

export default function Day6() {
  return (
    <>
      <div className="frame day6">
        <div className="center_d6">
          <div className="profile_d6">
            <div className="photo">
              <img
                alt="Tibbers"
                src="https://external-preview.redd.it/1MUVOL28eu6cxTd0XESfSdsXLiulj5tn_v1Ebmo8O-o.jpg?auto=webp&s=d61c463a67c7bea6b7b8cc1426569cbd7d5cd231"
              />
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <div className="name">Steven Thibe</div>
            <div className="job">Front-end Developer</div>
            <div className="connection">
              <button className="btn">Follow</button>
              <button className="btn">Message</button>
            </div>
          </div>
          <div className="statistic_d6">
            <div className="box">
              <div className="number">7</div>
              <div className="type">Posts</div>
            </div>
            <div className="box">
              <div className="number">0</div>
              <div className="type">Likes</div>
            </div>
            <div className="box">
              <div className="number">0</div>
              <div className="type">Followers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="css100_description">
        <h3>Profile</h3>
        <p>
          Who of you knows how many social media profiles you have already
          created? For a refreshing twist, you can also create one yourself.
        </p>
      </div>
    </>
  );
}
