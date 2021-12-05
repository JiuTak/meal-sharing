import React from "react";
import { Link } from "react-router-dom";
import About from "../../pages/About";

function NavBar() {
  return (
    <nav>
      <div>
        <ul>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/meals">
            <li>Meals</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
