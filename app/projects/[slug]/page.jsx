import { getAllProjects, getProjectBySlug } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import ImageLightbox from '@/app/components/ImageLightbox'

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({ slug: project.slug }))
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

/* Editorial section: small-caps label in the left rail, content on the right. */
function Section({ label, children, className = '' }) {
  return (
    <section
      className={`grid gap-[var(--space-s)] border-t border-text/15 py-[var(--space-l)] md:grid-cols-[180px_1fr] md:gap-[var(--space-l)] ${className}`}
    >
      <p className='text-step--1 uppercase tracking-widest text-text/40 md:sticky md:top-28 md:self-start'>
        {label}
      </p>
      <div className='min-w-0'>{children}</div>
    </section>
  )
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const all = getAllProjects()
  const idx = all.findIndex((p) => p.slug === slug)
  const next = all[(idx + 1) % all.length]

  return (
    <article className='min-h-screen bg-background text-text'>
      <div className='mx-auto max-w-[1600px] rail py-[var(--space-l)]'>
        {/* Back */}
        <Link
          href='/projects'
          className='inline-flex items-center gap-2 text-step--1 text-text/60 transition-colors hover:text-primary'
        >
          <span>←</span>
          <span>All projects</span>
        </Link>

        {/* Header */}
        <header className='pt-[var(--space-l)]'>
          <p className='flex flex-wrap items-center gap-x-3 gap-y-1 text-step--1 uppercase tracking-wider text-text/50'>
            <span>{project.category}</span>
            <span className='text-text/25'>/</span>
            <span>{project.year}</span>
            {project.status && (
              <>
                <span className='text-text/25'>/</span>
                <span className='text-primary'>{project.status}</span>
              </>
            )}
          </p>

          <h1 className='mt-[var(--space-s)] font-[itcBold] uppercase leading-[0.9] text-step-4 text-text'>
            {project.title}
          </h1>

          <p className='mt-[var(--space-s)] max-w-3xl text-step-1 text-text/60'>
            {project.tagline}
          </p>

          {/* Links + tags */}
          <div className='mt-[var(--space-m)] flex flex-wrap items-center gap-x-8 gap-y-4'>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target='_blank'
                rel='noreferrer'
                className='group inline-flex items-center gap-2 border-b border-primary pb-1 text-step-0 font-[itcBold] uppercase tracking-wide text-primary'
              >
                Live demo
                <span className='transition-transform duration-300 group-hover:translate-x-1'>↗</span>
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target='_blank'
                rel='noreferrer'
                className='group inline-flex items-center gap-2 border-b border-text/30 pb-1 text-step-0 uppercase tracking-wide text-text/70 transition-colors hover:border-primary hover:text-primary'
              >
                View code
                <span className='transition-transform duration-300 group-hover:translate-x-1'>↗</span>
              </Link>
            )}
          </div>

          {project.tags?.length > 0 && (
            <p className='mt-[var(--space-m)] text-step--1 uppercase tracking-wider text-text/40'>
              {project.tags.join('  /  ')}
            </p>
          )}
        </header>

        {/* Hero image */}
        {project.thumbnail && (
          <div className='relative mt-[var(--space-l)] aspect-[16/9] w-full overflow-hidden bg-text/5'>
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              priority
              className='object-cover'
              sizes='(max-width: 1600px) 100vw, 1600px'
            />
          </div>
        )}

        {/* Metrics */}
        {project.metrics && (
          <div className='mt-[var(--space-l)] flex flex-wrap gap-x-[var(--space-xl)] gap-y-[var(--space-m)] border-y border-text/15 py-[var(--space-l)]'>
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key}>
                <p className='font-[itcBold] leading-none text-step-3 text-primary'>{value}</p>
                <p className='mt-2 text-step--1 uppercase tracking-wider text-text/50'>
                  {key.replace(/_/g, ' ')}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Overview */}
        {project.overview && (
          <Section label='Overview'>
            <p className='max-w-3xl text-step-1 leading-relaxed text-text/85'>
              {project.overview}
            </p>
          </Section>
        )}

        {/* Features */}
        {project.features?.length > 0 && (
          <Section label='Features'>
            <ul>
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className='flex items-baseline gap-5 border-b border-text/10 py-4 text-step-0 text-text/85'
                >
                  <span className='shrink-0 tabular-nums text-step--1 text-primary/70'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Tech stack */}
        {project.techStack && (
          <Section label='Stack'>
            <div className='grid grid-cols-2 gap-x-[var(--space-m)] gap-y-[var(--space-m)] md:grid-cols-3'>
              {Object.entries(project.techStack).map(([category, techs]) => (
                <div key={category}>
                  <h3 className='mb-3 text-step--1 uppercase tracking-wider text-text/40'>
                    {category}
                  </h3>
                  <ul className='space-y-1.5'>
                    {techs.map((tech) => (
                      <li key={tech} className='text-step-0 text-text/80'>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Challenges & Solutions */}
        {(project.challenges?.length > 0 || project.solutions?.length > 0) && (
          <Section label='Process'>
            <div className='grid gap-[var(--space-l)] md:grid-cols-2'>
              {project.challenges?.length > 0 && (
                <div>
                  <h3 className='mb-5 text-step--1 uppercase tracking-wider text-text/40'>
                    Challenges
                  </h3>
                  <ul className='space-y-4'>
                    {project.challenges.map((c, i) => (
                      <li key={i} className='text-step-0 leading-relaxed text-text/80'>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.solutions?.length > 0 && (
                <div>
                  <h3 className='mb-5 text-step--1 uppercase tracking-wider text-primary/70'>
                    Solutions
                  </h3>
                  <ul className='space-y-4'>
                    {project.solutions.map((s, i) => (
                      <li key={i} className='text-step-0 leading-relaxed text-text/80'>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Screenshots */}
        {project.images?.length > 0 && (
          <Section label='Gallery'>
            <ImageLightbox images={project.images} projectTitle={project.title} />
          </Section>
        )}

        {/* Next project */}
        <Link
          href={`/projects/${next.slug}`}
          className='group mt-[var(--space-l)] flex items-end justify-between gap-6 border-t border-text/15 py-[var(--space-l)]'
        >
          <span>
            <span className='text-step--1 uppercase tracking-widest text-text/40'>
              Next project
            </span>
            <span className='mt-2 block font-[itcBold] uppercase leading-none text-step-3 text-text transition-colors duration-300 group-hover:text-primary'>
              {next.title}
            </span>
          </span>
          <span className='shrink-0 pb-2 text-step-2 text-text/40 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary'>
            →
          </span>
        </Link>
      </div>
    </article>
  )
}
