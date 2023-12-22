"use client"

import {AnimatePresence, motion} from "framer-motion"

const PageTransition = ({ children }) => {
  return(
    <>
      <AnimatePresence mode="wait">
        <motion.div>
          {children}              
          <motion.div
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}        
          />
          <motion.div
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}        
          />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
export default PageTransition;