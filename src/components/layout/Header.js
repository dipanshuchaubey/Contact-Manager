import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar nav-dark mb-3 navbar-expand-sm navbar-dark bg-danger py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

export default Header;
