'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function BentoBox({ initialPosts, allTags }) {
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

  // Define grid pattern for different sized cards
  const getCardClass = (index) => {
    const patterns = [
      'md:col-span-2 md:row-span-2', // Large
      'md:col-span-1 md:row-span-1', // Small
      'md:col-span-1 md:row-span-2', // Tall
      'md:col-span-2 md:row-span-1', // Wide
      'md:col-span-1 md:row-span-1', // Small
      'md:col-span-1 md:row-span-1', // Small
    ]
    return patterns[index % patterns.length]
  }

  return (
    <>
      {/* Search & Filter */}
      <div className='mb-12 space-y-6'>
        <input
          type='text'
          placeholder='Search posts...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full bg-text/5 border border-text/20 rounded-2xl px-6 py-4 text-lg outline-none focus:border-primary text-text'
        />
        <div className='flex flex-wrap gap-2'>
          <button onClick={() => setSelectedTag('')} className={`px-5 py-2 rounded-full text-sm ${!selectedTag ? 'bg-primary text-background' : 'bg-text/10 text-text'}`}>
            All
          </button>
          {allTags.map((tag) => (
            <button key={tag} onClick={() => setSelectedTag(tag)} className={`px-5 py-2 rounded-full text-sm ${selectedTag === tag ? 'bg-primary text-background' : 'bg-text/10 text-text'}`}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]'>
        {filteredPosts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`group ${getCardClass(index)}`}
          >
            <div className='relative h-full bg-gradient-to-br from-text/10 to-text/5 rounded-3xl overflow-hidden border border-text/10 hover:border-primary transition-all duration-300'>
              {post.image && (
                <div className='absolute inset-0'>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className='object-cover opacity-30 group-hover:opacity-50 transition-opacity'
                  />
                </div>
              )}
              
              <div className='relative h-full p-8 flex flex-col justify-end'>
                <div className='space-y-3'>
                  {post.tags && post.tags.length > 0 && (
                    <div className='flex flex-wrap gap-2'>
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className='px-3 py-1 bg-primary/20 text-primary text-xs rounded-full'>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <h3 className='text-2xl md:text-3xl font-[itcBold] text-text group-hover:text-primary transition-colors line-clamp-3'>
                    {post.title}
                  </h3>
                  
                  <p className='text-sm text-text/70 line-clamp-2'>
                    {post.description}
                  </p>
                  
                  <time className='text-xs text-text/50'>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </time>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
