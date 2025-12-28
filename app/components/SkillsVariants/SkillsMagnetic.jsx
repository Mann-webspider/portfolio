'use client'

import { useRef } from 'react'
import { skills } from '@/data/skills'

export default function SkillsMagnetic() {
  const handleMouseMove = (e, ref) => {
    const card = ref.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = (ref) => {
    ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return (
    <section className='min-h-screen bg-background text-text py-20 px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-20'>
          <p className='text-sm text-text/60 uppercase tracking-widest mb-4'>
            What I Do
          </p>
          <h2 className='text-5xl md:text-7xl font-[itcBold] mb-6'>
            My Craft
          </h2>
          <p className='text-xl text-text/70 max-w-2xl mx-auto'>
            Passionate about creating exceptional digital experiences
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {skills.map((skill) => {
            const cardRef = useRef(null)
            
            return (
              <div
                key={skill.id}
                ref={cardRef}
                className='group relative'
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                onMouseLeave={() => handleMouseLeave(cardRef)}
                style={{ transition: 'transform 0.1s ease-out' }}
              >
                <div className='relative bg-text/5 border border-text/10 rounded-3xl p-10 overflow-hidden'>
                  {/* Gradient Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                  
                  {/* Content */}
                  <div className='relative z-10'>
                    <div className='flex items-start justify-between mb-6'>
                      <span className='text-6xl'>{skill.icon}</span>
                      <span className='text-5xl font-[itcBold] text-text/10'>
                        {String(skill.id).padStart(2, '0')}
                      </span>
                    </div>

                    <p className='text-xs uppercase tracking-wider text-text/60 mb-2'>
                      {skill.category}
                    </p>
                    
                    <h3 className='text-4xl font-[itcBold] text-text mb-4 group-hover:text-primary transition-colors'>
                      {skill.title}
                    </h3>
                    
                    <p className='text-base text-text/70 leading-relaxed mb-6'>
                      {skill.description}
                    </p>

                    {/* Tools */}
                    <div className='flex flex-wrap gap-2'>
                      {skill.tools.map((tool) => (
                        <span
                          key={tool}
                          className='text-sm px-4 py-2 bg-text/10 text-text rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors'
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
