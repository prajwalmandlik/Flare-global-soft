import React from "react";
import "./home.css";
import ServiesFT from "./serviesFT";
import Hero from "./hero";

const Home = () => {
  return (
    <div className="home">
    <Hero />
    <ServiesFT />
    </div>
  );
};

export default Home;
