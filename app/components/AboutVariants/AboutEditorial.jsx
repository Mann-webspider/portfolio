'use client'

import Link from 'next/link'

export default function AboutEditorial() {
  return (
    <section
      id='about'
      className='min-h-screen bg-background text-text py-12 md:py-20 '
    >
      <div className='max-w-8xl mx-auto px-6 md:px-12 lg:px-44'>
        {/* Header */}
        <div className='mb-12 md:mb-20'>
          <p className='text-xs md:text-sm text-text/60 uppercase tracking-widest mb-4'>
            About Me
          </p>
        </div>

        {/* Large Text */}
        <div className='space-y-6 md:space-y-8 mb-16 md:mb-20'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[itcBold] leading-tight md:leading-tight lg:w-3/4'>
            I'm a <span className='text-primary'>Full-stack Developer</span> passionate 
            about building scalable web applications and exploring cutting-edge technologies.
          </h2>
        </div>

        {/* Grid Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12'>
          {/* Column 1 */}
          <div className='space-y-4 md:space-y-6'>
            <h3 className='text-xl md:text-2xl font-[itcBold] text-text'>Background</h3>
            <p className='text-base md:text-lg text-text/70 leading-relaxed'>
              With 4+ years of experience, I've built invoice systems, educational platforms, 
              real-time communication tools, and deployed containerized applications at scale.
            </p>
          </div>

          {/* Column 2 */}
          <div className='space-y-4 md:space-y-6'>
            <h3 className='text-xl md:text-2xl font-[itcBold] text-text'>Expertise</h3>
            <ul className='space-y-3 text-base md:text-lg text-text/70'>
              <li className='flex items-start gap-3'>
                <span className='text-primary mt-1 text-lg'>▪</span>
                <span>Full-stack development with React, Next.js, Node.js</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-primary mt-1 text-lg'>▪</span>
                <span>DevOps with Docker, Kubernetes, AWS</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-primary mt-1 text-lg'>▪</span>
                <span>Database design & API architecture</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-primary mt-1 text-lg'>▪</span>
                <span>CI/CD pipelines & automation</span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className='space-y-4 md:space-y-6 md:col-span-2 lg:col-span-1'>
            <h3 className='text-xl md:text-2xl font-[itcBold] text-text'>Currently</h3>
            <p className='text-base md:text-lg text-text/70 leading-relaxed'>
              Exploring AI/ML integration, advanced microservices architecture, and pursuing 
              an MBA to combine technical expertise with business strategy.
            </p>
            <Link
              href='/#contact'
              className='inline-flex items-center gap-2 text-primary font-[itcBold] text-base md:text-lg group pt-2'
            >
              Let's work together
              <span className='transform group-hover:translate-x-2 transition-transform'>
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-20 pt-10 md:pt-12 border-t border-text/10'>
          {[
            { label: 'Years Experience', value: '4+' },
            { label: 'Projects Completed', value: '10+' },
            { label: 'Happy Clients', value: '7+' },
            { label: 'Technologies', value: '15+' },
          ].map((stat) => (
            <div key={stat.label} className='text-center md:text-left'>
              <p className='text-3xl sm:text-4xl md:text-5xl font-[itcBold] text-primary mb-2'>
                {stat.value}
              </p>
              <p className='text-xs md:text-sm text-text/60 uppercase tracking-wider'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
