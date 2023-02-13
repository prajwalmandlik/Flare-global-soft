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
          <br />
          <p>
            Our team is made up of talented and dedicated professionals who are
            passionate about their work. We are constantly investing in training
            and education to stay ahead of the curve when it comes to technology
            and design, so that we can deliver the best possible solutions to
            our clients.
          </p>
          <br />
          <p>
            We believe that success is about more than just delivering great
            products and services. That's why we are committed to building
            long-lasting relationships with our clients, based on trust,
            transparency, and exceptional customer service.
          </p>
          <br />
          <p>
            If you're looking for a partner who can help you unleash your
            potential through technology, look no further than Flare Global
            Soft. Contact us today to learn more about how we can help you
            achieve your goals.
          </p>
        </div>
      </section>

      <Vision />
      <Team />
      <div className="bg-color">
        <Testimonials />
      </div>
    </div>
  );
};

export default About;
