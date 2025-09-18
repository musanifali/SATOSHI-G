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

            {/* Phase 1 Real Estate Showcase */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Left: Phase 1 Development Images */}
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <img 
                    src="/images/real-estate/luxury-villas-rum-cay.jpg"
                    alt="Phase 1 Luxury Villas - Sustainable Design"
                    className="w-full h-48 object-cover rounded-xl shadow-lg mb-4"
                  />
                  <h4 className="font-bold text-lg mb-2">Luxury Villas & Estates</h4>
                  <p className="text-muted-foreground text-sm">Exclusive waterfront properties with private beaches and sustainable energy systems.</p>
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6">
                  <img 
                    src="/images/real-estate/off-grid-infrastructure.jpg"
                    alt="Off-Grid Sustainable Infrastructure"
                    className="w-full h-48 object-cover rounded-xl shadow-lg mb-4"
                  />
                  <h4 className="font-bold text-lg mb-2">Off-Grid Infrastructure</h4>
                  <p className="text-muted-foreground text-sm">Solar, wind, and cutting-edge data mining facilities powering the entire development.</p>
                </div>
              </div>
              
              {/* Right: Phase 1 Features */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold mb-4">Phase 1 Highlights</h4>
                
                {/* Phase 1 Features List */}
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-green-50 rounded-lg">
                    <Home className="w-8 h-8 text-green-600 mr-4" />
                    <div>
                      <h5 className="font-semibold">Luxury Villas & Estates</h5>
                      <p className="text-sm text-muted-foreground">Waterfront properties with private amenities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <TreePine className="w-8 h-8 text-blue-600 mr-4" />
                    <div>
                      <h5 className="font-semibold">Sustainable Townhouses</h5>
                      <p className="text-sm text-muted-foreground">Eco-friendly multi-family residences</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
                    <Zap className="w-8 h-8 text-yellow-600 mr-4" />
                    <div>
                      <h5 className="font-semibold">Solar & Wind Power</h5>
                      <p className="text-sm text-muted-foreground">100% renewable energy infrastructure</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                    <Database className="w-8 h-8 text-purple-600 mr-4" />
                    <div>
                      <h5 className="font-semibold">Data Mining Facilities</h5>
                      <p className="text-sm text-muted-foreground">Bitcoin mining powered by clean energy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Opportunity */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">Phase 1 Investment Opportunity</h4>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Secure your piece of paradise. Limited luxury properties available for fractional ownership starting at $100.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-accent hover:bg-accent/90">
                  View Phase 1 Properties
                </Button>
                <Button variant="outline">
                  Download Development Plan
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Phase 2 Content */}
          <TabsContent value="phase2" className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Phase 2: <span className="text-accent">Resort & Entertainment</span>
              </h3>
              <p className="text-muted-foreground">
                Mega-resort expansion with world-class amenities and entertainment.
              </p>
            </div>

            {/* Phase 2 Real Estate Showcase */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <img 
                  src="/images/real-estate/mega-yacht-marina.jpg"
                  alt="Mega-Yacht Marina & Resort Towers"
                  className="w-full h-40 object-cover rounded-xl shadow-lg mb-4"
                />
                <h4 className="font-bold text-lg mb-2">Mega-Yacht Marina</h4>
                <p className="text-muted-foreground text-sm">21-story resort towers with luxury marina for superyachts</p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <img 
                  src="/images/real-estate/championship-golf-course.jpg"
                  alt="Championship Golf Course"
                  className="w-full h-40 object-cover rounded-xl shadow-lg mb-4"
                />
                <h4 className="font-bold text-lg mb-2">Championship Golf</h4>
                <p className="text-muted-foreground text-sm">World-class 18-hole championship golf course</p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <img 
                  src="/images/real-estate/formula-e-racetrack.jpg"
                  alt="Formula E Racetrack & Entertainment"
                  className="w-full h-40 object-cover rounded-xl shadow-lg mb-4"
                />
                <h4 className="font-bold text-lg mb-2">Formula E Track</h4>
                <p className="text-muted-foreground text-sm">International racing circuit and entertainment complex</p>
              </div>
            </div>

            {/* Phase 2 Investment */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">Phase 2 Pre-Investment</h4>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Early access to resort tower units and marina berths. Reserve your investment position for maximum returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90">
                  Reserve Phase 2 Units
                </Button>
                <Button variant="outline">
                  Phase 2 Masterplan
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Investment CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full font-medium border border-blue-200">
            🏝️ Total Development: 6,608 Acres Paradise
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDevelopmentSection
