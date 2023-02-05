import React from "react";
import Logo from "../../assest/hero-img.png";

const serviesFT = () => {
 
  return (
    <header className="serviceFT container">
      <div className="service-text">
        <h2 className="section_title">Services We Deliver</h2>
        <span className="section_subtitle">
          A complete solution for preparing for your success
        </span>
      </div>
      <div className="service-cards">
        <div className="service-card">
          <img src={Logo} alt="" />
          <h3>Web Development</h3>
          <p>
            We are a startup company specializing in providing high-quality web
            development services to businesses of all sizes.
          </p>
          <span>
            View More <i class="bx bx-right-arrow-alt"></i>
          </span>
        </div>

        <div className="service-card">
          <img src={Logo} alt="" />
          <h3>Web Development</h3>
          <p>
            We are a startup company specializing in providing high-quality web
            development services to businesses of all sizes.
          </p>
          <span>
            View More <i class="bx bx-right-arrow-alt"></i>
          </span>
        </div>

        <div className="service-card">
          <img src={Logo} alt="" />
          <h3>Web Development</h3>
          <p>
            We are a startup company specializing in providing high-quality web
            development services to businesses of all sizes.
          </p>
          <span>
            View More <i class="bx bx-right-arrow-alt"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default serviesFT;
