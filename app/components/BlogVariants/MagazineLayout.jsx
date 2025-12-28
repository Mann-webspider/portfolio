'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MagazineLayout({ initialPosts, allTags }) {
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
      {/* Mobile Filters - Horizontal Scroll */}
      <div className='lg:hidden mb-8 space-y-4'>
        <input
          type='text'
          placeholder='Search articles...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full bg-text/5 border border-text/20 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary text-text'
        />
        
        {/* Horizontal scrollable tags */}
        <div className='overflow-x-auto pb-2 -mx-6 px-6'>
          <div className='flex gap-2 min-w-max'>
            <button
              onClick={() => setSelectedTag('')}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${!selectedTag ? 'bg-primary text-background' : 'bg-text/10 text-text'}`}
            >
              All ({initialPosts.length})
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${selectedTag === tag ? 'bg-primary text-background' : 'bg-text/10 text-text'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <p className='text-xs text-text/60'>
          {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Desktop Layout */}
      <div className='grid lg:grid-cols-4 gap-12'>
        {/* Desktop Sidebar - Hidden on Mobile */}
        <aside className='hidden lg:block lg:col-span-1'>
          <div className='lg:sticky lg:top-24 space-y-6'>
            <div>
              <h3 className='text-sm font-bold text-text uppercase tracking-wider mb-4'>Search</h3>
              <input
                type='text'
                placeholder='Search...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full bg-text/5 border border-text/20 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary text-text'
              />
            </div>

            <div>
              <h3 className='text-sm font-bold text-text uppercase tracking-wider mb-4'>Topics</h3>
              
              {/* Scrollable topics container */}
              <div className='space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar'>
                <button
                  onClick={() => setSelectedTag('')}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${!selectedTag ? 'bg-primary text-background' : 'text-text hover:bg-text/5'}`}
                >
                  All Posts ({initialPosts.length})
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${selectedTag === tag ? 'bg-primary text-background' : 'text-text hover:bg-text/5'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className='pt-6 border-t border-text/10'>
              <p className='text-sm text-text/60'>
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className='lg:col-span-3 space-y-12'>
          {filteredPosts.length === 0 ? (
            <div className='text-center py-20'>
              <p className='text-2xl text-text/60 mb-4'>No articles found</p>
              <p className='text-text/40'>Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredPosts.map((post, index) => (
              <div key={post.slug}>
                <Link href={`/blog/${post.slug}`} className='group block'>
                  <article className={`flex gap-8 ${index % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'} items-start`}>
                    {post.image && (
                      <div className='w-full md:w-1/2 flex-shrink-0'>
                        <div className='relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-text/5'>
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className='object-cover group-hover:scale-105 transition-transform duration-700'
                            sizes='(max-width: 768px) 100vw, 50vw'
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className={`${post.image ? 'w-full md:w-1/2' : 'w-full'} space-y-4`}>
                      <div className='flex items-center gap-4 text-sm text-text/60'>
                        <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                        <span>•</span>
                        <span>{post.readingTime || '5'} min read</span>
                      </div>

                      <h2 className='text-2xl md:text-3xl lg:text-4xl font-[itcBold] text-text group-hover:text-primary transition-colors leading-tight'>
                        {post.title}
                      </h2>

                      <p className='text-base md:text-lg text-text/80 leading-relaxed line-clamp-3'>
                        {post.description}
                      </p>

                      {post.tags && post.tags.length > 0 && (
                        <div className='flex flex-wrap gap-2 pt-4'>
                          {post.tags.slice(0, 4).map((tag) => (
                            <span key={tag} className='text-xs px-3 py-1 bg-text/10 text-text rounded-full uppercase tracking-wider'>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className='flex items-center gap-2 text-primary pt-4'>
                        <span className='text-sm font-semibold'>Read article</span>
                        <span className='transform group-hover:translate-x-2 transition-transform'>→</span>
                      </div>
                    </div>
                  </article>
                </Link>

                {index < filteredPosts.length - 1 && (
                  <hr className='border-text/10 mt-12' />
                )}
              </div>
            ))
          )}
        </main>
      </div>
    </>
  )
}
