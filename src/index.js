import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Equipment from "./components/equipment-services/equipment";
import Projects from "./components/projects/projects";
import Team from "./components/team-page/team-presentation";

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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
