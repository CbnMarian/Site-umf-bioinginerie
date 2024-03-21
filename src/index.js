import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Team from "./components/team-page/team-presentation";
import Equipment from "./components/equipment-services/equipment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Equipment />
    <Team />
  </React.StrictMode>
);
