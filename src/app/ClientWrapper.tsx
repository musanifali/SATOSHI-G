'use client'

import { useState, useEffect } from 'react'
import SatoshiLoader from '@/components/SatoshiLoader'
import { ThemeProvider } from '@/contexts/ThemeContext'

interface ClientWrapperProps {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Minimum 2 seconds to show the beautiful loader

    return () => clearTimeout(timer)
  }, [])

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setIsVisible(false)
    }, 500) // Small delay for smooth exit animation
  }

  return (
    <ThemeProvider>
      {isVisible && (
        <SatoshiLoader 
          isLoading={isLoading} 
          onLoadingComplete={handleLoadingComplete}
        />
      )}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {children}
      </div>
    </ThemeProvider>
  )
}
