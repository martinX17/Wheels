import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const ServiceListItem = ({text,diff}) => {
  return (
    <div className={`group px-4 py-3 border rounded-2xl border-lighter flex items-center hover:bg-main-yellow hover:text-black ${diff == text ? "bg-main-yellow text-black" :"text-white"}`}>
        <MdArrowOutward className={`group-hover:text-black ${diff == text ? "text-black" :"text-main-yellow"} `} />
        <p className={`ml-2 tracking-wide group-hover:font-light ${diff == text ? "font-light" :"font-bold"} `}>{text}</p>
    </div>
  )
}

export default ServiceListItem
