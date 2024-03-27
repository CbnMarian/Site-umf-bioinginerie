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
          <p className="description1">
            The Training and Research Center in Tissue Engineering and
            Regenerative Medicine conducts interdisciplinary research and
            educational activities in Biomaterials, Cell Cultures, and
            Biotechnologies. It promotes national and international
            collaboration, trains young researchers through seminars and
            workshops, and develops products and services. Its establishment was
            supported by research projects and university resources.
          </p>
          <h2 className="location">The Center's Laboratories:</h2>
          <div className="box-container">
            <div className="square-box">
              <p className="text-square">
                Laboratory of Nanotechnologies and Advanced Biomaterials
              </p>
            </div>
            <div className="square-box">
              <p className="text-square">Cell Culture Laboratory</p>
            </div>
            <div className="square-box">
              <p className="text-square">
                Biological Evaluation Compartment of Medical Devices
              </p>
            </div>
            <div className="square-box">
              <p className="text-square">
                Professional Training Compartment in Tissue Engineering
              </p>
            </div>
          </div>
          <h2 className="location">Objectives</h2>
          <div className="box-container-row">
            <div className="square-box-row">
              <p className="text-square-row">
                &#8226; Testing the biocompatibility of materials intended for
                tissue engineering.
              </p>
            </div>
            <div className="square-box-row">
              <p className="text-square-row">
                &#8226; Multiplication of cells from various cellular sources
                and preservation of cell lines or primary cells.
              </p>
            </div>
            <div className="square-box-row">
              <p className="text-square-row">
                &#8226; Population of polymeric matrices with autologous,
                allogeneic, or xenogeneic cells.
              </p>
            </div>
            <div className="square-box-row">
              <p className="text-square-row">
                &#8226; Research on micro and nanomaterials for diagnosis and
                therapy.
              </p>
            </div>
            <div className="square-box-row">
              <p className="text-square-row">
                &#8226; New biomaterials for medicine and pharmacy.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
}

export default About;
