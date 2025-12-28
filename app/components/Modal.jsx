'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'
import styles from './modal.module.css'

export default function Modal({ modal, projects }) {
  const container = useRef(null)
  const cursor = useRef(null)
  const cursorLabel = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  useEffect(() => {
    if (isMobile) return // Skip mouse tracking on mobile

    const moveContainerX = gsap.quickTo(container.current, "left", { duration: 0.8, ease: "power3" })
    const moveContainerY = gsap.quickTo(container.current, "top", { duration: 0.8, ease: "power3" })
    
    const moveCursorX = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    const moveCursorY = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
    
    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      moveContainerX(clientX)
      moveContainerY(clientY)
      moveCursorX(clientX)
      moveCursorY(clientY)
      moveCursorLabelX(clientX)
      moveCursorLabelY(clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: { 
      scale: 1, 
      x: "-50%", 
      y: "-50%", 
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
    },
    closed: { 
      scale: 0, 
      x: "-50%", 
      y: "-50%", 
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] }
    }
  }

  // Don't render modal on mobile
  if (isMobile) return null

  return (
    <>
      <motion.div 
        ref={container}
        variants={scaleAnimation}
        initial="initial"
        animate={modal.active ? "enter" : "closed"}
        className={styles.modalContainer}
      >
        <div style={{ top: modal.index * -100 + "%" }} className={styles.modalSlider}>
          {projects.map((project, index) => (
            <div 
              key={`modal_${index}`}
              className={styles.modal}
              style={{ backgroundColor: project.color }}
            >
              <Image 
                src={`/images/${project.src}`}
                width={300}
                height={0}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={modal.active ? "enter" : "closed"}
      />
      
      <motion.div
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={modal.active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  )
}
