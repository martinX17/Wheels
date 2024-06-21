import React from 'react'
import BikeStart from '../Components/BikeStart/BikeStart'
import BikeListing from '../Components/BikeListing/BikeListing'
import Footer from '../Components/Footer/Footer'
import Interested from '../Components/Interested/Interested'

const Bikes = () => {
  return (
    <div className='absolute top-0 left-0 w-full grid place-items-center'>
      <BikeStart />
      <BikeListing />
      <Interested />
      <Footer />
    </div>
  )
}

export default Bikes
