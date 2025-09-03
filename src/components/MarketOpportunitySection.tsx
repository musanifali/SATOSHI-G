'use client'

import { motion } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Building2, Coins, Globe } from 'lucide-react'

const MarketOpportunitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              The Market Opportunity
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Real estate is the world's largest asset class, yet remains largely inaccessible 
            to individual investors. We're changing that with blockchain technology.
          </p>
        </motion.div>

        {/* Market Size Comparison - Visual Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-card to-muted/50 rounded-3xl p-12 border border-accent/20">
            <h3 className="text-2xl font-bold text-center mb-8">Global Asset Classes Comparison</h3>
            
            {/* Visual Bar Chart */}
            <div className="space-y-6">
              {/* Real Estate */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <span className="font-semibold">Global Real Estate</span>
                  </div>
                  <span className="text-2xl font-bold text-accent">$326.5T</span>
                </div>
                <div className="w-full bg-muted rounded-full h-4">
                  <div className="bg-gradient-to-r from-accent to-accent/80 h-4 rounded-full w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Equities */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="font-semibold">Global Equities</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-500">$109T</span>
                </div>
                <div className="w-full bg-muted rounded-full h-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-4 rounded-full w-[33%]"></div>
                </div>
              </div>
              
              {/* GDP */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <span className="font-semibold">Global GDP</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">$105T</span>
                </div>
                <div className="w-full bg-muted rounded-full h-4">
                  <div className="bg-gradient-to-r from-primary to-primary/80 h-4 rounded-full w-[32%]"></div>
                </div>
              </div>
              
              {/* Gold */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <span className="font-semibold">Gold Market</span>
                  </div>
                  <span className="text-2xl font-bold text-yellow-500">$13T</span>
                </div>
                <div className="w-full bg-muted rounded-full h-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-4 rounded-full w-[4%]"></div>
                </div>
              </div>
            </div>
            
            {/* Insights */}
            <div className="mt-8 grid md:grid-cols-2 gap-6 text-center">
              <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">3x</div>
                <div className="text-sm text-muted-foreground">Larger than equities market</div>
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">25x</div>
                <div className="text-sm text-muted-foreground">Larger than gold market</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tokenization Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 text-center border border-primary/20"
        >
          <h3 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              European Real Estate Tokenization
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="text-5xl font-bold text-accent mb-4">€1.5T</div>
              <p className="text-xl text-muted-foreground mb-6">
                Expected tokenized European real estate market by 2024
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Increased liquidity for property owners
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Lower barriers to real estate investment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Global accessibility through blockchain
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Transparent and secure transactions
                </li>
              </ul>
            </div>
            
            <div className="relative">
              {/* Animated Graph Placeholder */}
              <div className="bg-gradient-to-t from-accent/20 to-accent/5 rounded-2xl p-8 border border-accent/20">
                <div className="text-center mb-6">
                  <h4 className="text-lg font-semibold">Market Growth Projection</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">2020</span>
                    <div className="flex-1 mx-4 bg-muted rounded-full h-3 overflow-hidden">
                      <div className="bg-accent h-full w-[10%] rounded-full"></div>
                    </div>
                    <span className="text-sm">€150B</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">2022</span>
                    <div className="flex-1 mx-4 bg-muted rounded-full h-3 overflow-hidden">
                      <div className="bg-accent h-full w-[30%] rounded-full"></div>
                    </div>
                    <span className="text-sm">€450B</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">2024</span>
                    <div className="flex-1 mx-4 bg-muted rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-accent to-primary h-full w-[100%] rounded-full"></div>
                    </div>
                    <span className="text-sm font-bold">€1.5T</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MarketOpportunitySection
