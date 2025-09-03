'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CheckCircle, ArrowRight } from 'lucide-react'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1500)
  }

  if (isSubscribed) {
    return (
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Thank You for Subscribing!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              You're now part of the SATOSHI community. Check your inbox for a welcome message 
              and get ready for exclusive insights, market updates, and investment opportunities.
            </p>
            <Button 
              onClick={() => setIsSubscribed(false)}
              variant="outline"
            >
              Subscribe Another Email
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8">
            <Mail className="h-8 w-8 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-balance mb-6 tracking-tight text-foreground">
            Stay Ahead of the Market
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
            Get weekly market insights, exclusive property opportunities, and expert analysis 
            delivered straight to your inbox. Join 10,000+ savvy investors.
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-semibold text-foreground mb-1">Market Reports</h4>
              <p className="text-sm text-muted-foreground">Weekly market analysis and trends</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏠</div>
              <h4 className="font-semibold text-foreground mb-1">Exclusive Properties</h4>
              <p className="text-sm text-muted-foreground">First access to premium listings</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💡</div>
              <h4 className="font-semibold text-foreground mb-1">Expert Tips</h4>
              <p className="text-sm text-muted-foreground">Investment strategies and advice</p>
            </div>
          </div>

          {/* Subscription Form */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="flex-1 bg-background border-border focus:ring-primary"
                required
              />
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Privacy Notice */}
          <p className="text-xs text-muted-foreground mt-4 max-w-md mx-auto">
            By subscribing, you agree to receive marketing emails from SATOSHI. 
            Unsubscribe at any time. <span className="underline cursor-pointer">Privacy Policy</span>
          </p>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center space-x-8 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">10,000+</div>
              <div className="text-xs text-muted-foreground">Subscribers</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">4.9★</div>
              <div className="text-xs text-muted-foreground">Content Rating</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Weekly</div>
              <div className="text-xs text-muted-foreground">Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
