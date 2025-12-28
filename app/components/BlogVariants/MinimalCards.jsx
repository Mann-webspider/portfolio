'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MinimalCards({ initialPosts, allTags }) {
  const [filteredPosts, setFilteredPosts] = useState(initialPosts)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('')

  useEffect(() => {
    filterPosts()
  }, [searchQuery, selectedTag])

  const filterPosts = () => {
    let filtered = initialPosts
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    if (selectedTag) {
      filtered = filtered.filter(post => post.tags?.includes(selectedTag))
    }
    setFilteredPosts(filtered)
  }

  return (
    <>
      {/* Minimal Search */}
      <div className='mb-16 max-w-2xl mx-auto'>
        <input
          type='text'
          placeholder='What are you looking for?'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full bg-transparent border-b-2 border-text/20 py-4 text-2xl outline-none focus:border-primary text-text placeholder:text-text/40 transition-colors'
        />
      </div>

      {/* Tag Pills */}
      <div className='flex flex-wrap gap-3 justify-center mb-16'>
        <button
          onClick={() => setSelectedTag('')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!selectedTag ? 'bg-text text-background' : 'bg-transparent border border-text/20 text-text hover:border-text'}`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedTag === tag ? 'bg-text text-background' : 'bg-transparent border border-text/20 text-text hover:border-text'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Minimal Grid */}
      <div className='max-w-4xl mx-auto space-y-20'>
        {filteredPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className='block group'>
            <article className='space-y-4'>
              <time className='text-xs text-text/50 uppercase tracking-widest'>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>

              <h2 className='text-4xl md:text-5xl font-[itcBold] text-text group-hover:text-primary transition-colors leading-tight'>
                {post.title}
              </h2>

              <p className='text-xl text-text/70 leading-relaxed'>
                {post.description}
              </p>

              <div className='flex items-center gap-3 pt-4'>
                {post.tags?.slice(0, 3).map((tag) => (
                  <span key={tag} className='text-xs text-text/50 uppercase tracking-wider'>
                    {tag}
                  </span>
                ))}
              </div>

              <div className='w-16 h-0.5 bg-primary transform origin-left group-hover:scale-x-150 transition-transform duration-500' />
            </article>
          </Link>
        ))}
      </div>
    </>
  )
}
