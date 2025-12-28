import { getAllProjects, getProjectBySlug } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import ImageLightbox from '@/app/components/ImageLightbox'

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) return {}

  return {
    title: `${project.title} | Mann Dalsaniya`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <article className='min-h-screen bg-background py-12 md:py-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12'>
        {/* Back Button */}
        <Link 
          href='/projects'
          className='text-sm text-text/60 hover:text-primary transition-colors mb-6 md:mb-8 inline-flex items-center gap-2'
        >
          <span>←</span>
          <span>Back to Projects</span>
        </Link>

        {/* Header */}
        <header className='mb-12 md:mb-16'>
          <div className='flex flex-wrap items-center gap-3 mb-4'>
            <span className='px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-bold'>
              {project.status}
            </span>
            <span className='text-sm md:text-base text-text/60'>
              {project.category} • {project.year}
            </span>
          </div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[itcBold] text-text mb-4 md:mb-6 leading-tight'>
            {project.title}
          </h1>

          <p className='text-lg sm:text-xl md:text-2xl text-text/70 mb-6 md:mb-8'>
            {project.tagline}
          </p>

          {/* Links */}
          <div className='flex flex-col sm:flex-row gap-3 md:gap-4'>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target='_blank'
                className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-full hover:bg-primary/90 transition-all text-sm md:text-base'
              >
                <FaExternalLinkAlt className='text-sm' />
                Live Demo
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target='_blank'
                className='inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-text/20 text-text font-bold rounded-full hover:border-primary transition-all text-sm md:text-base'
              >
                <FaGithub className='text-sm' />
                View Code
              </Link>
            )}
          </div>

          {/* Tags */}
          <div className='flex flex-wrap gap-2 mt-6'>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className='px-3 md:px-4 py-1.5 md:py-2 bg-text/5 text-text rounded-full text-xs md:text-sm'
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Image */}
        {project.thumbnail && (
          <div className='relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden mb-12 md:mb-16'>
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className='object-cover'
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px'
            />
          </div>
        )}

        {/* Overview */}
        <section className='mb-12 md:mb-16'>
          <h2 className='text-2xl md:text-3xl font-[itcBold] text-text mb-4 md:mb-6'>
            Overview
          </h2>
          <p className='text-lg md:text-xl text-text/80 leading-relaxed'>
            {project.overview}
          </p>
        </section>

        {/* Metrics */}
        {project.metrics && (
          <section className='grid grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 p-6 md:p-8 bg-text/5 rounded-2xl md:rounded-3xl'>
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className='text-center'>
                <p className='text-2xl sm:text-3xl md:text-4xl font-[itcBold] text-primary mb-1 md:mb-2'>
                  {value}
                </p>
                <p className='text-xs md:text-sm text-text/60 uppercase tracking-wider'>
                  {key}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Features */}
        <section className='mb-12 md:mb-16'>
          <h2 className='text-2xl md:text-3xl font-[itcBold] text-text mb-4 md:mb-6'>
            Key Features
          </h2>
          <ul className='grid sm:grid-cols-2 gap-3 md:gap-4'>
            {project.features.map((feature, index) => (
              <li key={index} className='flex items-start gap-3 text-base md:text-lg text-text/80'>
                <span className='text-primary mt-1 flex-shrink-0'>✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className='mb-12 md:mb-16'>
          <h2 className='text-2xl md:text-3xl font-[itcBold] text-text mb-4 md:mb-6'>
            Tech Stack
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {Object.entries(project.techStack).map(([category, techs]) => (
              <div key={category}>
                <h3 className='text-base md:text-lg font-[itcBold] text-text mb-3 capitalize'>
                  {category}
                </h3>
                <ul className='space-y-2'>
                  {techs.map((tech) => (
                    <li key={tech} className='text-sm md:text-base text-text/70 flex items-center gap-2'>
                      <span className='w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0' />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots with Lightbox */}
        {project.images && project.images.length > 0 && (
          <section className='mb-12 md:mb-16'>
            <h2 className='text-2xl md:text-3xl font-[itcBold] text-text mb-4 md:mb-6'>
              Screenshots
            </h2>
            <ImageLightbox images={project.images} projectTitle={project.title} />
          </section>
        )}

        {/* Challenges & Solutions */}
        <section className='grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16'>
          <div>
            <h2 className='text-2xl md:text-3xl font-[itcBold] text-text mb-4 md:mb-6'>
              Challenges
            </h2>
            <ul className='space-y-4'>
              {project.challenges.map((challenge, index) => (
                <li key={index} className='flex items-start gap-3 text-base md:text-lg text-text/80'>
                  <span className='text-primary mt-1 flex-shrink-0'>⚡</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-2xl md:text-3xl font-[itcBold] text-text mb-4 md:mb-6'>
              Solutions
            </h2>
            <ul className='space-y-4'>
              {project.solutions.map((solution, index) => (
                <li key={index} className='flex items-start gap-3 text-base md:text-lg text-text/80'>
                  <span className='text-primary mt-1 flex-shrink-0'>✓</span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className='pt-8 md:pt-12 border-t border-text/10'>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 text-primary font-[itcBold] text-sm md:text-base hover:gap-3 transition-all'
          >
            <span>←</span>
            <span>View All Projects</span>
          </Link>
        </footer>
      </div>
    </article>
  )
}
