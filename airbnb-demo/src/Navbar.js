import React from 'react'
import Logo from './images/airbnb.png'
export default function Navbar() {
  return (
      <div className='h-[70px] p-5 shadow-md fixed w-full bg-inherit rounded-[5px]'>
          <img src={Logo} alt="airbnb logo" />
    </div>
  )
}
