import React from "react";
import { IoMdHome } from "react-icons/io";
import {
  BsJustify,
  BsSearch,
  BsFillArchiveFill,
  BsListCheck,
  BsFillGrid3X3GapFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import "./admin.css";

function Menu() {
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
            <span>
              <BsFillGrid3X3GapFill className="icon4" /> Dashboard
            </span>
          </li>
          <li className="sidebar-list-item">
            <Link to="/">
              <IoMdHome className="icon4" /> Home Page
            </Link>
          </li>
          <li className="sidebar-list-item dropdown">
            <BsFillArchiveFill className="icon4" /> Projects ▾
            <ul className="dropdown-content">
              <li>
                <Link to="/admin">All Projects</Link>
              </li>
              <li>
                <Link to="/admin/add-proj">Add new Project</Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-list-item dropdown">
            <BsListCheck className="icon4" /> Users ▾
            <ul className="dropdown-content">
              <Link to="/admin/all-users">
                <li>All Users</li>
              </Link>
              <Link to="/admin/add-user">
                <li>Add new User</li>
              </Link>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Menu;
