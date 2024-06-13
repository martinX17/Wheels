import React from 'react'
import PromoImage from '../../assets/promo.jpg'
import { CiPlay1 } from "react-icons/ci";

const Promo = () => {
  return (
    <div className='mt-32 flex w-full items-center justify-center h-[400px] bg-cover bg-center' style={{backgroundImage : `url(${PromoImage})`}}>
        <div className='grid place-items-center'>
            <p className='text-xs text-main-yellow tracking-[0.35rem] mb-1'>EXPLORE</p>
            <p className='text-4xl font-extrabold text-white'>Bike <span className='text-main-yellow'>Promo</span> Video</p>
            <div className='mt-7 border p-7 rounded-full flex items-center justify-center border-main-yellow'>
                <CiPlay1 className='text-4xl text-white hover:text-main-yellow cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Promo
