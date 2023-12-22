"use client"

import React from 'react'
import PageTransition from '../transition'
import Header from '../components/Header'

const About = () => {
  return (
    <PageTransition>
      <Header />
      <div className='w-screen min-h-screen flex flex-col p-16 gap-4'>
        <h1 className='mt-16'>About me</h1>
        <p>Hi! My name is Carlos Alberto Morais Junior. I'm a brazillian developer</p>
      </div>
    </PageTransition>
  )
}

export default About
