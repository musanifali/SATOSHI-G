'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import { useState } from 'react'

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Part 1: Illustration Section */}
      <div className="relative h-[85vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
        {/* Background subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 w-full h-full flex items-center justify-center"
        >
          {/* Main Illustration Container - Full width and height */}
          <div className="relative w-full h-full">
            {/* Main Hero Video */}
            <video 
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={() => setVideoLoaded(true)}
              onError={(e) => {
                console.error('Video loading error:', e);
                setVideoError(true);
              }}
              onCanPlay={() => setVideoLoaded(true)}
              className="w-full h-full object-cover"
              style={{
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            >
              <source src="/images/illustrations/video.mp4" type="video/mp4" />
              <source src="/images/illustrations/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Fallback image if video doesn't load or has errors */}
            {(!videoLoaded || videoError) && (
              <img 
                src="/images/real-estate/rum-cay-aerial.jpg"
                alt="Rum Cay Luxury Island Paradise - Aerial View"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
              />
            )}
            
            {/* Overlay for better text readability */}
            <div className="hero-overlay opacity-10 absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            
            {/* Floating Achievement Badges */}
            <motion.div 
              animate={{ y: [-15, 15, -15], rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-8 left-8 bg-accent text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm border-2 border-white/20"
            >
              🏝️ 6,608 Acres Paradise
            </motion.div>
            
            <motion.div 
              animate={{ y: [15, -15, 15], rotate: [3, -3, 3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute top-8 right-8 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm border-2 border-white/20"
            >
              ₿ Bitcoin Backed
            </motion.div>
            
            <motion.div 
              animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute bottom-8 left-8 bg-green-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm border-2 border-white/20"
            >
              🌿 100% Sustainable
            </motion.div>
            
            <motion.div 
              animate={{ y: [12, -12, 12], rotate: [2, -2, 2] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-16 right-12 bg-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm border-2 border-white/20"
            >
              🚀 $100 Start
            </motion.div>
          </div>
          
          {/* Scroll Indicator - Positioned outside image container */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-foreground/80">
              <span className="text-sm font-medium mb-2 text-foreground/90">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-foreground/70 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-foreground/80 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      
      {/* Part 2: Message Content Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-52 h-52 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8"
            >
              <span className="text-foreground">Making Real Estate </span>
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Simple, Accessible, and Affordable
              </span>
              <br />
              <span className="text-accent">for Everyone</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Experience luxury island living in Rum Cay, Bahamas through blockchain-powered 
              fractional ownership. Start your real estate journey with just $100.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300"
              >
                Explore Investment Opportunities
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg font-semibold rounded-full shadow-xl transition-all duration-300"
              >
                <Play className="mr-3 h-6 w-6" />
                Join the Community
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center bg-card rounded-2xl p-6 border shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-accent mb-2">6,608</div>
                <div className="text-muted-foreground font-medium">Acres of Paradise</div>
              </div>
              <div className="text-center bg-card rounded-2xl p-6 border shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-accent mb-2">$100</div>
                <div className="text-muted-foreground font-medium">Minimum Investment</div>
              </div>
              <div className="text-center bg-card rounded-2xl p-6 border shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-accent mb-2">45min</div>
                <div className="text-muted-foreground font-medium">From Fort Lauderdale</div>
              </div>
            </motion.div>

            {/* Additional Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏝️</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Island Paradise</h3>
                <p className="text-sm text-muted-foreground">Pristine Caribbean luxury</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">₿</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Bitcoin Backed</h3>
                <p className="text-sm text-muted-foreground">Cryptocurrency security</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-green-500/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">100% Sustainable</h3>
                <p className="text-sm text-muted-foreground">Eco-friendly development</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Easy Access</h3>
                <p className="text-sm text-muted-foreground">Start with just $100</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
