"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaUser, FaCode, FaLaptop, FaPhoneAlt    } from "react-icons/fa";
import PageTransition from '../transition';

const MenuBtn = () => {
  const [up, setUp] = useState(false)

  return (
    <PageTransition>
      <div className='md:block hidden'>
        <div className={` absolute w-16 bg-text aspect-square rounded-full bottom-16 left-6 cursor-pointer ${up ? "scale-50 hover:scale-[0.6] active:scale-[0.4]" : "scale-100 hover:scale-110  active:scale-90"} transition-all shadow-md z-50`}
        onClick={() => setUp(!up)}
        />
        <div className={`bg-background w-36 absolute z-10 left-10 ${up ? "bottom-[417px] h-0" : "bottom-36 h-72"} transition-all duration-500`} />
        <div className='absolute left-10 bottom-36 flex flex-col gap-4 items-start'>
          <AnimatePresence mode='wait'>
            <Link href={"/about"} className='green_cursor nav_btn btn_outline'><FaUser /> About me</Link>
            <Link href={"/skills"} className='green_cursor nav_btn btn_outline'><FaCode  /> Skills</Link>
            <Link href={"/projects"} className='green_cursor nav_btn btn_outline'><FaLaptop  /> Projects</Link>
            <Link href={"/contact"} className='green_cursor nav_btn btn_outline'><FaPhoneAlt /> Contact</Link>
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  )
}

export default MenuBtn