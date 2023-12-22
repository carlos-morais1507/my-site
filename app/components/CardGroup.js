"use client"
import Link from 'next/link'
import React from 'react'
import { projectsList } from '@/store/projectList' 

const CardGroup = () => {
  const date = new Date()
  const last = projectsList.length - 1
  
  function setActicityName() {
    if (date.getHours() <= 8) {
      return "Sleeping"
    } else if(date.getHours() <= 21) {
      return "Studying"
    } else {
      return "Playing WoW"
    }
  }

  function setActicityUrl() {
    if (date.getHours() <= 8) {
      return "sleeping"
    } else if(date.getHours() <= 21) {
      return "studying"
    } else {
      return "wow"
    }
  }

  return (
    <div className='flex items-end justify-center gap-2 h-[50vh] w-[80vw] md:h-[90vh] md:w-[60vw] -translate-y-10 md:-translate-y-0'>
      <Link href={`/projects/${last}`} className="relative interactable w-[50%] md:w-[40%] h-[70%] flex flex-col justify-between">
          <h3 className='drop-shadow-md relative z-20 translate-y-10 md:translate-y-5 translate-x-3'>Last Project</h3>
          <img
          src={`/assets/images/mobile_snapshot_${last}.png`}
          alt={"oi"}
          className='relative rounded-[28px] object-cover object-center w-full h-[85%] md:h-[93%] brightness-50 hover:brightness-[0.40] transition-all'
          />
          <p className='drop-shadow-md w-full text-end -translate-y-8 -translate-x-8'>{projectsList[last].name}</p>
      </Link>
      <div className='w-[50%] md:w-[60%] h-full flex flex-col'>
        <div className="h-1/2 w-full bg-[url('/assets/images/hero_me.png')] rounded-[28px] bg-cover bg-center" />
        <div className={`flex flex-col h-1/2 -translate-y-4`}>
          <h3 className='drop-shadow-md translate-y-10 md:translate-y-5 translate-x-3'>Now probably...</h3>
          <img
            src={`/assets/images/${setActicityUrl()}.png`}
            alt={`Activity Image`}
            className="rounded-[28px] w-full h-[90%] object-cover object-center"
          />
          <p className='drop-shadow-md w-full text-end -translate-y-8 -translate-x-8'>{setActicityName()}</p>
        </div>
      </div>
    </div>
  )
}

export default CardGroup