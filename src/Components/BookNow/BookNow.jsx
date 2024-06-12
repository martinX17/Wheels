import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BuyNow from '../../assets/buynow.jpg'

const bikeType = ["Choose Bike Type","Sports","Cruises","Adventure","Dirt Bike"]
const BikeCompany = ["Choose Bike Company" , "BMW" , "Triumph" , "Suzuki" , "Ducati" , "Yamaha" , "Kawasaki" , "Honda" ]
const BikeModel = {
    "Choose Bike Type" : {
        "Choose Bike Company" : ["Choose Type and Company"],
        "BMW" : ["Choose Type"],
        "Suzuki" : ["Choose Type"],
        "Ducati" : ["Choose Type"],
        "Yamaha" : ["Choose Type"],
        "Kawasaki" : ["Choose Type"],
        "Honda" : ["Choose Type"],
        "Triumph" : ["Choose Type"],
    },
    "Sports" : {
        "Choose Bike Company" : ["Choose Company"],
        "BMW" : ["Choose Model","S 1000 RR","R 1250 RS","M 1000 RR","M 1000 R"],
        "Triumph" : ["Choose Model","Daytona 675R","Spped Triple","Speed Triple 1200 RS"],
        "Suzuki" : ["Choose Model","Hayabusa"],
        "Ducati" : ["Choose Model","Panigale V4","Panigale V2","SuperSport 950","StreetFighter V2","Monster"],
        "Yamaha" : ["Choose Model","YZF-R1M","YZF-R1","YZF-R7","YZF-R6"],
        "Kawasaki" : ["Choose Model","Ninja ZX-10R","Ninja ZX-6R","Ninja 650","Ninja 500"],
        "Honda" : ["Choose Model","CBR1000RR-R Fireblade SP","CBR1000RR","CBR600RR","CBR650R"]
    },
    "Cruises" : {
        "Choose Bike Company" : ["Choose Company"],
        "BMW" : ["Choose Model","R 18","R 18 100 Years","R 18 Classic","R 18 B"],
        "Triumph" : ["Choose Model","Thruxton R","Rocket 3","Speedmaster","Trident 660","Speed Twin","Street Twin"],
        "Suzuki" : ["Choose Model","Katana"],
        "Ducati" : ["Choose Model","Diavel V4","Scrambler Icon","Scrambler Full Throttle","Scrambler Nightshift","Scrambler 1100"],
        "Yamaha" : ["Not Available"],
        "Kawasaki" : ["Choose Model","Eliminator 500","Eliminator 500 SE","Vulcan S"],
        "Honda" : ["Choose Model","600 RR"]
    },
    "Adventure" : {
        "Choose Bike Company" : ["Choose Company"],
        "BMW" : ["Choose Model","G 310 GS","R 1300 GS","F 900 GS","R 1250 GS Adventure","F 900 XR"],
        "Triumph" : ["Choose Model","Tiger 1200","Tiger 900"],
        "Suzuki" : ["Choose Model","V-Strom 800DE"],
        "Ducati" : ["Choose Model","Multistrade V2","Multistrade V4","Hypermotard 950"],
        "Yamaha" : ["Not Available"],
        "Kawasaki" : ["Choose Model","Versys 1000 SE","Versys 1000 S","Versys 1000","Versys 650"],
        "Honda" : ["Choose Model","Fury","Shadow Phantom","Shadow Aero"]
    },
    "Dirt Bike" : {
        "Choose Bike Company" : ["Choose Company"],
        "BMW" : ["Not Available"],
        "Triumph" : ["Choose Model","TF 250 X"],
        "Suzuki" : ["Not Available"],
        "Ducati" : ["Choose Model","Desert X"],
        "Yamaha" : ["Choose Model","YZF 450F","YZF 250F"],
        "Kawasaki" : ["Choose Model","KX450","KX250","KX112"],
        "Honda" : ["Choose Model","CRF 450RX","CRF 250RX"]
    }
}

const BookNow = () => {
    const [date, setDate] = useState(null);
    const [selectType,setSelectType] = useState("Choose Bike Type");
    const [company,setCompany] = useState("Choose Bike Company")

    const handleType = (e) => {
        setSelectType(e.target.value)
    }

    const handleCompany = (e) =>{
        setCompany(e.target.value)
    }

  return (
    <div className='mt-36 h-[650px] lowermid:h-[450px] tablet:h-[350px] flex items-center justify-center flex-col bg-cover bg-center' style={{backgroundImage : `url(${BuyNow})`}}>
        <div className='bg-dark  grid place-items-center justify-center rounded-3xl h-[500px] w-[200px] lowest:w-[280px]   lowermid:grid-cols-2 lowermid:h-[300px] lowermid:w-[500px] tablet:grid-cols-5 tablet:w-[955px] tablet:h-[80px] tablet:rounded-full mx-10 tablet:max-w-[960px] uppermid:max-w[1200px] desktop:max-w-[1200px]'>
            <div className='flex items-center'>
                <div className='relative focus:border-none'>
                    <select className='p-2 bg-dark outline-none border-none w-[200px] tablet:w-[150px]' onChange={handleType}>
                        {bikeType.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='relative focus:border-none'>
                    <select className='p-2 bg-dark outline-none border-none w-[200px] tablet:w-[150px]' onChange={handleCompany}>
                        {BikeCompany.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='relative focus:border-none'>
                    <select className='p-2 bg-dark outline-none border-none w-[200px] tablet:w-[150px]'>
                        {BikeModel[selectType][company].map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='relative flex items-center justify-center w-[200px] tablet:w-[150px]'>
                <DatePicker selected={date} onChange={(date) => setDate(date)} placeholderText={"Pick Up Date"} className='bg-dark outline-none' />
                <div className="absolute end-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </div>
            </div>
            <div className='lowermid:col-span-2 tablet:col-span-1'>
                <button className='mr-3 rounded-full w-[170px] h-[50px] bg-main-yellow text-black hover:bg-white'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default BookNow
