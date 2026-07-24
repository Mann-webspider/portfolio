import { getAllProjects } from '@/lib/projects'
import ProjectList from '../components/ProjectList'
import Link from 'next/link'

export const metadata = {
  title: 'Projects | Mann Dalsaniya',
  description: 'Explore my portfolio of web development projects',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className='min-h-screen bg-background py-[var(--space-2xl)] rail'>
      <div className='mx-auto max-w-[1600px]'>
        <header className='mb-[var(--space-xl)]'>
          <Link
            href='/'
            className='mb-[var(--space-m)] inline-flex items-center gap-2 text-step--1 text-text/60 transition-colors hover:text-primary'
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
          <h1 className='font-[itcBold] uppercase leading-none text-step-4 text-text'>
            Projects
          </h1>
          <p className='mt-[var(--space-s)] max-w-2xl text-step-0 text-text/60'>
            A collection of my work in web development, from full-stack
            applications to UI experiments.
          </p>
        </header>

        {projects.length === 0 ? (
          <p className='py-20 text-step-1 text-text/60'>
            No projects yet. Check back soon.
          </p>
        ) : (
          <ProjectList projects={projects} />
        )}
      </div>
    </div>
  )
}
