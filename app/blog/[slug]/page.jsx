import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) return {}

  return {
    title: `${post.frontmatter.title} | Mann's Blog`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      images: post.frontmatter.image ? [post.frontmatter.image] : [],
    },
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className='min-h-screen bg-background py-20'>
      <div className='max-w-5xl mx-auto px-6'>
        {/* Back Button */}
        <Link 
          href='/blog'
          className='text-sm text-text/60 hover:text-primary transition-colors mb-8 inline-block'
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className='mb-12'>
          <time className='text-sm text-text/60 uppercase tracking-wider'>
            {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <h1 className='text-5xl md:text-6xl font-[itcBold] mt-4 mb-6 leading-tight text-text'>
            {post.frontmatter.title}
          </h1>
          <p className='text-xl text-text/70 leading-relaxed'>
            {post.frontmatter.description}
          </p>
          
          {/* Author */}
          {post.frontmatter.author && (
            <div className='flex items-center gap-3 mt-6'>
              <div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center'>
                <span className='text-primary font-bold'>
                  {post.frontmatter.author[0].toUpperCase()}
                </span>
              </div>
              <div>
                <p className='text-sm text-text/80'>{post.frontmatter.author}</p>
              </div>
            </div>
          )}
          
          {/* Tags */}
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className='flex gap-2 flex-wrap mt-6'>
              {post.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className='text-sm px-3 py-1 bg-primary/10 text-primary rounded-full'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Featured Image */}
        {post.frontmatter.image && (
          <div className='mb-12 -mx-6 md:mx-0'>
            <div className='relative w-full h-[400px] md:h-[500px] rounded-none md:rounded-2xl overflow-hidden'>
              <Image
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        )}

        {/* Divider */}
        <hr className='border-text/10 mb-12' />

        {/* Content */}
        <div className='prose prose-lg prose-invert max-w-none prose-headings:text-text prose-p:text-text/90 prose-a:text-primary prose-strong:text-text prose-code:text-primary prose-blockquote:text-text/80 prose-li:text-text/90'>
          {post.content}
        </div>

        {/* Footer */}
        <footer className='mt-16 pt-8 border-t border-text/10'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors'
          >
            <span>←</span>
            <span>Back to all posts</span>
          </Link>
        </footer>
      </div>
    </article>
  )
}
