import Link from 'next/link'
import { getAllProjects } from '@/lib/projects'
import ProjectList from './ProjectList'

export default function Works() {
  const projects = getAllProjects()

  return (
    <section id='works' className='min-h-screen bg-background py-[var(--space-2xl)] rail'>
      <div className='mx-auto max-w-[1600px]'>
        <header className='mb-[var(--space-l)] flex items-end justify-between gap-6'>
          <h2 className='font-[itcBold] uppercase leading-none text-step-3 text-text'>
            Selected Work
          </h2>
          <Link
            href='/projects'
            className='group hidden shrink-0 items-center gap-2 text-step--1 uppercase tracking-wider text-text/60 transition-colors hover:text-primary md:inline-flex'
          >
            All projects
            <span className='transition-transform duration-300 group-hover:translate-x-1'>→</span>
          </Link>
        </header>

        <ProjectList projects={projects} />

        <Link
          href='/projects'
          className='group mt-[var(--space-m)] inline-flex items-center gap-2 text-step--1 uppercase tracking-wider text-text/60 transition-colors hover:text-primary md:hidden'
        >
          All projects
          <span className='transition-transform duration-300 group-hover:translate-x-1'>→</span>
        </Link>
      </div>
    </section>
  )
}
