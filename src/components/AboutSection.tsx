'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { Bitcoin, TrendingUp, DollarSign, ArrowRightLeft } from 'lucide-react'

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-foreground">Democratizing Real Estate</span>
            <br />
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Through Blockchain Technology
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're revolutionizing how people invest in real estate by making it accessible, 
            liquid, and profitable for everyone. Our blockchain-powered platform enables 
            fractional ownership of premium properties worldwide.
          </p>
        </motion.div>

        {/* Investment Flow Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">How Blockchain Transforms Real Estate</h3>
          
          <div className="bg-gradient-to-br from-card to-muted/50 rounded-3xl p-12 border border-accent/20">
            {/* Visual Process Flow */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              
              {/* Step 1: Fractional Ownership */}
              <div className="flex-1 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-xl">
                    <Bitcoin className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">Fractional Ownership</h4>
                <p className="text-muted-foreground text-sm">
                  Purchase tokens representing fractional ownership in premium real estate properties
                </p>
                <div className="mt-4 text-accent font-bold">$100 minimum</div>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-accent">
                <ArrowRightLeft className="w-8 h-8" />
              </div>

              {/* Step 2: 24/7 Liquidity */}
              <div className="flex-1 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-xl">
                    <TrendingUp className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">24/7 Liquidity</h4>
                <p className="text-muted-foreground text-sm">
                  Trade your property tokens instantly on our marketplace - no waiting months to sell
                </p>
                <div className="mt-4 text-primary font-bold">Instant trading</div>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-primary">
                <ArrowRightLeft className="w-8 h-8" />
              </div>

              {/* Step 3: Passive Income */}
              <div className="flex-1 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-green-500/80 rounded-2xl flex items-center justify-center shadow-xl">
                    <DollarSign className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">Passive Income</h4>
                <p className="text-muted-foreground text-sm">
                  Earn rental income, property appreciation, and revenue sharing from resort operations
                </p>
                <div className="mt-4 text-green-500 font-bold">Multiple streams</div>
              </div>
            </div>
            
            {/* Key Benefits Row */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-accent/10 rounded-2xl p-6 border border-accent/20">
                <div className="text-3xl mb-2">🚫</div>
                <h5 className="font-bold mb-2">No Traditional Barriers</h5>
                <p className="text-sm text-muted-foreground">No huge down payments, no paperwork hassles, no geographic restrictions</p>
              </div>
              <div className="text-center bg-primary/10 rounded-2xl p-6 border border-primary/20">
                <div className="text-3xl mb-2">⚡</div>
                <h5 className="font-bold mb-2">Instant Access</h5>
                <p className="text-sm text-muted-foreground">Buy, sell, or trade your real estate tokens 24/7 from anywhere in the world</p>
              </div>
              <div className="text-center bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                <div className="text-3xl mb-2">📈</div>
                <h5 className="font-bold mb-2">Smart Investment</h5>
                <p className="text-sm text-muted-foreground">Diversify across premium properties with data-driven insights and transparency</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* $100 Minimum Investment Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-3xl p-12 border border-accent/30"
        >
          <div className="text-6xl font-bold text-accent mb-4">$100</div>
          <h3 className="text-2xl font-bold mb-4">Minimum Investment</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlike traditional real estate that requires hundreds of thousands of dollars, 
            you can start building your property portfolio with just $100. 
            <span className="font-semibold text-accent"> No more barriers, just opportunities.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
