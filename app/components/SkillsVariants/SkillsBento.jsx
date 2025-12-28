'use client'

import { skills } from '@/data/skills'

export default function SkillsBento() {
  const gridStyles = [
    'md:col-span-2 md:row-span-2', // Large
    'md:col-span-1 md:row-span-1', // Small
    'md:col-span-1 md:row-span-2', // Tall
    'md:col-span-2 md:row-span-1', // Wide
  ]

  return (
    <section className='min-h-screen bg-background text-text py-20 px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-16'>
          <p className='text-sm text-text/60 uppercase tracking-widest mb-4'>
            What I Do
          </p>
          <h2 className='text-5xl md:text-7xl font-[itcBold]'>
            Skills & Expertise
          </h2>
        </div>

        {/* Bento Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]'>
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`group ${gridStyles[index % gridStyles.length]}`}
            >
              <div className='relative h-full bg-gradient-to-br from-text/10 to-text/5 border border-text/10 rounded-3xl p-8 overflow-hidden hover:border-primary transition-all duration-500'>
                {/* Icon Background */}
                <div className='absolute top-4 right-4 text-8xl opacity-5 group-hover:opacity-10 transition-opacity'>
                  {skill.icon}
                </div>

                {/* Content */}
                <div className='relative h-full flex flex-col justify-between'>
                  <div>
                    <p className='text-xs uppercase tracking-wider text-text/60 mb-2'>
                      {skill.category}
                    </p>
                    <h3 className='text-3xl md:text-4xl font-[itcBold] text-text mb-4 group-hover:text-primary transition-colors'>
                      {skill.title}
                    </h3>
                    <p className='text-sm text-text/70 leading-relaxed line-clamp-3'>
                      {skill.description}
                    </p>
                  </div>

                  {/* Tools */}
                  <div className='flex flex-wrap gap-2 mt-4'>
                    {skill.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className='text-xs px-3 py-1 bg-text/10 text-text rounded-full'
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
      </div>
    </section>
  )
}
