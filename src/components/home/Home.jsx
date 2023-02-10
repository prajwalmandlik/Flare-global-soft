import React from "react";
import "./home.css";
import ServiesFT from "./serviesFT";
import Hero from "./hero";
import Testimonials from "../testimonials/Testimonials";
import Team from "../team/Team";
import Vision from "../vision/Vision";

const Home = () => {
  
  return (
    <div id="home">
      <Hero />
      <ServiesFT />
      <Vision />
      <Testimonials />
      <Team />
    </div>
  );
};

export default Home;
