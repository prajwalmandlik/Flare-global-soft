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
          <h3>Website Development</h3>
          <p>
          Whether you're looking to establish a strong online presence, drive traffic to your site, or streamline your business processes, we have the expertise to help you achieve your goals.
          </p>
          <span>
            View More <i class="bx bx-right-arrow-alt"></i>
          </span>
        </div>

        <div className="service-card">
          <img src={App} alt="" />
          <h3>Application Development</h3>
          <p>
          Whether you're looking to develop a mobile app, a web-based software solution, or a custom application to streamline your business processes.
          </p>
          <span>
            View More <i class="bx bx-right-arrow-alt"></i>
          </span>
        </div>

        <div className="service-card">
          <img src={Graphic} alt="" />
          <h3>Graphics Design</h3>
          <p>
          Whether you're looking for a new logo, a complete brand identity, or anything in between, our graphics design services have got you covered.
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
