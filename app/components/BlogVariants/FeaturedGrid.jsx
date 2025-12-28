'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function FeaturedGrid({ initialPosts, allTags }) {
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

  const featuredPost = filteredPosts[0]
  const otherPosts = filteredPosts.slice(1)

  return (
    <>
      {/* Search & Filters */}
      <div className='mb-12 space-y-6'>
        <input
          type='text'
          placeholder='Search posts...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full bg-text/5 border border-text/20 rounded-xl px-6 py-4 text-lg outline-none focus:border-primary text-text'
        />
        <div className='flex flex-wrap gap-2'>
          <button onClick={() => setSelectedTag('')} className={`px-4 py-2 rounded-full text-sm ${!selectedTag ? 'bg-primary text-background' : 'bg-text/10 text-text'}`}>
            All
          </button>
          {allTags.map((tag) => (
            <button key={tag} onClick={() => setSelectedTag(tag)} className={`px-4 py-2 rounded-full text-sm ${selectedTag === tag ? 'bg-primary text-background' : 'bg-text/10 text-text'}`}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <Link href={`/blog/${featuredPost.slug}`} className='block group mb-12'>
          <div className='relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-transparent border border-text/10'>
            {featuredPost.image && (
              <Image src={featuredPost.image} alt={featuredPost.title} fill className='object-cover opacity-40 group-hover:opacity-60 transition-opacity' />
            )}
            <div className='absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-background via-background/50 to-transparent'>
              <span className='inline-block px-3 py-1 bg-primary text-background text-xs uppercase tracking-wider rounded-full mb-4 w-fit'>
                Featured
              </span>
              <h2 className='text-5xl md:text-6xl font-[itcBold] text-text mb-4 group-hover:text-primary transition-colors'>
                {featuredPost.title}
              </h2>
              <p className='text-xl text-text/80 mb-6 max-w-3xl'>
                {featuredPost.description}
              </p>
              <div className='flex gap-2'>
                {featuredPost.tags?.slice(0, 4).map((tag) => (
                  <span key={tag} className='px-3 py-1 bg-text/10 text-text rounded-full text-sm'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Grid of Other Posts */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {otherPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className='group'>
            <div className='bg-text/5 rounded-2xl overflow-hidden border border-text/10 hover:border-primary transition-all h-full'>
              {post.image && (
                <div className='relative h-48'>
                  <Image src={post.image} alt={post.title} fill className='object-cover group-hover:scale-110 transition-transform duration-500' />
                </div>
              )}
              <div className='p-6'>
                <time className='text-xs text-text/60 uppercase'>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time>
                <h3 className='text-2xl font-[itcBold] mt-2 mb-3 text-text group-hover:text-primary transition-colors line-clamp-2'>
                  {post.title}
                </h3>
                <p className='text-sm text-text/70 line-clamp-3'>{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
