'use client'

import Link from "next/link"
import { useState, useEffect } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Work", href: "/#works" },
    { name: "Blogs", href: "/blog" },
  ]

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <nav className="mx-4 md:mx-16 font-[itcMedium] flex justify-between sticky top-0 py-6 items-center z-50 bg-background">
        <div className="logo uppercase font-[itcBold] text-text">shelby</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-8 lg:gap-16">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="text-text hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Animated Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-text transform transition-all duration-300 origin-left ${isOpen ? 'rotate-45' : ''}`} />
            <span className={`h-0.5 w-full bg-text transition-all duration-300 ${isOpen ? 'opacity-0 -translate-x-3' : ''}`} />
            <span className={`h-0.5 w-full bg-text transform transition-all duration-300 origin-left ${isOpen ? '-rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-background border-l border-text/10 z-50 md:hidden transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end w-10 h-10 flex items-center justify-center mb-12"
          >
            <svg className="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Items */}
          <ul className="space-y-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-[itcBold] text-text hover:text-primary transition-colors block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Links (Optional) */}
          <div className="mt-auto pt-8 border-t border-text/10">
            <p className="text-sm text-text/60 mb-4">Follow me</p>
            <div className="flex gap-4">
              <a href="#" className="text-text/60 hover:text-primary">GitHub</a>
              <a href="#" className="text-text/60 hover:text-primary">Twitter</a>
              <a href="#" className="text-text/60 hover:text-primary">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
