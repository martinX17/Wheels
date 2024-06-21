import React from 'react'

const GetInTouch = () => {
  return (
    <div className='mb-44 w-full grid place-items-center'>
      <div className='w-full grid place-items-center grid-cols-1 tablet:grid-cols-2 gap-10 contact:max-w-[560px] lowermid:max-w-[750px] tablet:max-w-[970px] uppermid:max-w-[1190px] px-5'>
        <div className='w-full grid place-items-center gap-10'>
            <div>
                <p className='text-2xl font-bold text-white tracking-wide'>Get in Touch</p>
            </div>
            <div className='w-full'>
                <form className='w-full grid place-items-start grid-cols-1 gap-4 lowermid:grid-cols-2'>
                    <input type="text" required className='w-full rounded-full bg-light border-none text-sm flex items-center h-[60px] pl-6 tracking-wide  focus:ring-0' placeholder='Your Name *' />
                    <input type="email" required className='w-full rounded-full bg-light border-none text-sm flex items-center h-[60px] pl-6 tracking-wide  focus:ring-0' placeholder='Your Email *' />
                    <input type="text" required className='w-full rounded-full bg-light border-none text-sm flex items-center h-[60px] pl-6 tracking-wide  focus:ring-0' placeholder='Your Number *' />
                    <input type="text" required className='w-full rounded-full bg-light border-none text-sm flex items-center h-[60px] pl-6 tracking-wide  focus:ring-0' placeholder='Subject *' />
                    <textarea type="text" required className='w-full rounded-3xl bg-light border-none text-sm flex items-center h-[60px] pl-6 py-5 tracking-wide  focus:ring-0 lowermid:col-start-1 lowermid:col-end-3' placeholder='Message *'  />
                    <button type='submit' className='bg-main-yellow py-4 font-light tracking-wide px-7 ml-1 mt-2 rounded-full text-black text-sm'>Send Message</button>
                </form>
            </div>
        </div>
        <div className='w-full grid place-items-center gap-10 tablet:pl-12'>
            <div><p className='text-2xl font-bold text-white tracking-wide'>Location</p></div>
            <div className='rounded-3xl overflow-hidden' style={{width: `100%`}}><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Kengeri,%20Bangalore%20-%20560060+(Wheels)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>
        </div> 
      </div>
    </div>
  )
}

export default GetInTouch
