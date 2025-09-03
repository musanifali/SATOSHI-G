import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Users, TrendingUp, Shield, Zap, Star, Target } from 'lucide-react'

const SatoshiOneSection = () => {
  const features = [
    {
      icon: Users,
      title: "Client Management",
      description: "Advanced CRM tools to manage your client relationships and track deals"
    },
    {
      icon: TrendingUp,
      title: "Market Analytics",
      description: "Real-time market data and performance analytics to guide your decisions"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Bank-level security and compliance for all your transactions"
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Fast-track approvals and automated document processing"
    }
  ]

  const benefits = [
    "Higher commission rates",
    "Exclusive property listings",
    "Marketing support & materials",
    "Training & certification programs",
    "24/7 dedicated support",
    "Advanced reporting tools"
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="h-4 w-4" />
              <span>SATOSHI ONE</span>
            </div>
            
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight">
              Empowering Real Estate{' '}
              <span className="text-yellow-400">Professionals</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Join SATOSHI One, the exclusive partner platform designed for real estate professionals 
              who want to scale their business with cutting-edge tools, premium support, and 
              unmatched earning potential.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold px-8">
                PARTNER WITH US
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 backdrop-blur-sm border-gray-700">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">500+</div>
                  <div className="text-gray-300 text-sm">Active Partners</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-gray-700">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">15%</div>
                  <div className="text-gray-300 text-sm">Higher Commissions</div>
                </CardContent>
              </Card>
            </div>

            {/* Benefits List */}
            <Card className="bg-white/10 backdrop-blur-sm border-gray-700">
              <CardContent className="p-6">
                <h4 className="font-bold text-white mb-4 flex items-center">
                  <Target className="h-5 w-5 text-yellow-400 mr-2" />
                  Partner Benefits
                </h4>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Success Story */}
            <Card className="bg-gradient-to-r from-yellow-400/20 to-yellow-300/10 border-yellow-400/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-yellow-400/30 rounded-full flex items-center justify-center mr-3">
                    <span className="text-yellow-400 font-bold text-sm">AS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Ahmed Al-Rashid</div>
                    <div className="text-gray-400 text-xs">Top Partner Agent</div>
                  </div>
                </div>
                <blockquote className="text-gray-300 text-sm italic">
                  "Since joining SATOSHI One, my business has grown 300%. The platform and 
                  support are game-changers."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          <h3 className="font-bold text-2xl text-white mb-4">
            Ready to Transform Your Real Estate Business?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join the elite network of real estate professionals who are scaling their success with SATOSHI One
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold px-8">
              Apply Now - It's Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="text-gray-400 text-sm">
              Join 500+ professionals • No setup fees
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SatoshiOneSection
