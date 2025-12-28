'use client'

export default function AboutTimeline() {
  const timeline = [
    {
      year: '2022',
      title: 'Started Freelancing',
      description: 'Began building web applications for clients while mastering modern frameworks.',
    },
    {
      year: '2023',
      title: 'DevOps Journey',
      description: 'Dove deep into containerization, Kubernetes, and cloud infrastructure.',
    },
    {
      year: '2024',
      title: 'Enterprise Projects',
      description: 'Developed invoice systems, quiz platforms, and real-time communication tools.',
    },
    {
      year: '2025',
      title: 'AI & MBA',
      description: 'Exploring AI/ML integration and pursuing business management education.',
    },
  ]

  return (
    <section
      id='about'
      className='min-h-screen bg-background text-text py-20 px-6 md:px-12 lg:px-20'
    >
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <div className='mb-20'>
          <p className='text-sm text-text/60 uppercase tracking-widest mb-4'>
            About Me
          </p>
          <h2 className='text-5xl md:text-7xl font-[itcBold] leading-tight mb-8'>
            My Journey as a
            <br />
            <span className='text-primary'>Developer</span>
          </h2>
          <p className='text-2xl text-text/70 max-w-3xl'>
            From building my first website to deploying enterprise applications, 
            here's how I evolved into a full-stack developer.
          </p>
        </div>

        {/* Timeline */}
        <div className='space-y-0'>
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className='group relative border-l-2 border-text/20 pl-12 pb-16 last:pb-0 hover:border-primary transition-colors'
            >
              {/* Dot */}
              <div className='absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-background border-2 border-text/20 group-hover:border-primary group-hover:bg-primary transition-all' />
              
              {/* Content */}
              <div className='space-y-4'>
                <div className='flex items-baseline gap-4'>
                  <span className='text-5xl font-[itcBold] text-primary/20 group-hover:text-primary/40 transition-colors'>
                    {item.year}
                  </span>
                  <h3 className='text-3xl font-[itcBold] text-text group-hover:text-primary transition-colors'>
                    {item.title}
                  </h3>
                </div>
                <p className='text-lg text-text/70 leading-relaxed max-w-2xl'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className='mt-20 pt-12 border-t border-text/10'>
          <h3 className='text-2xl font-[itcBold] mb-8'>Core Competencies</h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              { title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
              { title: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
              { title: 'DevOps', skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'] },
              { title: 'Tools', skills: ['Git', 'VS Code', 'Figma', 'Postman'] },
            ].map((category) => (
              <div key={category.title} className='space-y-4'>
                <h4 className='text-lg font-[itcBold] text-text'>{category.title}</h4>
                <ul className='space-y-2'>
                  {category.skills.map((skill) => (
                    <li key={skill} className='text-text/70 flex items-center gap-2'>
                      <span className='w-1.5 h-1.5 rounded-full bg-primary' />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
