import React, { useRef, useState } from 'react'
import Inspection from '../../assets/inspection.jpg'
import Tyre from '../../assets/tyre.jpg'
import Insurance from '../../assets/insurance.jpg'
import Oil from '../../assets/oil.jpg'
import Complete from '../../assets/complete.jpg'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const data = [
    {
        "image":Inspection,
        "name":"Motorcycle Inspection",
        "number":"01"
    },
    {
        "image":Tyre,
        "name":"Tyre and Brakes",
        "number":"02"
    },
    {
        "image": Insurance,
        "name": "Finance and Insurance",
        "number":"03"
    },
    {
        "image": Oil,
        "name":"Oil Change",
        "number":"04"
    },
    {
        "image":Complete,
        "name":"Complete Service",
        "number":"05"
    }
]

const Servicess = () => {
    const ref = useRef(null);

    const handleSlide = (direction) => {
        if(direction == "right"){
            const itemWidth = parseInt(
                getComputedStyle(ref.current.children[0]).width
              );
            ref.current.scrollLeft += (itemWidth+20)
        }else{
            const itemWidth = parseInt(
                getComputedStyle(ref.current.children[0]).width
              );
            ref.current.scrollLeft -= (itemWidth+20)
        }
    }

  return (
    <div className='w-full grid place-items-center justify-center mt-10'>
        
        <div className='tablet:max-w-[960px] uppermid:max-w[1200px] desktop:max-w-[1190px] w-full h-[50px] mb-28'>
            <div className='border-r h-full w-1/2 border-main-yellow' />
        </div>

        <p className='text-xs text-main-yellow tracking-[0.35rem]'>WHAT WE DO</p>
        <p className='text-white text-4xl font-bold my-3'>Other <span className='text-main-yellow'>Services</span></p>

        <div className='w-full mt-8 grid place-items-start justify-start px-5 max-w-[300px] min-[450px]:max-w-[430px] min-[650px]:max-w-[630px] lowermid:max-w-[750px] tablet:max-w-[960px] uppermid:max-w-[1180px]'>
            <div className='w-full grid place-items-center grid-cols-5 gap-6 justify-start overflow-x-scroll no-scrollbar scroll-smooth' ref={ref}>
                {data.map((item) => (
                    <div key={item.name} id={`${item.name}+service`} className='group w-[260px] h-[300px] relative min-[450px]:w-[390px] min-[450px]:h-[390px] min-[650px]:w-[282px] min-[650px]:h-[300px] lowermid:w-[340px] lowermid:h-[340px] tablet:w-[291px] tablet:h-[300px] uppermid:w-[366px] uppermid:h-[360px] rounded-t-3xl rounded-br-3xl overflow-hidden'> 
                        <div className='absolute w-full h-full top-0 left-0 bg-cover bg-center rounded-3xl overflow-hidden z-0 duration-300 group-hover:scale-105' style={{backgroundImage : `url(${item.image})`}} ></div>
                        <div className='absolute bottom-0 left-0 w-full z-10 flex items-center'>
                            <div className='relative w-[100px] h-[80px] bg-dark rounded-tr-[2.5rem] flex items-center justify-center'>
                                <div className='border h-[55px] w-[55px] rounded-full mr-1 flex items-center justify-center border-main-yellow group-hover:bg-main-yellow' >
                                    <Link to="/services" className='font-extrabold text-white tracking-wide group-hover:text-black'>{item.number}</Link>
                                </div>
                                <div className='absolute left-0 -top-6'>
                                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 -rotate-90">
                                        <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                    </svg>
                                </div>
                                <div className='absolute -right-6 bottom-0'>
                                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 -rotate-90">
                                        <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className='w-full text-xl font-extrabold text-white px-5'>
                                <Link to="/services" className='cursor-pointer w-fit'>{item.name}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='relative h-100px mt-10 flex items-center grid-cols-5 gap-6 text-xl text-white'>
                <button onClick={() => handleSlide("left")} className={` text-4xl hover:text-main-yellow `}><IoIosArrowBack /></button>
                
                <button onClick={() => handleSlide("right")} className={` text-4xl hover:text-main-yellow`}><IoIosArrowForward /></button>
        </div>
    </div>
  )
}

export default Servicess
