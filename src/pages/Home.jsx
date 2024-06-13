import React from 'react'
import Header from '../Components/Header/Header.jsx'
import Morethan from '../Components/Morethan/Morethan.jsx'
import Servicess from '../Components/Servicess/Servicess.jsx'
import Type from '../Components/Type/Type.jsx'
import BookNow from '../Components/BookNow/BookNow.jsx'
import Process from '../Components/Process/Process.jsx'
import Promo from '../Components/Promo/Promo.jsx'
import Testimonials from '../Components/Testimonials/Testimonials.jsx'
import Footer from '../Components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div className='absolute top-0 left-0 grid place-items-center'>
      <Header />
      <Morethan />
      <Servicess />
      <BookNow />
      <Type />
      <Process />
      <Promo />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
