import React from 'react'
import HeroSection from '../heroForOthersection/HeroSection'
import Team from '../team/Team'
import Testimonials from '../testimonials/Testimonials'
import Vision from '../vision/Vision'
// import Img from "../../assest/about.jpg";

const About = () => {
  return (
    <div id='about'>
      <HeroSection name={"about"} />
      <Vision />
      <Team />
      <Testimonials />
    </div>
  )
}

export default About
