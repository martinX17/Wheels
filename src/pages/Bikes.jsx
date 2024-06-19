import React from 'react'
import BikeStart from '../Components/BikeStart/BikeStart'
import BikeListing from '../Components/BikeListing/BikeListing'
import Footer from '../Components/Footer/Footer'

const Bikes = () => {
  return (
    <div className='absolute top-0 left-0 w-full grid place-items-center'>
      <BikeStart />
      <BikeListing />
      <Footer />
    </div>
  )
}

export default Bikes
