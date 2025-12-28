import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({ project }) {
  return (
    <Link 
      href={`/projects/${project.slug}`}
      className='group block'
    >
      <div className='bg-text/5 border border-text/10 rounded-3xl overflow-hidden hover:border-primary transition-all duration-300'>
        {/* Thumbnail */}
        <div className='relative h-64 overflow-hidden'>
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className='object-cover group-hover:scale-110 transition-transform duration-500'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent' />
          
          {/* Status Badge */}
          <div className='absolute top-4 right-4 px-3 py-1 bg-primary text-background text-xs font-bold rounded-full'>
            {project.status}
          </div>
        </div>

        {/* Content */}
        <div className='p-6 space-y-4'>
          <div>
            <p className='text-xs text-text/60 uppercase tracking-wider mb-2'>
              {project.category} • {project.year}
            </p>
            <h3 className='text-2xl font-[itcBold] text-text group-hover:text-primary transition-colors mb-2'>
              {project.title}
            </h3>
            <p className='text-sm text-text/70 line-clamp-2'>
              {project.tagline}
            </p>
          </div>

          {/* Tags */}
          <div className='flex flex-wrap gap-2'>
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className='text-xs px-3 py-1 bg-primary/10 text-primary rounded-full'
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Project */}
          <div className='flex items-center gap-2 text-primary font-[itcBold] pt-2'>
            <span>View Project</span>
            <span className='transform group-hover:translate-x-2 transition-transform'>
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
