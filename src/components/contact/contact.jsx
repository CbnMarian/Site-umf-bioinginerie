import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./contact.css";

function Contact(props) {
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
            Provides in vitro research facilities for members of the academic
            community within the university (faculty, doctoral students,
            master's students, undergraduates, etc.) in the fields of
            Bioengineering, Regenerative Medicine, and Pharmacy.
          </p>
          <div className="hero-container">
            <div className="contact-info">
              <h2>LOCATION</h2>
              <h2>Contact person</h2>
              <p>
                <i className="fa-solid fa-user"></i> Prof. univ. dr. Liliana
                VEREȘTIUC <br />
                <i className="fa-solid fa-phone"></i> 0232 303250 <br />
                <i className="fa-solid fa-envelope"></i>{" "}
                <a href="mailto:liliana.verestiuc@umfiasi.ro">
                  liliana.verestiuc@umfiasi.ro
                </a>
                ;{" "}
                <a href="mailto:liliana.verestiuc@bioinginerie.ro">
                  liliana.verestiuc@bioinginerie.ro
                </a>{" "}
                <br />
                <i className="fa-solid fa-location-dot"></i> &nbsp; Kogălniceanu
                Street, 9-13, 700454, Iași, ROMANIA
              </p>
              <h2>Scientific team</h2>
              <ul>
                <li>Prof. Univ. Dr. Liliana Vereștiuc</li>
                <li>Conf. Univ. Dr. Maria Butnaru</li>
                <li>Șef Lucrări Dr. Ovidiu Bredețean</li>
                <li>Asist. Univ. Dr. Vera Balan</li>
                <li>Lab. Simona Harhătă</li>
              </ul>
            </div>
            <iframe
              id="gmap_canvas"
              title="map"
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=11%20Kogalniceanu%20street,%20Iasi,%20Romania+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
