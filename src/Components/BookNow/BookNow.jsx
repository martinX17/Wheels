import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const bikeType = ["Choose Bike Type","Sports","Cruises","Adventure","Dirt Bike"]
const BikeCompany = ["Choose Bike Company" , "BMW" , "Triumph" , "Suzuki" , "Ducati" , "Yamaha" , "Kawasaki" , "Honda" ]
const BikeMdel = {
    "BMW" : [

    ],
    "Triumph" : [

    ],
    "Suzuki" : [

    ],
    "Ducati" : [

    ],
    "Yamaha" : [

    ],
    "Kawasaki": [

    ],
    "Honda" : [
        
    ]
}

const BookNow = () => {
    const [date, setDate] = useState(null);
  return (
    <div className='bg-light mt-12 h-[250px] grid place-items-center'>
        <div className='bg-dark flex items-center rounded-full justify-center  mx-10 tablet:max-w-[960px] uppermid:max-w[1200px] desktop:max-w-[1200px]'>
            <div className='flex items-center m-4 ml-6 p-1 pr-4 border-r border-light'>
                <div className='relative mr-5 focus:border-none'>
                    <select className='p-2 bg-dark outline-none border-none'>
                        {bikeType.map((item) => (
                            <option value={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='flex items-center m-4 p-1 pr-4 border-r border-light'>
                <div className='relative mr-5 focus:border-none'>
                    <select className='p-2 bg-dark outline-none border-none'>
                        {BikeCompany.map((item) => (
                            <option value={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='relative flex items-center m-4 p-1 pr-4 border-r border-light'>
                <DatePicker selected={date} onChange={(date) => setDate(date)} placeholderText={"Pick Up Date"} className='bg-dark outline-none' />
                <div class="absolute inset-y-0 end-10 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookNow
