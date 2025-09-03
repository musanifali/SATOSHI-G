import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
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
import FinalCTASection from '@/components/FinalCTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      {/* <ProblemSolutionSection /> */}
      <MarketOpportunitySection />
      <HowItWorksSection />
      <ProjectDevelopmentSection />
      {/* <TokenomicsSection /> */}
      {/* <TargetUsersSection />
      <SustainabilitySection />
      <TeamSection />
      <LocationSection />
      <RoadmapSection /> */}
      <FinalCTASection />
      <Footer />
    </main>
  )
}