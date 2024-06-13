import React, { useEffect, useState } from 'react'
import Inspection from '../../assets/inspection.jpg'
import Tyre from '../../assets/tyre.jpg'
import Insurance from '../../assets/insurance.jpg'
import Oil from '../../assets/oil.jpg'
import Complete from '../../assets/complete.jpg'
import { Link } from 'react-router-dom'

const data = [
    {
        "image":Inspection,
        "name":"Motorcycle Inspection"
    },
    {
        "image":Tyre,
        "name":"Tyre and Brakes"
    },
    {
        "image": Insurance,
        "name": "Finance and Insurance"
    },
    {
        "image": Oil,
        "name":"Oil Change"
    },
    {
        "image":Complete,
        "name":"Complete Service"
    }
]

const Servicess = () => {

  return (
    <div className='grid place-items-center justify-center mt-32'>
        <p className='text-xs text-main-yellow tracking-[0.35rem]'>WHAT WE DO</p>
        <p className='text-white text-4xl font-bold my-3'>Other <span className='text-main-yellow'>Services</span></p>

        <div className='bg-cover  bg-center mt-8 min-[992px]:w-[960px] min-[1200px]:w-[1200px]  min-[500px]:w-[480px] min-[700px]:w-[680px] min-[900px]:w-[890px] min-[200px]:w-[180px] min-[300px]:w-[280px] min-[400px]:w-[380px]'>
            <div className='grid place-items-center justify-start grid-cols-5 gap-6 overflow-x-scroll no-scrollbar rounded-3xl'>
                {data.map((item) => (
                    <Link key={item.name} style={{backgroundImage : `url(${item.image})`}} className='w-[280px] h-[300px] bg-cover bg-center rounded-3xl min-[200px]:w-[180px] min-[300px]:w-[280px] min-[400px]:w-[380px] cursor-pointer scale-95 hover:scale-100 transition-all duration-300' to="/services"> 
                        <div className='text-2xl font-extrabold text-white m-5 tracking-wider'>{item.name}</div>
                    </Link>
                ))}
            </div>
        </div>

        <div className='tablet:max-w-[960px] uppermid:max-w[1200px] desktop:max-w-[1190px] w-full h-[50px] mt-32'>
            <div className='border-r h-full w-1/2 border-main-yellow' />
        </div>
    </div>
  )
}

export default Servicess
