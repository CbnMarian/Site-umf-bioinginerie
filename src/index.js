import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "./components/footer/footer";
import Team from "./components/team-page/team-presentation";
import Header from "./components/header/header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Team />
    <Footer />
  </React.StrictMode>
);
