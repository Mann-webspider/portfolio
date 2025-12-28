'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function IntroLoader({ onComplete }) {
  const loaderRef = useRef(null)
  const leftPanelRef = useRef(null)
  const rightPanelRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.()
      },
    })

    tl.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .to(textRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 0.5,
        delay: 0.5,
      })
      .to(
        leftPanelRef.current,
        {
          xPercent: -100,
          duration: 1.2,
          ease: 'power4.inOut',
        },
        'reveal'
      )
      .to(
        rightPanelRef.current,
        {
          xPercent: 100,
          duration: 1.2,
          ease: 'power4.inOut',
        },
        'reveal'
      )
      .to(loaderRef.current, {
        opacity: 0,
        duration: 0.3,
      })
  }, [onComplete])

  return (
    <div
      ref={loaderRef}
      className='fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background'
    >
      {/* Left Panel */}
      <div
        ref={leftPanelRef}
        className='absolute left-0 top-0 h-full w-1/2 bg-primary'
      />

      {/* Right Panel */}
      <div
        ref={rightPanelRef}
        className='absolute right-0 top-0 h-full w-1/2 bg-[#bfb4a0]'
      />

      {/* Text */}
      <h1
        ref={textRef}
        className='relative z-10 font-[itcBold] text-7xl md:text-9xl tracking-wider text-background'
      >
        HELLO
      </h1>
    </div>
  )
}
