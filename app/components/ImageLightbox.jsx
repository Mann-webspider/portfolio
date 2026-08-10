'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function ImageLightbox({ images, projectTitle }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage, currentIndex])

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setCurrentIndex(nextIndex)
    setSelectedImage(images[nextIndex])
  }

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(prevIndex)
    setSelectedImage(images[prevIndex])
  }

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  return (
    <>
      {/* Thumbnail Grid */}
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(image, index)}
            className='group relative aspect-video cursor-pointer overflow-hidden bg-text/5'
          >
            <Image
              src={image}
              alt={`${projectTitle} screenshot ${index + 1}`}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-105'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
            <div className='absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/20' />
            <span className='absolute bottom-3 right-4 tabular-nums text-xs uppercase tracking-wider text-text/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              View {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center'
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className='absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors z-10'
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>

            {/* Image Counter */}
            <div className='absolute top-4 left-1/2 -translate-x-1/2 md:top-8 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full'>
              {currentIndex + 1} / {images.length}
            </div>

            {/* Previous Button */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrev()
                }}
                className='absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors z-10'
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                </svg>
              </button>
            )}

            {/* Next Button */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
                className='absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors z-10'
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </button>
            )}

            {/* Main Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className='relative w-full h-full max-w-7xl max-h-[90vh] mx-4 md:mx-8'
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt={`${projectTitle} fullscreen`}
                fill
                className='object-contain'
                sizes='100vw'
                priority
              />
            </motion.div>

            {/* Keyboard Hint */}
            <div className='hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm'>
              Use arrow keys to navigate • ESC to close
            </div>

            {/* Mobile Swipe Hint */}
            <div className='md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs text-center'>
              Swipe to navigate • Tap outside to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
