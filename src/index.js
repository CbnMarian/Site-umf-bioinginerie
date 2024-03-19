import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "./components/footer/footer";
import Team from "./components/team-page/team-presentation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Team />
    <Footer />
  </React.StrictMode>
);
