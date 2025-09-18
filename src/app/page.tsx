import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import MetricsSection from '@/components/MetricsSection'
import AboutSection from '@/components/AboutSection'
import WhatWeDoSection from '@/components/WhatWeDoSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ProblemSolutionSection from '@/components/ProblemSolutionSection'
import MarketOpportunitySection from '@/components/MarketOpportunitySection'
import HowItWorksSection from '@/components/HowItWorksSection'
import ProjectDevelopmentSection from '@/components/ProjectDevelopmentSection'
import TokenomicsSection from '@/components/TokenomicsSection'
import TargetUsersSection from '@/components/TargetUsersSection'
import SustainabilitySection from '@/components/SustainabilitySection'
import TeamSection from '@/components/TeamSection'
import LocationSection from '@/components/LocationSection'
import RoadmapSection from '@/components/RoadmapSection'
import NewsletterSection from '@/components/NewsletterSection'
import FinalCTASection from '@/components/FinalCTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* 🎯 HERO & TRUST */}
      <HeroSection />
      <MetricsSection />
      
      {/* 🏢 COMPANY & SERVICES */}
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <WhatWeDoSection />
      </div>
      <div id="project">
        <ProjectDevelopmentSection />
      </div>
      
      {/* 💼 INVESTMENT OPPORTUNITY */}
      {/* <ProblemSolutionSection /> */}
      <div id="market">
        <MarketOpportunitySection />
      </div>
      <HowItWorksSection />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      
      {/* 🏗️ DEVELOPMENT SPECIFIC (For later) */}
      {/* <TokenomicsSection /> */}
      {/* <TargetUsersSection /> */}
      {/* <SustainabilitySection /> */}
      {/* <LocationSection /> */}
      {/* <RoadmapSection /> */}
      
      {/* 👥 AUTHORITY & CONVERSION */}
      {/* <TeamSection /> */}
      <NewsletterSection />
      <FinalCTASection />
      
      <Footer />
    </main>
  )
}