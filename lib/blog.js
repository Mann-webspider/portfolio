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
        readingTime:Math.ceil(fileContent.split(' ').length / 200),
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
      h4: ({ children }) => (
        <h4 className='text-2xl font-semibold mt-6 mb-3'>{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className='text-xl font-semibold mt-5 mb-2'>{children}</h5>
      ),
      p: ({ children }) => (
        <p className='text-lg leading-relaxed mb-6'>{children}</p>
      ),
      a: ({ href, children }) => (
        <a
          href={href}
          className='text-primary underline hover:text-primary/80 transition-colors font-medium'
          
          rel='noopener noreferrer'
        >
          {children}
        </a>
      ),
      blockquote: ({ children }) => (
        <blockquote className='border-l-4 border-primary pl-6 py-3 my-8 italic text-xl bg-primary/5 rounded-r-lg'>
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
        <pre className='bg-gray-800 rounded-xl p-6 overflow-x-auto my-8 text-sm border border-text/10'>
          {children}
        </pre>
      ),
      ul: ({ children }) => (
        <ul className='space-y-3 mb-6 text-xl list-none'>
          {children}
        </ul>
      ),
      ol: ({ children }) => (
        <ol className='space-y-3 mb-6 text-xl list-none'>
          {children}
        </ol>
      ),
      li: ({ children }) => (
  <li className='flex items-start gap-3 text-text/90'>
    <span className='text-primary mt-1.5 flex-shrink-0'>•</span>
    <span className='flex-1'>{children}</span>
  </li>
),
      
      // Enhanced Table Components
      table: ({ children }) => (
        <div className='overflow-x-auto my-10 -mx-6 md:mx-0 not-prose'>
          <div className='inline-block min-w-full align-middle'>
            <div className='overflow-hidden rounded-lg border border-text/10 shadow-lg'>
              <table className='min-w-full divide-y divide-text/10'>
                {children}
              </table>
            </div>
          </div>
        </div>
      ),
      thead: ({ children }) => (
        <thead className='bg-primary/20'>
          {children}
        </thead>
      ),
      tbody: ({ children }) => (
        <tbody className='bg-text/5 divide-y divide-text/10'>
          {children}
        </tbody>
      ),
      tr: ({ children }) => (
        <tr className='hover:bg-text/10 transition-colors duration-150'>
          {children}
        </tr>
      ),
      th: ({ children }) => (
        <th className='px-6 py-4 text-left text-sm font-bold text-text uppercase tracking-wider'>
          {children}
        </th>
      ),
      td: ({ children }) => (
        <td className='px-6 py-4 text-base text-text/90 whitespace-nowrap'>
          {children}
        </td>
      ),
      
      hr: () => (
        <hr className='border-text/20 my-10' />
      ),
      
      img: ({ src, alt }) => (
        <figure className='my-10 -mx-6 md:mx-0 not-prose'>
          <div className='relative w-full h-[400px] rounded-none md:rounded-xl overflow-hidden'>
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
      
      // Support for emphasis
      strong: ({ children }) => (
        <strong className='font-bold text-text'>{children}</strong>
      ),
      em: ({ children }) => (
        <em className='italic text-text/90'>{children}</em>
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
