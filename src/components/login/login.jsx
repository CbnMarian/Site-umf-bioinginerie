import React from "react";
import "./login.css";
import video from "../../assets/video.mp4";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png"; // Am modificat aici
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

function Login() {
  return (
    <div>
      <section>
        <div className="loginPage flex">
          <div className="container1 flex">
            <div className="videoDiv">
              <video src={video} autoPlay muted loop></video>

              <div className="textDiv">
                <h2 className="title">
                  Training And Research Center In Tissue Engineerings
                </h2>
                <p>Faculty of Medical Bioengineering, Iași</p>
              </div>

              <div className="footerDiv flex">
                <span className="text">Go back to Home page</span>
                <Link to="/">
                  <button className="btn1">Home</button>
                </Link>
              </div>
            </div>

            <div className="formDiv flex">
              <div className="headerDiv">
                <img src={logo} alt="logo" /> {/* Am modificat aici */}
                <h3>Log In</h3>
              </div>

              <form action="" className="form grid">
                <div className="inputDiv">
                  <label htmlFor="username">Username</label>
                  <div className="input flex">
                    <FaUserShield className="icon1" />
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter Username"
                    />
                  </div>
                </div>

                <div className="inputDiv">
                  <label htmlFor="password">Password</label>
                  <div className="input flex">
                    <BsFillShieldLockFill className="icon1" />
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>

                <button type="submit" className="btn1 flex">
                  <span>Login</span>
                  <AiOutlineSwapRight className="icon1" />
                </button>
                <Link
                  to="/"
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    textAlign: "center",
                  }}
                >
                  Back to Home Page
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
