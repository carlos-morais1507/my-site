import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaUser, FaCode, FaLaptop, FaPhoneAlt    } from "react-icons/fa";
import React from 'react'

const Header = () => {
  const path = usePathname()
  console.log(path)

  return (
    <div className='fixed top-0 left-0 h-16 bg-background flex items-center justify-around px-6 w-screen z-[99]'>
      <div className='w-1/2'>
        <Link href={"/"}>
          <div className='w-10 aspect-square rounded-full bg-text hover:scale-110 hover:bg-accent green_cursor transition-all' />
        </Link>
      </div>
      <div className='w-1/2 hidden md:flex items-center justify-around'>
        <Link href={"/about"} className={`nav_btn ${path === "/about" ? "text-accent italic black_cursor" : "text-text green_cursor"}`}>About me</Link>
        <Link href={"/skills"} className={`nav_btn ${path === "/skills" ? "text-accent italic black_cursor" : "text-text green_cursor"}`}>Skills</Link>
        <Link href={"/projects"} className={`nav_btn ${path === "/projects" ? "text-accent italic black_cursor" : "text-text green_cursor"}`}>Projects</Link>
        <Link href={"/contact"} className={`nav_btn ${path === "/contact" ? "text-accent italic black_cursor" : "text-text green_cursor"}`}>Contact</Link>
      </div>
      <div className='flex md:hidden items-center justify-center w-full'>
        <Link href={"/about"} className={`nav_btn ${path === "/about" ? "text-accent italic black_cursor" : "text-text green_cursor"}`}><FaUser /></Link>
        <Link href={"/skills"} className={`nav_btn ${path === "/skills" ? "text-accent italic black_cursor" : "text-text green_cursor"}`}><FaCode /></Link>
        <Link href={"/projects"} className={`nav_btn ${path === "/projects" ? "text-accent italic black_cursor" : "text-text green_cursor"}`}><FaLaptop /></Link>
        <Link href={"/contact"} className={`nav_btn ${path === "/contact" ? "text-accent italic black_cursor" : "text-text green_cursor"}`}><FaPhoneAlt /></Link>
      </div>
    </div>
  )
}

export default Header

/*
About me
Skills
Projects
Contact
*/