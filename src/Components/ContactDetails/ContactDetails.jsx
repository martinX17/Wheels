import React from 'react'
import DetailsCard from './DetailsCard'
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { IoCall } from "react-icons/io5";

const data = [
    {
        "icon" : <MdEmail />,
        "title" : "Email us",
        "subtitle" : "info@wheels.com"
    },
    {
        "icon" : <IoLocationOutline />,
        "title" : "Our Address",
        "subtitle" : "Kengeri, Bangalore - 560060"
    },
    {
        "icon" :  <CiClock2 />,
        "title" : "Opening Hours",
        "subtitle" : "Mon-Sun: 8 AM - 7 PM"
    },
    {
        "icon" :  <IoCall/>,
        "title" : "Call us",
        "subtitle" : "+91 888 364 7777"
    }
]

const ContactDetails = () => {
  return (
    <div className='w-full grid place-items-center relative h-[105vh] lowermid:h-[56vh] tablet:h-[30vh]'>
        <div className='w-full grid place-items-center grid-cols-1 gap-10 px-5 absolute -top-[100px] lowermid:grid-cols-2 tablet:grid-cols-4 contact:max-w-[560px] lowermid:max-w-[750px] tablet:max-w-[970px] uppermid:max-w-[1190px]'>
            {data.map ((item) => (
                <DetailsCard icon={item.icon} title={item.title} subtitle={item.subtitle} />
            ))}
        </div>
    </div>
  )
}

export default ContactDetails
