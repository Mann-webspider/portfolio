'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import IntroLoader from '../IntroLoader'

export default function HeroInfinite() {
  const [showLoader, setShowLoader] = useState(true)
  const heroRef = useRef(null)
  const scrollTextRef = useRef(null)

  useEffect(() => {
    if (!showLoader) {
      gsap.from(heroRef.current, {
        opacity: 0,
        duration: 1,
      })

      // Infinite scroll animation
      gsap.to(scrollTextRef.current, {
        xPercent: -50,
        duration: 20,
        repeat: -1,
        ease: 'none',
      })
    }
  }, [showLoader])

  return (
    <>
      {showLoader && <IntroLoader onComplete={() => setShowLoader(false)} />}

      <div ref={heroRef} className='min-h-screen bg-background overflow-hidden'>
        {/* Scrolling Text */}
        <div className='py-20 border-y border-text/10 overflow-hidden'>
          <div
            ref={scrollTextRef}
            className='flex gap-12 whitespace-nowrap'
          >
            {[...Array(10)].map((_, i) => (
              <h2
                key={i}
                className='text-8xl md:text-9xl font-[itcBold] text-text/10'
              >
                DEVELOPER • DESIGNER • CREATOR •
              </h2>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Left */}
            <div className='space-y-8'>
              <div className='space-y-6'>
                <h1 className='text-6xl md:text-8xl font-[itcBold] text-text leading-tight'>
                  Mann
                  <br />
                  <span className='text-primary'>Dalsaniya</span>
                </h1>
                <p className='text-2xl text-text/60'>
                  Full-Stack Developer
                </p>
              </div>

              <p className='text-lg text-text/80 leading-relaxed max-w-lg'>
                Transforming complex problems into elegant digital solutions. 
                Specializing in React, Next.js, and scalable backend architectures.
              </p>

              <div className='flex gap-4'>
                <Link
                  href='/#works'
                  className='group relative px-8 py-4 bg-primary text-background font-[itcBold] rounded-full overflow-hidden'
                >
                  <span className='relative z-10'>View Work</span>
                  <div className='absolute inset-0 bg-background transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left' />
                  <span className='absolute inset-0 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity'>
                    View Work
                  </span>
                </Link>
                <Link
                  href='/#contact'
                  className='px-8 py-4 border-2 border-text/20 text-text font-[itcBold] rounded-full hover:border-primary hover:text-primary transition-all'
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className='relative'>
              <div className='relative w-full h-[600px] rounded-[3rem] overflow-hidden'>
                <Image
                  src='/images/my-photo.jpg'
                  alt='Mann Dalsaniya'
                  fill
                  className='object-cover grayscale hover:grayscale-0 transition-all duration-700'
                  priority
                />
              </div>
              
              {/* Floating Badge */}
              <div className='absolute -bottom-6 -left-6 bg-background border-2 border-text/10 rounded-2xl p-6 shadow-2xl'>
                <p className='text-4xl font-[itcBold] text-primary mb-1'>3+</p>
                <p className='text-sm text-text/60'>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
