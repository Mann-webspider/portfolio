'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import IntroLoader from '../IntroLoader'

export default function HeroFloating() {
  const [showLoader, setShowLoader] = useState(true)
  const heroRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    if (!showLoader) {
      const tl = gsap.timeline()
      tl.from(heroRef.current, {
        opacity: 0,
        duration: 1,
      }).from(
        cardRef.current,
        {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out',
        },
        '-=0.5'
      )
    }
  }, [showLoader])

  return (
    <>
      {showLoader && <IntroLoader onComplete={() => setShowLoader(false)} />}

      <div
        ref={heroRef}
        className='min-h-screen bg-background flex items-center justify-center px-6'
      >
        <div
          ref={cardRef}
          className='max-w-6xl w-full bg-text/5 backdrop-blur-xl rounded-[3rem] border border-text/10 overflow-hidden shadow-2xl'
        >
          <div className='grid lg:grid-cols-5 items-center'>
            {/* Image Section */}
            <div className='lg:col-span-2 relative h-[500px] lg:h-[700px]'>
              <Image
                src='/images/my-photo.jpg'
                alt='Mann Dalsaniya'
                fill
                className='object-cover'
                priority
              />
              <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent' />
            </div>

            {/* Content Section */}
            <div className='lg:col-span-3 p-12 lg:p-16 space-y-8'>
              <div className='space-y-4'>
                <div className='inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-[itcBold]'>
                  Available for Work
                </div>
                <h1 className='text-text font-[itcBold] text-5xl md:text-6xl lg:text-7xl leading-tight'>
                  Mann
                  <br />
                  <span className='text-primary'>Dalsaniya</span>
                </h1>
                <p className='text-xl text-text/60'>Full-Stack Developer</p>
              </div>

              <p className='text-text/80 text-lg leading-relaxed max-w-xl'>
                Passionate about creating seamless digital experiences. 
                Specializing in modern web technologies and scalable solutions.
              </p>

              <div className='flex flex-wrap gap-3'>
                {['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className='px-4 py-2 bg-text/10 text-text/80 rounded-lg text-sm'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex gap-4 pt-6'>
                <Link
                  href='/#works'
                  className='px-8 py-4 bg-primary text-background font-[itcBold] rounded-2xl hover:shadow-xl hover:shadow-primary/20 transition-all'
                >
                  View Projects
                </Link>
                <Link
                  href='/resume.pdf'
                  className='px-8 py-4 border-2 border-text/20 text-text font-[itcBold] rounded-2xl hover:border-primary transition-all'
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
