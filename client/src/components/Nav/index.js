import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Google Books
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="navbar-brand"
              to="/"
            
            >
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-brand"
              to="/savedbooks"
            
            >
              Your Books
            </Link>
          </li>
   
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
