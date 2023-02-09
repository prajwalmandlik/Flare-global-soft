import React from 'react'
import "./heroSection.css";

const HeroSection = ({name}) => {
  return (
    <div className="hero-section section">
        <div className="hero-text">
            <p>{name}</p>
        </div>
    </div>
  )
}

export default HeroSection
