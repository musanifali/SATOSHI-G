'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogIn, Phone, Bitcoin, Waves, Menu, X } from 'lucide-react'
import { useState } from 'react'

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
          className="flex items-center space-x-3 font-bold text-xl"
          onClick={closeMobileMenu}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
            <Bitcoin className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-primary text-lg leading-tight">SATOSHI</span>
            <span className="text-accent text-xs font-medium leading-tight">Global Village</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="#project" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Project
          </Link>
          <Link 
            href="#tokenomics" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Tokenomics
          </Link>
          <Link 
            href="#team" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Team
          </Link>
          <Link 
            href="#rum-cay" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Rum Cay
          </Link>
          <Link 
            href="#invest" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Invest
          </Link>
        </nav>

        {/* Desktop Right side actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Waves className="mr-2 h-4 w-4" />
            Whitepaper
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white">
            <Bitcoin className="mr-2 h-4 w-4" />
            Start Investing
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
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={closeMobileMenu}
                >
                  <Waves className="mr-2 h-4 w-4" />
                  Whitepaper
                </Button>
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
