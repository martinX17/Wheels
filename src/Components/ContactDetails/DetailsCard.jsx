import React from 'react'

const DetailsCard = ({icon,title,subtitle}) => {
  return (
    <div className='group w-full bg-light grid place-item-start h-[220px] rounded-3xl p-7 hover:-translate-y-4 hover:duration-300 hover:bg-main-yellow relative overflow-hidden'>
      <div className='w-full flex flex-col items-start my-auto gap-3'>
        <div className='text-5xl text-main-yellow group-hover:text-black'>
            {icon}
        </div>
        <div className='px-[4px]'>
            <p className='text-2xl text-white font-bold tracking-wide group-hover:text-black'>{title}</p>
            <p className='text-sm pt-2 pl-[1px] group-hover:text-black tracking-wide'>{subtitle}</p>
        </div>
      </div>
      <div className='absolute -bottom-10 -right-6 text-lighter text-[150px] group-hover:text-detail'>
            {icon}
      </div>
    </div>
  )
}

export default DetailsCard
