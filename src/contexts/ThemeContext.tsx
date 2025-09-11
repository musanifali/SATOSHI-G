'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'midnight' | 'ocean' | 'forest' | 'sunset' | 'aurora' | 'royal' | 'cyber' | 'warm'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  themes: Array<{
    name: Theme
    label: string
    colors: {
      background: string
      foreground: string
      primary: string
      accent: string
    }
  }>
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  const themes = [
    {
      name: 'light' as Theme,
      label: 'Light',
      colors: {
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 84% 4.9%)',
        primary: 'hsl(262.1 83.3% 57.8%)',
        accent: 'hsl(142.1 76.2% 36.3%)'
      }
    },
    {
      name: 'dark' as Theme,
      label: 'Dark',
      colors: {
        background: 'hsl(222.2 84% 4.9%)',
        foreground: 'hsl(210 40% 98%)',
        primary: 'hsl(262.1 83.3% 57.8%)',
        accent: 'hsl(142.1 76.2% 36.3%)'
      }
    },
    {
      name: 'midnight' as Theme,
      label: 'Midnight',
      colors: {
        background: 'hsl(240 10% 3.9%)',
        foreground: 'hsl(0 0% 95%)',
        primary: 'hsl(263 70% 50.4%)',
        accent: 'hsl(142 76% 36%)'
      }
    },
    {
      name: 'ocean' as Theme,
      label: 'Ocean',
      colors: {
        background: 'hsl(220 27% 4%)',
        foreground: 'hsl(210 40% 98%)',
        primary: 'hsl(199 89% 48%)',
        accent: 'hsl(142.1 76.2% 36.3%)'
      }
    },
    {
      name: 'forest' as Theme,
      label: 'Forest',
      colors: {
        background: 'hsl(120 6% 6%)',
        foreground: 'hsl(0 0% 95%)',
        primary: 'hsl(142 71% 45%)',
        accent: 'hsl(31 77% 52%)'
      }
    },
    {
      name: 'sunset' as Theme,
      label: 'Sunset',
      colors: {
        background: 'hsl(15 15% 8%)',
        foreground: 'hsl(40 20% 95%)',
        primary: 'hsl(25 95% 53%)',
        accent: 'hsl(340 82% 52%)'
      }
    },
    {
      name: 'aurora' as Theme,
      label: 'Aurora',
      colors: {
        background: 'hsl(260 15% 6%)',
        foreground: 'hsl(300 20% 95%)',
        primary: 'hsl(280 100% 70%)',
        accent: 'hsl(180 100% 50%)'
      }
    },
    {
      name: 'royal' as Theme,
      label: 'Royal',
      colors: {
        background: 'hsl(250 20% 5%)',
        foreground: 'hsl(50 30% 95%)',
        primary: 'hsl(270 80% 60%)',
        accent: 'hsl(45 100% 60%)'
      }
    },
    {
      name: 'cyber' as Theme,
      label: 'Cyber',
      colors: {
        background: 'hsl(180 20% 3%)',
        foreground: 'hsl(120 30% 90%)',
        primary: 'hsl(120 100% 50%)',
        accent: 'hsl(300 100% 50%)'
      }
    },
    {
      name: 'warm' as Theme,
      label: 'Warm',
      colors: {
        background: 'hsl(30 15% 7%)',
        foreground: 'hsl(30 20% 92%)',
        primary: 'hsl(35 85% 55%)',
        accent: 'hsl(15 90% 60%)'
      }
    }
  ]

  useEffect(() => {
    const root = window.document.documentElement
    const selectedTheme = themes.find(t => t.name === theme)
    
    if (selectedTheme) {
      // Apply CSS custom properties
      root.style.setProperty('--background', selectedTheme.colors.background)
      root.style.setProperty('--foreground', selectedTheme.colors.foreground)
      root.style.setProperty('--primary', selectedTheme.colors.primary)
      root.style.setProperty('--accent', selectedTheme.colors.accent)
      
      // Set data attribute for additional styling
      root.setAttribute('data-theme', theme)
      
      // Update Tailwind's dark mode class
      if (theme === 'light') {
        root.classList.remove('dark')
      } else {
        root.classList.add('dark')
      }
    }
  }, [theme, themes])

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme
    if (stored && themes.find(t => t.name === stored)) {
      setTheme(stored)
    }
  }, [themes])

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
