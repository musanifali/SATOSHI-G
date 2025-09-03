import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, TrendingUp, DollarSign, Clock, Zap, Shield, Users } from "lucide-react"
import { motion } from "motion/react"

const ProblemSolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Revolutionizing <span className="text-accent">Real Estate Investment</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold text-accent text-xl">$326.5T</span> global market, 
            <span className="font-bold text-primary"> €1.5T</span> EU tokenized — barriers eliminated.
          </p>
        </motion.div>

        {/* Problem vs Solution Visual Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Traditional Problems */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-red-600 flex items-center justify-center gap-2">
              <XCircle className="w-8 h-8" />
              Traditional Problems
            </h3>
            
            {/* Enhanced SVG Illustration for Problems */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-3xl p-8 mb-6 shadow-xl border border-red-200/50"
            >
              <svg viewBox="0 0 400 300" className="w-full h-48 mb-4">
                <defs>
                  <linearGradient id="problemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#fee2e2', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#fecaca', stopOpacity:1}} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <marker id="redArrowDown" markerWidth="12" markerHeight="12" refX="10" refY="3" orient="auto" markerUnits="strokeWidth">
                    <polygon points="0,0 0,6 10,3" fill="#dc2626"/>
                  </marker>
                </defs>
                <rect width="400" height="300" fill="url(#problemGradient)" rx="16"/>
                
                <g stroke="#dc2626" strokeWidth="3" fill="none">
                  <rect x="50" y="50" width="60" height="60" fill="#fee2e2" rx="12" filter="url(#glow)"/>
                  <path d="m70 70 20 20m0-20-20 20" strokeWidth="4"/>
                  <circle cx="80" cy="80" r="35" fill="none" stroke="#dc2626" strokeWidth="2" opacity="0.3"/>
                  <text x="80" y="130" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">Locked Capital</text>
                  
                  <rect x="170" y="50" width="60" height="60" fill="#fee2e2" rx="12" filter="url(#glow)"/>
                  <rect x="185" y="65" width="30" height="4" fill="#dc2626"/>
                  <rect x="185" y="75" width="30" height="4" fill="#dc2626"/>
                  <rect x="185" y="85" width="30" height="4" fill="#dc2626"/>
                  <rect x="185" y="95" width="30" height="4" fill="#dc2626"/>
                  <text x="200" y="130" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">High Entry</text>
                  
                  <circle cx="320" cy="80" r="30" fill="#fee2e2" filter="url(#glow)"/>
                  <path d="M320 60v20l15 10" strokeWidth="3"/>
                  <text x="320" y="130" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">Time Delays</text>
                  
                  <path d="M80 180 L160 220" strokeWidth="4" stroke="#dc2626" markerEnd="url(#redArrowDown)"/>
                  <text x="120" y="240" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">Inflation Risk</text>
                </g>
              </svg>
            </motion.div>

            <div className="text-sm text-red-700 space-y-2">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 flex-shrink-0" />
                <span><strong>Low Liquidity:</strong> Properties take months/years to sell</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 flex-shrink-0" />
                <span><strong>High Entry:</strong> Massive capital + perfect credit needed</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 flex-shrink-0" />
                <span><strong>Time Delays:</strong> Complex paperwork & approvals</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 flex-shrink-0" />
                <span><strong>Inflation Risk:</strong> Fiat currency devaluation</span>
              </div>
            </div>
          </motion.div>

          {/* SatoshiGV Solutions */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-green-600 flex items-center justify-center gap-2">
              <CheckCircle className="w-8 h-8" />
              SatoshiGV Solutions
            </h3>
            
            {/* Enhanced SVG Illustration for Solutions */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-100/50 rounded-3xl p-8 mb-6 shadow-xl border border-green-200/50"
            >
              <svg viewBox="0 0 400 300" className="w-full h-48 mb-4">
                <defs>
                  <linearGradient id="solutionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#dcfce7', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#bbf7d0', stopOpacity:1}} />
                  </linearGradient>
                  <filter id="greenGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style={{stopColor:'#16a34a', stopOpacity:0.4}} />
                    <stop offset="100%" style={{stopColor:'#16a34a', stopOpacity:0}} />
                  </radialGradient>
                </defs>
                <rect width="400" height="300" fill="url(#solutionGradient)" rx="16"/>
                
                <g stroke="#16a34a" strokeWidth="3" fill="none">
                  <circle cx="80" cy="80" r="25" fill="url(#pulseGradient)" filter="url(#greenGlow)"/>
                  <circle cx="80" cy="80" r="15" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
                  <circle cx="50" cy="110" r="8" fill="#bbf7d0"/>
                  <circle cx="110" cy="110" r="8" fill="#bbf7d0"/>
                  <circle cx="80" cy="130" r="8" fill="#bbf7d0"/>
                  <path d="M80 95 L50 110 M80 95 L110 110 M80 95 L80 130" strokeWidth="2"/>
                  <text x="80" y="155" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">24/7 Trading</text>
                  
                  <circle cx="200" cy="80" r="25" fill="#dcfce7" filter="url(#greenGlow)"/>
                  <path d="M200 65 L200 95 M190 70 Q200 65 210 70 Q200 75 190 80 Q200 85 210 90" strokeWidth="3"/>
                  <text x="200" y="155" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">$100 Entry</text>
                  
                  <circle cx="320" cy="80" r="25" fill="#dcfce7" filter="url(#greenGlow)"/>
                  <path d="M310 65 L315 80 L305 80 L315 95 L325 80 L315 80 Z" fill="#16a34a"/>
                  <text x="320" y="155" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">Instant</text>
                  
                  <path d="M160 180 L160 220 Q160 230 170 235 L190 245 Q200 250 210 245 L230 235 Q240 230 240 220 L240 180 Z" fill="url(#pulseGradient)" stroke="#16a34a" strokeWidth="2"/>
                  <circle cx="200" cy="205" r="15" fill="#f59e0b"/>
                  <text x="200" y="212" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">₿</text>
                  <text x="200" y="275" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">Bitcoin Backed</text>
                </g>
              </svg>
            </motion.div>

            <div className="text-sm text-green-700 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span><strong>High Liquidity:</strong> Trade property tokens 24/7 instantly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span><strong>$100 Entry:</strong> Accessible to everyone, no credit checks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span><strong>Instant:</strong> Blockchain-powered loans & transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span><strong>Bitcoin Backed:</strong> Hedge against inflation</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Benefits with Enhanced SVG */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-8 shadow-xl border border-primary/20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">SatoshiGV Advantages</h3>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <svg viewBox="0 0 600 200" className="w-full h-32">
              <rect width="600" height="200" fill="transparent"/>
              
              <defs>
                <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0.8}} />
                  <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0.2}} />
                </radialGradient>
              </defs>
              
              <circle cx="300" cy="100" r="40" fill="url(#hubGradient)"/>
              <circle cx="300" cy="100" r="25" fill="#3b82f6"/>
              <text x="300" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SGVB</text>
              
              <g stroke="#3b82f6" strokeWidth="2" fill="none">
                <line x1="260" y1="80" x2="180" y2="50"/>
                <circle cx="160" cy="40" r="20" fill="#f59e0b" opacity="0.2"/>
                <circle cx="160" cy="40" r="12" fill="#f59e0b"/>
                <text x="160" y="65" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">Education</text>
                
                <line x1="340" y1="80" x2="420" y2="50"/>
                <circle cx="440" cy="40" r="20" fill="#10b981" opacity="0.2"/>
                <circle cx="440" cy="40" r="12" fill="#10b981"/>
                <text x="440" y="65" textAnchor="middle" fill="#065f46" fontSize="10" fontWeight="bold">Management</text>
                
                <line x1="300" y1="140" x2="300" y2="180"/>
                <circle cx="300" cy="180" r="20" fill="#8b5cf6" opacity="0.2"/>
                <circle cx="300" cy="180" r="12" fill="#8b5cf6"/>
                <text x="300" y="170" textAnchor="middle" fill="#5b21b6" fontSize="10" fontWeight="bold">Revenue</text>
              </g>
            </svg>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Shield className="w-12 h-12 mx-auto mb-3 text-accent"/>
              <h4 className="font-semibold mb-2">Financial Education</h4>
              <p className="text-sm text-muted-foreground">Comprehensive courses & empowerment</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 mx-auto mb-3 text-primary"/>
              <h4 className="font-semibold mb-2">Hassle-Free Management</h4>
              <p className="text-sm text-muted-foreground">Professional property management included</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-green-500"/>
              <h4 className="font-semibold mb-2">Multiple Revenue Streams</h4>
              <p className="text-sm text-muted-foreground">Sales, P2P fees, loans, NFTs & more</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSolutionSection
