"use client"

import React from 'react'
import NextNProgress from "nextjs-progressbar"

const loading = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col items-center justify-center gap-16'>
      <div className='w-16 aspect-square border-t-4 border-l-4 border-accent bg-text rounded-full animate-spin'/>
    </div>
  )
}

export default loading