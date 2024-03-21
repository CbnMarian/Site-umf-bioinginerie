import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./equipment.css";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header className="question-box">
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {!showInfo ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      </header>
      <div>
        <span>Service Description:</span>
        {showInfo && <p>{info}</p>}
      </div>
      <div></div>
    </article>
  );
};

export default Question;
