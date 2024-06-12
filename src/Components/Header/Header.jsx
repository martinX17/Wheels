import React, { useState } from 'react'
import S1000RR from '../../assets/s1000rr.jpg'
import Daytona from '../../assets/daytona.jpg'
import Hayabusa from '../../assets/hayabusa.jpg'
import { MdArrowOutward } from "react-icons/md";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

const data = [
    {
        "image" : S1000RR,
        "company" : "BMW",
        "model" : "S1000RR" 
    },
    {
        "image" : Daytona,
        "company" : "Triumph",
        "model" : "Daytona 675R"
    },
    {
        "image" :Hayabusa,
        "company":"Suzuki",
        "model":"Hayabusa GSX1300R"
    }
]

const Header = () => {

    const [index,setIndex] = useState(0);


    const handleRight = () =>{
        if(index == 2){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }

    const handleLeft = () =>{
        if(index == 0){
            setIndex(2);
        }else{
            setIndex(index-1);
        }
    }

  return (
    <div className='relative flex items-center justify-center text-white relative h-screen w-screen bg-cover bg-center z-10 transition-all transform duration-500' style={{backgroundImage:`url(${data[index].image})`}}>
        <div className='tablet:max-w-[960px] uppermid:max-w[1200px] desktop:max-w-[1190px] w-full px-10'>
            <div className='grid w-full'>
                <p className='text-main-yellow tracking-[0.35rem]'>* PREMIUM</p>
                <p className='text-8xl font-extrabold'>{data[index].company}</p>
                <p className='text-lg font-bold mt-2'>{data[index].model}</p>
                <div className='flex mt-4 max-[450px]:grid '>
                    <button className='flex  items-center justify-center mr-2 border px-12 py-3 border-main-yellow text-black bg-main-yellow rounded-full hover:bg-white hover:border-white max-[450px]:px-2 max-[450px]:w-[200px] '>View Details <MdArrowOutward className='ml-2'/></button>
                    <button className='flex items-center justify-center ml-2 border px-10 py-4 rounded-full hover:bg-main-yellow hover:text-black hover:border-main-yellow max-[450px]:px-2 max-[450px]:w-[200px] max-[450px]:ml-0 max-[450px]:mt-3 '>Buy Now <MdArrowOutward className='ml-2'/></button>
                </div> 
            </div>
        </div>
        <div className='absolute bottom-5 flex gap-5 text-2xl '>
            <button className=' p-4 hover:text-main-yellow ' onClick={handleLeft}>
                <IoArrowBackOutline />
            </button>
            <button className=' p-4 hover:text-main-yellow' onClick={handleRight}>
                <IoArrowForwardOutline />
            </button>
        </div>
    </div>
  )
}

export default Header
