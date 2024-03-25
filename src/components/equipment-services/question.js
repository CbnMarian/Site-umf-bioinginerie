import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./equipment.css";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="question">
      <header className="question-box" onClick={toggleInfo}>
        <h4>{title}</h4>
        <button className="btn">
          {!showInfo ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      </header>
      {showInfo && (
        <div>
          <span>Service Description:</span>
          <p>{info}</p>
        </div>
      )}
    </article>
  );
};

export default Question;
