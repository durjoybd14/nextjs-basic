import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <nav className="text-white navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Navbar</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="mb-2 navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link" aria-current="page">
                  Login
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/signup">
                <a className="nav-link" aria-current="page">
                  Signup
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/create">
                <a className="nav-link" aria-current="page">
                  Create
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
