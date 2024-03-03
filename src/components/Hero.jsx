import React from "react";
import "../components/Hero.css";
import Header from "../Header/Header";
import Heart from "../assets/heart.png";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import calories from "../assets/calories.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body and
              live up life to fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        <img src={hero_image} className="hero_image" />
        <img src={hero_image_back} className="hero_image_back" />

        <div className="calories">
          <img src={calories} />
          <span>calories burned</span>
          <span>220 kcal</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
