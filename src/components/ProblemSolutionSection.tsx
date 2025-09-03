'use client'

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
            
            {/* Advanced SVG Illustration for Problems */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-3xl p-8 mb-6 shadow-xl border border-red-200/50"
            >
              <svg viewBox="0 0 400 300" className="w-full h-56 mb-4">
                <defs>
                  <linearGradient id="problemSky" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#fef2f2', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#fee2e2', stopOpacity:1}} />
                  </linearGradient>
                  <linearGradient id="buildingRed" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#dc2626', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#991b1b', stopOpacity:1}} />
                  </linearGradient>
                  <linearGradient id="chainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:'#7f1d1d', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#dc2626', stopOpacity:1}} />
                  </linearGradient>
                  <filter id="problemShadow">
                    <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#000" floodOpacity="0.2"/>
                  </filter>
                  <pattern id="brickPattern" patternUnits="userSpaceOnUse" width="20" height="10">
                    <rect width="20" height="10" fill="#dc2626"/>
                    <rect width="10" height="5" fill="#991b1b"/>
                    <rect x="10" y="5" width="10" height="5" fill="#991b1b"/>
                  </pattern>
                </defs>
                
                <rect width="400" height="300" fill="url(#problemSky)"/>
                
                {/* Chained Building - Illiquidity */}
                <g transform="translate(30, 60)">
                  <rect x="0" y="40" width="70" height="120" fill="url(#brickPattern)" rx="4" filter="url(#problemShadow)"/>
                  
                  {/* Windows with bars */}
                  {[...Array(3)].map((_, row) => 
                    [...Array(2)].map((_, col) => (
                      <g key={`${row}-${col}`}>
                        <rect x={15 + col * 25} y={55 + row * 25} width="15" height="15" fill="#fff" opacity="0.3"/>
                        <line x1={15 + col * 25} y1={55 + row * 25} x2={30 + col * 25} y2={70 + row * 25} stroke="#7f1d1d" strokeWidth="2"/>
                        <line x1={30 + col * 25} y1={55 + row * 25} x2={15 + col * 25} y2={70 + row * 25} stroke="#7f1d1d" strokeWidth="2"/>
                      </g>
                    ))
                  )}
                  
                  {/* Heavy chains */}
                  <g stroke="url(#chainGrad)" strokeWidth="4" fill="none">
                    <ellipse cx="10" cy="80" rx="6" ry="10" transform="rotate(45 10 80)"/>
                    <ellipse cx="10" cy="95" rx="6" ry="10" transform="rotate(-45 10 95)"/>
                    <ellipse cx="10" cy="110" rx="6" ry="10" transform="rotate(45 10 110)"/>
                    <ellipse cx="80" cy="80" rx="6" ry="10" transform="rotate(-45 80 80)"/>
                    <ellipse cx="80" cy="95" rx="6" ry="10" transform="rotate(45 80 95)"/>
                    <ellipse cx="80" cy="110" rx="6" ry="10" transform="rotate(-45 80 110)"/>
                  </g>
                  
                  {/* Lock */}
                  <rect x="25" y="15" width="20" height="25" fill="#7f1d1d" rx="3" filter="url(#problemShadow)"/>
                  <circle cx="35" cy="8" r="8" fill="none" stroke="#7f1d1d" strokeWidth="3"/>
                  
                  <text x="35" y="185" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">Locked Assets</text>
                  <text x="35" y="200" textAnchor="middle" fill="#7f1d1d" fontSize="10">No Liquidity</text>
                </g>
                
                {/* Fortress Wall - High Barriers */}
                <g transform="translate(130, 60)">
                  <rect x="0" y="20" width="80" height="140" fill="url(#buildingRed)" rx="4" filter="url(#problemShadow)"/>
                  
                  {/* Castle-like top */}
                  <rect x="0" y="10" width="15" height="25" fill="url(#buildingRed)"/>
                  <rect x="20" y="0" width="15" height="35" fill="url(#buildingRed)"/>
                  <rect x="40" y="10" width="15" height="25" fill="url(#buildingRed)"/>
                  <rect x="65" y="0" width="15" height="35" fill="url(#buildingRed)"/>
                  
                  {/* Spikes */}
                  <polygon points="5,0 12,0 8.5,-8" fill="#7f1d1d"/>
                  <polygon points="27,0 34,0 30.5,-8" fill="#7f1d1d"/>
                  <polygon points="47,0 54,0 50.5,-8" fill="#7f1d1d"/>
                  <polygon points="72,0 79,0 75.5,-8" fill="#7f1d1d"/>
                  
                  {/* Gate with bars */}
                  <rect x="25" y="80" width="30" height="50" fill="#7f1d1d" rx="15"/>
                  <rect x="30" y="85" width="4" height="40" fill="#4b5563"/>
                  <rect x="38" y="85" width="4" height="40" fill="#4b5563"/>
                  <rect x="46" y="85" width="4" height="40" fill="#4b5563"/>
                  
                  {/* Dollar signs as decoration */}
                  <text x="10" y="50" fill="#fbbf24" fontSize="16" fontWeight="bold">$</text>
                  <text x="65" y="50" fill="#fbbf24" fontSize="16" fontWeight="bold">$</text>
                  <text x="40" y="65" fill="#fbbf24" fontSize="20" fontWeight="bold">$$$</text>
                  
                  <text x="40" y="185" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">High Barriers</text>
                  <text x="40" y="200" textAnchor="middle" fill="#7f1d1d" fontSize="10">Exclusive Access</text>
                </g>
                
                {/* Broken Clock Tower - Time Issues */}
                <g transform="translate(260, 50)">
                  <rect x="15" y="80" width="40" height="80" fill="url(#buildingRed)" filter="url(#problemShadow)"/>
                  <circle cx="35" cy="50" r="30" fill="#fee2e2" stroke="#dc2626" strokeWidth="3" filter="url(#problemShadow)"/>
                  
                  {/* Cracked clock face */}
                  <path d="M15 35 Q25 25 35 35 Q45 25 55 35" stroke="#dc2626" strokeWidth="2" fill="none"/>
                  <path d="M20 60 Q30 70 40 60 Q50 70 60 60" stroke="#dc2626" strokeWidth="2" fill="none"/>
                  
                  {/* Broken clock hands */}
                  <line x1="35" y1="50" x2="35" y2="30" stroke="#7f1d1d" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="35" y1="50" x2="25" y2="45" stroke="#7f1d1d" strokeWidth="2" strokeLinecap="round" strokeDasharray="3,3"/>
                  
                  {/* Numbers scattered */}
                  <text x="35" y="25" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">12</text>
                  <text x="52" y="55" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">3</text>
                  <text x="25" y="70" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold" opacity="0.5">6</text>
                  <text x="15" y="45" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold" transform="rotate(-30 15 45)">9</text>
                  
                  <text x="35" y="185" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">Slow Process</text>
                  <text x="35" y="200" textAnchor="middle" fill="#7f1d1d" fontSize="10">Delays & Paperwork</text>
                </g>
                
                {/* Storm clouds - Inflation */}
                <g transform="translate(50, 220)">
                  <ellipse cx="0" cy="0" rx="40" ry="15" fill="#991b1b" opacity="0.7"/>
                  <ellipse cx="30" cy="-5" rx="35" ry="12" fill="#7f1d1d" opacity="0.8"/>
                  <ellipse cx="60" cy="0" rx="30" ry="10" fill="#991b1b" opacity="0.7"/>
                  <ellipse cx="90" cy="-3" rx="25" ry="8" fill="#7f1d1d" opacity="0.8"/>
                  
                  {/* Lightning bolts */}
                  <path d="M100 5 L110 20 L105 20 L115 35" stroke="#fbbf24" strokeWidth="3" fill="none"/>
                  <path d="M200 5 L210 20 L205 20 L215 35" stroke="#fbbf24" strokeWidth="3" fill="none"/>
                  
                  {/* Rain drops */}
                  <g fill="#dc2626" opacity="0.6">
                    <ellipse cx="120" cy="25" rx="2" ry="6"/>
                    <ellipse cx="135" cy="30" rx="2" ry="6"/>
                    <ellipse cx="150" cy="20" rx="2" ry="6"/>
                    <ellipse cx="165" cy="35" rx="2" ry="6"/>
                    <ellipse cx="180" cy="25" rx="2" ry="6"/>
                  </g>
                  
                  <text x="150" y="60" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">💸 Inflation Storm</text>
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
            
            {/* Advanced SVG Illustration for Solutions */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-100/50 rounded-3xl p-8 mb-6 shadow-xl border border-green-200/50"
            >
              <svg viewBox="0 0 400 300" className="w-full h-56 mb-4">
                <defs>
                  <linearGradient id="solutionSky" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#f0fdf4', stopOpacity:1}} />
                    <stop offset="50%" style={{stopColor:'#dcfce7', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#bbf7d0', stopOpacity:1}} />
                  </linearGradient>
                  <linearGradient id="buildingGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#22c55e', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#16a34a', stopOpacity:1}} />
                  </linearGradient>
                  <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#fbbf24', stopOpacity:1}} />
                    <stop offset="50%" style={{stopColor:'#f59e0b', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#d97706', stopOpacity:1}} />
                  </linearGradient>
                  <radialGradient id="glowEffect" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style={{stopColor:'#22c55e', stopOpacity:0.6}} />
                    <stop offset="70%" style={{stopColor:'#16a34a', stopOpacity:0.3}} />
                    <stop offset="100%" style={{stopColor:'#15803d', stopOpacity:0}} />
                  </radialGradient>
                  <filter id="solutionShadow">
                    <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#000" floodOpacity="0.15"/>
                  </filter>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                <rect width="400" height="300" fill="url(#solutionSky)"/>
                
                {/* 24/7 Trading Tower with Network */}
                <g transform="translate(30, 50)">
                  <rect x="10" y="60" width="50" height="100" fill="url(#buildingGreen)" rx="6" filter="url(#solutionShadow)"/>
                  
                  {/* Glowing windows showing activity */}
                  {[...Array(4)].map((_, row) => 
                    [...Array(2)].map((_, col) => (
                      <rect key={`${row}-${col}`} 
                        x={18 + col * 18} 
                        y={70 + row * 20} 
                        width="12" 
                        height="12" 
                        fill="#fbbf24" 
                        opacity="0.9" 
                        rx="2"
                        filter="url(#glow)">
                        <animate attributeName="opacity" 
                          values="0.9;0.4;0.9" 
                          dur={`${1.5 + Math.random()}s`} 
                          repeatCount="indefinite"/>
                      </rect>
                    ))
                  )}
                  
                  {/* Satellite dish */}
                  <ellipse cx="35" cy="50" rx="15" ry="5" fill="#16a34a" filter="url(#solutionShadow)"/>
                  <rect x="32" y="48" width="6" height="12" fill="#22c55e"/>
                  
                  {/* Network signals */}
                  <g stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.7">
                    <circle cx="35" cy="50" r="20">
                      <animate attributeName="r" values="20;35;20" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="35" cy="50" r="25">
                      <animate attributeName="r" values="25;40;25" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                  
                  <text x="35" y="185" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">24/7 Liquidity</text>
                  <text x="35" y="200" textAnchor="middle" fill="#15803d" fontSize="10">Always Trading</text>
                </g>
                
                {/* Open Gateway - Low Entry */}
                <g transform="translate(130, 60)">
                  <rect x="0" y="20" width="80" height="120" fill="url(#buildingGreen)" rx="6" filter="url(#solutionShadow)"/>
                  
                  {/* Open archway */}
                  <path d="M20 140 L20 80 Q20 50 40 50 Q60 50 60 80 L60 140" 
                        fill="#f0fdf4" stroke="#16a34a" strokeWidth="2"/>
                  
                  {/* Welcome mat */}
                  <rect x="25" y="130" width="30" height="10" fill="#22c55e" rx="2"/>
                  
                  {/* $100 sign */}
                  <circle cx="40" cy="35" r="18" fill="url(#goldShine)" filter="url(#solutionShadow)"/>
                  <text x="40" y="40" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">$100</text>
                  
                  {/* Welcoming flags */}
                  <polygon points="10,30 10,50 25,40" fill="#22c55e"/>
                  <polygon points="70,30 70,50 55,40" fill="#22c55e"/>
                  
                  {/* Steps leading up */}
                  <rect x="15" y="125" width="50" height="5" fill="#16a34a" opacity="0.6"/>
                  <rect x="20" y="120" width="40" height="5" fill="#16a34a" opacity="0.6"/>
                  <rect x="25" y="115" width="30" height="5" fill="#16a34a" opacity="0.6"/>
                  
                  <text x="40" y="175" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">Easy Access</text>
                  <text x="40" y="190" textAnchor="middle" fill="#15803d" fontSize="10">$100 Minimum</text>
                </g>
                
                {/* Lightning Fast Processing */}
                <g transform="translate(260, 50)">
                  <circle cx="35" cy="70" r="40" fill="url(#glowEffect)" filter="url(#solutionShadow)"/>
                  <circle cx="35" cy="70" r="30" fill="url(#buildingGreen)"/>
                  <circle cx="35" cy="70" r="20" fill="#f0fdf4" opacity="0.9"/>
                  
                  {/* Multi-layered lightning */}
                  <path d="M25 55 L35 55 L30 70 L45 70 L40 85 L30 85 L35 70 L20 70 Z" 
                        fill="url(#goldShine)" 
                        stroke="#f59e0b" 
                        strokeWidth="1"
                        filter="url(#glow)">
                    <animateTransform 
                      attributeName="transform" 
                      type="scale" 
                      values="1;1.2;1" 
                      dur="1s" 
                      repeatCount="indefinite"/>
                  </path>
                  
                  {/* Energy particles */}
                  <g fill="#fbbf24">
                    {[...Array(8)].map((_, i) => (
                      <circle key={i} r="2">
                        <animateMotion dur="2s" repeatCount="indefinite">
                          <path d={`M${35 + 30 * Math.cos(i * Math.PI / 4)},${70 + 30 * Math.sin(i * Math.PI / 4)} 
                                   Q35,70 
                                   ${35 - 30 * Math.cos(i * Math.PI / 4)},${70 - 30 * Math.sin(i * Math.PI / 4)}`}/>
                        </animateMotion>
                      </circle>
                    ))}
                  </g>
                  
                  <text x="35" y="165" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">Instant Speed</text>
                  <text x="35" y="180" textAnchor="middle" fill="#15803d" fontSize="10">Blockchain Fast</text>
                </g>
                
                {/* Bitcoin Fortress - Bottom Center */}
                <g transform="translate(170, 200)">
                  <polygon points="30,10 50,20 50,50 30,60 10,50 10,20" 
                           fill="url(#goldShine)" 
                           filter="url(#solutionShadow)"/>
                  <polygon points="30,15 45,22 45,45 30,52 15,45 15,22" 
                           fill="#fff" 
                           opacity="0.9"/>
                  
                  {/* Bitcoin symbol with glow */}
                  <text x="30" y="40" textAnchor="middle" fill="#f59e0b" fontSize="18" fontWeight="bold" filter="url(#glow)">₿</text>
                  
                  {/* Protective aura */}
                  <circle cx="30" cy="35" r="35" fill="none" stroke="url(#goldShine)" strokeWidth="2" opacity="0.4">
                    <animate attributeName="r" values="35;45;35" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  
                  <text x="30" y="85" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">Bitcoin Shield</text>
                  <text x="30" y="100" textAnchor="middle" fill="#15803d" fontSize="10">Inflation Proof</text>
                </g>
                
                {/* Success rainbow */}
                <g transform="translate(0, 30)">
                  <path d="M50 20 Q200 -20 350 20" stroke="#22c55e" strokeWidth="3" fill="none" opacity="0.4"/>
                  <path d="M50 25 Q200 -15 350 25" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.4"/>
                  <path d="M50 30 Q200 -10 350 30" stroke="#059669" strokeWidth="1" fill="none" opacity="0.4"/>
                </g>
                
                {/* Floating success indicators */}
                <g fill="#22c55e">
                  {[...Array(6)].map((_, i) => (
                    <circle key={i} cx={60 + i * 50} cy={250 + Math.sin(i) * 10} r="3" opacity="0.6">
                      <animate attributeName="cy" 
                        values={`${250 + Math.sin(i) * 10};${240 + Math.sin(i) * 10};${250 + Math.sin(i) * 10}`} 
                        dur={`${2 + i * 0.3}s`} 
                        repeatCount="indefinite"/>
                    </circle>
                  ))}
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
            <svg viewBox="0 0 600 220" className="w-full h-40">
              <defs>
                <radialGradient id="centerCore" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                  <stop offset="30%" style={{stopColor:'#2563eb', stopOpacity:0.9}} />
                  <stop offset="70%" style={{stopColor:'#1d4ed8', stopOpacity:0.6}} />
                  <stop offset="100%" style={{stopColor:'#1e40af', stopOpacity:0.2}} />
                </radialGradient>
                <linearGradient id="connectionBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0}} />
                  <stop offset="50%" style={{stopColor:'#60a5fa', stopOpacity:0.8}} />
                  <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0}} />
                </linearGradient>
                <filter id="advancedGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="nodeGlow">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#3b82f6" floodOpacity="0.4"/>
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <pattern id="techGrid" patternUnits="userSpaceOnUse" width="20" height="20">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.1"/>
                </pattern>
              </defs>
              
              <rect width="600" height="220" fill="url(#techGrid)"/>
              
              {/* Energy field background */}
              <circle cx="300" cy="110" r="120" fill="url(#centerCore)" opacity="0.3">
                <animate attributeName="r" values="120;140;120" dur="4s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0.15;0.3" dur="4s" repeatCount="indefinite"/>
              </circle>
              
              {/* Advanced connection beams with particle flow */}
              <g>
                <path d="M250 85 Q180 40 120 35" stroke="url(#connectionBeam)" strokeWidth="8" fill="none" opacity="0.6">
                  <animate attributeName="stroke-dasharray" values="0,400;200,200;400,0" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="stroke-dashoffset" values="0;-200;-400" dur="3s" repeatCount="indefinite"/>
                </path>
                <path d="M350 85 Q420 40 480 35" stroke="url(#connectionBeam)" strokeWidth="8" fill="none" opacity="0.6">
                  <animate attributeName="stroke-dasharray" values="0,400;200,200;400,0" dur="3s" begin="1s" repeatCount="indefinite"/>
                  <animate attributeName="stroke-dashoffset" values="0;-200;-400" dur="3s" begin="1s" repeatCount="indefinite"/>
                </path>
                <path d="M300 160 Q300 185 300 205" stroke="url(#connectionBeam)" strokeWidth="8" fill="none" opacity="0.6">
                  <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="3s" begin="2s" repeatCount="indefinite"/>
                  <animate attributeName="stroke-dashoffset" values="0;-50;-100" dur="3s" begin="2s" repeatCount="indefinite"/>
                </path>
              </g>
              
              {/* Central SGVB Core - Advanced Design */}
              <g filter="url(#advancedGlow)">
                <circle cx="300" cy="110" r="55" fill="url(#centerCore)"/>
                <circle cx="300" cy="110" r="45" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.4">
                  <animate attributeName="r" values="45;50;45" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="300" cy="110" r="35" fill="none" stroke="#93c5fd" strokeWidth="1" opacity="0.6">
                  <animate attributeName="r" values="35;40;35" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="300" cy="110" r="30" fill="#1e40af"/>
                
                {/* Core text with glow */}
                <text x="300" y="118" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold" filter="url(#nodeGlow)">SGVB</text>
                
                {/* Orbital rings */}
                <circle cx="300" cy="110" r="65" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.2" strokeDasharray="5,5">
                  <animateTransform attributeName="transform" type="rotate" values="0 300 110;360 300 110" dur="20s" repeatCount="indefinite"/>
                </circle>
                <circle cx="300" cy="110" r="75" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.1" strokeDasharray="3,7">
                  <animateTransform attributeName="transform" type="rotate" values="360 300 110;0 300 110" dur="25s" repeatCount="indefinite"/>
                </circle>
              </g>
              
              {/* Education Node - Advanced 3D Design */}
              <g>
                <circle cx="120" cy="35" r="35" fill="#f59e0b" opacity="0.1"/>
                <circle cx="120" cy="35" r="28" fill="#fbbf24" filter="url(#nodeGlow)"/>
                <circle cx="120" cy="35" r="22" fill="#fef3c7" opacity="0.9"/>
                <circle cx="120" cy="35" r="16" fill="#fff"/>
                
                {/* 3D graduation cap */}
                <g transform="translate(120, 35)">
                  <rect x="-8" y="-8" width="16" height="16" fill="#d97706" transform="skewX(-15)"/>
                  <rect x="-8" y="-8" width="16" height="16" fill="#f59e0b"/>
                  <circle cx="0" cy="0" r="2" fill="#92400e"/>
                  <rect x="6" y="-10" width="2" height="8" fill="#92400e"/>
                  <polygon points="8,-10 12,-8 8,-6" fill="#92400e"/>
                </g>
                
                <text x="120" y="75" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">Education</text>
                <text x="120" y="90" textAnchor="middle" fill="#78350f" fontSize="10">Financial Mastery</text>
                
                {/* Knowledge particles */}
                <g fill="#fbbf24" opacity="0.6">
                  {[...Array(4)].map((_, i) => (
                    <circle key={i} r="1.5">
                      <animateMotion dur="3s" repeatCount="indefinite">
                        <path d={`M${120 + 25 * Math.cos(i * Math.PI / 2)},${35 + 25 * Math.sin(i * Math.PI / 2)} 
                                 Q120,35 
                                 ${120 - 25 * Math.cos(i * Math.PI / 2)},${35 - 25 * Math.sin(i * Math.PI / 2)}`}/>
                      </animateMotion>
                    </circle>
                  ))}
                </g>
              </g>
              
              {/* Management Node - Advanced 3D Design */}
              <g>
                <circle cx="480" cy="35" r="35" fill="#10b981" opacity="0.1"/>
                <circle cx="480" cy="35" r="28" fill="#22c55e" filter="url(#nodeGlow)"/>
                <circle cx="480" cy="35" r="22" fill="#d1fae5" opacity="0.9"/>
                <circle cx="480" cy="35" r="16" fill="#fff"/>
                
                {/* 3D building */}
                <g transform="translate(480, 35)">
                  <rect x="-6" y="-8" width="12" height="16" fill="#059669"/>
                  <rect x="-4" y="-6" width="8" height="12" fill="#10b981"/>
                  <rect x="-2" y="-4" width="4" height="8" fill="#22c55e"/>
                  {/* Windows */}
                  <rect x="-5" y="-5" width="2" height="2" fill="#fff" opacity="0.8"/>
                  <rect x="3" y="-5" width="2" height="2" fill="#fff" opacity="0.8"/>
                  <rect x="-5" y="-1" width="2" height="2" fill="#fff" opacity="0.8"/>
                  <rect x="3" y="-1" width="2" height="2" fill="#fff" opacity="0.8"/>
                </g>
                
                <text x="480" y="75" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">Management</text>
                <text x="480" y="90" textAnchor="middle" fill="#064e3b" fontSize="10">Property Excellence</text>
                
                {/* Management efficiency particles */}
                <g fill="#22c55e" opacity="0.6">
                  {[...Array(4)].map((_, i) => (
                    <circle key={i} r="1.5">
                      <animateMotion dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite">
                        <path d={`M${480 + 25 * Math.cos(i * Math.PI / 2 + Math.PI)},${35 + 25 * Math.sin(i * Math.PI / 2 + Math.PI)} 
                                 Q480,35 
                                 ${480 - 25 * Math.cos(i * Math.PI / 2 + Math.PI)},${35 - 25 * Math.sin(i * Math.PI / 2 + Math.PI)}`}/>
                      </animateMotion>
                    </circle>
                  ))}
                </g>
              </g>
              
              {/* Revenue Node - Advanced 3D Design */}
              <g>
                <circle cx="300" cy="205" r="35" fill="#8b5cf6" opacity="0.1"/>
                <circle cx="300" cy="205" r="28" fill="#a855f7" filter="url(#nodeGlow)"/>
                <circle cx="300" cy="205" r="22" fill="#ede9fe" opacity="0.9"/>
                <circle cx="300" cy="205" r="16" fill="#fff"/>
                
                {/* 3D money stack */}
                <g transform="translate(300, 205)">
                  <ellipse cx="0" cy="5" rx="8" ry="3" fill="#6d28d9"/>
                  <ellipse cx="0" cy="2" rx="8" ry="3" fill="#7c3aed"/>
                  <ellipse cx="0" cy="-1" rx="8" ry="3" fill="#8b5cf6"/>
                  <ellipse cx="0" cy="-4" rx="8" ry="3" fill="#a855f7"/>
                  <text x="0" y="0" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">$</text>
                </g>
                
                <text x="300" y="175" textAnchor="middle" fill="#5b21b6" fontSize="12" fontWeight="bold">Revenue</text>
                <text x="300" y="160" textAnchor="middle" fill="#4c1d95" fontSize="10">Multiple Streams</text>
                
                {/* Revenue flow particles */}
                <g fill="#a855f7" opacity="0.6">
                  {[...Array(6)].map((_, i) => (
                    <circle key={i} r="1.5">
                      <animateMotion dur="4s" begin={`${i * 0.3}s`} repeatCount="indefinite">
                        <path d={`M${300 + 25 * Math.cos(i * Math.PI / 3)},${205 + 25 * Math.sin(i * Math.PI / 3)} 
                                 Q300,205 
                                 ${300 - 25 * Math.cos(i * Math.PI / 3)},${205 - 25 * Math.sin(i * Math.PI / 3)}`}/>
                      </animateMotion>
                    </circle>
                  ))}
                </g>
              </g>
              
              {/* Advanced data streams */}
              <g opacity="0.4">
                {[...Array(12)].map((_, i) => (
                  <circle key={i} fill="#60a5fa" r="2">
                    <animateMotion dur={`${4 + i * 0.5}s`} repeatCount="indefinite">
                      <path d={`M${300 + 80 * Math.cos(i * Math.PI / 6)},${110 + 80 * Math.sin(i * Math.PI / 6)} 
                               Q300,110 
                               ${300 - 80 * Math.cos(i * Math.PI / 6)},${110 - 80 * Math.sin(i * Math.PI / 6)}`}/>
                    </animateMotion>
                  </circle>
                ))}
              </g>
              
              {/* Success metrics display */}
              <g transform="translate(520, 180)">
                <rect x="0" y="0" width="70" height="30" fill="#1e40af" rx="4" opacity="0.1"/>
                <text x="35" y="15" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">99.9% Uptime</text>
                <text x="35" y="25" textAnchor="middle" fill="#60a5fa" fontSize="8">System Status</text>
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
