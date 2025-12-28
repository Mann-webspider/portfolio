'use client'

import Link from "next/link"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Work", href: "/#works" },
    { name: "Blogs", href: "/blog" },
  ]

  return (
    <>
      <nav className="mx-4 md:mx-16 font-[itcMedium] flex justify-between sticky top-0 py-6 items-center z-50 bg-background/80 backdrop-blur-md">
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
          aria-label="Toggle menu"
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
        <ul className="flex flex-col items-center justify-center h-full gap-8">
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
                className="text-4xl font-[itcBold] text-text hover:text-primary transition-colors"
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
