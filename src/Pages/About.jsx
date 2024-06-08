import React from 'react'
import EndThisCrisis from '../Components/EndThisCrisis'
import Subscription from '../Components/Subscription'
import AboutHeader from '../Components/AboutHeader'
import AboutText from '../Components/AboutText'
import About_work from '../Components/About_work'
import Founder from '../Components/Founder'

const About = () => {
  return (
    <div>
      <AboutHeader/>
     <EndThisCrisis/>
     <AboutText/>
     <About_work/>
     <Subscription/>
     <Founder/>
    </div>
  )
}

export default About
