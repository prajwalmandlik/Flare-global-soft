import React from 'react'
import HeroSection from '../heroForOthersection/HeroSection'
import Team from '../team/Team'
import Testimonials from '../testimonials/Testimonials'
import Vision from '../vision/Vision'

const About = () => {
  return (
    <div id='about'>
      <HeroSection name={"ABOUT US"} />
      <Vision />
      <Team />
      <Testimonials />
    </div>
  )
}

export default About
