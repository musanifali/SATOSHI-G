'use client'

import Link from 'next/link'
import { Bitcoin, MapPin, Mail, Phone, Twitter, Linkedin, Youtube, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link 
              href="/" 
              className="flex items-center space-x-3 font-bold text-xl mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <Bitcoin className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-primary text-xl leading-tight">SATOSHI</span>
                <span className="text-accent text-sm font-medium leading-tight">Global Village</span>
              </div>
            </Link>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Democratizing real estate through blockchain technology. 
              Making luxury property ownership accessible worldwide with 
              fractional investment starting from $100.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-accent" />
                <span>Rum Cay, Bahamas</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-accent" />
                <span>invest@satoshigv.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Platform</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-accent transition-colors">
                  About the Project
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-accent transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#tokenomics" className="hover:text-accent transition-colors">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="hover:text-accent transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#sustainability" className="hover:text-accent transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Investment */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Investment</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <Link href="#invest" className="hover:text-accent transition-colors">
                  Start Investing
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-accent transition-colors">
                  Rum Cay Development
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-accent transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#whitepaper" className="hover:text-accent transition-colors">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal & Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Legal & Support</h3>
            <ul className="space-y-4 text-muted-foreground mb-6">
              <li>
                <Link href="#privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#risk" className="hover:text-accent transition-colors">
                  Risk Disclosure
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-accent transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link 
                  href="#" 
                  className="w-10 h-10 bg-muted hover:bg-accent rounded-full flex items-center justify-center transition-colors group"
                >
                  <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                </Link>
                <Link 
                  href="#" 
                  className="w-10 h-10 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                </Link>
                <Link 
                  href="#" 
                  className="w-10 h-10 bg-muted hover:bg-red-500 rounded-full flex items-center justify-center transition-colors group"
                >
                  <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                </Link>
                <Link 
                  href="#" 
                  className="w-10 h-10 bg-muted hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors group"
                >
                  <Globe className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Disclaimer Section */}
        <div className="border-t border-border py-12">
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-8">
            <h3 className="font-bold text-lg mb-4 text-amber-800 dark:text-amber-200">
              Important Investment Disclaimer
            </h3>
            
            <div className="text-sm text-amber-700 dark:text-amber-300 space-y-4 leading-relaxed">
              <p>
                <strong>Risk Warning:</strong> Investment in tokenized real estate and blockchain-based assets involves substantial risk and may not be suitable for all investors. The value of tokens can go up or down, and you may lose some or all of your investment.
              </p>
              
              <p>
                <strong>Regulatory Notice:</strong> Tokenized real estate investments may not be regulated by traditional financial authorities. This investment is speculative and involves a high degree of risk. Investors should carefully consider their investment objectives and risk tolerance.
              </p>
              
              <p>
                <strong>No Guarantee:</strong> Past performance does not guarantee future results. Projected returns, development timelines, and property values are estimates only and should not be relied upon as investment advice.
              </p>
              
              <p>
                <strong>Professional Advice:</strong> Before making any investment decision, please consult with qualified financial, legal, and tax advisors. This website does not constitute investment advice or a solicitation to purchase securities.
              </p>
              
              <p>
                <strong>Jurisdiction:</strong> This offering may not be available in all jurisdictions. It is your responsibility to ensure compliance with local laws and regulations before participating.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Satoshi Global Village. All rights reserved.
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built on blockchain technology • Powered by innovation
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
