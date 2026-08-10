import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import PostList from '@/app/components/PostList'

export const metadata = {
  title: 'Blog | Mann - Full Stack Developer',
  description: 'Technical articles, tutorials, and thoughts on web development',
}

export default async function BlogPage() {
  const allPosts = await getAllPosts()

  const tags = new Set()
  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag))
  })
  const allTags = Array.from(tags).sort()

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
            Writing
          </h1>
          <p className='mt-[var(--space-s)] max-w-2xl text-step-0 text-text/60'>
            Thoughts on development, design, and everything in between.
          </p>
        </header>

        <PostList initialPosts={allPosts} allTags={allTags} />
      </div>
    </div>
  )
}
