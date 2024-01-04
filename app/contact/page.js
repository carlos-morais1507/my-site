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
      <div className='w-screen min-h-screen flex flex-col md:flex-row items-center justify-center gap-4 my-6'>
        <div className='w-2/3 md:w-1/3 p-4 border-text border-2 rounded-2xl'>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQFrQPtsI2EkrA/profile-displayphoto-shrink_800_800/0/1698074081303?e=1709769600&v=beta&t=nSQvEv6pysrDTuyT5xQFk4iX7BufuSstJFvNGem0jDA"
            alt="LinkedIn Photo"
            className='rounded-2xlc object-cover'
          />
          <h3 className='mt-4 mb-2'>Get in touch</h3>
          <div id='contact-items' className='flex gap-2 transition-all'>
            <Link id='contact-item' href={"https://www.linkedin.com/in/cmorais1507/"} target='_blank' className='md:text-3xl text-xl hover:text-accent transition-all green_cursor'><FaLinkedin /></Link>
            <Link id='contact-item' href={"https://github.com/carlos-morais1507"} target='_blank' className='md:text-3xl text-xl hover:text-accent transition-all green_cursor'><FaGithub /></Link>
            <Link id='contact-item' href={"https://wa.me/5521978928869"} target='_blank' className='md:text-3xl text-xl hover:text-accent transition-all green_cursor'><FaWhatsapp /></Link>
          </div>
        </div>
        <div className='w-2/3 md:w-2/4 p-4 border-text border-2 rounded-2xl'>
          <form action="">
            <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
              <div className='flex flex-col w-full'>
                <label htmlFor="name" className='pl-2 pb-1'>Your Name <span className='text-red'>*</span></label>
                <input id='name' type="text" className='bg-text bg-opacity-75 rounded-2xl  border-accent text-background p-2' required />
              </div>
              <div className='flex flex-col w-full'>
                <label htmlFor="email" className='pl-2 pb-1'>E-mail <span className='text-red'>*</span></label>
                <input id='email' type="email" className='bg-text bg-opacity-75 rounded-2xl  border-accent text-background p-2' required />
              </div>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="message" className='pl-2 pb-1'>Your message <span className='text-red'>*</span></label>
                <textarea id='message' type="text" className='bg-text bg-opacity-75 rounded-2xl  border-accent text-background p-2 h-56' required />
            </div>
            <input type="submit" value={"Send"} className='nav_btn btn_outline mt-4 green_cursor cursor-pointer' />
          </form>
        </div>
      </div>
    </PageTransition>
  )
}

export default Contact