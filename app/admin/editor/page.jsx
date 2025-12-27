'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BlogEditor() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [content, setContent] = useState('')
  const [preview, setPreview] = useState(false)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/verify')
      if (res.ok) {
        setAuthenticated(true)
      } else {
        router.push('/admin/login')
      }
    } catch (error) {
      router.push('/admin/login')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
    router.refresh()
  }

  const handleSave = async () => {
    alert('Save functionality - will integrate with GitHub API to create/update MDX files')
  }

  if (loading) {
    return (
      <div className='min-h-screen bg-background flex items-center justify-center'>
        <div className='text-2xl text-text'>Loading...</div>
      </div>
    )
  }

  if (!authenticated) {
    return null
  }

  return (
    <div className='min-h-screen bg-background p-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-4xl font-[itcBold] text-text'>Blog Editor</h1>
          <button
            onClick={handleLogout}
            className='px-6 py-2 bg-text/10 hover:bg-text/20 rounded-lg transition-colors text-text'
          >
            Logout
          </button>
        </div>

        {/* Toolbar */}
        <div className='flex gap-4 mb-4'>
          <button
            onClick={() => setPreview(false)}
            className={`px-6 py-2 rounded-lg transition-colors ${
              !preview
                ? 'bg-primary text-background'
                : 'bg-text/10 hover:bg-text/20 text-text'
            }`}
          >
            Edit
          </button>
          <button
            onClick={() => setPreview(true)}
            className={`px-6 py-2 rounded-lg transition-colors ${
              preview
                ? 'bg-primary text-background'
                : 'bg-text/10 hover:bg-text/20 text-text'
            }`}
          >
            Preview
          </button>
          <button
            onClick={handleSave}
            className='ml-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors'
          >
            Save & Publish
          </button>
        </div>

        {/* Editor/Preview */}
        {!preview ? (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='w-full h-150 bg-text/5 border border-text/20 rounded-xl p-6 font-mono text-text outline-none focus:border-primary resize-none'
            placeholder={`---
title: "Building Modern Web Apps with Next.js" 
date: 2025-12-27
description: "A comprehensive guide to building production-ready applications with Next.js 15"
tags: ["nextjs", "react", "web development"]
published: true
author: "Mann"
image: "/images/prachi_eyes.jpg"
---`}
           
          />
        ) : (
          <div className='prose prose-lg prose-invert max-w-none bg-text/5 rounded-xl p-8 border border-text/20 min-h-150'>
            <pre className='whitespace-pre-wrap font-mono text-sm text-text'>
              {content || 'Nothing to preview...'}
            </pre>
          </div>
        )}

        {/* Help Text */}
        <div className='mt-6 p-4 bg-text/5 rounded-lg border border-text/10'>
          <h3 className='font-[itcBold] text-text mb-2'>💡 Quick Guide:</h3>
          <ul className='text-sm text-text/70 space-y-1'>
            <li>• Start with frontmatter (between ---)</li>
            <li>• Use # for headings (# H1, ## H2, ### H3)</li>
            <li>• Use **bold** and *italic* for emphasis</li>
            <li>• Code blocks with ```</li>
            <li>-  Links: [text](url)</li>
            <li>  Images: </li>
          </ul>-
        </div>
        
      </div>
    </div>
  )
}
