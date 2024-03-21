import "./header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <li className="logo">
            <a href="">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
          </li>
          <input type="checkbox" id="check" />
          <span className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#test">Services and equipment</a>
            </li>
            <li>
              <a href="#test">Projects</a>
            </li>
            <li>
              <a href="#test">Team</a>
            </li>
            <label htmlFor="check" className="close-menu">
              <i className="fas fa-times"></i>
            </label>
          </span>
          <label htmlFor="check" className="open-menu">
            <i className="fas fa-bars"></i>
          </label>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
