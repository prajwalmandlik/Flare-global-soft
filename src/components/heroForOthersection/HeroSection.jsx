import React from "react";
import "./heroSection.css";

const HeroSection = ({ name }) => {
  return (
    <div className={`${name === "about" ? 'about-img' : name === "contact" ? "contact-img" : "service-img"} hero-section sectio`}>
      <div className="hero-text">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default HeroSection;
