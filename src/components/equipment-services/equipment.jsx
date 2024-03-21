import React, { useState } from "react";
import Footer from "../footer/footer";
import Question from "./question";
import Data from "./data";
import "./equipment.css";
import Header from "../header/header";

const Equipment = () => {
  const [researchServices] = useState(Data["Research Services"]);
  const [researchEquipment] = useState(Data["Research Equipment"]);

  return (
    <section id="container">
      <Header />
      <div id="main">
        <div className="services-equipment">
          <div className="services">
            <h3>Research Services</h3>
            <section className="accordion-box">
              {researchServices.map((question) => (
                <Question
                  key={question.id}
                  title={question.title}
                  info={question.info}
                />
              ))}
            </section>
          </div>
          <div className="equipment">
            <h3>Research Equipment</h3>
            <section className="accordion-box">
              {researchEquipment.map((question) => (
                <Question
                  key={question.id}
                  title={question.title}
                  info={question.info}
                />
              ))}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Equipment;
