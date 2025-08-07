import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Image
              src="/images/logo-primary.png"
              alt="Wedge Golf"
              width={120}
              height={120}
              className="mr-4"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="https://apps.apple.com/" className="text-gray-700 hover:text-primary transition-colors">Download</a>
            <Link href="/privacy" className="text-gray-700 hover:text-primary transition-colors">Privacy</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="https://apps.apple.com/" className="block px-3 py-2 text-gray-700">Download</a>
            <Link href="/privacy" className="block px-3 py-2 text-gray-700">Privacy</Link>
          </div>
        </div>
      )}
    </nav>
  )
}