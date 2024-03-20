import "./footer.css";
import KeyIcon from "@mui/icons-material/Key";

const Footer = () => {
  return (
    <footer>
      <div className="footer-box">
        <div className="login-icon">
          <KeyIcon />
        </div>
        <h4>
          © Universitatea de Medicina si Farmacie "Grigore T. Popa" Iasi 2023
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
