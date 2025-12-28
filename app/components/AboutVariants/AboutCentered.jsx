'use client'

import Link from 'next/link'

export default function AboutCentered() {
  return (
    <section
      id='about'
      className='min-h-screen bg-background text-text flex items-center justify-center px-6 md:px-12 lg:px-20'
    >
      <div className='max-w-5xl text-center space-y-12 px-6'>
        {/* Header */}
        <div className='space-y-6'>
          <p className='text-sm text-text/60 uppercase tracking-widest'>
            About Me
          </p>
          <h2 className='text-5xl md:text-7xl lg:text-8xl font-[itcBold] leading-tight'>
            Full-Stack Developer
            <br />
            <span className='text-primary'>& Problem Solver</span>
          </h2>
        </div>

        {/* Main Description */}
        <div className='space-y-6 text-xl md:text-2xl text-text/70 leading-relaxed max-w-4xl mx-auto'>
          <p className=' '>
            I craft <span className='text-text font-[itcBold]'>scalable web applications</span> that 
            blend beautiful design with powerful functionality. From containerized microservices to 
            real-time communication platforms, I turn complex ideas into reality.
          </p>
          <p>
            Specializing in <span className='text-primary font-[itcBold]'>React, Next.js, Node.js</span>, 
            Docker, Kubernetes, and AWS. Currently exploring AI/ML integration and advanced system architecture.
          </p>
        </div>

        {/* Technologies */}
        <div className='pt-8'>
          <p className='text-sm text-text/60 uppercase tracking-widest mb-6'>
            Tech Stack
          </p>
          <div className='flex flex-wrap justify-center gap-3'>
            {[
              'React', 'Next.js', 'Node.js', 'TypeScript', 'Docker', 
              'Kubernetes', 'AWS', 'MongoDB', 'PostgreSQL', 'Jenkins'
            ].map((tech) => (
              <span
                key={tech}
                className='px-6 py-3 bg-text/5 border border-text/10 text-text rounded-full hover:border-primary hover:text-primary transition-all'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center pt-8'>
          <Link
            href='/#works'
            className='px-10 py-4 bg-text text-background font-[itcBold] rounded-full hover:scale-105 transition-transform'
          >
            View My Work
          </Link>
          <Link
            href='/#contact'
            className='px-10 py-4 border-2 border-text/20 text-text font-[itcBold] rounded-full hover:border-text transition-all'
          >
            Let's Collaborate
          </Link>
        </div>
      </div>
    </section>
  )
}
