import React from "react";
import "../programs/Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore</span>
        <span>Progress</span>
        <span className="stroke-text">to shape</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => {
          return (
            <div className="category">
              {program.image}
              <span>{program.data}</span>
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
