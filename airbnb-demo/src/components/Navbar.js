import React from 'react'
export default function Navbar() {
  return (
      <nav className='h-[70px] p-5 shadow-md fixed w-full bg-inherit rounded-t-[5px]'>
          <img src={require('../images/airbnb.png')} alt="airbnb logo" className='max-w-[100px]'/>
    </nav>
  )
}
