'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Sparkles, Users } from 'lucide-react'

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-primary rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main CTA Content */}
          <div className="max-w-5xl mx-auto mb-16">
            {/* Sparkle Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mb-8 shadow-2xl"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
            
            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">World's First</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Tokenized Luxury Island
              </span>
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-10"
            >
              Join thousands reshaping real estate through blockchain. 
              <span className="font-semibold text-accent"> Start with $100.</span>
            </motion.p>
          </div>
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-10 py-4 text-lg font-bold rounded-full shadow-xl transition-all duration-300 group"
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Invest Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300 group"
            >
              <Download className="mr-2 h-5 w-5" />
              Whitepaper
            </Button>
          </motion.div>
          
          {/* Compact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8"
          >
            <div className="text-center bg-white/80 dark:bg-black/40 rounded-xl p-4 border border-accent/20">
              <div className="text-2xl font-bold text-accent mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Early Investors</div>
            </div>
            
            <div className="text-center bg-white/80 dark:bg-black/40 rounded-xl p-4 border border-primary/20">
              <div className="text-2xl font-bold text-primary mb-1">$220.5B</div>
              <div className="text-sm text-muted-foreground">Target Value</div>
            </div>
            
            <div className="text-center bg-white/80 dark:bg-black/40 rounded-xl p-4 border border-green-500/20">
              <div className="text-2xl font-bold text-green-500 mb-1">6,608</div>
              <div className="text-sm text-muted-foreground">Acres</div>
            </div>
          </motion.div>
          
          {/* Compact Urgency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-xl p-6 border border-accent/30">
              <h3 className="text-lg font-bold mb-2">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Early Access Pricing
                </span>
              </h3>
              <p className="text-sm text-muted-foreground">
                First 1,000 investors get pre-launch pricing & exclusive Phase 1 access.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTASection
