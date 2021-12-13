import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/food.png";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} style={{ width: "55px", height: "55px" }} />
      </Link>
      <ul className="nav-links">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/meals">
          <li>Meals</li>
        </Link>
        <Link to="/sharing">
          <li>Sharing</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
