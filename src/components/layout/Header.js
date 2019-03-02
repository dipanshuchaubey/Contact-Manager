import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar nav-dark mb-3 navbar-expand-sm navbar-dark bg-danger py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fa fa-home"> Home</i>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact/add" className="nav-link">
            <i className="fa fa-plus"> Add</i>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <i className="fa fa-question"> About</i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

export default Header;
