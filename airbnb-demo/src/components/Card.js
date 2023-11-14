import React from 'react'

export default function Card(props) {
  let badgeText
  if (props.card.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.card.location === 'Online') {
    badgeText = 'ONLINE'
  }

  return (
    <div className=" w-[176px] relative text-left">
      {badgeText &&<div className=" px-[6px] pt-[4px] bg-white text-black absolute left-[6px] top-[6px] text-[12px] rounded-[2px] uppercase font-[600] cursor-pointer">
        {badgeText}
      </div>}
      <img
        src={props.card.img}
        alt=""
        className=" mb-[9px] rounded-[10px] w-[100%] h-[235px]"
      />
      <div className="flex items-center mb-[2px]">
        <img src={props.card.starImg} alt="" />
        <span className="text-[#222222] text-[12px] font-[300] leading-[14px] pl-1">
          {props.card.stats.rating}
        </span>
        <span className="text-[#918E9B] text-[12px] font-[300] pl-1 pr-1">
          ({props.card.stats.reviewcount})
        </span>
        <img src={props.ellipses} alt="" className="w-[2px] h-[2px] " />
        <span className="text-[#36246f] text-[12px] font-[300] pl-1 ">
          {props.card.location}
        </span>
      </div>
      <p className="text-[12px] mt-0 w-[175px]">{props.title}</p>
      <p className="text-[12px] pb-[30px]">
        <b>From ${props.card.price}</b> / person
      </p>
    </div>
  )
}
