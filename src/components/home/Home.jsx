import React from "react";
import "./home.css";
import ServiesFT from "./serviesFT";
import Hero from "./hero";
import Testimonials from "../testimonials/Testimonials";


const Home = () => {
  return (
    <div className="home">
    <Hero />
    <ServiesFT />
    <Testimonials />
    </div>
  );
};

export default Home;
