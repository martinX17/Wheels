import React from 'react'
import BikeBg from '../../assets/servicestart.jpg'

const ServiceStart = () => {
  return (
    <div className='w-full h-[70vh] bg-cover bg-center' style={{backgroundImage : `url(${BikeBg})`}}>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='grid place-items-center gap-2 mb-20 '>
                <p className='text-main-yellow tracking-[0.35rem] text-xs'>Services</p>
                <p className='text-4xl font-extrabold text-white'>Complete Service</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceStart
