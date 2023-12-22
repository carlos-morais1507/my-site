"use client"

import React, { useState } from 'react'
import PageTransition from '../transition'
import Header from '../components/Header'

const About = () => {
  const [wow, setWow] = useState(false)

  return (
    <PageTransition>
      <Header />
      <div className={`w-screen min-h-screen flex flex-col p-16 gap-4 mt-5 ${wow ? "cursor-[url('/assets/cursor.cur'),_auto]" : ""}`}>
        <img src="/assets/images/hero_me.png" alt="Me!" className='w-screen h-96 object-cover' />
        <h1 className=''>About me</h1>
        <p>
          Hey there! I'm Carlos Alberto Morais Junior, a tech-loving developer from Brazil. I've got a real passion for all things technology and innovation. Right now, I'm working in HelpDesk support while studying development and information security.
        </p>
        <p>
          My coding journey began back in 2018, when I started diving into Python and creating my first projects. I fell head over heels for the idea of building something from scratch and solving problems along the way. Fast forward three years, and when it came time to choose my university course, I knew I had to pursue Information Systems. I figured it was the perfect opportunity to expand my skills and dive into the fascinating history of coding and computing.
        </p>
        <p>
          I'm currently in my second year at university, still completely smitten with all things tech. These days, I'm learning NextJs and how it integrates with Prisma and PostgreSQL. Oh, and I can't forget about my <span className='text-red red_cursor interactable' onClick={() => setWow(true)}>World of Warcraft</span> adventures – it's my go-to for some downtime!
        </p>
        <p>
          I'm constantly thirsty for knowledge and always striving for excellence in everything I do. If you're up for some collaboration and pushing the limits of technology, let's team up and make a serious impact on the digital world!
        </p>
        <p>
          Hit me up, and let's embark on this exciting journey together!
        </p>
      </div>
    </PageTransition>
  )
}

export default About
