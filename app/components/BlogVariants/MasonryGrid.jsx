'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MasonryGrid({ initialPosts, allTags }) {
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
      {/* Search & Filters */}
      <div className='mb-12 space-y-6'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search posts...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full bg-text/5 border border-text/20 rounded-xl px-6 py-4 text-lg outline-none focus:border-primary transition-colors text-text placeholder:text-text/40'
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className='absolute right-4 top-1/2 -translate-y-1/2 text-text/60'>✕</button>
          )}
        </div>

        {allTags.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            <button
              onClick={() => setSelectedTag('')}
              className={`px-4 py-2 rounded-full text-sm ${!selectedTag ? 'bg-primary text-background' : 'bg-text/10 text-text hover:bg-text/20'}`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm ${selectedTag === tag ? 'bg-primary text-background' : 'bg-text/10 text-text hover:bg-text/20'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Masonry Grid */}
      <div className='columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'>
        {filteredPosts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className='block break-inside-avoid group'
          >
            <div className='bg-text/5 rounded-2xl overflow-hidden border border-text/10 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20'>
              {post.image && (
                <div className='relative h-48 overflow-hidden'>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className='object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                </div>
              )}
              
              <div className='p-6'>
                <time className='text-xs text-text/60 uppercase tracking-wider'>
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </time>
                
                <h3 className='text-xl font-[itcBold] mt-2 mb-3 text-text group-hover:text-primary transition-colors line-clamp-2'>
                  {post.title}
                </h3>
                
                <p className='text-sm text-text/70 line-clamp-3 mb-4'>
                  {post.description}
                </p>
                
                {post.tags && post.tags.length > 0 && (
                  <div className='flex flex-wrap gap-1'>
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className='text-xs px-2 py-1 bg-primary/10 text-primary rounded-full'>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
