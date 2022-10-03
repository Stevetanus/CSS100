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
    <div class="frame day7">
      <div class="panel_d7">
        <div class="header">
          <div class="menu-icon">
            <div class="dash-top"></div>
            <div class="dash-bottom"></div>
            <div class="circle"></div>
          </div>
          <span class="title">Notifications</span>
          <input type="text" class="search-input" placeholder="Search..." />
          <div class="fa fa-search search-icon"></div>
        </div>

        <div class="notifications clearfix">
          <div class="line"></div>
          <div class="notification">
            <div class="circle"></div>
            <span class="time">9:24 AM</span>
            <p>
              <b>John Walker</b> posted a photo on your wall.
            </p>
          </div>
          <div class="notification">
            <div class="circle"></div>
            <span class="time">8:19 AM</span>
            <p>
              <b>Alice Parker</b> commented your last post.
            </p>
          </div>
          <div class="notification">
            <div class="circle"></div>
            <span class="time">Yesterday</span>
            <p>
              <b>Luke Wayne</b> added you as friend.
            </p>
          </div>
        </div>
      </div>

      <div class="menu_d7">
        <ul>
          <li>
            <span class="fa fa-dashboard"></span>Dashboard
          </li>
          <li>
            <span class="fa fa-user"></span>Profile
          </li>
          <li>
            <span class="fa fa-bell"></span>Notifications
          </li>
          <li>
            <span class="fa fa-message"></span>Messages
          </li>
          <li>
            <span class="fa fa-gear"></span>Settings
          </li>
        </ul>
      </div>
    </div>
  );
}
