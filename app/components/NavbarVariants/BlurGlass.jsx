'use client'

import Link from "next/link"
import { useState, useEffect } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Work", href: "/#works" },
    { name: "Blogs", href: "/blog" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav 
        className={`mx-4 md:mx-8 lg:mx-16 font-[itcMedium] flex justify-between sticky top-4 py-4 px-6 md:px-8 items-center z-50 rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'bg-background/60 backdrop-blur-xl border border-text/10 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <Link href="/" className="logo uppercase font-[itcBold] text-text text-xl">
          shelby
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-6 lg:gap-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="text-text/80 hover:text-primary transition-all hover:scale-105 inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Rounded Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-text transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`h-0.5 w-full bg-text transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-text transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Card */}
      <div
        className={`fixed top-24 right-4 w-64 bg-background/95 backdrop-blur-xl border border-text/10 rounded-2xl shadow-2xl z-50 md:hidden transform transition-all duration-300 origin-top-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="p-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-text hover:bg-text/5 hover:text-primary rounded-xl transition-all font-[itcMedium]"
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
