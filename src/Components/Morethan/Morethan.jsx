import React from 'react'
import { MdOutlineDone } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import ImageMore from '../../assets/morethan.jpg'

const Morethan = () => {
  return (
    <div className='grid place-items-center justify-center'>
        <div className='relative grid place-items-center justify-center tablet:max-w-[960px] uppermid:max-w[1200px] desktop:max-w-[1190px] w-full my-28 tablet:flex tablet:items-center tablet:justify-start '>
            <div className='p-10 w-4/6 tablet:w-1/2'>
                <p className='text-sm text-main-yellow tracking-[0.35rem]'>WHEELS</p>
                <p className='text-white text-4xl grid font-bold my-3'>We Are More Than <span className='text-main-yellow'>A Car Rental Company</span> </p>
                <p className=''>Since its inception in 2014, Wheels has quickly emerged as India's most popular omnichannel automobile destination with many happy customers across the country. Wheels offers a totally unique experience of supermachines.</p>
                <div className='w-full mt-6'>
                    <div className='flex items-center'>
                        <div className='p-3 text-xl text-main-yellow mr-2 rounded-full bg-light'>
                            <MdOutlineDone />
                        </div>
                        <p className=''>Sports Bikes</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <div className='p-3 text-xl text-main-yellow mr-2 rounded-full bg-light'>
                            <MdOutlineDone />
                        </div>
                        <p className=''>Crusise Bikes</p>
                    </div>
                </div>
                <button className='flex  items-center mt-6 border px-10 py-3 border-main-yellow text-black bg-main-yellow rounded-full hover:bg-white hover:border-white'>View Details <MdArrowOutward className='ml-2'/></button>
            </div>
            <div className=' absolute right-0 py-10 px-16 h-full max-[991px]:collapse w-1/2 bg-cover'>
                <div className='bg-cover bg-center rounded-3xl w-full h-full' style={{backgroundImage : `url(${ImageMore})`}}>
                </div>
            </div>
        </div>
        <div className='tablet:max-w-[960px] uppermid:max-w[1200px] desktop:max-w-[1190px] w-full h-[50px]'>
            <div className='border-r h-full w-1/2 border-main-yellow' />
        </div>
    </div>
  )
}

export default Morethan
