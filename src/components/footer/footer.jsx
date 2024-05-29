import React, { useState } from "react";
import "./footer.css";
import chemistry from "../../assets/chemistry.png";
import KeyIcon from "@mui/icons-material/Key";
import { Link } from "react-router-dom";

const Icon = (props) => (
  <img src={props.src} alt={props.alt} className={`icon icon-${props.alt}`} />
);

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <footer>
      <div className="footer-box">
        <Link to="/Login" className="footer-link">
          <div className="login-icon wobble-ver-left">
            <KeyIcon />
          </div>
        </Link>
        <h4>
          © Universitatea de Medicina si Farmacie "Grigore T. Popa" Iasi 2023
        </h4>
        <small className="created-by" onClick={toggleModal}>
          Created By
        </small>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-icons">
              <Icon src={chemistry} alt="chemistry" />
            </div>
            <span className="close-button" onClick={toggleModal}>
              &times;
            </span>
            <h2>Created By:</h2>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/ciobanu-marian-296268252/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ciobanu Marian
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mihaela-cri%C8%99an-b01629258/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Crișan Mihaela
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adina-ferariu-71706b275/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ferariu Adina-Cătălina
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
