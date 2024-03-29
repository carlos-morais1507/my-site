"use client"

import React from 'react'
import PageTransition from '../transition'
import Header from '../components/Header'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaWhatsapp   } from "react-icons/fa";
import EmailForm from '../components/EmailForm'

const Contact = () => {
  return (
    <PageTransition>
      <Header />
      <div className='w-screen min-h-screen flex flex-col md:flex-row items-center justify-center gap-4 my-6'>
        <div className='w-2/3 md:w-1/3 p-4 border-text border-2 rounded-2xl'>
          <img
            src="/assets/images/hero_me.png"
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
        <EmailForm />
      </div>
    </PageTransition>
  )
}

export default Contact