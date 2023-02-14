import React from "react";
import HeroSection from "../heroForOthersection/HeroSection";
import Team from "../team/Team";
import Testimonials from "../testimonials/Testimonials";
import Vision from "../vision/Vision";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <HeroSection name={"about"} />

      <section className="cantainer section about-us">
        <div className="section-text">
          <h2>About Us</h2>
        </div>

        <div className="about-us-text">
          <p>
            Welcome to Flare Global Soft, a dynamic and innovative Information
            Technology startup. We are dedicated to delivering cutting-edge
            solutions that help businesses achieve their goals and reach new
            heights. Our team of experts combines their passion for technology
            with a deep understanding of our clients' needs to create truly
            transformative solutions.
          </p>
          <br />
          <p>
            At Flare Global Soft, we believe that technology has the power to
            change the world, and we're on a mission to help businesses harness
            that power to achieve their goals. Whether you're looking to
            streamline your processes, establish a strong online presence, or
            gain a competitive edge, we have the expertise and experience to
            help you achieve your vision.
          </p>
         
        </div>
      </section>

      <Vision />
      <div id="team">
        <Team />
      </div>
      <div className="bg-color">
        <Testimonials />
      </div>
    </div>
  );
};

export default About;
