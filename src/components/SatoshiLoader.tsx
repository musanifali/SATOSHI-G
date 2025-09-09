'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface SatoshiLoaderProps {
  isLoading: boolean
  onLoadingComplete?: () => void
}

const SatoshiLoader = ({ isLoading, onLoadingComplete }: SatoshiLoaderProps) => {
  useEffect(() => {
    if (!isLoading) return

    // Auto-complete loading after animation
    const timer = setTimeout(() => {
      onLoadingComplete?.()
    }, 3000) // 3 seconds for the beautiful animation

    return () => clearTimeout(timer)
  }, [isLoading, onLoadingComplete])

  if (!isLoading) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-muted/20"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>

        {/* Main Text Content */}
        <div className="relative z-10 text-center">
          {/* SATOSHI Text */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              ease: "easeOut"
            }}
            className="mb-4"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              SATOSHI
            </h1>
          </motion.div>

          {/* Global Village Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.5,
              ease: "easeOut"
            }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-light text-muted-foreground tracking-widest">
              Global Village
            </h2>
          </motion.div>

          {/* Animated Loading Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-3"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-8 text-muted-foreground text-lg font-light"
          >
            Luxury Island Living • Blockchain Powered
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default SatoshiLoader