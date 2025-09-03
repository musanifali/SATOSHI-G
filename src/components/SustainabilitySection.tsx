'use client'

import { motion } from 'motion/react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Leaf, Sun, Wind, Zap, Droplet, Recycle } from 'lucide-react'

const SustainabilitySection = () => {
  const sustainabilityFeatures = [
    {
      icon: Sun,
      title: "Solar Power",
      description: "Advanced solar panel arrays providing clean, renewable energy across the entire development",
      stat: "100%",
      unit: "Solar Coverage"
    },
    {
      icon: Wind,
      title: "Wind Energy",
      description: "Strategic wind turbine placement to harness the Caribbean trade winds for sustainable power",
      stat: "24/7",
      unit: "Clean Energy"
    },
    {
      icon: Zap,
      title: "Hydrogen Microgrids",
      description: "12 resilient hydrogen-powered microgrids ensuring reliable, clean energy distribution",
      stat: "12",
      unit: "Microgrids"
    },
    {
      icon: Droplet,
      title: "Water Conservation",
      description: "Rainwater harvesting, desalination, and greywater recycling systems",
      stat: "Zero",
      unit: "Water Waste"
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Waste-to-energy systems and comprehensive recycling programs throughout the development",
      stat: "90%+",
      unit: "Recycling Rate"
    },
    {
      icon: Leaf,
      title: "Carbon Negative",
      description: "The development will sequester more carbon than it produces through innovative green technology",
      stat: "Carbon",
      unit: "Negative"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-green-50/20 dark:to-green-950/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Background eco-visual elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-20 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 bg-green-500/10 text-green-600 dark:text-green-400 px-6 py-3 rounded-full text-lg font-semibold border border-green-500/20 mb-8">
              <Leaf className="w-6 h-6" />
              A 100% Sustainable Project
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-foreground">Building the Future of</span>
              <br />
              <span className="bg-gradient-to-r from-green-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
                Sustainable Luxury
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our Rum Cay development sets a new standard for sustainable luxury living. 
              Completely off-grid and powered by renewable energy, we're proving that 
              environmental responsibility and luxury can coexist.
            </p>
          </div>
        </motion.div>

        {/* Sustainability Infographic */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-950/20 dark:to-blue-950/20 rounded-3xl p-12 border border-green-200/50 dark:border-green-800/50">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                100% Sustainable Energy Ecosystem
              </span>
            </h3>
            
            {/* Visual Energy Flow */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              {/* Energy Sources */}
              <div className="space-y-6">
                {sustainabilityFeatures.slice(0, 3).map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-6 bg-white/70 dark:bg-black/20 rounded-2xl p-6 border border-green-200/50 dark:border-green-800/50"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-bold">{feature.title}</h4>
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{feature.stat}</div>
                        </div>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
              
              {/* Energy Distribution Visualization */}
              <div className="relative">
                <div className="w-64 h-64 mx-auto relative">
                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Energy Rings */}
                  <div className="absolute inset-0 border-4 border-green-300/30 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 border-2 border-blue-300/30 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute inset-8 border-1 border-green-300/30 rounded-full animate-pulse delay-700"></div>
                  
                  {/* Connection Points */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="text-center mt-6">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">12</div>
                  <div className="text-sm text-muted-foreground">Resilient Microgrids</div>
                </div>
              </div>
            </div>
            
            {/* Environmental Benefits */}
            <div className="space-y-6">
              {sustainabilityFeatures.slice(3).map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between bg-white/70 dark:bg-black/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{feature.stat}</div>
                      <div className="text-xs text-muted-foreground">{feature.unit}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Sustainability Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-green-500/10 rounded-3xl p-12 border border-green-500/20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Sustainability by the Numbers
            </span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/50 dark:bg-black/20 rounded-2xl p-6 border border-green-200/50 dark:border-green-800/50">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">0</div>
              <div className="text-sm text-muted-foreground font-medium">Carbon Emissions</div>
            </div>
            <div className="bg-white/50 dark:bg-black/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Renewable Energy</div>
            </div>
            <div className="bg-white/50 dark:bg-black/20 rounded-2xl p-6 border border-green-200/50 dark:border-green-800/50">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">12</div>
              <div className="text-sm text-muted-foreground font-medium">Resilient Microgrids</div>
            </div>
            <div className="bg-white/50 dark:bg-black/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Net+</div>
              <div className="text-sm text-muted-foreground font-medium">Environmental Impact</div>
            </div>
          </div>
        </motion.div>

        {/* Environmental Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">
              Environmental Leadership
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This isn't just about building a resort – it's about demonstrating that luxury 
              and sustainability are not mutually exclusive. Our Rum Cay development will serve 
              as a model for future sustainable tourism and real estate developments worldwide, 
              proving that we can create beautiful, profitable projects while healing our planet.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SustainabilitySection
