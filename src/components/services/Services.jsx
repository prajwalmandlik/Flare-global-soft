import React from 'react'
import HeroSection from '../heroForOthersection/HeroSection';
import ServiesFT from '../home/ServicesFT';
import Portfoilo from '../portfolio/Portfolio';
import Features from './Features';


const Services = () => {
  return (
    <div id='services'>
        <HeroSection name={"service"}  />
        <ServiesFT />
        <Portfoilo />
        <Features />
    </div>
  )
}

export default Services
