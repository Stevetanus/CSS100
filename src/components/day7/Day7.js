import React, { useEffect } from "react";
import "./day7.css";

export default function Day7() {
  useEffect(() => {
    const searchInput = document.querySelector(".search-input");
    const searchIcon = document.querySelector(".search-icon");
    searchIcon.addEventListener("click", () => {
      searchInput.classList.toggle("active");
    });
    const menuIcon = document.querySelector(".menu-icon");
    const panel = document.querySelector(".panel_d7");
    const menu = document.querySelector(".menu_d7");
    menuIcon.addEventListener("click", () => {
      panel.classList.toggle("show-menu");
      menu.classList.toggle("active");
    });
  }, []);

  return (
    <>
      <div className="frame day7">
        <div className="panel_d7">
          <div className="header">
            <div className="menu-icon">
              <div className="dash-top"></div>
              <div className="dash-bottom"></div>
              <div className="circle"></div>
            </div>
            <span className="title">Notifications</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <div className="fa fa-search search-icon"></div>
          </div>

          <div className="notifications clearfix">
            <div className="line"></div>
            <div className="notification">
              <div className="circle"></div>
              <span className="time">9:24 AM</span>
              <p>
                <b>John Walker</b> posted a photo on your wall.
              </p>
            </div>
            <div className="notification">
              <div className="circle"></div>
              <span className="time">8:19 AM</span>
              <p>
                <b>Alice Parker</b> commented your last post.
              </p>
            </div>
            <div className="notification">
              <div className="circle"></div>
              <span className="time">Yesterday</span>
              <p>
                <b>Luke Wayne</b> added you as friend.
              </p>
            </div>
          </div>
        </div>

        <div className="menu_d7">
          <ul>
            <li>
              <span className="fa fa-dashboard"></span>Dashboard
            </li>
            <li>
              <span className="fa fa-user"></span>Profile
            </li>
            <li>
              <span className="fa fa-bell"></span>Notifications
            </li>
            <li>
              <span className="fa fa-message"></span>Messages
            </li>
            <li>
              <span className="fa fa-gear"></span>Settings
            </li>
          </ul>
        </div>
      </div>
      <div className="css100_description">
        <h3>Notifications, Search and Menu</h3>
        <p>
          The three cornerstones of any application? Brought together in the
          smallest possible space.
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ithelp.ithome.com.tw/articles/10291130"
          >
            Iron article
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/stevetanus/pen/abGBrxo"
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
