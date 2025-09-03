'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Plane, Clock, Waves, Compass, Star } from 'lucide-react'

const LocationSection = () => {
  const accessPoints = [
    {
      from: "Fort Lauderdale, FL",
      time: "45 minutes",
      method: "Private Flight",
      icon: Plane
    },
    {
      from: "Miami, FL", 
      time: "1 hour",
      method: "Private Flight",
      icon: Plane
    },
    {
      from: "Nassau, Bahamas",
      time: "30 minutes", 
      method: "Private Flight",
      icon: Plane
    },
    {
      from: "Caribbean Waters",
      time: "Direct Access",
      method: "Mega-Yacht",
      icon: Waves
    }
  ]

  const locationHighlights = [
    {
      title: "Pristine Waters",
      description: "Crystal-clear Caribbean waters with world-class diving and snorkeling",
      icon: Waves
    },
    {
      title: "Private Island Feel", 
      description: "Exclusive access to 6,608 acres of untouched Bahamian paradise",
      icon: Star
    },
    {
      title: "Strategic Location",
      description: "Perfect positioning between US East Coast and Caribbean destinations",
      icon: Compass
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Paradise Found
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Rum Cay, Bahamas - pristine island paradise just 45min from Florida.
          </p>
        </motion.div>

        {/* Location Map & Details SVG */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 mb-8">
            <svg viewBox="0 0 800 400" className="w-full h-64">
              {/* Ocean Background */}
              <rect width="800" height="400" fill="#e0f7fa"/>
              
              {/* Water Waves */}
              <g stroke="#006064" strokeWidth="1" fill="none" opacity="0.3">
                <path d="M0 200 Q100 190 200 200 Q300 210 400 200 Q500 190 600 200 Q700 210 800 200"/>
                <path d="M0 220 Q100 210 200 220 Q300 230 400 220 Q500 210 600 220 Q700 230 800 220"/>
                <path d="M0 240 Q100 230 200 240 Q300 250 400 240 Q500 230 600 240 Q700 250 800 240"/>
              </g>
              
              {/* Islands */}
              {/* Florida Coast */}
              <ellipse cx="150" cy="120" rx="80" ry="40" fill="#4caf50" opacity="0.8"/>
              <text x="150" y="80" textAnchor="middle" fill="#2e7d32" fontSize="14" fontWeight="bold">Florida</text>
              
              {/* Rum Cay - Center */}
              <ellipse cx="400" cy="200" rx="50" ry="30" fill="#ff9800" opacity="0.9"/>
              <circle cx="400" cy="200" r="8" fill="#d84315"/>
              <text x="400" y="160" textAnchor="middle" fill="#d84315" fontSize="16" fontWeight="bold">Rum Cay</text>
              <text x="400" y="140" textAnchor="middle" fill="#d84315" fontSize="12">6,608 Acres</text>
              
              {/* Nassau */}
              <ellipse cx="600" cy="180" rx="40" ry="25" fill="#4caf50" opacity="0.8"/>
              <text x="600" y="150" textAnchor="middle" fill="#2e7d32" fontSize="14" fontWeight="bold">Nassau</text>
              
              {/* Flight Paths */}
              <g stroke="#3f51b5" strokeWidth="3" strokeDasharray="8,4" fill="none">
                {/* Florida to Rum Cay */}
                <path d="M220 130 Q310 150 350 190"/>
                <text x="290" y="145" fill="#3f51b5" fontSize="12" fontWeight="bold">45min</text>
                
                {/* Nassau to Rum Cay */}
                <path d="M560 170 Q480 180 450 190"/>
                <text x="510" y="175" fill="#3f51b5" fontSize="12" fontWeight="bold">30min</text>
              </g>
              
              {/* Yacht Path */}
              <g stroke="#00bcd4" strokeWidth="3" strokeDasharray="5,5" fill="none">
                <path d="M200 280 Q300 260 400 270"/>
                <text x="300" y="290" fill="#00bcd4" fontSize="12" fontWeight="bold">Yacht Access</text>
              </g>
              
              {/* Compass */}
              <g transform="translate(700, 320)">
                <circle r="25" fill="white" stroke="#666" strokeWidth="2"/>
                <path d="M0,-20 L5,0 L0,20 L-5,0 Z" fill="#d84315"/>
                <text x="0" y="-30" textAnchor="middle" fill="#666" fontSize="10">N</text>
              </g>
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/50 rounded-xl p-6">
              <Waves className="w-12 h-12 mx-auto mb-4 text-blue-500"/>
              <h4 className="font-semibold mb-2">Pristine Waters</h4>
              <p className="text-sm text-muted-foreground">Crystal-clear Caribbean diving & snorkeling</p>
            </div>
            <div className="bg-white/50 rounded-xl p-6">
              <Star className="w-12 h-12 mx-auto mb-4 text-accent"/>
              <h4 className="font-semibold mb-2">Private Island</h4>
              <p className="text-sm text-muted-foreground">Exclusive 6,608 acres of untouched paradise</p>
            </div>
            <div className="bg-white/50 rounded-xl p-6">
              <Compass className="w-12 h-12 mx-auto mb-4 text-green-500"/>
              <h4 className="font-semibold mb-2">Strategic Location</h4>
              <p className="text-sm text-muted-foreground">Perfect between US East Coast & Caribbean</p>
            </div>
          </div>
        </motion.div>

        {/* Access Points - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Easy Access</h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            {accessPoints.map((point, index) => {
              const IconComponent = point.icon
              return (
                <motion.div key={index} className="text-center">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4">
                    <CardContent className="p-4">
                      <div className={`w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center ${
                        point.icon === Plane ? 'bg-blue-500' : 'bg-teal-500'
                      }`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{point.from}</h4>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Clock className="w-3 h-3 text-accent" />
                        <span className="text-lg font-bold text-accent">{point.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{point.method}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Simplified CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-2xl font-bold mb-4">Your Gateway to Paradise</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Perfect balance of luxury and tranquility in the Caribbean's most exclusive destination.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LocationSection
