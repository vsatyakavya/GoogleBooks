import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Google Books
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/books"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/savedbooks"
              className={window.location.pathname === "/savedbooks" ? "nav-link active" : "nav-link"}
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
