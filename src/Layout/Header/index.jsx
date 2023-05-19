import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#2C2C2C] flex justify-between border-l-4 border-[#00A1E4]'>
      <div className="px-2 flex gap-2 items-center">
        <img src="/assets/icons/ArrowRight.svg" className='h-5 w-5' alt="" />
        <input type="text" className='px-3 py-3 bg-[#1f1f1f] text-white placeholder:text-white focus:border focus:border-[#1f1f1f] focus-visible:outline-none focus-visible:w-72 focus-visible:border-[#1f1f1f]' placeholder='Search' />
      </div>
      <div className="flex gap-3 items-center">
        <img src="/assets/icons/settings2.svg" className='h-5 w-5 cursor-pointer' alt="" />
        <img src="/assets/icons/notification.svg" className='h-5 w-5 cursor-pointer' alt="" />
        <img src="/assets/icons/message.svg" className='h-5 w-5 cursor-pointer' alt="" />
        <button className='py-1 px-3 bg-[#00A1E4] text-white rounded'>Logout</button>
        <div className="px-3 flex gap-2 border-l-[1.5px] border-gray-400">
          <div className="overflow-hidden flex items-center cursor-pointer">
            <img src="/assets/person.jpg" className='h-8 w-8 rounded-full' alt="" />
          </div>
          <div className="flex flex-col cursor-pointer">
            <p className='text-white font-semibold'>Sabtain</p>
            <p className='text-gray-500 font-medium'>info@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header