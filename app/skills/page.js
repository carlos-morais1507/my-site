"use client"

import React from 'react'
import PageTransition from '../transition'
import Header from '../components/Header'
import Link from 'next/link'

const Skills = () => {
  return (
    <PageTransition>
      <Header />
      <div className='w-screen min-h-screen flex flex-col p-16 mt-16 gap-4'>
        <h1>Skills</h1>
        <p>I'm always studying new programming concepts and languages to grow in my learning journey. In my point of view, it's good to lean various programming concepts to know how everything connects and works together (like Front-End and Back-End).</p>
        <p>Today, I'm studying Front-End development and cybersecurity. I know that the cybersecurity market is growing, and that knowing cybersec concepts and best practices will help me a lot in development, and vice versa.</p>
        <h3 className='text-center mt-3 text-accent'>My Front-End Skills</h3>
        <ul className='flex gap-3 flex-wrap w-full items-center justify-center'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>NextJs</li>
          <li>Svelte / SvelteKit</li>
          <li>Styled Components</li>
          <li>Tailwind CSS</li>
          <li>Webdesign and SEO Concepts</li>
        </ul>
        <h3 className='text-center mt-3 text-accent'>My Back-End Skills</h3>
        <ul className='flex gap-3 flex-wrap w-full items-center justify-center'>
          <li>Python</li>
          <li>Bash</li>
          <li>PowerShell</li>
          <li>Linux</li>
          <li>C / C++</li>
          <li>SQL</li>
          <li>Prisma</li>
          <li>Docker</li>
        </ul>
        <h3 className='text-center mt-3 text-accent'>My Cybersecurity Skills</h3>
        <ul className='flex gap-3 flex-wrap w-full items-center justify-center'>
          <li>WireShark</li>
          <li>Suricata</li>
          <li>TCPDump</li>
          <li>Event Tracer for Windows (ETW)</li>
          <li>Microsoft Active Directory</li>
          <li>Sysmon</li>
          <li>Virtualization with AWS and Microsoft Azure</li>
        </ul>
        <h3 className='text-center mt-3 text-accent'>My Cybersecurity Certifications</h3>
        <ul className='flex gap-3 flex-wrap w-full items-center justify-center mb-3'>
          <li>Google Cybersecurity Certificate</li>
          <li>FEMA National Incident Management System (NIMS):ICS-100</li>
          <li>IBM Cybersecurity Fundamentals</li>
          <li>Cisco Introduction to Cybersecurity</li>
          <li>ICS2 Candidate</li>
        </ul>
        <p>You can check my <Link href={"https://www.credly.com/users/carlos-morais.f12cff0d/badges"} target='_blank' className='hover:text-accent hover:tracking-wider hover:italic transition-all'>Credly</Link> to see my certification links :)</p>
      </div>
    </PageTransition>
  )
}

export default Skills