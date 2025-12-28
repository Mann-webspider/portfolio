'use client'

import { useState } from 'react'

export default function AboutCards() {
  const [activeCard, setActiveCard] = useState(null)

  const cards = [
    {
      id: 1,
      icon: '💻',
      title: 'Full-Stack Development',
      description: 'Building end-to-end web applications with React, Next.js, Node.js, and modern frameworks.',
      details: '3+ years of experience creating scalable solutions from concept to deployment.',
    },
    {
      id: 2,
      icon: '☁️',
      title: 'DevOps & Cloud',
      description: 'Deploying and managing containerized applications with Docker, Kubernetes, and AWS.',
      details: 'Expertise in CI/CD pipelines, infrastructure automation, and cloud architecture.',
    },
    {
      id: 3,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Crafting beautiful, user-centric interfaces with attention to detail and accessibility.',
      details: 'Proficient in Figma, Tailwind CSS, and animation libraries like GSAP.',
    },
    {
      id: 4,
      icon: '🚀',
      title: 'Innovation',
      description: 'Exploring AI/ML integration, microservices architecture, and emerging technologies.',
      details: 'Always learning and adapting to build the future of web development.',
    },
  ]

  return (
    <section
      id='about'
      className='min-h-screen bg-background text-text py-20 px-6 md:px-12 lg:px-20'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-16 text-center'>
          <p className='text-sm text-text/60 uppercase tracking-widest mb-4'>
            About Me
          </p>
          <h2 className='text-5xl md:text-7xl font-[itcBold] leading-tight mb-6'>
            Developer, Designer,
            <br />
            <span className='text-primary'>Problem Solver</span>
          </h2>
          <p className='text-xl text-text/70 max-w-3xl mx-auto'>
            I'm Mann Dalsaniya, a full-stack developer passionate about creating 
            innovative digital solutions that make a difference.
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid md:grid-cols-2 gap-6'>
          {cards.map((card) => (
            <div
              key={card.id}
              className={`group relative bg-text/5 border border-text/10 rounded-3xl p-8 cursor-pointer transition-all duration-500 ${
                activeCard === card.id 
                  ? 'md:col-span-2 bg-primary border-primary' 
                  : 'hover:border-primary/50'
              }`}
              onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
            >
              <div className='space-y-4'>
                <div className='flex items-start justify-between'>
                  <span className='text-5xl'>{card.icon}</span>
                  <button className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                    activeCard === card.id 
                      ? 'border-background text-background rotate-45' 
                      : 'border-text/20 text-text/60 group-hover:border-primary group-hover:text-primary'
                  }`}>
                    <span className='text-2xl'>+</span>
                  </button>
                </div>

                <h3 className={`text-3xl font-[itcBold] ${
                  activeCard === card.id ? 'text-background' : 'text-text'
                }`}>
                  {card.title}
                </h3>

                <p className={`text-lg leading-relaxed ${
                  activeCard === card.id ? 'text-background/90' : 'text-text/70'
                }`}>
                  {card.description}
                </p>

                {/* Expanded Content */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  activeCard === card.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className='text-background/80 pt-4 border-t border-background/20'>
                    {card.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
