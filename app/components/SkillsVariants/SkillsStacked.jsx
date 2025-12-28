'use client'

import { skills } from '@/data/skills'

export default function SkillsStacked() {
  return (
    <section className='min-h-screen bg-background text-text py-20 px-6 md:px-12 lg:px-20'>
      <div className='max-w-8xl mx-auto '>
        {/* Header */}
        <div className='mb-16'>
          <h4 className='uppercase text-sm text-text/60 tracking-widest mb-8'>
            What I Do
          </h4>
        </div>

        {/* Stacked Items */}
        <div className='space-y-0'>
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className='group relative border-y border-text/20 hover:border-primary transition-all duration-500 overflow-hidden'
              style={{ marginTop: index === 0 ? 0 : '-1px' }}
            >
              <div className='flex items-center justify-between py-8 md:py-12 px-6 md:px-12 hover:px-16 transition-all duration-500'>
                {/* Left - Title */}
                <div className='flex items-center gap-6'>
                  
                  <div>
                    <p className='text-xs uppercase tracking-wider text-text/60 mb-2 group-hover:text-primary transition-colors'>
                      {skill.category}
                    </p>
                    <h3 className='text-4xl md:text-6xl lg:text-7xl font-[itcBold] uppercase group-hover:text-primary transition-colors duration-500'>
                      {skill.title}
                    </h3>
                  </div>
                </div>

                {/* Right - Description */}
                <div className='hidden lg:block max-w-md'>
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

              {/* Background Gradient on Hover */}
              <div className='absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
