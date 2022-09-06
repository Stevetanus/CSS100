import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Day1 from "./components/day1/Day1";
import Day2 from "./components/day2/Day2";
import Day3 from "./components/day3/Day3";
import Day35 from "./components/day35/Day35";
function App() {
  const [count, setCount] = useState(0);
  const [home, setHome] = useState(true);
  useEffect(() => {
    let days = document.querySelectorAll(".day").length;
    setCount(days);
  }, []);
  let activeClassName = "nav-active";
  function toggleHome() {
    setHome(!home);
  }
  return (
    <BrowserRouter>
      <h1>Welcome to CSS100 dashboard \(^Д^)/</h1>
      <h2>
        <NavLink
          onClick={() => {
            setHome(true);
          }}
          to=""
          className={({ isActive }) => (isActive ? "title" : undefined)}
        >
          CSS TABS: <span>{count}</span>
        </NavLink>
      </h2>

      <nav
        className="navbar"
        onClick={() => {
          setHome(false);
        }}
      >
        <NavLink
          to="day1"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="day">
            <span>1</span>
          </div>
        </NavLink>
        <NavLink
          to="day2"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="day">
            <span>2</span>
          </div>
        </NavLink>
        <NavLink
          to="day3"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="day">
            <span>3</span>
          </div>
        </NavLink>
        <NavLink
          to="day35"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="day">
            <span>35</span>
          </div>
        </NavLink>
      </nav>
      <div className="back" onClick={toggleHome}>
        <NavLink className={home ? "none" : "back"} to="back">
          Back
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="day1" element={<Day1 />} />
        <Route path="day2" element={<Day2 />} />
        <Route path="day3" element={<Day3 />} />
        <Route path="day35" element={<Day35 />} />
        <Route path="back" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
