import React, { useState } from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

const type = ["Sports","Cruiser","Adventure","Dirt Bikes"]
const company = ["BMW","Triumph","Suzuki","Ducati","Honda","Kawasaki","Yamaha"]

const BikeListing = () => {
    const [selectedtype,setSelectedType] = useState("");
    const [selectedCompany,setSelectedCompany] = useState("");

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    }

    const handleCompanyChange = (e) => {
        setSelectedCompany(e.target.value)
    }
    
  return (
    <div className='w-full px-5 grid place-items-center tablet:max-w-[960px] uppermid:max-w[1200px] desktop:max-w-[1200px]'>
      <div className='w-full grid place-items-center'>
        <div className='w-full'>
            <div className='w-full relative'>
                <div className='w-full absolute -top-[110px] h-[110px] bg-main-yellow rounded-t-3xl p-2 grid place-items-center'>
                    <div className='w-full px-5'>
                        <form className='relative'>
                            <input placeholder='Search . . .' className='w-full h-[50px] rounded-full px-5 bg-dark text-sm' />
                            <button type='submit' className='absolute right-2 top-2 bg-main-yellow p-2 rounded-full'><HiOutlineSearch className='text-2xl text-dark' /></button>
                        </form>
                    </div>
                </div>
                <div className='bg-light w-full rounded-b-3xl p-2'>
                    <div className='w-full px-6 my-8'>
                        <div className='w-full grid gap-4'>
                            <p className='text-white text-xl font-bold tracking-wide'>Bike Type</p>
                            <div className='grid gap-2'>
                                    {type.map((item) => (
                                        <label htmlFor={item}>
                                        <input type='radio' name='bikeType' className='peer sr-only' id={item} value={item} onChange={handleTypeChange} />
                                        <div className='px-5 rounded-full peer-checked:text-main-yellow cursor-pointer peer-checked:font-bold peer-checked:text-lg h-[30px]'>
                                            <p className='flex items-center tracking-wide'><span className={`${selectedtype == item ? "visible":"invisible"} `}><IoIosArrowForward /></span>{item}</p>
                                        </div>
                                    </label>
                                    ))}
                            </div>
                        </div>
                        <div className='w-full mt-8 grid gap-4'>
                            <p className='text-white text-xl font-bold tracking-wide'>Select Company</p>
                            <div className='grid gap-2'>
                                    {company.map((item) => (
                                        <label htmlFor={item}>
                                        <input type='radio' name='bikeCompany' className='peer sr-only' id={item} value={item} onChange={handleCompanyChange} />
                                        <div className='px-5 rounded-full peer-checked:text-main-yellow cursor-pointer peer-checked:font-bold peer-checked:text-lg h-[30px]'>
                                            <p className='flex items-center tracking-wide'><span className={`${selectedCompany == item ? "visible":"invisible"} `}><IoIosArrowForward /></span>{item}</p>
                                        </div>
                                    </label>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>Right 
            hdbvb
        </div>
      </div>
    </div>
  )
}

export default BikeListing
