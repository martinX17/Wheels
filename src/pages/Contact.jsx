import React from 'react'
import ContactStart from '../Components/ContactStart/ContactStart'
import ContactDetails from '../Components/ContactDetails/ContactDetails'
import Interested from '../Components/Interested/Interested'
import Footer from '../Components/Footer/Footer'
import GetInTouch from '../Components/GetInTouch/GetInTouch'

const Contact = () => {
  return (
    <div className='w-full absolute top-0 left-0 grid place-items-center'>
      <ContactStart />
      <ContactDetails />
      <GetInTouch />
      <Interested />
      <Footer />
    </div>
  )
}

export default Contact
