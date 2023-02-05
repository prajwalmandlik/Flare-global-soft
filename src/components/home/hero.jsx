import React from 'react'
import Hero from "../../assest/hero-img.png";

const hero = () => {
  return (
    <section className="section hero container">
      <div className="hero-content">
        <h1 className="hero-title">
          Empowering your vision with <br /> Flare Global Soft
        </h1>
        <p className="hero-subtitle">
          We provide consulting services, helping companies to reach their
          highest level. We optimize Business processes, making them easier.
        </p>
        <div className="hero-buttons">
          <button className="get-started hero-button">Get Started</button>
          <button className="learn-more hero-button">Learn More</button>
        </div>
      </div>

      <div className="hero-img">
        <img src={Hero} alt="" />
      </div>
    </section>
  )
}

export default hero
