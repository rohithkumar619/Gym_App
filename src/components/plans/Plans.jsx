import React from "react";
import "../plans/Plans.css";
import whitetick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
import Arrow from "../../assets/rightArrow.png";
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plan-blur1"></div>
      <div className="blur plan-blur2"></div>
      <div className="plans-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      <div className="plans">
        {plansData.map((plan) => {
          return (
            <div className="plan">
              <span>{plan.planname}</span>
              <h2>
                {plan.planprice}
                <span className="inr">INR</span>
              </h2>
              <div className="features">
                <div>
                  <img src={whitetick} alt="" />
                  <p>{plan.features.feature1}</p>
                </div>
                <div>
                  <img src={whitetick} alt="" />
                  <p>{plan.features.feature2}</p>
                </div>
                <div>
                  <img src={whitetick} alt="" />
                  <p>{plan.features.feature3}</p>
                </div>
              </div>
              <div>
                <span>see more details...</span>
                <img src={Arrow} />
              </div>
              <button>Join Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
