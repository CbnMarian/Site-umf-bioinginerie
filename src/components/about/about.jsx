import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./about.css";

function About() {
  return (
    <section id="container">
      <Header />
      <div id="main">
        <section className="hero">
          <div className="location-container">
            <h2 className="location">
              TRAINING AND RESEARCH CENTER IN TISSUE ENGINEERINGS
            </h2>
            <div className="line"></div>
          </div>
          <p className="description">
            The Training and Research Center in Tissue Engineering and
            Regenerative Medicine conducts interdisciplinary research and
            educational activities in Biomaterials, Cell Cultures, and
            Biotechnologies. It promotes national and international
            collaboration, trains young researchers through seminars and
            workshops, and develops products and services. Its establishment was
            supported by research projects and university resources.
          </p>
          <div className="hero-container">
            <div className="column-left"></div>
            <div className="column-right"></div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
}

export default About;
