import React, { useEffect, useState } from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

    const [visible,setVisible] = useState(false);
    const [drop,setDrop] = useState(false)

    const navRef = React.useRef()
    navRef.current = visible

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 150
            if(show){
                setVisible(true)
            }else{
                setVisible(false)
            }
        }
        document.addEventListener('scroll',handleScroll)
        return () =>{
            document.removeEventListener('scroll',handleScroll)
        }
    },[])

    const handleDrop = () => {
        setDrop(!drop)
    }

    const handleVisibility = () => {
        setDrop(false)
    }

  return (
    <nav className={`w-full h-[100px] grid place-items-center text-white z-50 ${visible ? 'fixed' : 'relative'} ${visible ? 'bg-light' : 'bg-inherit'} `}> 
       <div className='relative flex px-5 items-center w-full tablet:max-w-[960px] uppermid:max-w-[1200px] desktop:max-w-[1200px] '>
            <div>
                <Link to="/" onClick={handleVisibility} className='text-white text-3xl font-extrabold tracking-wide'><span className='text-main-yellow'>W</span>HEELS</Link>
            </div>
            <div id='my-navbar' className={`w-full max-[992px]:absolute max-[992px]:left-0 max-[992px]:top-16 ${drop ? 'visible' : 'collapse'} ${drop ? 'bg-light' : 'bg-inherit'} tablet:bg-inherit tablet:visible`}>
                    <div className='relative flex float-right gap-10 items-center max-[992px]:grid max-[992px]:float-left max-[992px]:pl-5 max-[992px]:py-2 '>
                        <Link to="/" onClick={handleVisibility} className='hover:text-main-yellow cursor:pointer tracking-wide'>Home</Link>
                        <Link to="/bikes" onClick={handleVisibility} className='hover:text-main-yellow cursor:pointer tracking-wide'>Bikes</Link>
                        <Link to="/services" onClick={handleVisibility} className='hover:text-main-yellow cursor:pointer tracking-wide'>Services</Link>
                        <Link to="/about" onClick={handleVisibility} className='hover:text-main-yellow cursor:pointer tracking-wide'>About</Link>
                        <Link to="/contact" onClick={handleVisibility} className='hover:text-main-yellow cursor:pointer tracking-wide'>Contact</Link>
                        <div className='flex items-center max-[992px]:absolute max-[992px]:collapse '>
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
            <div className='absolute right-0 text-3xl px-5 min-[993px]:collapse'>
                <IoMenu className='hover:text-main-yellow cursor-pointer ' onClick={handleDrop} />
            </div>
       </div>
    </nav>
  )
}

export default Navbar
