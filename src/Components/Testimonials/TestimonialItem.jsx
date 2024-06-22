import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialItem = ({name,image}) => {
  return (
    <div className='grid w-[245px] bg-light rounded-tl-3xl rounded-br-3xl lowest:w-[290px] mobile:w-[260px] lowermid:w-[340px] tablet:w-full'>
      <div className='flex relative items-center'>
        <div className='w-full py-5' />
        <div className='relative flex gap-1 text-sm py-5 px-3 bg-dark rounded-bl-3xl text-main-yellow'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            <div className='absolute top-0 -left-4 bg-dark'>
                <div className='h-4 w-4 rounded-tr-3xl bg-light'></div>
            </div>
            <div className='absolute right-0 -bottom-4 bg-dark'>
                <div className='h-4 w-4 rounded-tr-3xl bg-light'></div>
            </div>
        </div>
      </div>
      <div className='grid place-items-center px-9'>
        <div className='w-full m-0'><FaQuoteLeft className='text-main-yellow text-4xl' /></div>
        <div className='py-7'>
            <p className='text-sm leading-loose'>Aliquip laborum cupidatat labore veniam eu excepteur. Do fugiat et anim mollit consequat cillum. Amet commodo ipsum pariatur ex labore aute. Veniam anim et dolor.</p>
        </div>
      </div>
      <div className='flex'>
        <div className='relative bg-dark rounded-tr-3xl p-[15px]'>
            <div className='w-[60px] h-[60px] bg-cover bg-center rounded-full' style={{backgroundImage : `url(${image})`}} />
            <div className='absolute -right-4 bottom-0 bg-dark'>
                <div className='h-4 w-4 rounded-bl-3xl bg-light'></div>
            </div>
            <div className='absolute left-0 -top-4 bg-dark'>
                <div className='h-4 w-4 rounded-bl-3xl bg-light'></div>
            </div>
        </div>
        <div className='p-[15px]'>
            <p className='text-white tracking-wider m-0 p-0'>{name}</p>
            <p className='text-sm m-0 p-0'>Customer</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialItem
