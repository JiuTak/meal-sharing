import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/food.png";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

function ToggleNavBar({ navbarActive }) {
  return (
    <nav className="toggled-nav">
      <div className="toggle-navbar-container">
        <Link to="/">
          <img src={logo} style={{ width: "55px", height: "55px" }} />
        </Link>
        <div
          className="toggle-navbar-active"
          id="mobile-menu"
          onClick={navbarActive}
        >
          <CgClose />
        </div>
      </div>
      <div className="toggle-navbar-links">
        <ul className="toggle-links">
          <Link to="/about" onClick={navbarActive}>
            <li>About</li>
          </Link>
          <Link to="/meals" onClick={navbarActive}>
            <li>Meals</li>
          </Link>
          <Link to="/sharing" onClick={navbarActive}>
            <li>Sharing</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default ToggleNavBar;
