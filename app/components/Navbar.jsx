'use client'

import Link from "next/link"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blog" },
  ]

  return (
    <>
      <nav className="mx-4 md:mx-16 font-[itcMedium] flex justify-between sticky top-0 py-6 items-center z-50">
        <Link href="/" className="logo uppercase font-[itcBold] text-text text-xl md:text-2xl">
          shelby
        </Link>
        
        {/* Desktop Menu with Hover Effects */}
        <div className="hidden md:block">
          <ul className="flex gap-8 lg:gap-12">
            {navItems.map((item) => (
              <li key={item.name} className="group relative">
                <Link 
                  href={item.href}
                  className="text-text hover:text-primary transition-colors py-2 block"
                >
                  {item.name}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </li>
            ))}
          </ul>
        </div>

        {/* Minimal Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-12 h-12 rounded-full border border-text/20 flex items-center justify-center hover:border-primary transition-colors"
        >
          <svg 
            className={`w-5 h-5 text-text transition-transform ${isOpen ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background z-40 md:hidden flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="space-y-6 text-center">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className={`transform transition-all duration-500 ${
                isOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-5xl font-[itcBold] text-text hover:text-primary transition-colors inline-block hover:scale-110 transform"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar
