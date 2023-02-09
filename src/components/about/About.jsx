import React from 'react'
import HeroSection from '../heroForOthersection/HeroSection'
import Team from '../team/Team'
import Testimonials from '../testimonials/Testimonials'
import Vision from '../vision/Vision'

const About = () => {
  return (
    <div>
        <HeroSection name={"About Us"} />
      <Vision />
      <Team />
      <Testimonials />
    </div>
  )
}

export default About
