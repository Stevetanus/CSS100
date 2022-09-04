import "./App.css";
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
function App() {
  let activeClassName = "nav-active";
  return (
    <BrowserRouter>
      <header>Welcome to CSS100</header>
      <nav>
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="Day1"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Day1
        </NavLink>
        <NavLink
          to="Day2"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Day2
        </NavLink>
        <NavLink
          to="Day3"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Day3
        </NavLink>
        <NavLink to="back">Back</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="day1" element={<Day1 />} />
        <Route path="day2" element={<Day2 />} />
        <Route path="day3" element={<Day3 />} />
        <Route path="back" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
