'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        router.push('/admin/editor')
        router.refresh()
      } else {
        setError('Invalid password')
      }
    } catch (err) {
      setError('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-background flex items-center justify-center p-4'>
      <div className='max-w-md w-full'>
        <h1 className='text-4xl font-[itcBold] mb-2 text-center text-text'>
          Admin Login
        </h1>
        <p className='text-center text-text/60 mb-8'>
          Enter your password to continue
        </p>

        <form
          onSubmit={handleSubmit}
          className='bg-text/5 rounded-2xl p-8 border border-text/10'
        >
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter admin password'
            className='w-full bg-background border border-text/20 rounded-xl px-4 py-3 mb-4 outline-none focus:border-primary text-text'
            required
            autoFocus
            disabled={loading}
          />

          {error && (
            <div className='bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg mb-4 text-sm'>
              {error}
            </div>
          )}

          <button
            type='submit'
            disabled={loading}
            className='w-full bg-primary text-background py-3 rounded-xl font-[itcBold] hover:bg-primary/90 transition-colors disabled:opacity-50'
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className='text-center text-text/40 text-sm mt-6'>
          Protected area - Authorized access only
        </p>
      </div>
    </div>
  )
}
