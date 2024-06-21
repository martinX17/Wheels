import React from 'react'
import ServiceListItem from './ServiceListItem'

const data = ["Motorcycle Inspection", "Tyre and Brakes" , "Finance and Insurance" , "Oil Change" , "Complete Service"];

const ServiceList = () => {
  return (
    <div className='w-full px-5 grid place-items-center mobile:max-w-[550px] lowermid:max-w-[750px] tablet:max-w-[960px] uppermid:max-w-[1200px] desktop:max-w-[1200px] mb-28'>
      <div className='w-full grid tablet:flex tablet:gap-5 gap-5'>
        <div className='w-full tablet:w-6/12'>
            <div className='w-full relative bg-light rounded-b-3xl'>
                <div className='w-full absolute -top-[100px] h-[100px] bg-main-yellow rounded-t-3xl p-2 grid place-items-center'>
                    <p className='text-2xl font-bold text-black'>All Services</p>
                </div>
                <div className='p-7 grid gap-4'>
                    {data.map((item) => (
                        <ServiceListItem key={item} text={item} diff="Complete Service" />
                    ))}
                </div>
            </div>
        </div>
        <div className='w-full px-5 text-md tablet:mt-24'>
            <p>Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion consesua the risus consequation.</p>
            <p className='mt-5 text-lg text-white font-bold'>Why are motorcycle services important?</p>
            <p>A full motorcycle service will ensure any mechanical or electrical problems are ironed out ahead of your MOT and of course before they affect the safe operation of your motorbike. Regularly servicing your motorcycle will not only prolong its life; Your machine may also be more efficient and more pleasant to ride when all its components are in optimum condition.</p>
            <p className='mt-5 text-lg text-white font-bold'>What does a motorcycle service include?</p>
            <p>What constitutes a full service when it comes to motorcycle servicing can vary a little from garage to garage, but in general a full motorcycle service should pinpoint and address any issues that may affect the safe operation of your machine.</p>
            <p className='mt-5 text-lg text-white font-bold'>How long does it take to service a bike?</p>
            <p>A motorbike service can take anywhere between 45 minutes to a day, depending on the issues discovered during the service. Generally, you would be looking at an average of around 2 hours for a motorbike service. Remember to factor in that the point at which the garage will start work on your motorbike will depend on how many other jobs that they have booked in for that day. It’s best to find out when the garage think that your motorbike may be ready by.</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceList
