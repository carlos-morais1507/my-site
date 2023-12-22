"use client";

import React, { useState } from 'react';
import PageTransition from '../transition';
import Header from '../components/Header';
import { projectsList } from '@/store/projectList'
import Link from 'next/link';
import { MdOutlineSmartphone, MdOutlineMonitor } from "react-icons/md";

const Projects = () => {
  const [selection, setSelection] = useState("0");
  const [mobile, setMobile] = useState(false)

  return (
    <PageTransition>
      <Header />
      <div className='w-screen min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-around gap-12 md:gap-4 relative overflow-hidden'>
        <div className='w-1/4 flex flex-col gap-0'>
          {projectsList.map((project) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id} 
              className='w-full border-b-[1px] border-text uppercase py-1 hover:border-accent hover:text-accent hover:italic hover:tracking-wider green_cursor transition-all'
              onMouseOver={() => {
                setSelection(project.id);
                console.log(selection);
              }}
            >
              {project.name}
            </Link>
          ))}
        </div>
        <div className='flex flex-col items-center justify-center gap-2 h-[50vh] w-[50vw]'>
          <Link href={`/projects/${selection}`} className='h-[90%] w-full flex items-center justify-center'>
            <img
              src={`/assets/images/${mobile ? "mobile" : "desktop"}_snapshot_${selection}.png`}
              alt={projectsList[selection].name}
              className={`
                object-cover
                rounded-xl
                border-4
                border-neutral-800
                shadow-xl
                interactable
                ${mobile ? "aspect-[9/16]" : "aspect-[4/3]"} 
                w-full h-auto md:h-full md:w-auto
                transition-all
                object-top
                origin-center
              `}
            />
          </Link>
          <div className='flex items-center justify-center w-full'>
            <button onClick={() => setMobile(true)} className={`text-3xl ${mobile ? "bg-accent text-background black_cursor" : "bg-background text-accent green_cursor"} rounded-l-full px-3 py-2 flex items-center justify-center`}><MdOutlineSmartphone /></button>
            <button onClick={() => setMobile(false)} className={`text-3xl ${!mobile ? "bg-accent text-background black_cursor" : "bg-neutral-background text-accent green_cursor"} rounded-r-full px-3 py-2 flex items-center justify-center`}><MdOutlineMonitor /></button>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default Projects;
