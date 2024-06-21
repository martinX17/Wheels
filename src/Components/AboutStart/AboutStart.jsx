import React from 'react'
import BikeBg from '../../assets/aboutback.jpg'

const AboutStart = () => {
  return (
    <div className='w-full h-[70vh] bg-cover bg-center flex items-center justify-center' style={{backgroundImage : `url(${BikeBg})`}}>
        <div className='w-full h-full flex items-center justify-start tablet:max-w-[960px] uppermid:max-w-[1200px] desktop:max-w-[1200px]'>
            <div className='grid place-items-start gap-2 mb-20 px-7'>
                <p className='text-main-yellow tracking-[0.35rem] text-xs'>WHEELS</p>
                <p className='text-4xl font-extrabold text-white'>About Us</p>
            </div>
        </div>
    </div>
  )
}

export default AboutStart
