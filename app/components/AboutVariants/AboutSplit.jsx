'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSplit() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      gsap.from(textRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id='about'
      className='min-h-screen bg-background text-text py-20 px-6 md:px-12 lg:px-20'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left - Image */}
          <div ref={imageRef} className='relative'>
            <div className='relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden'>
              <Image
                src='/images/my-photo.jpg'
                alt='Mann Dalsaniya'
                fill
                className='object-cover grayscale hover:grayscale-0 transition-all duration-700'
              />
            </div>
            {/* Decorative Element */}
            <div className='absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-3xl -z-10' />
          </div>

          {/* Right - Content */}
          <div ref={textRef} className='space-y-8'>
            <div className='space-y-4'>
              <p className='text-sm text-text/60 uppercase tracking-widest'>
                About Me
              </p>
              <h2 className='text-5xl md:text-6xl lg:text-7xl font-[itcBold] leading-tight'>
                Building the
                <br />
                <span className='text-primary'>Future of Web</span>
              </h2>
            </div>

            <div className='space-y-6 text-lg text-text/80 leading-relaxed'>
              <p>
                I'm a <strong className='text-text'>full-stack developer</strong> passionate about creating 
                innovative digital solutions. With expertise in modern web technologies, I transform 
                complex problems into elegant, scalable applications.
              </p>
              <p>
                Specialized in <strong className='text-primary'>React, Next.js, Node.js</strong>, and 
                cloud infrastructure. I've built everything from real-time communication platforms to 
                enterprise-grade invoice systems.
              </p>
              <p>
                Currently exploring <strong className='text-text'>AI/ML integration</strong>, 
                advanced DevOps practices, and pursuing an MBA to bridge technology with business strategy.
              </p>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-6 pt-6 border-t border-text/10'>
              {[
                { label: 'Projects', value: '50+' },
                { label: 'Experience', value: '3+ Yrs' },
                { label: 'Clients', value: '30+' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className='text-4xl font-[itcBold] text-primary mb-2'>
                    {stat.value}
                  </p>
                  <p className='text-sm text-text/60'>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className='flex gap-4 pt-4'>
              <Link
                href='/#contact'
                className='px-8 py-4 bg-primary text-background font-[itcBold] rounded-full hover:bg-primary/90 transition-all'
              >
                Get in Touch
              </Link>
              <Link
                href='/resume.pdf'
                className='px-8 py-4 border-2 border-text/20 text-text font-[itcBold] rounded-full hover:border-primary transition-all'
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
