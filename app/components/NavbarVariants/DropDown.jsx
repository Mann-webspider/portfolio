'use client'

import Link from "next/link"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About", href: "/#about", icon: "👤" },
    { name: "Contact", href: "/#contact", icon: "✉️" },
    { name: "Work", href: "/#works", icon: "💼" },
    { name: "Blogs", href: "/blog", icon: "📝" },
  ]

  return (
    <>
      <nav className="mx-4 md:mx-16 font-[itcMedium] flex justify-between sticky top-0 py-6 items-center z-50 bg-background border-b border-text/10">
        <div className="logo uppercase font-[itcBold] text-text text-xl">shelby</div>
        
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-text/10 hover:bg-text/20 transition-colors"
        >
          <span className="text-sm text-text">Menu</span>
          <svg 
            className={`w-4 h-4 text-text transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </nav>

      {/* Mobile Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-background border-t border-text/10 z-50 md:hidden transform transition-transform duration-300 rounded-t-3xl ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="p-6">
          <div className="w-12 h-1.5 bg-text/20 rounded-full mx-auto mb-6" />
          
          <ul className="grid grid-cols-2 gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-text/5 hover:bg-text/10 transition-colors"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-text font-[itcMedium]">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar
