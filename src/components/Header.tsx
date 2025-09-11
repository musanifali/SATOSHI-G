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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center"
          onClick={closeMobileMenu}
        >
          <img 
            src="/images/illustrations/satoshi logo.svg"
            alt="SATOSHI Global Village"
            className="h-8 w-auto dark:invert dark:brightness-0 dark:contrast-100"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="#project" 
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Project
          </Link>
          <Link 
            href="#tokenomics" 
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Tokenomics
          </Link>
          <Link 
            href="#team" 
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Team
          </Link>
          <Link 
            href="#rum-cay" 
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Rum Cay
          </Link>
          <Link 
            href="#invest" 
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Invest
          </Link>
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
              <Link 
                href="#project" 
                className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-muted/50"
                onClick={closeMobileMenu}
              >
                Project
              </Link>
              <Link 
                href="#tokenomics" 
                className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-muted/50"
                onClick={closeMobileMenu}
              >
                Tokenomics
              </Link>
              <Link 
                href="#team" 
                className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-muted/50"
                onClick={closeMobileMenu}
              >
                Team
              </Link>
              <Link 
                href="#rum-cay" 
                className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-muted/50"
                onClick={closeMobileMenu}
              >
                Rum Cay
              </Link>
              <Link 
                href="#invest" 
                className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-muted/50"
                onClick={closeMobileMenu}
              >
                Invest
              </Link>
              
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
