import React from "react";
import "../Join/Join.css";
const Join = () => {
  return (
    <div className="join-container">
      <span>
        <span className="stroke-text">READY TO </span>LEVEL UP
      </span>
      <div className="join-section">
        <span>
          YOUR BODY <span className="stroke-text">WITH US?</span>
        </span>
        <div className="join-button">
          <input placeholder="Enter your Email address Here" />
          <button>Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
