'use client'

import { useEffect, useState } from 'react'
import Modal from './Modal'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Works() {
  const [modal, setModal] = useState({ active: false, index: 0 })
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const projects = [
    { 
      title: "E-Commerce Platform", 
      src: "e-comm.png", 
      color: "#000000", 
      year: "2024",
      description: "Full-stack e-commerce solution with real-time inventory",
      tech: ["Next.js", "Node.js", "MongoDB"]
    },
    { 
      title: "Nuephormium Design", 
      src: "nuemorphism.png", 
      color: "#8C8C8C", 
      year: "2024",
      description: "Modern UI component library with neumorphic design",
      tech: ["React", "Tailwind", "Framer Motion"]
    },
    { 
      title: "Rock Paper Scissors", 
      src: "rps.jpg", 
      color: "#EFE8D3", 
      year: "2023",
      description: "Interactive game with AI opponent",
      tech: ["JavaScript", "CSS", "Canvas API"]
    },
    { 
      title: "Portfolio Website", 
      src: "portfolio.png", 
      color: "#706D63", 
      year: "2023",
      description: "Personal portfolio with smooth animations",
      tech: ["Next.js", "GSAP", "Tailwind"]
    }
  ]

  const handleProjectInteraction = (index) => {
    if (isMobile) {
      setModal({ active: !modal.active || modal.index !== index, index })
    }
  }

  return (
    <section className='min-h-screen bg-background py-12 md:py-20 px-6 md:px-12 lg:px-20 xl:px-32'>
      <div className='max-w-8xl mx-auto'>
        <h2 className='font-[itcBold] text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase mb-12 md:mb-20 text-text'>
          My Works
        </h2>
        
        {/* Desktop View - Hover Modal */}
        <div className='hidden lg:block'>
          <div className={styles.body}>
            {projects.map((project, index) => (
              <div 
                key={index}
                onMouseEnter={() => setModal({ active: true, index })}
                onMouseLeave={() => setModal({ active: false, index })}
                className={styles.project}
              >
                <h3 className='text-4xl xl:text-6xl font-[itcMedium] text-text'>
                  {project.title}
                </h3>
                <p className='text-text/60'>{project.year}</p>
              </div>
            ))}
          </div>
          <Modal modal={modal} projects={projects} />
        </div>

        {/* Mobile/Tablet View - Card Grid */}
        <div className='lg:hidden grid sm:grid-cols-2 gap-6'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative bg-text/5 border border-text/10 rounded-3xl overflow-hidden hover:border-primary transition-all duration-300 cursor-pointer'
              onClick={() => handleProjectInteraction(index)}
            >
              {/* Image */}
              <div className='relative h-64 sm:h-72 overflow-hidden'>
                <Image
                  src={`/images/${project.src}`}
                  alt={project.title}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent' />
                
                {/* Year Badge */}
                <div className='absolute top-4 right-4 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full text-sm font-[itcBold] text-text border border-text/20'>
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className='p-6 space-y-4'>
                <h3 className='text-2xl sm:text-3xl font-[itcBold] text-text group-hover:text-primary transition-colors'>
                  {project.title}
                </h3>
                
                <p className='text-sm text-text/70 leading-relaxed'>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2 pt-2'>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className='text-xs px-3 py-1 bg-primary/10 text-primary rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <div className='flex items-center gap-2 text-primary font-[itcBold] pt-2'>
                  <span>View Project</span>
                  <span className='transform group-hover:translate-x-2 transition-transform'>
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
