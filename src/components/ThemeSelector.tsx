'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeContext'
import { Palette, Check, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const ThemeSelector = () => {
  const { theme, setTheme, themes } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const currentTheme = themes.find(t => t.name === theme)

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 min-w-[120px] justify-between"
      >
        <div className="flex items-center space-x-2">
          <Palette className="w-4 h-4" />
          <span className="hidden sm:inline">{currentTheme?.label}</span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden"
            >
              <div className="p-2">
                <div className="text-sm font-medium text-muted-foreground mb-2 px-2">
                  Choose Theme
                </div>
                {themes.map((themeOption) => (
                  <button
                    key={themeOption.name}
                    onClick={() => {
                      setTheme(themeOption.name)
                      setIsOpen(false)
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-md hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {/* Theme Preview */}
                      <div className="flex space-x-1">
                        <div 
                          className="w-3 h-3 rounded-full border border-border/50"
                          style={{ backgroundColor: themeOption.colors.background }}
                        />
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: themeOption.colors.primary }}
                        />
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: themeOption.colors.accent }}
                        />
                      </div>
                      
                      <div className="text-left">
                        <div className="font-medium text-sm">{themeOption.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {themeOption.name === 'light' && 'Clean & bright'}
                          {themeOption.name === 'dark' && 'Easy on the eyes'}
                          {themeOption.name === 'midnight' && 'Deep & elegant'}
                          {themeOption.name === 'ocean' && 'Cool & professional'}
                          {themeOption.name === 'forest' && 'Natural & calming'}
                          {themeOption.name === 'sunset' && 'Warm & vibrant'}
                          {themeOption.name === 'aurora' && 'Mystical & electric'}
                          {themeOption.name === 'royal' && 'Luxurious & regal'}
                          {themeOption.name === 'cyber' && 'Futuristic & bold'}
                          {themeOption.name === 'warm' && 'Cozy & inviting'}
                        </div>
                      </div>
                    </div>

                    {theme === themeOption.name && (
                      <Check className="w-4 h-4 text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ThemeSelector
