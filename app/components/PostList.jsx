'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

/**
 * Typographic blog index.
 * Minimal text-only search + tag filter, big-type rows, hairline dividers.
 */
export default function PostList({ initialPosts, allTags }) {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('')

  const posts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase())
      const matchesTag = !tag || post.tags?.includes(tag)
      return matchesQuery && matchesTag
    })
  }, [initialPosts, query, tag])

  return (
    <div>
      {/* Controls */}
      <div className='mb-[var(--space-l)] flex flex-col gap-[var(--space-s)]'>
        <input
          type='text'
          placeholder='Search writing…'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='w-full max-w-xl border-b border-text/20 bg-transparent py-3 text-step-1 text-text outline-none transition-colors placeholder:text-text/30 focus:border-primary'
        />

        {allTags.length > 0 && (
          <div className='flex flex-wrap items-center gap-x-5 gap-y-2 text-step--1 uppercase tracking-wider'>
            <button
              onClick={() => setTag('')}
              className={`transition-colors ${
                !tag ? 'text-primary' : 'text-text/50 hover:text-text'
              }`}
            >
              All
            </button>
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`transition-colors ${
                  tag === t ? 'text-primary' : 'text-text/50 hover:text-text'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Rows */}
      {posts.length === 0 ? (
        <p className='py-20 text-step-1 text-text/50'>No writing found.</p>
      ) : (
        <ul className='border-b border-text/15'>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className='group flex flex-col gap-3 border-t border-text/15 py-7 transition-[padding] duration-500 ease-out hover:lg:pl-6 md:flex-row md:items-baseline md:justify-between md:gap-10'
              >
                <div className='min-w-0'>
                  <time className='tabular-nums text-step--1 text-text/40'>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                    {post.readingTime ? ` · ${post.readingTime} min` : ''}
                  </time>
                  <h2 className='mt-2 font-[itcBold] uppercase leading-none text-step-2 text-text transition-colors duration-300 group-hover:text-primary'>
                    {post.title}
                  </h2>
                  <p className='mt-3 max-w-2xl text-step-0 text-text/60'>
                    {post.description}
                  </p>
                </div>
                {post.tags?.length > 0 && (
                  <span className='shrink-0 text-step--1 uppercase tracking-wider text-text/40'>
                    {post.tags.slice(0, 2).join(' / ')}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
