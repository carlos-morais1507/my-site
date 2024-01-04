"use client"

import React from 'react'
import PageTransition from '../transition'
import Header from '../components/Header'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaWhatsapp   } from "react-icons/fa";

const Contact = () => {
  return (
    <PageTransition>
      <Header />
      <div className='w-screen min-h-screen flex items-center justify-center gap-4'>
        <div className='w-1/3 p-4 border-text border-2 rounded-2xl'>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQFrQPtsI2EkrA/profile-displayphoto-shrink_800_800/0/1698074081303?e=1709769600&v=beta&t=nSQvEv6pysrDTuyT5xQFk4iX7BufuSstJFvNGem0jDA"
            alt="LinkedIn Photo"
            className='rounded-2xlc object-cover'
          />
          <h3 className='mt-4 mb-2'>Get in touch</h3>
          <div id='contact-items' className='flex gap-2 transition-all'>
            <Link id='contact-item' href={"https://www.linkedin.com/in/cmorais1507/"} target='_blank' className='text-3xl hover:text-accent transition-all green_cursor'><FaLinkedin /></Link>
            <Link id='contact-item' href={"https://github.com/carlos-morais1507"} target='_blank' className='text-3xl hover:text-accent transition-all green_cursor'><FaGithub /></Link>
            <Link id='contact-item' href={"https://wa.me/5521978928869"} target='_blank' className='text-3xl hover:text-accent transition-all green_cursor'><FaWhatsapp /></Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Contact