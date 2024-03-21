import React, { useState } from "react";
import Footer from "../footer/footer";
import Question from "./question";
import Data from "./data";

const Equipment = () => {
  const [questions] = useState(Data);

  return (
    <section id="container">
      <div id="main">
        <div className="d-flex justify-content-around">
          <div>
            <section className="accordion-box">
              {questions.map((question) => (
                <Question
                  key={question.id}
                  title={question.title}
                  info={question.info}
                />
              ))}
            </section>
          </div>
          <div>
            <section></section>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Equipment;
