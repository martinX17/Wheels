import React from 'react'
import ProcessItem from './ProcessItem'
import { FaInfoCircle } from "react-icons/fa";

const Process = () => {
  return (
    <div className='grid place-items-center justify-center mt-32'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-xs text-main-yellow tracking-[0.35rem]'>STEPS</p>
            <p className='text-white text-4xl font-bold my-3'>Bike Purchase <span className='text-main-yellow'>Process</span></p>
        </div>
        <div className='grid place-items-center p-5 gap-5 mt-5 lowermid:flex items-center justify-center lowermid:max-w-[760px] tablet:max-w-[960px] uppermid:max-w-[1200px]'>
            <ProcessItem title="Choose A Bike" des="View our range of bikes, find your perfect bike for the coming days." num="01" />
            <ProcessItem title="Come In Contact" des="Our advisor team is ready to help you with the booking process or any questions." num="02" />
            <ProcessItem title="Enjoy Driving" des="Receive the key and enjoy your bike. We treat all our bikes with respect." num="03" />
        </div>
        <div className='mt-5 flex items-center px-5'>
            <FaInfoCircle className='mr-2'/>
            <p className='text-sm'>If you've never purchased a pre-owned bike before, we'll guide you through the process.</p>
        </div>
    </div>
  )
}
 
export default Process
