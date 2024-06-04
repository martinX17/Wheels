import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='fixed w-full h-[100px] grid place-items-center text-white z-50'> 
       <div className='flex px-5 items-center w-full tablet:max-w-[960px] uppermid:max-w[1200px] desktop:max-w-[1200px] '>
            <div>
                <p className='text-white text-3xl font-bold'><span className='text-main-yellow'>W</span>HEELS</p>
            </div>
            <div className='w-full'>
                    <div className='flex float-right gap-10 items-center'>
                        <Link to="/" className='hover:text-main-yellow cursor:pointer'>Home</Link>
                        <Link to="/" className='hover:text-main-yellow cursor:pointer'>Bikes</Link>
                        <Link to="/" className='hover:text-main-yellow cursor:pointer'>Services</Link>
                        <Link to="/about" className='hover:text-main-yellow cursor:pointer'>About</Link>
                        <Link to="/contact" className='hover:text-main-yellow cursor:pointer'>Contact</Link>
                        <div className='flex items-center'>
                            <div className='text-2xl border border-main-yellow p-4 rounded-full'>
                                <FiPhoneCall />
                            </div>
                            <div className='grid ml-3'>
                                <p className='text-sm'>Need help?</p>
                                <p className='text-lg'>888 364 7777</p>
                            </div>
                        </div>
                    </div>
            </div>
       </div>
    </nav>
  )
}

export default Navbar
