'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { Building2, Coins, ShoppingCart, ArrowRightLeft, CreditCard } from 'lucide-react'

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: Building2,
      title: "Property Acquisition",
      description: "We identify and acquire premium real estate properties in strategic locations worldwide",
      color: "accent" as const
    },
    {
      id: 2,
      icon: Coins,
      title: "Tokenization",
      description: "Properties are tokenized on blockchain, creating fractional ownership opportunities",
      color: "primary" as const
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: "Investor Purchases",
      description: "Investors buy tokens representing fractional ownership with minimum $100 investment",
      color: "green-500" as const
    },
    {
      id: 4,
      icon: ArrowRightLeft,
      title: "P2P Marketplace",
      description: "Trade tokens 24/7 on our peer-to-peer marketplace with instant settlement",
      color: "blue-500" as const
    },
    {
      id: 5,
      icon: CreditCard,
      title: "Instant Liquidity & Loans",
      description: "Use tokens as collateral for loans or sell instantly without traditional delays",
      color: "purple-500" as const
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
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
              How It Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Our step-by-step process makes real estate investment simple, 
            accessible, and liquid for everyone.
          </p>
        </motion.div>

        {/* Interactive Process Flow */}
        <div className="relative mb-16">
          {/* Visual Flow Diagram */}
          <div className="bg-gradient-to-br from-card to-muted/50 rounded-3xl p-12 border border-accent/20">
            <h3 className="text-2xl font-bold text-center mb-12">Investment Process Flow</h3>
            
            {/* Flow Steps */}
            <div className="grid md:grid-cols-5 gap-6 items-center">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                const colorClasses = {
                  'accent': {
                    bg: 'from-accent/20 to-accent/10',
                    border: 'border-accent/30',
                    icon: 'bg-accent',
                    text: 'text-accent'
                  },
                  'primary': {
                    bg: 'from-primary/20 to-primary/10', 
                    border: 'border-primary/30',
                    icon: 'bg-primary',
                    text: 'text-primary'
                  },
                  'green-500': {
                    bg: 'from-green-500/20 to-green-500/10',
                    border: 'border-green-500/30', 
                    icon: 'bg-green-500',
                    text: 'text-green-500'
                  },
                  'blue-500': {
                    bg: 'from-blue-500/20 to-blue-500/10',
                    border: 'border-blue-500/30',
                    icon: 'bg-blue-500', 
                    text: 'text-blue-500'
                  },
                  'purple-500': {
                    bg: 'from-purple-500/20 to-purple-500/10',
                    border: 'border-purple-500/30',
                    icon: 'bg-purple-500',
                    text: 'text-purple-500'
                  }
                }
                const colors = colorClasses[step.color as keyof typeof colorClasses]
                const isLast = index === steps.length - 1
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative text-center"
                  >
                    {/* Step Circle */}
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-full flex items-center justify-center shadow-lg`}>
                      <IconComponent className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    
                    {/* Step Number */}
                    <div className={`w-8 h-8 mx-auto mb-3 ${colors.icon} text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                      {step.id}
                    </div>
                    
                    {/* Step Title */}
                    <h4 className="font-semibold mb-2 text-sm">{step.title}</h4>
                    
                    {/* Step Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Arrow to next step */}
                    {!isLast && (
                      <div className="hidden md:block absolute top-8 -right-3 text-accent">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent/60">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
            
            {/* Key Benefits Summary */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3 bg-accent/10 rounded-2xl p-4 border border-accent/20">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">24/7</span>
                </div>
                <span className="font-semibold">Always Available Trading</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-primary/10 rounded-2xl p-4 border border-primary/20">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <span className="font-semibold">Instant Settlement</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-green-500/10 rounded-2xl p-4 border border-green-500/20">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🌍</span>
                </div>
                <span className="font-semibold">Global Accessibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
