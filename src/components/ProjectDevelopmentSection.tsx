import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  MapPin, 
  Leaf, 
  Building2, 
  Waves, 
  Zap, 
  Car, 
  Utensils, 
  Heart,
  Plane,
  TreePine,
  Home,
  Database
} from "lucide-react"

const ProjectDevelopmentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Rum Cay, Bahamas - 45min from FL
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Paradise <span className="text-accent">Development</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Two-phase sustainable luxury resort: <span className="font-semibold text-primary">108 acres</span> → 
            <span className="font-semibold text-accent"> 6,500+ acres</span> expansion.
          </p>
        </div>

        {/* Phase Tabs */}
        <Tabs defaultValue="phase1" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="phase1" className="font-semibold">Phase 1 - 108 Acres</TabsTrigger>
            <TabsTrigger value="phase2" className="font-semibold">Phase 2 - 6,500+ Acres</TabsTrigger>
          </TabsList>

          {/* Phase 1 Content */}
          <TabsContent value="phase1" className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Phase 1: <span className="text-primary">Sustainable Foundation</span>
              </h3>
              <p className="text-muted-foreground">
                Off-grid 5-star resort with green power & luxury accommodations.
              </p>
            </div>

            {/* Phase 1 SVG Illustration */}
            <div className="bg-gradient-to-br from-green-50 to-primary-50 rounded-2xl p-8 mb-8">
              <svg viewBox="0 0 800 300" className="w-full h-48">
                {/* Background */}
                <rect width="800" height="300" fill="transparent"/>
                
                {/* Island Base */}
                <ellipse cx="400" cy="280" rx="380" ry="20" fill="#22c55e" opacity="0.3"/>
                
                {/* Green Infrastructure */}
                <g>
                  {/* Solar Panels */}
                  <rect x="100" y="200" width="80" height="40" fill="#3b82f6" opacity="0.7" rx="4"/>
                  <rect x="105" y="205" width="70" height="30" fill="#1e40af" rx="2"/>
                  <text x="140" y="260" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">Solar Power</text>
                  
                  {/* Wind Turbines */}
                  <line x1="300" y1="180" x2="300" y2="80" stroke="#10b981" strokeWidth="4"/>
                  <circle cx="300" cy="80" r="3" fill="#10b981"/>
                  <path d="M300 80 L285 65 M300 80 L315 65 M300 80 L300 60" stroke="#10b981" strokeWidth="2"/>
                  <text x="300" y="260" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">Wind Energy</text>
                  
                  {/* Luxury Villas */}
                  <rect x="500" y="180" width="60" height="40" fill="#f59e0b" opacity="0.7" rx="4"/>
                  <polygon points="500,180 530,160 560,180" fill="#dc2626"/>
                  <rect x="520" y="190" width="8" height="15" fill="#8b5cf6"/>
                  <rect x="535" y="190" width="8" height="15" fill="#8b5cf6"/>
                  <text x="530" y="260" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">Luxury Villas</text>
                  
                  {/* Data Center */}
                  <rect x="650" y="190" width="50" height="30" fill="#6b7280" opacity="0.8" rx="4"/>
                  <rect x="655" y="195" width="10" height="20" fill="#3b82f6"/>
                  <rect x="670" y="195" width="10" height="20" fill="#3b82f6"/>
                  <rect x="685" y="195" width="10" height="20" fill="#3b82f6"/>
                  <text x="675" y="260" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="bold">Data Center</text>
                </g>
                
                {/* Connection Lines */}
                <g stroke="#10b981" strokeWidth="2" strokeDasharray="5,5">
                  <line x1="180" y1="220" x2="260" y2="140"/>
                  <line x1="340" y1="140" x2="500" y2="200"/>
                  <line x1="560" y1="200" x2="650" y2="205"/>
                </g>
              </svg>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-green-50 rounded-xl p-6">
                <Zap className="w-12 h-12 mx-auto mb-4 text-green-600"/>
                <h4 className="font-semibold mb-2">Green Power</h4>
                <p className="text-sm text-muted-foreground">Solar, wind, hydrogen microgrids + 25MW Bitcoin mining</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <Home className="w-12 h-12 mx-auto mb-4 text-primary"/>
                <h4 className="font-semibold mb-2">Luxury Living</h4>
                <p className="text-sm text-muted-foreground">Premium villas, townhouses, beachfront cabanas</p>
              </div>
              <div className="bg-accent-50 rounded-xl p-6">
                <Leaf className="w-12 h-12 mx-auto mb-4 text-accent"/>
                <h4 className="font-semibold mb-2">Self-Sufficient</h4>
                <p className="text-sm text-muted-foreground">Off-grid water, waste, sewer, energy storage</p>
              </div>
            </div>
          </TabsContent>

          {/* Phase 2 Content */}
          <TabsContent value="phase2" className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Phase 2: <span className="text-accent">Luxury Paradise Expansion</span>
              </h3>
              <p className="text-muted-foreground">
                Massive 6,500+ acres with world-class entertainment & facilities.
              </p>
            </div>

            {/* Phase 2 Master Plan SVG */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
              <svg viewBox="0 0 800 400" className="w-full h-64">
                {/* Background */}
                <rect width="800" height="400" fill="transparent"/>
                
                {/* Island Expansion */}
                <ellipse cx="400" cy="380" rx="390" ry="15" fill="#3b82f6" opacity="0.2"/>
                
                {/* Marina Section */}
                <g>
                  <rect x="50" y="250" width="120" height="80" fill="#06b6d4" opacity="0.3" rx="8"/>
                  <path d="M80 280 Q90 270 100 280 Q110 290 120 280 Q130 270 140 280" stroke="#0891b2" strokeWidth="3" fill="none"/>
                  <rect x="90" y="290" width="40" height="15" fill="#0284c7" rx="2"/>
                  <text x="110" y="350" textAnchor="middle" fill="#0c4a6e" fontSize="11" fontWeight="bold">Marina & Yachts</text>
                </g>
                
                {/* Resort Towers */}
                <g>
                  <rect x="250" y="180" width="30" height="120" fill="#8b5cf6" opacity="0.7" rx="4"/>
                  <rect x="290" y="180" width="30" height="120" fill="#8b5cf6" opacity="0.7" rx="4"/>
                  {/* Windows */}
                  <g fill="#fbbf24">
                    {Array.from({length: 10}, (_, i) => (
                      <g key={i}>
                        <rect x="255" y={190 + i * 10} width="5" height="5" />
                        <rect x="265" y={190 + i * 10} width="5" height="5" />
                        <rect x="295" y={190 + i * 10} width="5" height="5" />
                        <rect x="305" y={190 + i * 10} width="5" height="5" />
                      </g>
                    ))}
                  </g>
                  <text x="285" y="350" textAnchor="middle" fill="#5b21b6" fontSize="11" fontWeight="bold">Resort Towers</text>
                </g>
                
                {/* Golf Course */}
                <g>
                  <ellipse cx="500" cy="200" rx="80" ry="40" fill="#22c55e" opacity="0.4"/>
                  <circle cx="480" cy="190" r="3" fill="#15803d"/>
                  <circle cx="520" cy="210" r="2" fill="#15803d"/>
                  <path d="M460 180 Q480 190 500 185" stroke="#15803d" strokeWidth="2" fill="none"/>
                  <text x="500" y="350" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">Golf Courses</text>
                </g>
                
                {/* Racetrack */}
                <g>
                  <ellipse cx="650" cy="220" rx="60" ry="30" fill="none" stroke="#dc2626" strokeWidth="4"/>
                  <ellipse cx="650" cy="220" rx="40" ry="20" fill="none" stroke="#dc2626" strokeWidth="2"/>
                  <text x="650" y="350" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Formula E Track</text>
                </g>
                
                {/* Connecting Infrastructure */}
                <g stroke="#6b7280" strokeWidth="2" strokeDasharray="3,3" fill="none">
                  <path d="M170 290 Q220 280 250 250"/>
                  <path d="M320 250 Q400 240 450 220"/>
                  <path d="M550 220 Q600 220 650 220"/>
                </g>
              </svg>
            </div>

            <div className="grid md:grid-cols-4 gap-4 text-center mb-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <Waves className="w-8 h-8 mx-auto mb-2 text-blue-600"/>
                <h4 className="font-semibold text-sm mb-1">Marina</h4>
                <p className="text-xs text-muted-foreground">Mega-yacht marina, water parks</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <Building2 className="w-8 h-8 mx-auto mb-2 text-purple-600"/>
                <h4 className="font-semibold text-sm mb-1">Resort</h4>
                <p className="text-xs text-muted-foreground">Two 21-story towers, casino</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <TreePine className="w-8 h-8 mx-auto mb-2 text-green-600"/>
                <h4 className="font-semibold text-sm mb-1">Sports</h4>
                <p className="text-xs text-muted-foreground">Golf, equestrian, Formula E</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <Heart className="w-8 h-8 mx-auto mb-2 text-red-600"/>
                <h4 className="font-semibold text-sm mb-1">Wellness</h4>
                <p className="text-xs text-muted-foreground">Hospital, restaurants, spa</p>
              </div>
            </div>

            {/* Sustainability Highlight */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold mb-3">100% Sustainable Design</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Solar, wind, hydrogen powered with complete off-grid capability.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>Solar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-4 h-4 text-primary" />
                  <span>Wind</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-green-500" />
                  <span>Hydrogen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-green-600" />
                  <span>Zero Waste</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Travel Access */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full font-medium border border-blue-200">
            <Plane className="w-5 h-5" />
            Fort Lauderdale → Rum Cay: 45min flight to paradise
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDevelopmentSection
