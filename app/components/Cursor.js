"use client"

import React, { useRef, useState, useEffect } from 'react';
import { PiArrowUpRightBold } from "react-icons/pi";

const Cursor = () => {
  const cursorRef = useRef();
  const iconRef = useRef();
  const [interacting, setInteracting] = useState(false);
  const [isGreen, setIsGreen] = useState(false)
  const [isBlack, setIsBlack] = useState(false)

  useEffect(() => {
    window.onmousemove = e => {
      const x = e.clientX,
            y = e.clientY;

      const interactable = e.target.closest(".interactable"),
            isInteracting = interactable !== null;
      
      const green = e.target.closest(".green_cursor"),
            inGreen = green !== null;

      const black = e.target.closest(".black_cursor"),
            inBlack = black !== null;

      setInteracting(isInteracting);
      setIsGreen(inGreen);
      setIsBlack(inBlack);

      const keyframes = {
        transform: `translate(${x - 10}px, ${y - 10}px) scale(${isInteracting ? 5 : 1})`
      }

      if (cursorRef.current) {
        cursorRef.current.animate(keyframes, {
          duration: 800,
          fill: "forwards"
        });
      }
    };

    return () => {
      window.removeEventListener('mousemove', () => {});
    };
  }, []);
  
  return (
    <div
      ref={cursorRef}
      id='cursor'
      className={`hidden md:flex justify-center items-center w-5 aspect-square rounded-full fixed top-0 left-0 z-[999] pointer-events-none opacity-0 transition-[background-color,_opacity] duration-200
      ${
        isGreen ? "bg-accent" : (isBlack ? "bg-background" : "bg-text")
      }
      `}>
      <PiArrowUpRightBold ref={iconRef} className={`text-background scale-100 ${interacting ? "opacity-100" : "opacity-0"}`} />
    </div>
  );
}

export default Cursor;


