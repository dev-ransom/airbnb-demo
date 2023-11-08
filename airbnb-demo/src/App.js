import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
export default function App() {
  return (
    <div className='w-[550px] rounded-[5px] text-white drop-shadow-md bg-slate-50 font-poppins h-[853px]'>
      <Navbar />
      <HeroSection />
    </div>
  )
}
