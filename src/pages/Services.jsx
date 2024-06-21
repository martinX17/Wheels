import React from 'react'
import ServiceStart from '../Components/ServiceStart/ServiceStart'
import Footer from '../Components/Footer/Footer'
import ServiceList from '../Components/ServiceList/ServiceList'
import Interested from '../Components/Interested/Interested'

const Services = () => {
  return (
    <div className='absolute top-0 left-0 w-full grid place-items-center'>
      <ServiceStart />
      <ServiceList />
      <Interested />
      <Footer />
    </div>
  )
}

export default Services
