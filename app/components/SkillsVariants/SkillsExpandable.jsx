'use client'

import { useState } from 'react'
import { skills } from '@/data/skills'

export default function SkillsExpandable() {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <section className='min-h-screen bg-background text-text py-20 px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-16'>
          <p className='text-sm text-text/60 uppercase tracking-widest mb-4'>
            What I Do
          </p>
          <h2 className='text-5xl md:text-7xl font-[itcBold]'>
            My Expertise
          </h2>
        </div>

        {/* Skills Grid */}
        <div className='grid md:grid-cols-2 gap-4'>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`group relative bg-text/5 border border-text/10 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                expandedId === skill.id 
                  ? 'md:col-span-2 bg-primary' 
                  : 'hover:border-primary/50'
              }`}
              onClick={() => setExpandedId(expandedId === skill.id ? null : skill.id)}
            >
              <div className='p-8 md:p-12'>
                <div className='flex items-start justify-between mb-6'>
                  <div className='flex items-center gap-4'>
                    <span className='text-5xl'>{skill.icon}</span>
                    <div>
                      <p className={`text-xs uppercase tracking-wider mb-2 ${
                        expandedId === skill.id ? 'text-background/60' : 'text-text/60'
                      }`}>
                        {skill.category}
                      </p>
                      <h3 className={`text-3xl md:text-4xl font-[itcBold] ${
                        expandedId === skill.id ? 'text-background' : 'text-text'
                      }`}>
                        {skill.title}
                      </h3>
                    </div>
                  </div>
                  
                  <button className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                    expandedId === skill.id 
                      ? 'border-background text-background rotate-45' 
                      : 'border-text/20 text-text/60 group-hover:border-primary group-hover:text-primary'
                  }`}>
                    <span className='text-2xl'>+</span>
                  </button>
                </div>

                <p className={`text-lg leading-relaxed mb-6 ${
                  expandedId === skill.id ? 'text-background/90' : 'text-text/70'
                }`}>
                  {skill.description}
                </p>

                {/* Expanded Content */}
                <div className={`transition-all duration-500 ${
                  expandedId === skill.id 
                    ? 'max-h-40 opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <div className='flex flex-wrap gap-2 pt-4 border-t border-background/20'>
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className='px-4 py-2 bg-background/20 text-background rounded-full text-sm font-[itcMedium]'
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
