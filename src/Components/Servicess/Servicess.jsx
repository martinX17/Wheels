import React, { useEffect, useState } from 'react'
import Inspection from '../../assets/inspection.jpg'
import Tyre from '../../assets/tyre.jpg'
import Insurance from '../../assets/insurance.jpg'
import Oil from '../../assets/oil.jpg'
import Complete from '../../assets/complete.jpg'

import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

const data = [
    {
        "image":Inspection,
        "name":"Motorcycle Inspection",
        "description" : "The Motorcycle Safety Foundation (MSF) suggests checking six areas before each ride. It uses the acronym T-CLOCS to help riders remember to take a look at the tires and wheels (T), controls (C), lights and electrics (L), oil and other fluids (O), chassis (C) and stands (S)."
    },
    {
        "image":Tyre,
        "name":"Tyre and Brakes",
        "description":"It’s unlikely we need to explain either to you really – if you’re trying to slow a 220kg bike from 70mph, pressing metal on metal isn’t going to do the job particularly well. And slick tyres might work on dry tracks, but road rubber that’s worn to the limit isn’t the same thing."
    },
    {
        "image": Insurance,
        "name": "Finance and Insurance",
        "description":"Bike insurance or two wheeler insurance covers expenses of vehicular damage due to man-made disasters and natural calamities. With monsoon around the corner, riders should ride their two wheelers with certain tips like avoiding riding through potholes, ride slowly, keep check on tyres, etc. "
    },
    {
        "image": Oil,
        "name":"Oil Change",
        "description":"Figuring out which oil you have is the first determining factor after asking: how often do I need to change my motorcycle oil? Different kinds of oils will require different types of maintenance. First, there's mineral oil. These oils are made from petroleum, and they usually break down at a quicker rate."
    },
    {
        "image":Complete,
        "name":"Complete Sservice",
        "description":"A full motorcycle service will ensure any mechanical or electrical problems are ironed out ahead of your MOT and of course before they affect the safe operation of your motorbike.Regularly servicing your motorcycle will not only prolong its life; Your machine may also be more efficient."
    }
]

const Servicess = () => {

    const [index , setIndex] = useState(0)

    const handleLeft = () =>{
        if(index == 0){
            setIndex(4)
        }else{
            setIndex(index-1)
        }
    }

    const handleRight = () =>{
        if(index == 4){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }

  return (
    <div className='grid place-items-center justify-center'>
        <div className='mt-28 w-full grid  place-items-center justify-center tablet:max-w-[960px] uppermid:max-w[1200px] desktop:max-w-[1200px]'>
            <p className='text-sm text-main-yellow tracking-[0.35rem]'>WHAT WE DO</p>
            <p className='text-white text-4xl font-bold my-3'>Our <span className='text-main-yellow'>Services</span></p>
        </div>
        <div className='relative w-full my-10 flex items-center justify-center tablet:max-w-[960px] uppermid:max-w[1200px] desktop:max-w-[1200px]'>
            <div className='relative flex px-12 items-center justify-center'>
                <div className='relative mx-10 h-[350px] w-[300px] bg-cover bg-center rounded-3xl max-[992px]:h-[200px] max-[992px]:w-[150px] duration-500 max-[730px]:h-[300px] max-[730px]:w-[250px] ' style={{backgroundImage : `url(${data[index].image})`}} >
                    <div className='absolute bottom-0 h-14 w-full flex items-center justify-center bg-dark collapse max-[730px]:visible'>
                        <p className='text-main-yellow text-xl font-bold'>{data[index].name}</p>
                    </div>
                </div>
                <div className='h-full w-1/2 flex flex-col gap-4 max-[730px]:absolute max-[730px]:collapse mr-10'>
                    <p className='text-main-yellow text-2xl font-bold'>{data[index].name}</p>
                    <p className='text-justify'>{data[index].description}</p>
                </div>
            </div>
            <div className='absolute w-full px-5 max-[730px]:w-[500px] '>
                <button className=' p-3 hover:text-black hover:bg-main-yellow rounded-full text-2xl border border-main-yellow text-white' onClick={handleLeft}>
                    <IoArrowBackOutline />
                </button>
                <button className=' p-3 hover:text-black hover:bg-main-yellow rounded-full text-2xl border float-right border-main-yellow text-white' onClick={handleRight}>
                    <IoArrowForwardOutline />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Servicess
