// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <ul className="navbar">
          <li className="nav-item mx-3">
            <Link
              to="/all"
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              All
            </Link>
          </li>
          <li className="nav-item mx-3">
            {" "}
            <Link
              to="/fullstack"
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              Full Stack development{" "}
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              to="/datascience"
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              Data Science
            </Link>
          </li>
          <li className="nav-item mx-3">
            {" "}
            <Link
              to="/cyber"
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              Cyber Security{" "}
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              to="/career"
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              Career
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
