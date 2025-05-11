'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IconMenu2, IconX } from '@tabler/icons-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-primary">
            Digital Bright
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/sobre" className="text-gray-600 hover:text-primary transition-colors">
              Sobre Nós
            </Link>
            <Link href="/servicos" className="text-gray-600 hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link href="/contato" className="text-gray-600 hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/sobre"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="/servicos"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="/contato"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
} 