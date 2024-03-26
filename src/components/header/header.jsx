import "./header.css";
import logo from "../../assets/logo.png";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <li className="logo">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </li>
          <input type="checkbox" id="check" />
          <span className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/equipment">Services and equipment</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Team">Team</Link>
            </li>
            <label htmlFor="check" className="close-menu">
              <i className="fas fa-times"></i>
            </label>
          </span>
          <label htmlFor="check" className="open-menu">
            <i className="fas fa-bars"></i>
          </label>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
