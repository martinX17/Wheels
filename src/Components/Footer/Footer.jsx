import React from 'react'
import BMW from '../../assets/bmw.svg'
import Triumph from '../../assets/triumph.png'
import Suzuki from '../../assets/suzuki.png'
import Ducati from '../../assets/ducati.png'
import Ktm from '../../assets/ktm.png'
import Honda from '../../assets/honda.png'
import Kawasaki from '../../assets/kawasaki.png'
import Yamaha from '../../assets/yamaha.png'
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";

const data = [BMW,Triumph,Suzuki,Ducati,Ktm,Honda,Kawasaki,Yamaha]

const Footer = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='w-full'>
        <div className='w-full px-3 grid place-items-center bg-light h-[130px]'>
            <div className='w-full px-3 tablet:max-w-[960px] uppermid:max-w[1200px] desktop:max-w-[1190px] flex items-center justify-start gap-[90px] overflow-x-auto no-scrollbar'>
                {data.map((item) => (
                    <img src={item} className='h-[80px]' />
                ))}
            </div>
        </div>
        <div className='mt-28 w-full grid place-items-center'>
            <div className='w-fit px-5 grid place-items-center justify-start mobile:w-[590px] lowermid:w-[760px] tablet:w-[960px] desktop:w-[1190px] mobile:h-[100px] mobile:flex items-center mobile:justify-center h-[400px] border border-light rounded-3xl'>
                <div className='px-1 flex items-center justify-satrt gap-3 w-full mobile:w-1/3 mobile:justify-center mobile:border-r border-light'>
                    <div className='p-4 rounded-full bg-main-yellow flex items-center justify-center'>
                        <FiPhoneCall className='text-2xl text-light' />
                    </div>
                    <div className=''>
                        <p className='font-bold text-white text-md'>Call us</p>
                        <p className=''>+91 888 364 7777</p>
                    </div>
                </div>
                <div className='px-1 flex items-center justify-start gap-3 w-full mobile:w-1/3 mobile:justify-center mobile:border-r border-light'>
                    <div className='p-4 rounded-full bg-main-yellow flex items-center justify-center'>
                        <IoMdMail className='text-2xl text-light' />
                    </div>
                    <div className=''>
                        <p className='font-bold text-white text-md'>Write to us</p>
                        <p className=''>info@wheels.com</p>
                    </div>
                </div>
                <div className='px-1 flex items-center justify-start gap-3 w-full mobile:w-1/3 mobile:justify-center'>
                    <div className='p-4 rounded-full bg-main-yellow flex items-center justify-center'>
                        <IoLocation className='text-2xl text-light' />
                    </div>
                    <div className=''>
                        <p className='font-bold text-white text-md'>Address</p>
                        <p className=''>Hudco, Vijayapura - 586101</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-32 mb-32 w-full grid place-items-center px-5'>
            <div className='w-full px-5 grid place-items-start gap-20 mobile:w-[590px] lowermid:w-[760px] tablet:w-[960px] desktop:w-[1190px] lowermid:flex lowermid:items-top lowermid:justify-center lowermid:gap-3'>
                <div className='lowermid:w-full'>
                    <p className='text-3xl font-extrabold text-white'><span className='text-main-yellow'>W</span>HEELS</p>
                    <p className='text-sm mt-4 mb-5'>Since its inception in 2014, Wheels has quickly emerged as India's most popular omnichannel automobile destination with many happy customers across the country.</p>
                    <div className='flex gap-3 '>
                        <div className='border p-4 rounded-full border-main-yellow flex items-center justify-center'><FaWhatsapp className='text-xl text-white' /></div>
                        <div className='border p-4 rounded-full border-main-yellow flex items-center justify-center'><FaFacebookF className='text-xl text-white' /></div><div className='border p-4 rounded-full border-main-yellow flex items-center justify-center'><FaYoutube className='text-xl text-white' /></div>
                    </div>
                </div>
                <div className='grid gap-3 lowermid:w-full place-items-center'>
                    <p className='text-2xl font-bold text-white'>Quick Links</p>
                    <ul className='list-disc px-5 marker:text-main-yellow marker:text-xl'>
                        <li className='hover:text-main-yellow'>
                            <Link to="/about">About</Link>
                        </li>
                        <li className='hover:text-main-yellow'>
                            <Link to="/bikes">Bikes</Link>
                        </li>
                        <li className='hover:text-main-yellow'>
                            <Link to="/services">Services</Link>
                        </li>
                        <li className='hover:text-main-yellow'>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='grid gap-4 lowermid:w-full'>
                    <p className='text-2xl text-white font-bold'>Subscribe</p>
                    <p>Want to be notified about our services. Just sign up and we'll send you a notification by email.</p>
                    <div className='relative'>
                        <form className='' onSubmit={handleSubmit}>
                            <input type='email' name="email" className='p-5 bg-dark border w-full h-[62px] border-main-yellow rounded-full' required placeholder='Email Address'/>
                            <button type='submit' className=' absolute top-2 rounded-full right-2 p-3 bg-main-yellow hover:bg-white'><MdArrowOutward className='text-3xl text-dark' /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
