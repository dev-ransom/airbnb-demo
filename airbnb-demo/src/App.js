import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Card from './components/Card'
import cardData from './components/cardData'
export default function App() {
  const cardElement = cardData.map((card) => (
    <Card
      key={card.id}
      card={card}
    />
  ))
  return (
    <div className=" w-[570px] rounded-[5px] text-black drop-shadow-md bg-slate-50 font-poppins">
      <Navbar />
      <HeroSection />
      <section className='overflow-auto flex flex-[0 0 auto] flex-row gap-[15px] p-[15px]'>
        {cardElement}
      </section>
    </div>
  )
}

// img={card.img}
//       starImg={card.starImg}
//       rating={card.stats.rating}
//       reviewcount={card.stats.reviewcount}
//       ellipses={card.ellipses}
//       location={card.location}
//       title={card.title}
//       price={card.price}
//       openSpots={card.openSpots}