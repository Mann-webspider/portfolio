'use client'

import { useState } from 'react'
import { skills } from '@/data/skills'

export default function SkillsStacked() {
  const [activeSkill, setActiveSkill] = useState(null)

  const handleToggle = (skillId) => {
    setActiveSkill(activeSkill === skillId ? null : skillId)
  }

  return (
    <section className='min-h-screen bg-background text-text py-12 md:py-20 px-4 md:px-12 lg:px-20 lg:my-64'>
      <div className='max-w-8xl mx-auto'>
        {/* Header */}
        <div className='mb-12 md:mb-16 px-2 md:px-0'>
          <h4 className='uppercase text-xs md:text-sm text-text/60 tracking-widest mb-2'>
            What I Do
          </h4>
        </div>

        {/* Stacked Items */}
        <div className='space-y-0'>
          {skills.map((skill, index) => {
            const isActive = activeSkill === skill.id

            return (
              <div
                key={skill.id}
                className={`group relative border-y transition-all duration-500 overflow-hidden cursor-pointer ${
                  isActive 
                    ? 'border-primary bg-primary/5' 
                    : 'border-text/20 hover:border-primary'
                }`}
                style={{ marginTop: index === 0 ? 0 : '-1px' }}
                onClick={() => handleToggle(skill.id)}
              >
                {/* Main Content */}
                <div className='py-6 md:py-8 lg:py-12 px-4 md:px-6 lg:px-12 transition-all duration-500'>
                  {/* Title Section */}
                  <div className='flex items-center justify-between gap-4'>
                    <div className='flex-1 min-w-0'>
                      <p className={`text-xs uppercase tracking-wider mb-2 transition-colors ${
                        isActive ? 'text-primary' : 'text-text/60 group-hover:text-primary'
                      }`}>
                        {skill.category}
                      </p>
                      <h3 className={`text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-[itcBold] uppercase transition-colors duration-500 ${
                        isActive ? 'text-primary' : 'text-text group-hover:text-primary'
                      }`}>
                        {skill.title}
                      </h3>
                    </div>

                    {/* Mobile Toggle Icon */}
                    <button 
                      className='lg:hidden flex-shrink-0 w-10 h-10 rounded-full border-2 border-text/20 flex items-center justify-center transition-all'
                      onClick={(e) => {
                        e.stopPropagation()
                        handleToggle(skill.id)
                      }}
                    >
                      <span className={`text-text/60 transition-transform duration-300 ${
                        isActive ? 'rotate-45' : ''
                      }`}>
                        +
                      </span>
                    </button>
                  </div>

                  {/* Description - Visible on Desktop Hover or Mobile Click */}
                  <div className={`mt-6 transition-all duration-500 ${
                    isActive 
                      ? 'max-h-96 opacity-100 ' 
                      : 'max-h-0 opacity-0 lg:max-h-0 lg:hidden lg:opacity-0 lg:group-hover:max-h-96 lg:group-hover:opacity-100'
                  } overflow-hidden`}>
                    <div className='lg:max-w-2xl'>
                      <p className='text-sm md:text-base text-text/80 leading-relaxed mb-4'>
                        {skill.description}
                      </p>
                      
                      {/* Tools */}
                      <div className='flex flex-wrap gap-2'>
                        {skill.tools.map((tool) => (
                          <span
                            key={tool}
                            className='text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full'
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Right Side - Hidden on Mobile */}
                  <div className='hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 max-w-md'>
                    <p className='text-base text-text/0 group-hover:text-text/80 transition-all duration-500 leading-relaxed'>
                      {skill.description}
                    </p>
                    <div className='flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200'>
                      {skill.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className='text-xs px-3 py-1 bg-primary/10 text-primary rounded-full'
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent transition-opacity duration-500 -z-10 ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
              </div>
            )
          })}
        </div>

        {/* Mobile Hint */}
        <div className='lg:hidden mt-8 text-center'>
          <p className='text-xs text-text/40 uppercase tracking-wider'>
            Tap to view details
          </p>
        </div>
      </div>
    </section>
  )
}
