'use client'

import { motion } from 'motion/react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Home, Building, TrendingUp } from 'lucide-react'

const TargetUsersSection = () => {
  const users = [
    {
      title: "Individual Investors",
      description: "Start with just $100",
      detail: "Perfect for first-time investors who want to diversify into real estate without large capital requirements.",
      icon: Users,
      color: "accent",
      benefits: ["Low entry barriers", "Fractional ownership", "24/7 liquidity"]
    },
    {
      title: "Property Owners",
      description: "Unlock hidden capital",
      detail: "Monetize your real estate through tokenization while retaining control and generating new revenue streams.",
      icon: Home,
      color: "primary", 
      benefits: ["Instant liquidity", "Retain ownership", "New revenue streams"]
    },
    {
      title: "Developers",
      description: "Secure funding",
      detail: "Access global capital markets to fund new developments through innovative blockchain-based funding models.",
      icon: Building,
      color: "green-500",
      benefits: ["Global funding", "Reduced costs", "Faster execution"]
    },
    {
      title: "Institutions",
      description: "Diversify portfolios",
      detail: "Add tokenized real estate to investment portfolios with enhanced liquidity and transparent performance tracking.",
      icon: TrendingUp,
      color: "blue-500",
      benefits: ["Portfolio diversification", "Enhanced liquidity", "Transparent tracking"]
    }
  ]

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
              Built for Everyone
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Our platform serves diverse users, from individual investors to large institutions, 
            each with unique needs and opportunities.
          </p>
        </motion.div>

        <div className="mb-16">
          {/* Visual User Journey */}
          <div className="bg-gradient-to-br from-card to-muted/50 rounded-3xl p-12 border border-accent/20">
            <h3 className="text-2xl font-bold text-center mb-12">Who Benefits from Our Platform</h3>
            
            {/* Central Platform Hub */}
            <div className="relative">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-2xl z-10">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">SGV</div>
                  <div className="text-xs">Platform</div>
                </div>
              </div>
              
              {/* User Types in Circle */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 min-h-[400px] items-center">
                {users.map((user, index) => {
                  const IconComponent = user.icon
                  const positions = [
                    "lg:-translate-y-16 lg:-translate-x-16", // Top-left
                    "lg:-translate-y-16 lg:translate-x-16",  // Top-right
                    "lg:translate-y-16 lg:-translate-x-16",  // Bottom-left
                    "lg:translate-y-16 lg:translate-x-16"    // Bottom-right
                  ]
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative text-center ${positions[index]}`}
                    >
                      {/* Connection Line to Center */}
                      <div className="hidden lg:block absolute top-1/2 left-1/2 w-20 h-0.5 bg-gradient-to-r from-accent/30 to-transparent transform -translate-y-1/2 
                        ${index === 0 ? 'rotate-45' : index === 1 ? '-rotate-45' : index === 2 ? '135deg' : '-135deg'} origin-left"></div>
                      
                      {/* User Icon */}
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-white to-muted/50 rounded-full flex items-center justify-center shadow-lg border border-accent/20">
                        <IconComponent className="w-10 h-10 text-accent" />
                      </div>
                      
                      {/* User Info */}
                      <h4 className="font-bold text-lg mb-2">{user.title}</h4>
                      <div className="text-accent font-semibold mb-3">{user.description}</div>
                      
                      {/* Benefits List */}
                      <div className="space-y-2 text-sm">
                        {user.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center justify-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
            
            {/* Key Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-accent/10 rounded-2xl p-4 border border-accent/20">
                <div className="text-2xl font-bold text-accent mb-1">$100+</div>
                <div className="text-xs text-muted-foreground">Min Investment</div>
              </div>
              <div className="bg-primary/10 rounded-2xl p-4 border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-xs text-muted-foreground">Liquidity</div>
              </div>
              <div className="bg-green-500/10 rounded-2xl p-4 border border-green-500/20">
                <div className="text-2xl font-bold text-green-500 mb-1">Global</div>
                <div className="text-xs text-muted-foreground">Access</div>
              </div>
              <div className="bg-blue-500/10 rounded-2xl p-4 border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-500 mb-1">Instant</div>
                <div className="text-xs text-muted-foreground">Trading</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 rounded-3xl p-12 border border-accent/20">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join thousands of investors who are already building their real estate portfolios 
              through our blockchain platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-10 py-4 text-lg font-semibold"
              >
                Start Investing Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-white px-10 py-4 text-lg font-semibold"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TargetUsersSection
