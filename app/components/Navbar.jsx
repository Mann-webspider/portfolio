'use client'

import Link from 'next/link'
import { useState } from 'react'

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
      <nav className='w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-64 font-[itcMedium] flex justify-between sticky top-0 py-4 md:py-6 items-center z-50 bg-background/80 backdrop-blur-md'>
        <Link href='/' className='logo uppercase font-[itcBold] text-lg md:text-xl'>
          shelby
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:block'>
          <ul className='flex gap-6 lg:gap-12'>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className='text-text hover:text-primary transition-colors text-sm lg:text-base'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group relative z-50'
          aria-label='Toggle menu'
        >
          <span className={`w-6 h-0.5 bg-text transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-text transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-text transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-40 md:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <ul className='flex flex-col items-center justify-center h-full gap-8 px-4'>
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className={`transition-all duration-500 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className='text-3xl sm:text-4xl font-[itcBold] text-text hover:text-primary transition-colors'
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
