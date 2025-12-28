'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import IntroLoader from '../IntroLoader'

export default function HeroCentered() {
  const [showLoader, setShowLoader] = useState(true)
  const heroRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    if (!showLoader) {
      const tl = gsap.timeline()
      tl.from(heroRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      }).from(
        imageRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out',
        },
        '-=0.8'
      )
    }
  }, [showLoader])

  return (
    <>
      {showLoader && <IntroLoader onComplete={() => setShowLoader(false)} />}

      <div className='min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center'>
        <div ref={heroRef} className='max-w-5xl space-y-12'>
          {/* Image */}
          <div ref={imageRef} className='flex justify-center'>
            <div className='relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden ring-4 ring-primary/20'>
              <Image
                src='/images/my-photo.jpg'
                alt='Mann Dalsaniya'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>

          {/* Name */}
          <h1 className='font-[itcBold] text-text'>
            <span className='block text-2xl md:text-3xl text-text/60 mb-2'>
              Hi, I'm
            </span>
            <span className='block text-6xl md:text-8xl lg:text-9xl'>
              Mann Dalsaniya
            </span>
          </h1>

          {/* Description */}
          <p className='text-xl md:text-2xl text-text/70 max-w-2xl mx-auto leading-relaxed'>
            A full-stack developer crafting beautiful, functional web experiences
          </p>

          {/* CTA */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
            <Link
              href='/#works'
              className='px-10 py-4 bg-text text-background font-[itcBold] rounded-full hover:scale-105 transition-transform'
            >
              Explore Work
            </Link>
            <Link
              href='/#contact'
              className='px-10 py-4 border-2 border-text/20 text-text font-[itcBold] rounded-full hover:border-text transition-all'
            >
              Let's Talk
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className='pt-16 flex flex-col items-center gap-4'>
            <span className='text-xs text-text/40 uppercase tracking-widest'>
              Scroll to explore
            </span>
            <div className='w-6 h-10 border-2 border-text/20 rounded-full flex justify-center'>
              <div className='w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
