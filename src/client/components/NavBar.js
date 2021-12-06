import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/food.png";

function NavBar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <img src={logo} style={{ width: "55px", height: "55px" }} />
        </Link>
      </div>
      <div>
        <ul className="nav-links">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/meals">
            <li>Meals</li>
          </Link>
          <Link to="/reservations">
            <li>Reservations</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
