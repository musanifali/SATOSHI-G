import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  PieChart, 
  TrendingUp, 
  Bitcoin, 
  DollarSign, 
  Users, 
  Heart,
  Zap,
  Building,
  ArrowRight,
  Coins
} from "lucide-react"

const TokenomicsSection = () => {
  const tokenDistribution = [
    { name: "Marketing & Promotion", percentage: 25, color: "bg-accent", description: "Global awareness and adoption" },
    { name: "Operations & Development", percentage: 15, color: "bg-primary", description: "Project construction and management" },
    { name: "Public Presale & Launchpad", percentage: 14.05, color: "bg-green-500", description: "Public investment opportunity" },
    { name: "Liquidity & Listing", percentage: 10.5, color: "bg-blue-500", description: "Exchange listings and market liquidity" },
    { name: "Team & Advisors", percentage: 8.5, color: "bg-purple-500", description: "Core team and expert advisors" },
    { name: "Strategic Reserve", percentage: 7.35, color: "bg-orange-500", description: "Long-term strategic initiatives" },
    { name: "Passive Income", percentage: 6.5, color: "bg-pink-500", description: "Stakeholder passive income generation" },
    { name: "Charitable Initiatives", percentage: 2, color: "bg-cyan-500", description: "Community and environmental causes" }
  ]

  const revenueStreams = [
    { icon: Building, title: "Property Sales & Commissions", description: "Revenue from luxury real estate sales" },
    { icon: Users, title: "P2P Transaction Fees", description: "Fees from peer-to-peer token trading" },
    { icon: DollarSign, title: "Instant Loan Commissions", description: "Property-backed lending services" },
    { icon: TrendingUp, title: "Asset Management", description: "Professional property management services" },
    { icon: Zap, title: "Educational Courses", description: "Financial education and empowerment" },
    { icon: Coins, title: "NFT Collections & Royalties", description: "Collectibles and resale royalties" }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Bitcoin className="w-4 h-4" />
            22.5M BTC1 Tokens • Bitcoin Blockchain
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-accent">$220.5B</span> Token Economy
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Sustainable growth tokenomics on <span className="font-semibold text-primary">Bitcoin Holding's multichain</span> platform.
          </p>
        </div>

        {/* Key Token Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">22.5M</div>
              <div className="text-sm text-muted-foreground font-medium">Total BTC1 Supply</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">$220.5B</div>
              <div className="text-sm text-muted-foreground font-medium">Anticipated Value</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">14.05%</div>
              <div className="text-sm text-muted-foreground font-medium">Public Presale</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-500 mb-2">6,608</div>
              <div className="text-sm text-muted-foreground font-medium">Acres Backed</div>
            </CardContent>
          </Card>
        </div>

        {/* Token Distribution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Token Distribution</h3>
            
            {/* Compact Distribution List */}
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6">
              <svg viewBox="0 0 400 300" className="w-full h-48 mb-4">
                {/* Pie Chart */}
                <circle cx="200" cy="150" r="80" fill="none" stroke="#e5e7eb" strokeWidth="2"/>
                
                {/* Pie Segments */}
                <g strokeWidth="40" fill="none">
                  <circle cx="200" cy="150" r="60" stroke="#f59e0b" strokeDasharray="94 377" strokeDashoffset="0" transform="rotate(-90 200 150)"/>
                  <circle cx="200" cy="150" r="60" stroke="#3b82f6" strokeDasharray="56 377" strokeDashoffset="-94" transform="rotate(-90 200 150)"/>
                  <circle cx="200" cy="150" r="60" stroke="#10b981" strokeDasharray="53 377" strokeDashoffset="-150" transform="rotate(-90 200 150)"/>
                  <circle cx="200" cy="150" r="60" stroke="#8b5cf6" strokeDasharray="40 377" strokeDashoffset="-203" transform="rotate(-90 200 150)"/>
                  <circle cx="200" cy="150" r="60" stroke="#ec4899" strokeDasharray="32 377" strokeDashoffset="-243" transform="rotate(-90 200 150)"/>
                  <circle cx="200" cy="150" r="60" stroke="#f97316" strokeDasharray="28 377" strokeDashoffset="-275" transform="rotate(-90 200 150)"/>
                </g>
                
                {/* Center Text */}
                <text x="200" y="145" textAnchor="middle" fill="#1f2937" fontSize="16" fontWeight="bold">22.5M</text>
                <text x="200" y="160" textAnchor="middle" fill="#6b7280" fontSize="12">BTC1</text>
              </svg>
              
              {/* Compact Legend */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded bg-accent"></div>
                    <span>Marketing</span>
                  </div>
                  <span className="font-bold">25%</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded bg-primary"></div>
                    <span>Operations</span>
                  </div>
                  <span className="font-bold">15%</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded bg-green-500"></div>
                    <span>Public Sale</span>
                  </div>
                  <span className="font-bold">14.05%</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded bg-purple-500"></div>
                    <span>Liquidity</span>
                  </div>
                  <span className="font-bold">10.5%</span>
                </div>
                <div className="col-span-2 text-center text-xs text-muted-foreground mt-2">
                  + Team (8.5%) • Reserve (7.35%) • Income (6.5%) • Charity (2%)
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Streams SVG */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Revenue Streams</h3>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
              <svg viewBox="0 0 400 300" className="w-full h-48 mb-4">
                {/* Central Revenue Hub */}
                <circle cx="200" cy="150" r="25" fill="#3b82f6"/>
                <text x="200" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Revenue</text>
                
                {/* Revenue Stream Connections */}
                <g stroke="#3b82f6" strokeWidth="2">
                  {/* Property Sales */}
                  <line x1="175" y1="135" x2="120" y2="90"/>
                  <rect x="90" y="70" width="60" height="30" fill="#f59e0b" opacity="0.7" rx="6"/>
                  <text x="120" y="87" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Property Sales</text>
                  
                  {/* P2P Fees */}
                  <line x1="225" y1="135" x2="280" y2="90"/>
                  <circle cx="280" cy="90" r="18" fill="#10b981" opacity="0.7"/>
                  <text x="280" y="95" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">P2P Fees</text>
                  
                  {/* Loans */}
                  <line x1="175" y1="165" x2="120" y2="210"/>
                  <rect x="90" y="190" width="60" height="30" fill="#8b5cf6" opacity="0.7" rx="6"/>
                  <text x="120" y="207" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Instant Loans</text>
                  
                  {/* Management */}
                  <line x1="225" y1="165" x2="280" y2="210"/>
                  <circle cx="280" cy="210" r="18" fill="#ec4899" opacity="0.7"/>
                  <text x="280" y="215" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Asset Mgmt</text>
                  
                  {/* Education & NFTs */}
                  <line x1="200" y1="125" x2="200" y2="80"/>
                  <rect x="170" y="60" width="60" height="25" fill="#f97316" opacity="0.7" rx="6"/>
                  <text x="200" y="75" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Education</text>
                  
                  <line x1="200" y1="175" x2="200" y2="230"/>
                  <rect x="170" y="215" width="60" height="25" fill="#06b6d4" opacity="0.7" rx="6"/>
                  <text x="200" y="230" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">NFT Royalties</text>
                </g>
              </svg>
              
              <div className="text-center text-sm text-muted-foreground">
                <p className="font-semibold mb-1">6 Revenue Streams</p>
                <p className="text-xs">Property sales • P2P fees • Loans • Management • Education • NFTs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investment CTA */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 text-center">
          <h4 className="text-2xl font-bold mb-4">Ready to Own Paradise?</h4>
          <p className="text-muted-foreground mb-6">
            Join investors securing luxury Bahamas real estate. Start with $100.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
              Start Investing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="font-semibold px-8">
              <Bitcoin className="mr-2 h-4 w-4" />
              Whitepaper
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TokenomicsSection
