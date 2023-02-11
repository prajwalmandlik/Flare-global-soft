import React from 'react'
import HeroSection from '../heroForOthersection/HeroSection';
import ServiesFT from '../home/ServicesFT';
import Portfoilo from '../portfolio/Portfolio';


const Services = () => {
  return (
    <div id='services'>
        <HeroSection name={"service"}  />
        <ServiesFT />
        <Portfoilo />
    </div>
  )
}

export default Services
