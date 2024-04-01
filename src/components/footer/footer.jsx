import "./footer.css";
import KeyIcon from "@mui/icons-material/Key";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-box">
        <Link to="/Login" className="footer-link">
          <div className="login-icon wobble-ver-left">
            <KeyIcon />
          </div>
        </Link>
        <Link to="/Admin" className="footer-link">
          <div className="login-icon wobble-ver-left">
            <KeyIcon />
          </div>
        </Link>
        <h4>
          © Universitatea de Medicina si Farmacie "Grigore T. Popa" Iasi 2023
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
