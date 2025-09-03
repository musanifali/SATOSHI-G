'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Home, Zap, Building2, Car, TreePine, Waves } from 'lucide-react'

const RoadmapSection = () => {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Sustainable Foundation",
      timeline: "2024-2025",
      status: "In Progress",
      acres: "108 Acres",
      highlights: [
        "Luxury Villas & Estates",
        "Sustainable Townhouses", 
        "Off-Grid Infrastructure",
        "Solar & Wind Power",
        "Data Mining Facilities"
      ],
      icon: Home,
      color: "accent"
    },
    {
      phase: "Phase 2A",
      title: "Resort Infrastructure",
      timeline: "2025-2026", 
      status: "Planning",
      acres: "2,500 Acres",
      highlights: [
        "Mega-Yacht Marina",
        "21-Story Resort Towers",
        "Private Airstrip",
        "Wellness Centers",
        "Beach Clubs & Cabanas"
      ],
      icon: Building2,
      color: "primary"
    },
    {
      phase: "Phase 2B",
      title: "Entertainment District",
      timeline: "2026-2027",
      status: "Future",
      acres: "2,000 Acres", 
      highlights: [
        "Formula E Racetrack",
        "World-Class Casino",
        "Championship Golf Course",
        "Adventure Sports Center",
        "Cultural Center"
      ],
      icon: Car,
      color: "green-500"
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Completion",
      timeline: "2027-2028",
      status: "Vision",
      acres: "2,000 Acres",
      highlights: [
        "Hydrogen Microgrids",
        "Marine Research Center", 
        "Sustainable Agriculture",
        "Carbon Sequestration",
        "Renewable Energy Export"
      ],
      icon: TreePine,
      color: "blue-500"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Development Roadmap
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Four phases transforming 6,608 acres into the world's most sustainable luxury destination.
          </p>
        </motion.div>

        {/* Compact Timeline SVG */}
        <div className="mb-16">
          <svg viewBox="0 0 1200 400" className="w-full h-64">
            {/* Background */}
            <rect width="1200" height="400" fill="transparent"/>
            
            {/* Timeline Base */}
            <line x1="100" y1="350" x2="1100" y2="350" stroke="#e5e7eb" strokeWidth="3"/>
            
            {/* Phase 1: 2024-2025 */}
            <g>
              <circle cx="200" cy="350" r="15" fill="#f59e0b"/>
              <rect x="150" y="200" width="100" height="120" fill="#f59e0b" opacity="0.2" rx="8"/>
              <rect x="160" y="220" width="30" height="20" fill="#f59e0b" rx="2"/>
              <rect x="170" y="245" width="15" height="15" fill="#dc2626"/>
              <text x="200" y="185" textAnchor="middle" fill="#92400e" fontSize="14" fontWeight="bold">Phase 1</text>
              <text x="200" y="160" textAnchor="middle" fill="#92400e" fontSize="12">108 Acres</text>
              <text x="200" y="140" textAnchor="middle" fill="#92400e" fontSize="11">2024-2025</text>
              <text x="200" y="380" textAnchor="middle" fill="#92400e" fontSize="10">Villas & Infrastructure</text>
            </g>
            
            {/* Phase 2A: 2025-2026 */}
            <g>
              <circle cx="450" cy="350" r="15" fill="#3b82f6"/>
              <rect x="400" y="180" width="100" height="140" fill="#3b82f6" opacity="0.2" rx="8"/>
              <rect x="420" y="200" width="15" height="60" fill="#3b82f6" rx="2"/>
              <rect x="440" y="200" width="15" height="60" fill="#3b82f6" rx="2"/>
              <rect x="460" y="200" width="15" height="60" fill="#3b82f6" rx="2"/>
              <path d="M415 270 Q435 260 455 270 Q475 280 485 270" stroke="#06b6d4" strokeWidth="2" fill="none"/>
              <text x="450" y="165" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold">Phase 2A</text>
              <text x="450" y="140" textAnchor="middle" fill="#1e40af" fontSize="12">2,500 Acres</text>
              <text x="450" y="120" textAnchor="middle" fill="#1e40af" fontSize="11">2025-2026</text>
              <text x="450" y="380" textAnchor="middle" fill="#1e40af" fontSize="10">Resort & Marina</text>
            </g>
            
            {/* Phase 2B: 2026-2027 */}
            <g>
              <circle cx="700" cy="350" r="15" fill="#10b981"/>
              <rect x="650" y="200" width="100" height="120" fill="#10b981" opacity="0.2" rx="8"/>
              <ellipse cx="700" cy="260" rx="30" ry="15" fill="none" stroke="#10b981" strokeWidth="3"/>
              <ellipse cx="700" cy="260" rx="20" ry="10" fill="none" stroke="#10b981" strokeWidth="2"/>
              <circle cx="680" cy="290" r="3" fill="#059669"/>
              <circle cx="720" cy="290" r="3" fill="#059669"/>
              <text x="700" y="185" textAnchor="middle" fill="#065f46" fontSize="14" fontWeight="bold">Phase 2B</text>
              <text x="700" y="160" textAnchor="middle" fill="#065f46" fontSize="12">2,000 Acres</text>
              <text x="700" y="140" textAnchor="middle" fill="#065f46" fontSize="11">2026-2027</text>
              <text x="700" y="380" textAnchor="middle" fill="#065f46" fontSize="10">Entertainment & Sports</text>
            </g>
            
            {/* Phase 3: 2027-2028 */}
            <g>
              <circle cx="950" cy="350" r="15" fill="#8b5cf6"/>
              <rect x="900" y="200" width="100" height="120" fill="#8b5cf6" opacity="0.2" rx="8"/>
              <path d="M920 220 L930 240 L940 220 L950 240 L960 220 L970 240 L980 220" stroke="#10b981" strokeWidth="3" fill="none"/>
              <circle cx="950" cy="280" r="8" fill="#059669"/>
              <path d="M942 272 L958 288 M958 272 L942 288" stroke="#059669" strokeWidth="2"/>
              <text x="950" y="185" textAnchor="middle" fill="#6b21a8" fontSize="14" fontWeight="bold">Phase 3</text>
              <text x="950" y="160" textAnchor="middle" fill="#6b21a8" fontSize="12">2,000 Acres</text>
              <text x="950" y="140" textAnchor="middle" fill="#6b21a8" fontSize="11">2027-2028</text>
              <text x="950" y="380" textAnchor="middle" fill="#6b21a8" fontSize="10">Ecosystem Complete</text>
            </g>
            
            {/* Connecting Arrows */}
            <g stroke="#9ca3af" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)">
              <path d="M280 330 Q350 310 370 330"/>
              <path d="M530 330 Q600 310 620 330"/>
              <path d="M780 330 Q850 310 870 330"/>
            </g>
            
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af"/>
              </marker>
            </defs>
          </svg>
        </div>

        {/* Phase Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {roadmapPhases.map((phase, index) => {
            const IconComponent = phase.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-accent' : 
                      index === 1 ? 'bg-primary' :
                      index === 2 ? 'bg-green-500' : 'bg-blue-500'
                    }`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{phase.phase}</h3>
                    <Badge className={`mb-3 ${
                      index === 0 ? 'bg-accent/20 text-accent' :
                      index === 1 ? 'bg-primary/20 text-primary' :
                      index === 2 ? 'bg-green-500/20 text-green-500' : 'bg-blue-500/20 text-blue-500'
                    }`}>
                      {phase.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground mb-2">{phase.acres}</p>
                    <p className="text-xs text-muted-foreground">{phase.timeline}</p>
                    <div className="mt-4 space-y-1">
                      {phase.highlights.slice(0, 3).map((highlight, i) => (
                        <p key={i} className="text-xs text-muted-foreground">• {highlight}</p>
                      ))}
                      {phase.highlights.length > 3 && (
                        <p className="text-xs text-muted-foreground">+ {phase.highlights.length - 3} more</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Investment Timeline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold mb-4">Invest at Every Phase</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Each development phase offers unique investment opportunities with increasing value potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-accent/20 text-accent border-accent/30 px-6 py-2">
                Early Access Available
              </Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30 px-6 py-2">
                Phase 1 Properties
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RoadmapSection
