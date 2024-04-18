import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import "./login.css";
import video from "../../assets/video.mp4";
import logo from "../../assets/logo2.png";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import axios from "../admin/axiosConfig";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: username,
        password: password,
      });
      const accessToken = response.data.accessToken;
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        setIsLoggedIn(true);
      } else {
        setError("Invalid response from server");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid username password combination");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/admin" />;
  }

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
                <img src={logo} alt="logo" />
                <h3>Log In</h3>
              </div>

              <form onSubmit={handleLogin} className="form grid">
                <div className="inputDiv">
                  <label htmlFor="username">Username</label>
                  <div className="input flex">
                    <FaUserShield className="icon1" />
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                {error && <p className="errorMessage">{error}</p>}

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
