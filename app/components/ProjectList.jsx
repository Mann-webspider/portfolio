'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'

/**
 * Typographic project index.
 * Big type rows, hairline dividers, one accent on hover.
 * On desktop a thumbnail follows the cursor for the hovered row.
 */
export default function ProjectList({ projects }) {
  const [active, setActive] = useState(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const follower = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const apply = () => setIsDesktop(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (!isDesktop || !follower.current) return
    const xTo = gsap.quickTo(follower.current, 'x', { duration: 0.7, ease: 'power3' })
    const yTo = gsap.quickTo(follower.current, 'y', { duration: 0.7, ease: 'power3' })
    const move = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [isDesktop])

  return (
    <div className='relative'>
      <ul className='border-b border-text/15'>
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className='group flex items-baseline justify-between gap-6 border-t border-text/15 py-7 md:py-9 transition-[padding] duration-500 ease-out hover:lg:pl-6'
            >
              <span className='flex min-w-0 items-baseline gap-4 md:gap-8'>
                <span className='hidden shrink-0 tabular-nums text-step--1 text-text/35 md:inline'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className='truncate font-[itcBold] uppercase leading-none text-step-2 text-text transition-colors duration-300 group-hover:text-primary'>
                  {project.title}
                </span>
              </span>
              <span className='flex shrink-0 items-baseline gap-4 md:gap-8'>
                <span className='hidden tabular-nums text-step--1 text-text/50 lg:inline'>
                  {project.category}
                </span>
                <span className='tabular-nums text-step--1 text-text/40'>
                  {project.year}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {isDesktop && (
        <div ref={follower} className='pointer-events-none fixed left-0 top-0 z-40'>
          <div
            className={`relative h-56 w-80 -translate-x-1/2 -translate-y-1/2 overflow-hidden transition-[opacity,transform] duration-500 ease-out ${
              active !== null ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
          >
            {projects.map((project, i) => (
              <Image
                key={project.slug}
                src={project.thumbnail}
                alt=''
                fill
                sizes='320px'
                className={`object-cover transition-opacity duration-300 ${
                  active === i ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
