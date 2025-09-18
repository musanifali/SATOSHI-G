'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogIn, Phone, Bitcoin, Waves, Menu, X } from 'lucide-react'
import { useState } from 'react'
import ThemeSelector from './ThemeSelector'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    closeMobileMenu()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center hover:opacity-80 transition-opacity"
          onClick={closeMobileMenu}
        >
          <img 
            src="/images/illustrations/satoshi logo.svg"
            alt="SATOSHI Global Village - Luxury Real Estate Investment Platform"
            className="h-8 w-auto dark:invert dark:brightness-0 dark:contrast-100"
            loading="eager"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('project')}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Project
          </button>
          <button 
            onClick={() => scrollToSection('market')}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Market
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Testimonials
          </button>
        </nav>

        {/* Desktop Right side actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeSelector />
          <Button size="sm" className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white">
            <Bitcoin className="mr-2 h-4 w-4" />
           Get Started 
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" 
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 border-b border-border/40 z-40 md:hidden">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-muted/50 w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-muted/50 w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('project')}
                className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-muted/50 w-full text-left"
              >
                Project
              </button>
              <button 
                onClick={() => scrollToSection('market')}
                className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-muted/50 w-full text-left"
              >
                Market
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-muted/50 w-full text-left"
              >
                Testimonials
              </button>
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-3 border-t border-border/40">
                <div className="flex justify-center">
                  <ThemeSelector />
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white"
                  onClick={closeMobileMenu}
                >
                  <Bitcoin className="mr-2 h-4 w-4" />
                  Start Investing
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
