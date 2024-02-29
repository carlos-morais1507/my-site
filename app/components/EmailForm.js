"use client"
import React, { useState } from 'react'

const EmailForm = () => {
  const [state, setState] = useState("none")

  function sendEmail() {
    
  }


  return (
    <div className='w-2/3 md:w-2/4 p-4 border-text border-2 rounded-2xl'>
    <form action="" onSubmit={sendEmail}>
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
  )
}

export default EmailForm