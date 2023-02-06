import React from "react";
import Web from "../../assest/web.png"
import App from "../../assest/app.png"
import Graphic from "../../assest/graphic.png"

const serviesFT = () => {
 
  return (
    <section className="serviceFT container">
      <div className="section-text">
        <h2 className="section_title">Services We Deliver</h2>
        <span className="section_subtitle">
          A complete solution for preparing for your success
        </span>
      </div>
      <div className="service-cards">
        <div className="service-card">
          <img src={Web} alt="" />
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
          <img src={App} alt="" />
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
          <img src={Graphic} alt="" />
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
    </section>
  );
};

export default serviesFT;
