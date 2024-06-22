import React from 'react'
import TestimonialItem from './TestimonialItem'
import P1 from '../../assets/P1.jpg'
import P2 from '../../assets/P2.jpg'
import P3 from '../../assets/P3.jpg'


const data = [
    {
        "name" : "Emily Martin",
        "image" : P2
    },
    {
        "name" : "Dan Martin",
        "image" : P1
    },
    {
        "name" : "Olivia Brown",
        "image" : P3
    }
]

const Testimonials = () => {
  return (
    <div className='grid place-items-center px-5 justify-center gap-16 mt-32 mb-32 w-full lowest:max-w-[340px] mobile:max-w-[590px] lowermid:max-w-[760px] tablet:max-w-[960px] uppermid:max-w-[1200px] desktop:max-w-[1200px]'>
        <div className='grid place-items-center gap-1 w-full'>
            <p className='text-xs text-main-yellow tracking-[0.35rem]'>TESTIMONIALS</p>
            <p className='text-4xl font-extrabold text-white'>What Clients Say</p>
        </div>
        <div className='grid w-full place-items-center gap-7 justify-start grid-cols-3 overflow-x-auto px-2 no-scrollbar'>
            {data.map((item) => (
                <TestimonialItem name={item.name} image={item.image} />
            ))}
        </div>
    </div>
  )
}

export default Testimonials
