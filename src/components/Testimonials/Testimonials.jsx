import React, { useState } from "react";
import "../Testimonials/Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const length = testimonialsData.length;
  return (
    <div className="testimonials">
      <div className="testimonials-l">
        <div>Testimonials</div>
        <span className="stroke-text">WHAT THEY </span>
        <span>SAY ABOUT US</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span>{testimonialsData[selected].name} - </span>
          <span> {testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="testimonials-r">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />{" "}
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(length - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === length - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
