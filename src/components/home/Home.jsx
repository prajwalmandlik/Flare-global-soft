import React from "react";
import "./home.css";
import ServiesFT from "./serviesFT";
import Hero from "./hero";
import Testimonials from "../testimonials/Testimonials";
import Team from "../team/Team";


const Home = () => {
  return (
    <div className="home">
    <Hero />
    <ServiesFT />
    <Testimonials />
    <Team />
    </div>
  );
};

export default Home;
