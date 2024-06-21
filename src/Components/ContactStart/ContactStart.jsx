import React from 'react'
import BikeBg from '../../assets/contactbg.jpg'

const ContactStart = () => {
  return (
    <div className='w-full h-[80vh] bg-cover bg-center' style={{backgroundImage : `url(${BikeBg})`}}>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='grid place-items-center gap-2 mb-20'>
                <p className='text-main-yellow tracking-[0.35rem] text-xs'>GET IN TOUCH</p>
                <p className='text-4xl font-extrabold text-white'>Contact <span className='text-main-yellow'>Us</span></p>
            </div>
        </div>
    </div>
  )
}

export default ContactStart
