import React from "react";
import {
  BsJustify,
  BsSearch,
  BsFillArchiveFill,
  BsListCheck,
  BsFillGrid3X3GapFill,
} from "react-icons/bs";
import "./admin.css";

function Admin() {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="menu-icon">
          <BsJustify className="icon4" />
        </div>
        <div className="header-left">
          <BsSearch className="icon4" />
        </div>
      </header>
      <aside id="sidebar" className="sidebar-responsive">
        <div className="sidebar-title">
          <div className="sidebar-brand">ADMIN</div>
        </div>

        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="#">
              <BsFillGrid3X3GapFill className="icon4" /> Dashboard
            </a>
          </li>
          <li className="sidebar-list-item dropdown">
            <a href="#">
              <BsFillArchiveFill className="icon4" /> Projects ▾
            </a>
            <ul className="dropdown-content">
              <li>
                <a href="#">Project 1</a>
              </li>
              <li>
                <a href="#">Project 2</a>
              </li>
            </ul>
          </li>
          <li className="sidebar-list-item dropdown">
            <a href="#">
              <BsListCheck className="icon4" /> Users ▾
            </a>
            <ul className="dropdown-content">
              <li>
                <a href="#">User 1</a>
              </li>
              <li>
                <a href="#">User 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Admin;
