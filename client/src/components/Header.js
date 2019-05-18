import React from "react";

const Header = () => {
  return (
    <div className="navbar-fixed">
      <nav className="deep-purple darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <ul className="left">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Achievements</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
