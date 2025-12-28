'use client'

import { useState } from 'react'
import Modal from './Modal'
import styles from './styles.module.css'

export default function Works() {
  const [modal, setModal] = useState({ active: false, index: 0 })

  const projects = [
    { title: "E-Commerce Platform", src: "e-comm.png", color: "#000000", year: "2024" },
    { title: "Nuephormium Design", src: "nuemorphism.png", color: "#8C8C8C", year: "2024" },
    { title: "Rock Paper Scissors", src: "rps.jpg", color: "#EFE8D3", year: "2023" },
    { title: "Portfolio Website", src: "portfolio.png", color: "#706D63", year: "2023" }
  ]

  return (
    <section className='min-h-screen xl:p-44 bg-background py-20 px-10 md:px-20'>
      <h2 className='font-[itcBold] text-[3rem] md:text-[4rem] uppercase mb-20'>
        My Works
      </h2>
      
      <div className={styles.body}>
        {projects.map((project, index) => (
          <div 
            key={index}
            onMouseEnter={() => setModal({ active: true, index })}
            onMouseLeave={() => setModal({ active: false, index })}
            className={styles.project}
          >
            <h3 className='xl:text-[3rem] font-[itcMedium]  '>{project.title}</h3>
            <p>{project.year}</p>
          </div>
        ))}
      </div>
      
      <Modal modal={modal} projects={projects} />
    </section>
  )
}
