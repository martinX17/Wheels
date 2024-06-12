import React, {useState} from 'react'
import Sport from '../../assets/sports.jpg'
import Cruise from '../../assets/cruise.jpg'
import Adventure from '../../assets/adventure.jpg'
import DirtBike from '../../assets/dirtbike.jpg'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

const data = [
    {
        "type" : "Sports",
        "image" : Sport
    },
    {
        "type" : "Cruise",
        "image" : Cruise
    },
    {
        "type" : "Adventure",
        "image" : Adventure
    },
    {
        "type" : "Dirt Bikes",
        "image" : DirtBike
    }
]

const Type = () => {
    
  return (
    <div className='grid place-items-center justify-center mt-36'>
            <div className='tablet:max-w-[960px] uppermid:max-w[1200px] desktop:max-w-[1190px] w-full h-[50px] mb-32'>
                <div className='border-r h-full w-1/2 border-main-yellow' />
            </div>
            <p className='text-sm text-main-yellow tracking-[0.35rem]'>CATEGORIES</p>
            <p className='text-white text-4xl font-bold my-3'>Bike <span className='text-main-yellow'>Types</span></p>
            
            <div className='relative bg-cover bg-center mt-8 min-[992px]:w-[960px] min-[1200px]:w-[1200px]  min-[500px]:w-[480px] min-[700px]:w-[680px] min-[900px]:w-[890px] min-[200px]:w-[180px] min-[300px]:w-[280px] min-[400px]:w-[380px]'>
                <div className='relative grid place-items-center justify-start grid-cols-4 gap-6 overflow-x-auto no-scrollbar rounded-3xl'>
                    {data.map((item) => (
                        <Link key={item.type} style={{backgroundImage : `url(${item.image})`}} className='w-[280px] h-[300px] bg-cover bg-center rounded-3xl min-[200px]:w-[180px] min-[300px]:w-[280px] min-[400px]:w-[380px] cursor-pointer scale-95 hover:scale-100 transition-all duration-300' to="/bikes"> 
                            <div className='text-2xl font-extrabold text-white m-5 tracking-wider'>{item.type}</div>
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

export default Type
