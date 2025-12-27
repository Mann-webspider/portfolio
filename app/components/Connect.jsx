'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function Connect() {
  const containerRef = useRef()
  const lineRef = useRef()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useGSAP(() => {
    gsap.from(lineRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      scaleY: 0,
      transformOrigin: 'top',
      duration: 1.2,
      ease: 'power3.inOut'
    })

    gsap.from('.input-animate', {
      scrollTrigger: {
        trigger: '.form-section',
        start: 'top 75%',
      },
      x: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out'
    })
  }, { scope: containerRef })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
        setFormData({ name: '', email: '', message: '' }) // Reset form
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div ref={containerRef}>
      <section className='min-h-screen bg-background text-text font-[itcMedium]' id='contact'>
        <div className='grid xl:grid-cols-2 gap-0 min-h-screen'>
          {/* Left Side - Content */}
          <div className='flex items-center xl:pl-64 md:px-20 px-10 py-20 relative'>
            <div className="content">
              <h4 className='uppercase text-[1rem] mb-4'>Connect</h4>
              <h2 className='xl:text-[4rem] md:text-[3rem] leading-tight text-[2rem] mb-8'>
                Need some development work done? Let's <span className='text-primary'>chat.</span>
              </h2>
              <p className='text-lg text-text/70 mb-8'>
                I'm available for freelance projects and full-time opportunities. Let's discuss how we can work together.
              </p>
              
              {/* Contact Info */}
              <div className='space-y-4'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
                    <span className='text-primary text-xl'>📧</span>
                  </div>
                  <div>
                    <p className='text-sm text-text/60'>Email</p>
                    <p className='text-lg'>manndalsaniya.25@gmail.com</p>
                  </div>
                </div>
                
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
                    <span className='text-primary text-xl'>📍</span>
                  </div>
                  <div>
                    <p className='text-sm text-text/60'>Location</p>
                    <p className='text-lg'>Bhavnagar, Gujarat, IN</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              ref={lineRef}
              className='absolute right-0 top-0 w-0.5 h-full bg-linear-to-b from-transparent via-primary to-transparent hidden xl:block'
            />
          </div>

          {/* Right Side - Form */}
          <div className='form-section flex items-center md:px-20 px-10 py-20 bg-text/5'>
            <form onSubmit={handleSubmit} className='w-full max-w-2xl mx-auto'>
              <div className='space-y-8 mb-10'>
                <div className='input-animate'>
                  <label className='block text-sm uppercase mb-3 text-text/60 font-[itcBold]'>
                    What's your name?
                  </label>
                  <input
                    type='text'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className='w-full bg-transparent border-b-2 border-text/20 py-4 text-2xl focus:border-primary outline-none transition-all'
                    placeholder='John Doe *'
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className='input-animate'>
                  <label className='block text-sm uppercase mb-3 text-text/60 font-[itcBold]'>
                    What's your email?
                  </label>
                  <input
                    type='email'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className='w-full bg-transparent border-b-2 border-text/20 py-4 text-2xl focus:border-primary outline-none transition-all'
                    placeholder='john@example.com *'
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className='input-animate'>
                  <label className='block text-sm uppercase mb-3 text-text/60 font-[itcBold]'>
                    Tell me about your project
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows='5'
                    className='w-full bg-transparent border-b-2 border-text/20 py-4 text-xl focus:border-primary outline-none transition-all resize-none'
                    placeholder='I need help with... *'
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Status Message */}
              {status.message && (
                <div className={`mb-6 p-4 rounded ${
                  status.type === 'success' 
                    ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                    : 'bg-red-500/10 text-red-500 border border-red-500/20'
                }`}>
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <div className='input-animate'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='group relative px-12 py-6 bg-primary text-background font-[itcBold] text-xl uppercase overflow-hidden hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  <span className='relative z-10'>
                    {isSubmitting ? 'Sending...' : 'Let\'s Talk'}
                  </span>
                  <div className='absolute inset-0 bg-text translate-y-full group-hover:translate-y-0 transition-transform duration-500' />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Connect
