import { getAllProjects } from '@/lib/projects'
import ProjectCard from '../components/ProjectCard'
import Link from 'next/link'

export const metadata = {
  title: 'Projects | Mann Dalsaniya',
  description: 'Explore my portfolio of web development projects',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className='min-h-screen bg-background py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-12 md:mb-16'>
          <Link 
            href='/' 
            className='text-sm text-text/60 hover:text-primary transition-colors mb-4 md:mb-6 inline-flex items-center gap-2'
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[itcBold] mb-4 md:mb-6 text-text'>
            Projects
          </h1>
          <p className='text-lg md:text-xl text-text/70 max-w-2xl'>
            A collection of my work in web development, from full-stack applications to UI experiments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className='text-center py-20'>
            <p className='text-xl text-text/60'>No projects yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
