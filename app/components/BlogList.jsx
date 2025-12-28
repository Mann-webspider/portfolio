'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function BlogList({ initialPosts, allTags }) {
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
      filtered = filtered.filter(post =>
        post.tags?.includes(selectedTag)
      )
    }

    setFilteredPosts(filtered)
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedTag('')
  }

  return (
    <>
      {/* Search & Filter Section */}
      <div className='mb-12 space-y-6'>
        {/* Search Bar */}
        <div className='relative'>
          <input
            type='text'
            placeholder='Search posts by title or description...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full bg-text/5 border border-text/20 rounded-xl px-6 py-4 pr-12 text-lg outline-none focus:border-primary transition-colors text-text placeholder:text-text/40'
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className='absolute right-4 top-1/2 -translate-y-1/2 text-text/60 hover:text-text'
            >
              ✕
            </button>
          )}
        </div>

        {/* Tags Filter */}
        {allTags.length > 0 && (
          <div>
            <p className='text-sm text-text/60 mb-3 uppercase tracking-wider'>
              Filter by tag
            </p>
            <div className='flex flex-wrap gap-2'>
              <button
                onClick={() => setSelectedTag('')}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  !selectedTag
                    ? 'bg-primary text-background'
                    : 'bg-text/10 text-text hover:bg-text/20'
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedTag === tag
                      ? 'bg-primary text-background'
                      : 'bg-text/10 text-text hover:bg-text/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Active Filters & Results Count */}
        <div className='flex items-center justify-between text-sm text-text/60'>
          <p>
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
          </p>
          {(searchQuery || selectedTag) && (
            <button
              onClick={clearFilters}
              className='text-primary hover:text-primary/80 transition-colors'
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Posts List */}
      {filteredPosts.length === 0 ? (
        <div className='text-center py-20'>
          <p className='text-2xl text-text/60 mb-4'>No posts found</p>
          <p className='text-text/40'>Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className='space-y-8'>
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className='block group hover:bg-text/5 p-6 -mx-6 rounded-2xl transition-all duration-300'
            >
              <article>
                <time className='text-sm text-text/60 uppercase tracking-wider'>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>

                <h2 className='text-3xl md:text-4xl font-[itcBold] mt-2 mb-3 group-hover:text-primary transition-colors text-text'>
                  {post.title}
                </h2>

                <p className='text-lg text-text/80 mb-4 leading-relaxed'>
                  {post.description}
                </p>

                {post.tags && post.tags.length > 0 && (
                  <div className='flex gap-2 flex-wrap'>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className='text-sm px-3 py-1 bg-primary/10 text-primary rounded-full'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className='mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity'>
                  <span className='text-sm font-semibold'>Read more</span>
                  <span className='transform group-hover:translate-x-1 transition-transform'>→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
