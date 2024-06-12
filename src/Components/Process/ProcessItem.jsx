import React from 'react'

const ProcessItem = ({title,des,num}) => {
  return (
    <div className='relative p-2 min-h-[100px] min-w-[100px] w-full'>
        <div className='bg-light rounded-3xl flex gap-3 items-center p-5 lowermid:h-[210px]'>
            <div className='h-[70px] w-[70px] flex items-center justify-center rounded-3xl'>
                <div className='border bg-dark border-white text-main-yellow h-[40px] w-[40px] rounded-full flex items-center justify-center'>{num}</div>
            </div>
            <div>
                <p className='text-white text-xl font-bold mb-3'>{title}</p>
                <p>{des}</p>
            </div>
        </div>
    </div>
  )
}

export default ProcessItem
