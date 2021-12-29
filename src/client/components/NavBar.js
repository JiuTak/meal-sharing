import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/images/food.png";

function NavBar({ navbarActive }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src={logo} style={{ width: "55px", height: "55px" }} />
        </Link>
        <div className="navbar-toggle" id="mobile-menu" onClick={navbarActive}>
          <AiOutlineMenu />
        </div>
      </div>
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
