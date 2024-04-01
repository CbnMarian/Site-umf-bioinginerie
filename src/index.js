import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Equipment from "./components/equipment-services/equipment";
import Projects from "./components/projects/projects";
import Team from "./components/team-page/team-presentation";
import Login from "./components/login/login";
import Admin from "./components/admin/admin";
import AddProject from "./components/admin/add-proj";
import AllUsers from "./components/admin/all-users";
import AddUser from "./components/admin/add-user";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add-proj" element={<AddProject />} />
        <Route path="/admin/add-user" element={<AddUser />} />
        <Route path="/admin/all-users" element={<AllUsers />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
