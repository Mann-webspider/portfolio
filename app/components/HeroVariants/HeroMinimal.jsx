'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import IntroLoader from '../IntroLoader'
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'


export default function HeroMinimal() {
  const [showLoader, setShowLoader] = useState(true)
  const heroRef = useRef(null)

  useEffect(() => {
    if (!showLoader) {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      })
    }
  }, [showLoader])

  return (
    <>
      {showLoader && <IntroLoader onComplete={() => setShowLoader(false)} />}

      <div ref={heroRef} className='min-h-screen bg-background flex items-center'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <div className='space-y-8'>
              <div className='space-y-4'>
                <p className='text-text/60 text-sm uppercase tracking-widest'>
                  Full-Stack Developer
                </p>
                <h1 className='text-text font-[itcBold]'>
                  <span className='block text-5xl md:text-7xl lg:text-8xl mb-4'>
                    Mann
                  </span>
                  <span className='block text-5xl md:text-7xl lg:text-8xl text-primary'>
                    Dalsaniya
                  </span>
                </h1>
              </div>

              <p className='text-text/80 text-lg md:text-xl max-w-lg leading-relaxed'>
                Crafting digital experiences with clean code and creative solutions.
                Turning ideas into reality, one pixel at a time.
              </p>

              <div className='flex gap-6 pt-4'>
                <Link
                  href='/#works'
                  className='px-8 py-4 bg-primary text-background font-[itcBold] rounded-full hover:bg-primary/90 transition-all hover:scale-105'
                >
                  View Work
                </Link>
                <Link
                  href='/#contact'
                  className='px-8 py-4 border border-text/20 text-text font-[itcBold] rounded-full hover:border-primary hover:text-primary transition-all'
                >
                  Get in Touch
                </Link>
              </div>

              {/* Social Links */}
              <div className='flex gap-6 pt-8'>
                {[
                 { href: "https://twitter.com/MannDalsaniya07", icon: FaTwitter  },
                                 { href: "https://www.instagram.com/thenixshelby/", icon: FaInstagram  },
                                 { href: "https://github.com/Mann-webspider", icon: FaGithub } ,
                                 { href: "https://linkedin.com/in/manndalsaniya", icon: FaLinkedin } ,
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    className='text-text/60 hover:text-primary transition-colors text-sm'
                  >
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className='relative'>
              <div className='relative w-full h-[600px] rounded-3xl overflow-hidden'>
                <Image
                  src='/images/my-photo.jpg'
                  alt='Mann Dalsaniya'
                  fill
                  className='object-cover'
                  priority
                />
              </div>
              {/* Decorative Element */}
              <div className='absolute -z-10 top-10 right-10 w-full h-full border-2 border-primary/20 rounded-3xl' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
