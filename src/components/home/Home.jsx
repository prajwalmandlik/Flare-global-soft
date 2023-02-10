import React from "react";
import "./home.css";
import ServiesFT from "./ServiesFT";
import Hero from "./hero";
import Testimonials from "../testimonials/Testimonials";
import Team from "../team/Team";
import Vision from "../vision/Vision";
import Quote from "./Quote";

const Home = () => {
  
  return (
    <div id="home">
      <Hero />
      <ServiesFT />
      <Vision />
      <Testimonials />
      <Quote />
      <Team />
    </div>
  );
};

export default Home;
