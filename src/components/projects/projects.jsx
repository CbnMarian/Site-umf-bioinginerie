import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./projects.css";

function Projects() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section>
      <Header />
      <div id="main">
        {/*  */}
        <div
          className={`flip-card ${isFlipped ? "flipped" : ""}`}
          onClick={handleCardClick}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p>
                <span>Project-Code:</span> PNCDI-II 132/2014
              </p>
              <h4>
                Suporturi magnetice biomimetice ca strategie alternativa pentru
                ingineria și repararea tesutului osos – MAGBIOTISS.{" "}
              </h4>
            </div>
            <div className="flip-card-back">
              <p>
                <span>Director de proiect:</span> prof. univ. dr. Liliana
                Vereștiuc.
              </p>
              <p>
                <span>Perioada:</span> 2014 – 2017
              </p>
              <p>
                <span>Buget:</span> 450000 lei.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <Footer />
    </section>
  );
}

export default Projects;
