'use client'

import { useRef } from 'react'
import { skills } from '@/data/skills'

export default function SkillsHorizontal() {
  const scrollRef = useRef(null)

  return (
    <section className='min-h-screen bg-background text-text py-20'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-12'>
        <p className='text-sm text-text/60 uppercase tracking-widest mb-4'>
          What I Do
        </p>
        <h2 className='text-5xl md:text-7xl font-[itcBold] mb-6'>
          Expertise
        </h2>
        <p className='text-xl text-text/70 max-w-2xl'>
          Specialized in modern web technologies and scalable solutions
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className='flex gap-6 overflow-x-auto pb-8 px-6 md:px-12 lg:px-20 snap-x snap-mandatory scrollbar-hide'
        style={{ scrollbarWidth: 'none' }}
      >
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className='flex-shrink-0 w-[85vw] md:w-[500px] snap-start group'
          >
            <div className='h-full bg-text/5 border border-text/10 rounded-3xl p-8 md:p-10 hover:border-primary transition-all duration-300 hover:bg-text/10'>
              {/* Number */}
              <div className='flex items-start justify-between mb-8'>
                <span className='text-7xl font-[itcBold] text-primary/20'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className='text-5xl'>{skill.icon}</span>
              </div>

              {/* Content */}
              <div className='space-y-4'>
                <p className='text-xs uppercase tracking-wider text-text/60'>
                  {skill.category}
                </p>
                <h3 className='text-4xl font-[itcBold] text-text'>
                  {skill.title}
                </h3>
                <p className='text-lg text-text/70 leading-relaxed'>
                  {skill.description}
                </p>

                {/* Tools */}
                <div className='flex flex-wrap gap-2 pt-4'>
                  {skill.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className='text-sm text-text/60 bg-text/5 px-3 py-1 rounded-full'
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className='flex justify-center gap-2 mt-8'>
        {skills.map((_, index) => (
          <div
            key={index}
            className='w-2 h-2 rounded-full bg-text/20'
          />
        ))}
      </div>
    </section>
  )
}
