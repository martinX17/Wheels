import React from 'react'
import Morethan from '../Components/Morethan/Morethan'
import Promo from '../Components/Promo/Promo'
import Testimonials from '../Components/Testimonials/Testimonials'
import Footer from '../Components/Footer/Footer'
import AboutStart from '../Components/AboutStart/AboutStart'
import AboutUS from '../Components/AbouUs/AboutUS'
import Interested from '../Components/Interested/Interested'

const About = () => {
  return (
    <div className='absolute top-0 left-0 w-full grid place-items-center'>
      <AboutStart />
      <AboutUS />
      <Morethan />
      <Promo />
      <Testimonials />
      <Interested />
      <Footer />
    </div>
  )
}

export default About
