import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => router.pathname === path

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500;600;700&display=swap');
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      
      <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg text-green-900 py-2' 
          : 'bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo + Title */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className={`text-2xl sm:text-3xl font-playfair font-bold tracking-tight ${
              scrolled 
                ? 'text-green-800' 
                : 'text-white'
            }`}>
              Aawaz-e-Khalq
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-poppins font-medium">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`relative transition-colors duration-300 group-hover:text-green-600 ${
                  isActive(href) 
                    ? scrolled ? 'text-green-700 font-semibold' : 'text-white font-semibold'
                    : scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white/90 hover:text-white'
                }`}
              >
                <span className="relative">
                  {label}
                  {isActive(href) && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-green-500"></span>
                  )}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
            <Link href="/donation">
              <button className={`ml-4 px-6 py-3 rounded-lg transition-all duration-300 font-semibold hover:scale-105 shadow-md hover:shadow-lg ${
                scrolled
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800'
                  : 'bg-gradient-to-r from-amber-400 to-amber-500 text-green-900 hover:from-amber-500 hover:to-amber-600'
              }`}>
                Donate Now
              </button>
            </Link>
          </nav>

          {/* Mobile Toggle - Improved Icon */}
          <button
            className="md:hidden focus:outline-none p-3 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative flex flex-col justify-center items-center">
              <span className={`block absolute w-6 h-0.5 bg-current transform transition duration-300 ${
                menuOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}></span>
              <span className={`block absolute w-6 h-0.5 bg-current transform transition duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block absolute w-6 h-0.5 bg-current transform transition duration-300 ${
                menuOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Fixed spacing */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          scrolled ? 'bg-white shadow-lg' : 'bg-green-900'
        } ${menuOpen ? 'max-h-96 border-t border-green-200' : 'max-h-0'}`}>
          <div className="px-4 py-3 space-y-2 font-poppins font-medium">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`block py-2 transition-colors duration-300 border-b border-green-100/30 ${
                  isActive(href)
                    ? scrolled ? 'text-green-700 font-semibold' : 'text-white font-semibold'
                    : scrolled ? 'text-gray-700' : 'text-white/90'
                } hover:text-green-500`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link href="/donation" onClick={() => setMenuOpen(false)} className="block pt-3">
              <button className={`w-full px-4 py-2.5 rounded-lg transition-all duration-300 font-semibold ${
                scrolled
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800'
                  : 'bg-gradient-to-r from-amber-400 to-amber-500 text-green-900 hover:from-amber-500 hover:to-amber-600'
              }`}>
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}