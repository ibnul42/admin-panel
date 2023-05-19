import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between px-3 py-2 shadow-[5px_-3px_4px_rgba(0,0,0,0.25)]'>
      <div className="">
        <img src="/assets/icons/footer/logo.png" alt="logo" />
      </div>
      <div className="flex gap-5 items-center">
        <img src="/assets/icons/footer/messaging.svg" className='w-5 h-5 cursor-pointer' alt="logo" />
        <img src="/assets/icons/footer/email.svg" className='w-5 h-5 cursor-pointer' alt="logo" />
        <img src="/assets/icons/footer/phone.svg" className='w-5 h-5 cursor-pointer' alt="logo" />
      </div>
    </div>
  )
}

export default Footer