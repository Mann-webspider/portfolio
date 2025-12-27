'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Press Ctrl+Shift+A to open admin modal
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault()
        setIsOpen(true)
      }
      // Press Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false)
        setPassword('')
        setError('')
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Check against the public env variable
    const secretCode = process.env.NEXT_PUBLIC_ADMIN_TRIGGER
    
    console.log('Entered:', password) // Debug
    console.log('Expected:', secretCode) // Debug - remove in production
    
    if (password === secretCode) {
      router.push('/admin/login')
      setIsOpen(false)
      setPassword('')
      setError('')
    } else {
      setError('Invalid code')
      setPassword('')
      setTimeout(() => setError(''), 2000)
    }
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
      <div className='bg-background border border-text/20 rounded-2xl p-8 max-w-md w-full'>
        <h2 className='text-2xl font-[itcBold] mb-4'>Admin Access</h2>
        <p className='text-text/60 mb-6'>Enter the secret code to continue</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Secret code...'
            className='w-full bg-text/5 border border-text/20 rounded-xl px-4 py-3 mb-4 outline-none focus:border-primary text-text'
            autoFocus
          />
          
          {error && (
            <p className='text-red-500 text-sm mb-4'>{error}</p>
          )}
          
          <button
            type='submit'
            className='w-full bg-primary text-background py-3 rounded-xl font-[itcBold] hover:bg-primary/90 transition-colors'
          >
            Access Admin
          </button>
        </form>
        
        <button
          onClick={() => {
            setIsOpen(false)
            setPassword('')
            setError('')
          }}
          className='w-full mt-3 text-text/60 hover:text-text transition-colors'
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
