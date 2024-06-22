import React from 'react'
import Image from '../../assets/interested.jpg'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const Interested = () => {
  return (
    <div className='w-full h-[450px] flex items-center justify-center bg-cover bg-center' style={{backgroundImage : `url(${Image})`}}>
      <div className='w-full grid place-items-center gap-7'>
        <div className='w-full grid place-items-center gap-2 text-white' >
            <p className='text-xs text-main-yellow tracking-[0.35rem]'>BUY YOUR BIKE</p>
            <p className='text-3xl font-extrabold tracking-wide'>Interested in Buying?</p>
            <p className='text-sm tracking-wide mt-1'>Don't hesitate and send us a message.</p>
        </div>
        <div className='flex items-center gap-5'>
            <button className='flex items-center gap-2 bg-main-yellow px-7 py-2 rounded-full text-black font-light tracking-wider hover:bg-white hover:-translate-y-2 duration-300'>{<FaWhatsapp className='m-0 p-0' />}WhatsApp</button>
            <button className='flex items-center gap-2 border px-7 py-2 rounded-full text-white font-light tracking-wider hover:bg-main-yellow hover:text-black hover:border-main-yellow hover:-translate-y-1 duration-300'>Rent Now{<MdOutlineArrowOutward />}</button>
        </div>
      </div>
    </div>
  )
}

export default Interested
