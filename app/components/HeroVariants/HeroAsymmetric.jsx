'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import IntroLoader from '../IntroLoader'

export default function HeroAsymmetric() {
  const [showLoader, setShowLoader] = useState(true)
  const heroRef = useRef(null)

  useEffect(() => {
    if (!showLoader) {
      gsap.from('.hero-item', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
      })
    }
  }, [showLoader])

  return (
    <>
      {showLoader && <IntroLoader onComplete={() => setShowLoader(false)} />}

      <div ref={heroRef} className='min-h-screen bg-background p-6 md:p-12 lg:p-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-12 gap-6 min-h-[80vh]'>
            {/* Large Name Block */}
            <div className='col-span-12 lg:col-span-7 hero-item'>
              <div className='h-full bg-primary/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between'>
                <div>
                  <p className='text-sm text-text/60 mb-6 uppercase tracking-widest'>
                    Portfolio 2025
                  </p>
                  <h1 className='font-[itcBold] text-text leading-none'>
                    <span className='block text-6xl md:text-8xl lg:text-9xl'>
                      MANN
                    </span>
                    <span className='block text-6xl md:text-8xl lg:text-9xl text-primary'>
                      DALSANIYA
                    </span>
                  </h1>
                </div>
                <p className='text-xl text-text/80 max-w-lg'>
                  Full-Stack Developer specializing in modern web technologies
                </p>
              </div>
            </div>

            {/* Image Block */}
            <div className='col-span-12 lg:col-span-5 hero-item'>
              <div className='relative h-[400px] lg:h-full rounded-3xl overflow-hidden'>
                <Image
                  src='/images/my-photo.jpg'
                  alt='Mann Dalsaniya'
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </div>

            {/* Description Block */}
            <div className='col-span-12 md:col-span-6 lg:col-span-4 hero-item'>
              <div className='h-full bg-text/5 rounded-3xl p-8 flex flex-col justify-between'>
                <div className='space-y-4'>
                  <h3 className='text-2xl font-[itcBold] text-text'>About Me</h3>
                  <p className='text-text/70 leading-relaxed'>
                    Passionate developer with expertise in React, Next.js, and Node.js. 
                    Building scalable solutions that make a difference.
                  </p>
                </div>
                <Link
                  href='/#about'
                  className='text-primary font-[itcBold] flex items-center gap-2 group'
                >
                  Learn More
                  <span className='transform group-hover:translate-x-2 transition-transform'>
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* CTA Block */}
            <div className='col-span-12 md:col-span-6 lg:col-span-4 hero-item'>
              <div className='h-full bg-primary rounded-3xl p-8 flex flex-col justify-between text-background'>
                <div className='space-y-4'>
                  <h3 className='text-2xl font-[itcBold]'>Let's Work Together</h3>
                  <p className='opacity-90'>
                    Have a project in mind? Let's create something amazing.
                  </p>
                </div>
                <Link
                  href='/#contact'
                  className='inline-flex items-center gap-2 px-6 py-3 bg-background text-primary font-[itcBold] rounded-full hover:scale-105 transition-transform w-fit'
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Stats Block */}
            <div className='col-span-12 lg:col-span-4 hero-item'>
              <div className='h-full bg-text/5 rounded-3xl p-8 flex flex-col justify-center'>
                <div className='grid grid-cols-2 gap-6'>
                  {[
                    { label: 'Projects', value: '50+' },
                    { label: 'Clients', value: '30+' },
                    { label: 'Experience', value: '3+ Yrs' },
                    { label: 'Awards', value: '5' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className='text-4xl font-[itcBold] text-primary mb-2'>
                        {stat.value}
                      </p>
                      <p className='text-sm text-text/60'>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
