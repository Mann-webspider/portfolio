import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import Image from 'next/image'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export async function getAllPosts() {
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory, { recursive: true })
    return []
  }

  const files = fs.readdirSync(contentDirectory)
  
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(contentDirectory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)
      
      return {
        slug: file.replace('.mdx', ''),
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        description: data.description || '',
        tags: data.tags || [],
        published: data.published !== false,
        author: data.author || 'Mann',
        image: data.image || null,
      }
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return posts
}

export async function getPostBySlug(slug) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8')
  
  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: 'github-dark',
              keepBackground: true,
            },
          ],
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                className: ['anchor'],
              },
            },
          ],
        ],
      },
    },
    components: {
      h1: ({ children }) => (
        <h1 className='text-5xl font-bold mt-12 mb-6 leading-tight'>{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className='text-4xl font-bold mt-10 mb-5 leading-tight'>{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className='text-3xl font-semibold mt-8 mb-4'>{children}</h3>
      ),
      p: ({ children }) => (
        <p className='text-xl leading-relaxed mb-6'>{children}</p>
      ),
      a: ({ href, children }) => (
        <a
          href={href}
          className='text-primary underline hover:text-primary/80 transition-colors'
          target='_blank'
          rel='noopener noreferrer'
        >
          {children}
        </a>
      ),
      blockquote: ({ children }) => (
        <blockquote className='border-l-4 border-primary pl-6 py-2 my-8 italic text-xl bg-primary/5'>
          {children}
        </blockquote>
      ),
      code: ({ children, className }) => {
        const isInline = !className
        return isInline ? (
          <code className='bg-gray-800 px-2 py-1 rounded text-sm font-mono text-primary'>
            {children}
          </code>
        ) : (
          <code className={className}>{children}</code>
        )
      },
      pre: ({ children }) => (
        <pre className='bg-gray-900 rounded-xl p-6 overflow-x-auto my-8 text-sm'>
          {children}
        </pre>
      ),
      ul: ({ children }) => (
        <ul className='list-disc list-inside space-y-3 mb-6 text-xl'>{children}</ul>
      ),
      ol: ({ children }) => (
        <ol className='list-decimal list-inside space-y-3 mb-6 text-xl'>{children}</ol>
      ),
      li: ({ children }) => <li className='ml-4'>{children}</li>,
      img: ({ src, alt }) => (
        <figure className='my-10 -mx-6 md:mx-0'>
          <div className='relative w-full h-100 rounded-none md:rounded-xl overflow-hidden'>
            <Image
              src={src}
              alt={alt || 'Blog image'}
              fill
              className='object-cover'
            />
          </div>
          {alt && (
            <figcaption className='text-center text-sm text-text/60 mt-4 italic px-6 md:px-0'>
              {alt}
            </figcaption>
          )}
        </figure>
      ),
    },
  })

  return {
    content,
    frontmatter: {
      ...frontmatter,
      slug,
    },
  }
}
