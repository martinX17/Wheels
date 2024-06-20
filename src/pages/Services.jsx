import React from 'react'
import ServiceStart from '../Components/ServiceStart/ServiceStart'
import Footer from '../Components/Footer/Footer'
import ServiceList from '../Components/ServiceList/ServiceList'

const Services = () => {
  return (
    <div className='absolute top-0 left-0 w-full grid place-items-center'>
      <ServiceStart />
      <ServiceList />
      <Footer />
    </div>
  )
}

export default Services
