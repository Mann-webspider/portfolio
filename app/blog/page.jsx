import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import BlogList from '@/app/components/BlogList'
// Import your chosen variant
// import BlogList from '@/app/components/BlogList' // Original
// import MasonryGrid from '../components/BlogVariants/MasonryGrid'
// import FeaturedGrid from '../components/BlogVariants/FeaturedGrid'
import MagazineLayout from '../components/BlogVariants/MagazineLayout'
// import MinimalCards from '@/app/components/BlogVariants/MinimalCards'
import BentoBox from '../components/BlogVariants/BentoBox'
// Server Component - No loading state needed
export const metadata = {
  title: 'Blog | Mann - Full Stack Developer',
  description: 'Technical articles, tutorials, and thoughts on web development',
}

export default async function BlogPage() {
  // Fetch posts on server - instant, no loading
  const allPosts = await getAllPosts()
  
  // Extract all unique tags
  const tags = new Set()
  allPosts.forEach(post => {
    post.tags?.forEach(tag => tags.add(tag))
  })
  const allTags = Array.from(tags).sort()

  return (
    <div className='min-h-screen bg-background py-20 px-6 md:px-10 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        <header className='mb-16'>
          <Link 
            href='/' 
            className='text-sm text-text/60 hover:text-primary transition-colors mb-4 inline-block'
          >
            ← Back to Home
          </Link>
          <h1 className='text-5xl md:text-6xl font-[itcBold] mb-4 text-text'>Blog</h1>
          <p className='text-xl text-text/70'>
            Thoughts on development, design, and everything in between.
          </p>
        </header>

        {/* Pass data to client component for filtering */}
        <MagazineLayout initialPosts={allPosts} allTags={allTags} />
      </div>
    </div>
  )
}
