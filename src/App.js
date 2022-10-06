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
import Day4 from "./components/day4/Day4";
import Day5 from "./components/day5/Day5";
import Day6 from "./components/day6/Day6";
import Day7 from "./components/day7/Day7";
import Day8 from "./components/day8/Day8";
import Day9 from "./components/day9/Day9";
import Day10 from "./components/day10/Day10";
import Day11 from "./components/day11/Day11";
import Day12 from "./components/day12/Day12";
import Day13 from "./components/day13/Day13";
import Day14 from "./components/day14/Day14";
import Day15 from "./components/day15/Day15";
import Day16 from "./components/day16/Day16";
import Day17 from "./components/day17/Day17";
import Day18 from "./components/day18/Day18";
import Day19 from "./components/day19/Day19";
import Day20 from "./components/day20/Day20";
import Day21 from "./components/day21/Day21";
import Day22 from "./components/day22/Day22";
import Day23 from "./components/day23/Day23";
import Day24 from "./components/day24/Day24";
import Day25 from "./components/day25/Day25";
import Day26 from "./components/day26/Day26";
import Day27 from "./components/day27/Day27";
import Day35 from "./components/day35/Day35";
function App() {
  const [count, setCount] = useState(0);
  const [home, setHome] = useState(true);
  useEffect(() => {
    let days = document.querySelectorAll(".daybar").length;
    setCount(days);
    const menuRight = document.querySelector(".menu_right");
    const cssDescription = document.querySelector(".css100_description");
    menuRight.addEventListener("click", () => {
      cssDescription.classList.toggle("active");
      menuRight.classList.toggle("rotate");
    });
  }, []);
  let activeClassName = "nav-active";
  function toggleHome() {
    setHome(!home);
  }
  return (
    <BrowserRouter>
      <h1>Welcome to Iron 30 dashboard \(^Д^)/</h1>
      <div className="leftside_nav">
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
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>1</span>
            </div>
          </NavLink>
          <NavLink
            to="day2"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>2</span>
            </div>
          </NavLink>
          <NavLink
            to="day3"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>3</span>
            </div>
          </NavLink>
          <NavLink
            to="day4"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>4</span>
            </div>
          </NavLink>
          <NavLink
            to="day5"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>5</span>
            </div>
          </NavLink>
          <NavLink
            to="day6"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>6</span>
            </div>
          </NavLink>
          <NavLink
            to="day7"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>7</span>
            </div>
          </NavLink>
          <NavLink
            to="day8"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>8</span>
            </div>
          </NavLink>
          <NavLink
            to="day9"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>9</span>
            </div>
          </NavLink>
          <NavLink
            to="day10"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>10</span>
            </div>
          </NavLink>
          <NavLink
            to="day11"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>11</span>
            </div>
          </NavLink>
          <NavLink
            to="day12"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>12</span>
            </div>
          </NavLink>
          <NavLink
            to="day13"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>13</span>
            </div>
          </NavLink>
          <NavLink
            to="day14"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>14</span>
            </div>
          </NavLink>
          <NavLink
            to="day15"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>15</span>
            </div>
          </NavLink>
          <NavLink
            to="day16"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>16</span>
            </div>
          </NavLink>
          <NavLink
            to="day17"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>17</span>
            </div>
          </NavLink>
          <NavLink
            to="day18"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>18</span>
            </div>
          </NavLink>
          <NavLink
            to="day19"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>19</span>
            </div>
          </NavLink>
          <NavLink
            to="day20"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>20</span>
            </div>
          </NavLink>
          <NavLink
            to="day21"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>21</span>
            </div>
          </NavLink>
          <NavLink
            to="day22"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>22</span>
            </div>
          </NavLink>
          <NavLink
            to="day23"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>23</span>
            </div>
          </NavLink>
          <NavLink
            to="day24"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>24</span>
            </div>
          </NavLink>
          <NavLink
            to="day25"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>25</span>
            </div>
          </NavLink>
          <NavLink
            to="day26"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>26</span>
            </div>
          </NavLink>
          <NavLink
            to="day27"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="daybar">
              <span>27</span>
            </div>
          </NavLink>
          {/* <NavLink
          to="day35"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="daybar">
            <span>35</span>
          </div>
        </NavLink> */}
        </nav>
        <div className="back" onClick={toggleHome}>
          <NavLink className={home ? "none" : "back"} to="back">
            Back
          </NavLink>
        </div>
        <div className="menu_left">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="bottom_nav">
        <span>
          Made by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Stevetanus/CSS100/"
          >
            steventhibe
          </a>
        </span>
        <span>
          Inspired by{" "}
          <a target="_blank" rel="noreferrer" href="https://100dayscss.com/">
            CSS 100
          </a>
        </span>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="day1" element={<Day1 />} />
        <Route path="day2" element={<Day2 />} />
        <Route path="day3" element={<Day3 />} />
        <Route path="day4" element={<Day4 />} />
        <Route path="day5" element={<Day5 />} />
        <Route path="day6" element={<Day6 />} />
        <Route path="day7" element={<Day7 />} />
        <Route path="day8" element={<Day8 />} />
        <Route path="day9" element={<Day9 />} />
        <Route path="day10" element={<Day10 />} />
        <Route path="day11" element={<Day11 />} />
        <Route path="day12" element={<Day12 />} />
        <Route path="day13" element={<Day13 />} />
        <Route path="day14" element={<Day14 />} />
        <Route path="day15" element={<Day15 />} />
        <Route path="day16" element={<Day16 />} />
        <Route path="day17" element={<Day17 />} />
        <Route path="day18" element={<Day18 />} />
        <Route path="day19" element={<Day19 />} />
        <Route path="day20" element={<Day20 />} />
        <Route path="day21" element={<Day21 />} />
        <Route path="day22" element={<Day22 />} />
        <Route path="day23" element={<Day23 />} />
        <Route path="day24" element={<Day24 />} />
        <Route path="day25" element={<Day25 />} />
        <Route path="day26" element={<Day26 />} />
        <Route path="day27" element={<Day27 />} />
        <Route path="day35" element={<Day35 />} />
        <Route path="back" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
