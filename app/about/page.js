"use client"

import React from 'react'
import PageTransition from '../transition'
import Header from '../components/Header'

const About = () => {
  return (
    <PageTransition>
      <Header />
      <div className='w-screen min-h-screen flex flex-col items-center justify-center gap-4'>
        <h1>About</h1>
      </div>
    </PageTransition>
  )
}

export default About
