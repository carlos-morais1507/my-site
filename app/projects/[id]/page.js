"use client"

import React from 'react'
import PageTransition from '@/app/transition'
import Header from '@/app/components/Header'
import { projectsList } from '@/store/projectList'
import Link from 'next/link'
import { FaGithub, FaLaptopCode  } from "react-icons/fa";

const Project = ({ params }) => {
  const project = projectsList[params.id];
  const bgUrl = `/assets/images/desktop_snapshot_${params.id}.png`

  if (!project) {
    return (
      <PageTransition>
        <Header />
        <div className='w-screen min-h-screen flex flex-col items-center justify-center gap-4'>
          <p>Project not found (id: {params.id})</p>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <Header />
      <div className='w-screen min-h-screen flex flex-col items-center mt-16 gap-4'>
        <div id='hero' className={`relative h-96 w-full flex items-center justify-center`}>
          <img className='absolute h-96 w-full object-cover object-top brightness-50 overflow-hidden' src={`/assets/images/desktop_snapshot_${project.id}.png`} alt="a" />
          <div className='w-full h-[101%] backdrop-blur-xl flex flex-col gap2 items-center justify-center'>
            <h1 className='drop-shadow-md'>{project.name}</h1>
            <p className='text-accent drop-shadow-md'>{project.stack}</p>
          </div>
        </div>
        <div className='flex gap-4 w-full px-10 py-5 bg-background'>
          <Link href={project.repoLink} target='blank' className='nav_btn btn_fill text-xl font-semibold green_cursor'><FaGithub /> Repo</Link>
          <Link href={project.siteLink} target='blank' className='nav_btn btn_fill text-xl font-semibold green_cursor'><FaLaptopCode  /> Website</Link>
        </div>
        <div className='px-10'>
          <p className='text-justify'>
            {project.desc}
          </p>
        </div>
      </div>
    </PageTransition>
  );
}

export default Project;
