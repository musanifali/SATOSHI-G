import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
  Database,
  DollarSign,
  Calendar,
  Users,
  Award,
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Anchor
} from "lucide-react"

export const metadata: Metadata = {
  title: "Satoshi Global Village | Paradise Development - Rum Cay, The Bahamas",
  description: "Discover Satoshi Global Village (SatoshiGV) - sustainable luxury resort development in Rum Cay, The Bahamas. Phase 1: 108 acres with 25 MW data mining. Phase 2: 6,500+ acres expansion with Bitcoin Village and Formula E racetrack.",
  keywords: ["Satoshi Global Village", "SatoshiGV", "Rum Cay", "The Bahamas", "Bitcoin Holding", "tokenized real estate", "SPV investment"],
}

export default function ParadiseDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Enhanced Hero Section with Theme Support */}
      <section className="relative py-24 md:py-32 bg-background overflow-hidden">
        {/* Theme-Aware Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        {/* Theme-Aware Hero Overlay */}
        <div className="paradise-hero-overlay absolute inset-0 pointer-events-none"></div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/20 shadow-lg">
              <MapPin className="w-5 h-5" />
              Rum Cay, The Bahamas - Direct flights from Fort Lauderdale
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-foreground">
              Satoshi Global <span className="text-accent">Village</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Revolutionary tokenized real estate development in Rum Cay, The Bahamas. 
              <br className="hidden md:block" />
              Phase 1: <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">108 acres</span> with 25 MW data mining →
              Phase 2: <span className="font-bold text-accent bg-accent/10 px-2 py-1 rounded"> 6,500+ acres</span> Bitcoin Village expansion.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-all duration-300">
                Explore Investment Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary hover:text-white shadow-md transform hover:scale-105 transition-all duration-300">
                Download Master Plan
              </Button>
            </div>
          </div>

          {/* Enhanced Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center border border-border shadow-xl bg-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-3">6,608+</div>
                <p className="text-sm font-medium text-muted-foreground">Total Acres (Phase 1+2)</p>
              </CardContent>
            </Card>
            <Card className="text-center border border-border shadow-xl bg-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-accent mb-3">25 MW</div>
                <p className="text-sm font-medium text-muted-foreground">Data Mining (Phase 1)</p>
              </CardContent>
            </Card>
            <Card className="text-center border border-border shadow-xl bg-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-3">SPV</div>
                <p className="text-sm font-medium text-muted-foreground">Tokenized Ownership</p>
              </CardContent>
            </Card>
            <Card className="text-center border border-border shadow-xl bg-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-accent mb-3">$100</div>
                <p className="text-sm font-medium text-muted-foreground">Min Investment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Location & Overview with Theme Support */}
      <section className="py-16 md:py-24 bg-muted/20 relative">
        <div className="absolute inset-0 bg-card/30 dark:bg-card/10"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">Satoshi Global Village</span> - Rum Cay, The Bahamas
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                SatoshiGV represents a revolutionary approach to tokenized real estate development. Located on Rum Cay, 
                The Bahamas, our Bitcoin Cross Chain powered ecosystem creates unprecedented opportunities for fractional 
                ownership through SPV (Special Purpose Vehicle) tokenization.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Bitcoin Holding multichain blockchain infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>SPV tokenization for fractional property ownership</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>25 MW data mining operations (Phase 1)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Direct access from Fort Lauderdale</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Five global target regions: Bahamas, Europe+UK, USA+Canada, South Asia+Middle East+Africa, Australia</span>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90">
                View Interactive Map
                <MapPin className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-6">
              <img 
                src="/images/real-estate/rum-cay-aerial.jpg"
                alt="Rum Cay Aerial View"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/real-estate/real-estate-ecosystem.jpg"
                  alt="Development Ecosystem"
                  className="w-full h-32 object-cover rounded-xl shadow-md"
                />
                <div className="bg-card border border-border rounded-xl p-4 flex items-center justify-center">
                  <div className="text-center">
                    <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm font-medium">5-Star Resort</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Development Phases with Theme Support */}
      <section className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
        {/* Theme-Aware Background Elements */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        {/* Theme Pattern Overlay */}
        <div className="absolute inset-0 bg-background/50 dark:bg-background/20"></div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
              Development <span className="text-accent">Phases</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our carefully planned two-phase approach ensures sustainable growth while maximizing returns for investors.
            </p>
          </div>

          {/* Phase Timeline */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4 bg-card rounded-2xl p-4 shadow-lg border border-border">
              <div className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-md">
                <Building2 className="w-5 h-5" />
                <span className="font-bold">Phase 1: Foundation</span>
              </div>
              <div className="flex items-center">
                <ArrowRight className="w-8 h-8 text-muted-foreground animate-pulse" />
              </div>
              <div className="flex items-center gap-3 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-md">
                <Star className="w-5 h-5" />
                <span className="font-bold">Phase 2: Expansion</span>
              </div>
            </div>
          </div>

          {/* Elegant Phase Selection Tabs */}
          <Tabs defaultValue="phase1" className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="relative grid w-full max-w-4xl grid-cols-2 h-20 bg-gradient-to-r from-muted/40 via-muted/20 to-muted/40 rounded-3xl p-3 shadow-2xl border border-border/40 backdrop-blur-md">
                <TabsTrigger 
                  value="phase1" 
                  className="group relative overflow-hidden rounded-2xl font-bold text-base transition-all duration-500 ease-out data-[state=active]:shadow-xl hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 group-data-[state=active]:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-0 group-data-[state=active]:opacity-100 transition-all duration-500 transform group-data-[state=active]:scale-100 scale-95"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-muted-foreground group-hover:text-primary group-data-[state=active]:text-primary-foreground transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10 group-data-[state=active]:bg-white/20 transition-all duration-300">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-lg leading-tight">Phase 1</div>
                        <div className="text-sm opacity-80">108 Acres Foundation</div>
                      </div>
                    </div>
                  </div>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="phase2" 
                  className="group relative overflow-hidden rounded-2xl font-bold text-base transition-all duration-500 ease-out data-[state=active]:shadow-xl hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 group-data-[state=active]:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 opacity-0 group-data-[state=active]:opacity-100 transition-all duration-500 transform group-data-[state=active]:scale-100 scale-95"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-muted-foreground group-hover:text-accent group-data-[state=active]:text-accent-foreground transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-accent/10 group-data-[state=active]:bg-white/20 transition-all duration-300">
                        <Star className="w-5 h-5" />
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-lg leading-tight">Phase 2</div>
                        <div className="text-sm opacity-80">6,500+ Acres Expansion</div>
                      </div>
                    </div>
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Enhanced Phase 1 Content */}
            <TabsContent value="phase1" className="space-y-12">
              <div className="text-center mb-16 bg-primary/5 p-8 rounded-3xl border border-primary/20 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Phase 1: <span className="text-primary">108 Acres Executive Summary</span>
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Off-grid infrastructure development with water, sewer, solar, wind power systems with battery backup. 
                  Includes 25 MW data mining operations and luxury residential accommodations.
                </p>
              </div>

              {/* Phase 1 Development Stages */}
              <div className="bg-card rounded-2xl p-8 mb-8 border border-border">
                <h4 className="text-xl font-bold mb-6">Phase 1 Development Stages</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <h5 className="font-semibold mb-2">Stage 1</h5>
                    <p className="text-sm text-muted-foreground">Land acquisition & permits</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-accent/10 text-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h5 className="font-semibold mb-2">Stage 2</h5>
                    <p className="text-sm text-muted-foreground">Infrastructure & construction</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-accent/10 text-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6" />
                    </div>
                    <h5 className="font-semibold mb-2">Stage 3</h5>
                    <p className="text-sm text-muted-foreground">Grand opening & operations</p>
                  </div>
                </div>
              </div>

              {/* Phase 1 Real Estate Showcase */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Left: Phase 1 Development Images */}
                <div className="space-y-6">
                  <Card className="overflow-hidden">
                    <img 
                      src="/images/real-estate/luxury-villas-rum-cay.jpg"
                      alt="Phase 1 Luxury Villas - Sustainable Design"
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">Luxury Villas & Estates</h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Exclusive waterfront properties with private beaches and sustainable energy systems.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-primary">Starting from $500K</span>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img 
                      src="/images/real-estate/off-grid-infrastructure.jpg"
                      alt="Off-Grid Sustainable Infrastructure"
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">Off-Grid Infrastructure</h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Solar, wind, and cutting-edge data mining facilities powering the entire development.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-green-600">100% Renewable</span>
                        <Button size="sm" variant="outline">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Right: Phase 1 Features */}
                <div className="space-y-6">
                  <h4 className="text-xl font-bold">Phase 1 Features & Amenities</h4>
                  
                  {/* Phase 1 Features List */}
                  <div className="space-y-4">
                    <Card className="p-4">
                      <div className="flex items-center">
                        <Zap className="w-8 h-8 text-yellow-600 mr-4" />
                        <div className="flex-1">
                          <h5 className="font-semibold">Off-Grid Infrastructure</h5>
                          <p className="text-sm text-muted-foreground">Solar/wind power with LNG hydrogen backup & battery storage</p>
                        </div>
                        <Leaf className="w-5 h-5 text-green-600" />
                      </div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center">
                        <Database className="w-8 h-8 text-purple-600 mr-4" />
                        <div className="flex-1">
                          <h5 className="font-semibold">25 MW Data Mining Operation</h5>
                          <p className="text-sm text-muted-foreground">Bitcoin mining facility powered by renewable energy</p>
                        </div>
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center">
                        <Home className="w-8 h-8 text-accent mr-4" />
                        <div className="flex-1">
                          <h5 className="font-semibold">Residential Towns & Villas</h5>
                          <p className="text-sm text-muted-foreground">Phase 1 luxury accommodations with modern amenities</p>
                        </div>
                        <DollarSign className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center">
                        <Building2 className="w-8 h-8 text-primary mr-4" />
                        <div className="flex-1">
                          <h5 className="font-semibold">Water & Sewer Systems</h5>
                          <p className="text-sm text-muted-foreground">Complete utility infrastructure for sustainable development</p>
                        </div>
                        <Waves className="w-5 h-5 text-primary" />
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center">
                        <Utensils className="w-8 h-8 text-orange-600 mr-4" />
                        <div className="flex-1">
                          <h5 className="font-semibold">Farm-to-Table Restaurants</h5>
                          <p className="text-sm text-muted-foreground">Sustainable dining with local cuisine</p>
                        </div>
                        <Star className="w-5 h-5 text-yellow-500" />
                      </div>
                    </Card>
                  </div>

                  {/* Phase 1 Investment Model */}
                  <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardContent className="p-6">
                      <h5 className="font-bold mb-3">Bitcoin Holding Investment Model</h5>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-primary">SPV</div>
                          <p className="text-sm text-muted-foreground">Tokenization</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent">25 MW</div>
                          <p className="text-sm text-muted-foreground">Data Mining</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">
                        Returns generated through Bitcoin Cross Chain liquidity and data mining revenue streams.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Investment Opportunity */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h4 className="text-2xl font-bold mb-4">Phase 1 SPV Tokenization</h4>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Participate in revolutionary tokenized real estate through Special Purpose Vehicle (SPV) 
                    fractional ownership. Minimum investment $100, powered by Bitcoin Cross Chain technology.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-accent hover:bg-accent/90">
                      <DollarSign className="mr-2 w-4 h-4" />
                      Start SPV Investment
                    </Button>
                    <Button variant="outline">
                      Download Phase 1 Executive Summary
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Enhanced Phase 2 Content */}
            <TabsContent value="phase2" className="space-y-12">
              <div className="text-center mb-16 bg-gradient-to-r from-accent/5 to-accent/10 dark:from-accent/10 dark:to-accent/5 p-8 rounded-3xl border border-accent/20 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Phase 2: <span className="text-accent">6,500+ Acres Executive Summary</span>
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Massive expansion featuring Bitcoin Village, two 21-story resort towers, Formula E racetrack, 
                  mega-yacht marina, championship golf courses, and comprehensive crypto/data mining facilities.
                </p>
              </div>

              {/* Phase 2 Development Stages */}
              <div className="bg-card rounded-2xl p-8 mb-8 border border-border">
                <h4 className="text-xl font-bold mb-6">Phase 2 Expansion Stages</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-accent/10 text-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Anchor className="w-6 h-6" />
                    </div>
                    <h5 className="font-semibold mb-2">Stage 1</h5>
                    <p className="text-sm text-muted-foreground">Marina construction begins</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h5 className="font-semibold mb-2">Stage 2</h5>
                    <p className="text-sm text-muted-foreground">Resort towers groundbreaking</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-accent/10 text-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Car className="w-6 h-6" />
                    </div>
                    <h5 className="font-semibold mb-2">Stage 3</h5>
                    <p className="text-sm text-muted-foreground">Formula E track construction</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6" />
                    </div>
                    <h5 className="font-semibold mb-2">Stage 4</h5>
                    <p className="text-sm text-muted-foreground">Grand resort opening</p>
                  </div>
                </div>
              </div>

              {/* Phase 2 Real Estate Showcase */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="overflow-hidden">
                  <img 
                    src="/images/real-estate/mega-yacht-marina.jpg"
                    alt="Mega-Yacht Marina & Two 21-Story Resort Towers"
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Two 21-Story Resort Towers</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Luxury resort towers with mega-yacht marina accommodating vessels up to 400+ feet.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-xs text-muted-foreground">Marina Capacity:</span>
                        <span className="text-xs font-medium">400+ ft yachts</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-muted-foreground">Resort Floors:</span>
                        <span className="text-xs font-medium">21 stories each</span>
                      </div>
                      <Button size="sm" className="w-full mt-3">Reserve Units</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <img 
                    src="/images/real-estate/championship-golf-course.jpg"
                    alt="Two 18-Hole Signature Golf Courses"
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Two 18-Hole Signature Golf Courses</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Championship-caliber golf courses with equestrian club and stables facilities.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-xs text-muted-foreground">Golf Courses:</span>
                        <span className="text-xs font-medium">2 x 18-hole</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-muted-foreground">Equestrian:</span>
                        <span className="text-xs font-medium">Club & Stables</span>
                      </div>
                      <Button size="sm" className="w-full mt-3" variant="outline">View Courses</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <img 
                    src="/images/real-estate/formula-e-racetrack.jpg"
                    alt="Formula E Racetrack & Bitcoin Village"
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Formula E Racetrack</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      International Formula E racing circuit with Bitcoin Village offices and residences.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-xs text-muted-foreground">Racing Circuit:</span>
                        <span className="text-xs font-medium">Formula E</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-muted-foreground">Bitcoin Village:</span>
                        <span className="text-xs font-medium">Offices + Homes</span>
                      </div>
                      <Button size="sm" className="w-full mt-3" variant="outline">Race Calendar</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Phase 2 Additional Amenities */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-6">Complete Phase 2 Amenities</h4>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                      <Heart className="w-8 h-8 text-purple-600 mr-4" />
                      <div>
                        <h5 className="font-semibold">Adult Wellness Center</h5>
                        <p className="text-sm text-muted-foreground">Beach cabanas and comprehensive wellness facilities</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-red-50 rounded-lg">
                      <Building2 className="w-8 h-8 text-red-600 mr-4" />
                      <div>
                        <h5 className="font-semibold">Casino & Water Park</h5>
                        <p className="text-sm text-muted-foreground">Gaming facilities with surfing park and lazy river</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                      <Utensils className="w-8 h-8 text-orange-600 mr-4" />
                      <div>
                        <h5 className="font-semibold">Farm-to-Table Restaurants</h5>
                        <p className="text-sm text-muted-foreground">Hotel, retail, and gourmet dining experiences</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-primary/5 rounded-lg">
                      <Database className="w-8 h-8 text-primary mr-4" />
                      <div>
                        <h5 className="font-semibold">Bitcoin Village</h5>
                        <p className="text-sm text-muted-foreground">Crypto/data mining facilities with offices and residences</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-accent/5 rounded-lg">
                      <Car className="w-8 h-8 text-accent mr-4" />
                      <div>
                        <h5 className="font-semibold">Equestrian Club & Stables</h5>
                        <p className="text-sm text-muted-foreground">Professional equestrian facilities and horse stables</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-6">Investment Model</h4>
                  <Card className="bg-accent/10 border-accent/20">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-accent mb-2">SPV</div>
                          <p className="text-sm text-muted-foreground">Tokenized Ownership</p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-2">BTC1</div>
                          <p className="text-sm text-muted-foreground">Bitcoin Cross Chain</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <h5 className="font-semibold">Revenue Streams:</h5>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Loan commissions & transaction fees</li>
                          <li>• Property sales & asset management</li>
                          <li>• Data mining operations revenue</li>
                          <li>• Educational services & NFT resales</li>
                          <li>• Token-based liquidity & staking rewards</li>
                        </ul>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mb-4">
                        *Investment backed by commodity coin issued at project approval. 
                        ROI projections modeled via fractional ownership and Bitcoin Holding liquidity mechanism.
                      </p>
                      
                      <Button className="w-full bg-accent hover:bg-accent/90">
                        Join SPV Investment Program
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Phase 2 Investment CTA */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8 text-center">
                  <h4 className="text-2xl font-bold mb-4">Phase 2 Pre-Investment via Bitcoin Holding</h4>
                  <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                    Early access to Phase 2 tokenized assets through Bitcoin Holding multichain blockchain. 
                    Secure positions in 21-story towers, Bitcoin Village, and Formula E facilities with SPV ownership structure.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-primary hover:bg-primary/90">
                      <Users className="mr-2 w-4 h-4" />
                      Join Bitcoin Holding Investment
                    </Button>
                    <Button variant="outline">
                      Download Phase 2 Executive Summary
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced Sustainability Section with Theme Support */}
      <section className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
        {/* Theme-Aware Background Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        {/* Theme Overlay */}
        <div className="absolute inset-0 bg-background/30 dark:bg-background/10"></div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              <span className="text-primary">Sustainable</span> by Design
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our commitment to environmental responsibility drives every aspect of Satoshi Global Village, 
              ensuring we preserve and enhance the natural beauty of Rum Cay for future generations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border border-border shadow-xl bg-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-10">
                <div className="bg-primary/10 text-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Leaf className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Carbon Neutral</h3>
                <p className="text-muted-foreground leading-relaxed">
                  100% renewable energy infrastructure ensuring carbon neutrality across all operations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-border shadow-xl bg-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-10">
                <div className="bg-accent/10 text-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Waves className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Marine Conservation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Protecting coral reefs and marine ecosystems through sustainable development practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-border shadow-xl bg-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-10">
                <div className="bg-primary/10 text-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <TreePine className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Ecosystem Preservation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maintaining and enhancing natural habitats while creating luxury experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-background rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to Join Satoshi Global Village?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-95 leading-relaxed max-w-4xl mx-auto">
            Experience the future of real estate investment through Bitcoin Cross Chain powered SPV tokenization. 
            Start with $100 minimum investment and participate in the revolutionary Bitcoin Village ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl transform hover:scale-110 transition-all duration-300 px-8 py-4 text-lg font-semibold">
              Start SPV Investment
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent/20 shadow-xl transform hover:scale-110 transition-all duration-300 px-8 py-4 text-lg font-semibold">
              Learn About Bitcoin Holding
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
