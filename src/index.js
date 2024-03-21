import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);
