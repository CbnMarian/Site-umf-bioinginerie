import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { GoogleApiWrapper } from "google-maps-react";
import "./contact.css";

function Contact(props) {
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const onMarkerClick = () => {
    setShowInfoWindow(true);
  };

  const onInfoWindowClose = () => {
    setShowInfoWindow(false);
  };

  return (
    <div>
      <Header />
      <div className="container-map">
        <div className="content-wrapper">
          <div className="map-container">
            <iframe
              id="gmap_canvas"
              title="map"
              width="100%"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=11%20Kogalniceanu%20street,%20Iasi,%20Romania+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div className="contact-info">
            <h2>Persoană de contact</h2>
            <p>
              Prof. univ. dr. Liliana VEREȘTIUC <br />
              Telefon: 0232 303250 <br />
              Email:{" "}
              <a href="mailto:liliana.verestiuc@umfiasi.ro">
                liliana.verestiuc@umfiasi.ro
              </a>
              ;{" "}
              <a href="mailto:liliana.verestiuc@bioinginerie.ro">
                liliana.verestiuc@bioinginerie.ro
              </a>{" "}
              <br />
              Adresa: Strada Kogălniceanu, 9-13, 700454, Iași, ROMÂNIA
            </p>
            <h2>Echipa de cercetare</h2>
            <ul>
              <li>Prof. Univ. Dr. Liliana Vereștiuc</li>
              <li>Conf. Univ. Dr. Maria Butnaru</li>
              <li>Șef Lucrări Dr. Ovidiu Bredețean</li>
              <li>Asist. Univ. Dr. Vera Balan</li>
              <li>Lab. Simona Harhătă</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCIWCX44ckWYBXb7WP26t5E10mRRcO704U",
})(Contact);
