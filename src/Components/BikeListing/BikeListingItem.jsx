import React from 'react'

const BikeListingItem = ({item}) => {
  return (
    <div className='mt-1 w-full grid place-items-center rounded-3xl overflow-hidden bg-light'>
      <div className='object-cover w-full overflow-hidden'>
        <div className='w-full h-[255px] bg-cover bg-center hover:scale-125 duration-300 lowermid:h-[350px] tablet:h-[200px]' style={{backgroundImage : `url(${item.image})`}} />
      </div>
      <div className='px-5 py-5 w-full grid place-tems-center gap-2'>
        <p className='text-white text-2xl font-extrabold tracking-wide'>{item.company} {item.model}</p>
        <p className='px-2'>Year<span className='float-right'>{item.year}</span> </p>
        <p className='px-2'>KMS<span className='float-right'>{item.kms}</span></p>
        <p className='px-2'>Owners<span className='float-right'>{item.owners}</span></p>
        <p className='px-2'>State<span className='float-right'>{item.state}</span></p>
        <p className='px-2'>Insurance<span className='float-right'>{item.insurance}</span></p>
      </div>
      <div className='px-7 pb-5 w-full items-center'>
        <div className='float-left py-2 text-main-yellow text-xl font-extrabold tracking-wider'>₹ {item.price}</div>
        <div className='float-right '>
            <button className='bg-main-yellow px-7 py-2 rounded-3xl text-dark tracking-wider'>Details</button>
        </div>
      </div>
    </div>
  )
}

export default BikeListingItem