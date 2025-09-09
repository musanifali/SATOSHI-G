import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  TrendingUp, 
  Brain, 
  Building, 
  Scale,
  BookOpen,
  Award,
  Globe
} from "lucide-react"

const TeamSection = () => {
  const coreTeam = [
    {
      name: "Richard Vanderbilt",
      role: "Founder",
      expertise: "25+ years investment strategies",
      description: "Visionary leader with decades of experience in strategic investment planning and wealth management.",
      initials: "RV",
      avatar: "/images/team/richard-vanderbilt.jpg",
      color: "bg-accent",
      icon: TrendingUp
    },
    {
      name: "JBK Caan",
      role: "CEO",
      expertise: "AI, Blockchain, Software",
      description: "Technology executive specializing in artificial intelligence, blockchain development, and software architecture.",
      initials: "JC",
      avatar: "/images/team/jbk-caan.jpg",
      color: "bg-primary",
      icon: Brain
    },
    {
      name: "Faisal Khan",
      role: "CEO of Ovex Technologies",
      expertise: "Ex-KPMG Oil & Gas Expert",
      description: "Former KPMG partner with extensive experience in oil & gas sector and energy infrastructure development.",
      initials: "FK",
      avatar: "/images/team/faisal-khan.jpg",
      color: "bg-green-500",
      icon: Building
    },
    {
      name: "Michael Fothergill",
      role: "Land Acquisition Specialist",
      expertise: "31 years Bahamas & Paraguay",
      description: "Three decades of experience in strategic land acquisitions across the Caribbean and South America.",
      initials: "MF",
      avatar: "/images/team/michael-fothergill.jpg",
      color: "bg-blue-500",
      icon: Globe
    },
    {
      name: "Todd White",
      role: "Policy & Government Relations",
      expertise: "DC-based Lobbyist",
      description: "Washington DC-based blockchain policy advocate and government relations expert.",
      initials: "TW",
      avatar: "/images/team/todd-white.jpg",
      color: "bg-purple-500",
      icon: Scale
    },
    {
      name: "Ivy McLemore",
      role: "Strategic Communications",
      expertise: "Author of 'Finding Satoshi'",
      description: "Strategic communications expert and published author specializing in blockchain and cryptocurrency education.",
      initials: "IM",
      avatar: "/images/team/ivy-mclemore.jpg",
      color: "bg-pink-500",
      icon: BookOpen
    }
  ]

  const additionalExpertise = [
    { area: "Architecture & Design", icon: Building, count: "5+ experts" },
    { area: "Construction Management", icon: Award, count: "8+ specialists" },
    { area: "Financial Services", icon: TrendingUp, count: "6+ advisors" },
    { area: "Sustainability Engineering", icon: Globe, count: "4+ consultants" }
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            World-Class Team
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Expert <span className="text-accent">Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Decades of experience in real estate, blockchain, government relations, and sustainable development.
          </p>
        </div>

        {/* Core Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreTeam.map((member, index) => {
            const IconComponent = member.icon
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-card to-card/50">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-background shadow-xl">
                      <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                      <AvatarFallback className={`${member.color} text-white text-xl font-bold`}>
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-2 -right-2 w-12 h-12 ${member.color}/20 rounded-full flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${member.color.replace('bg-', 'text-')}`} />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                  <div className="text-sm font-medium text-accent mb-3">{member.expertise}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Expertise */}
        <div className="bg-gradient-to-r from-muted/40 to-muted/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Additional <span className="text-primary">Expert Network</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalExpertise.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">{item.area}</h4>
                    <div className="text-sm font-medium text-primary">{item.count}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team Philosophy */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
            <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              "To democratize real estate investment through blockchain technology while creating sustainable, 
              luxury communities that respect both investors and the environment."
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="outline" className="px-4 py-2">Innovation</Badge>
              <Badge variant="outline" className="px-4 py-2">Sustainability</Badge>
              <Badge variant="outline" className="px-4 py-2">Transparency</Badge>
              <Badge variant="outline" className="px-4 py-2">Accessibility</Badge>
              <Badge variant="outline" className="px-4 py-2">Excellence</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
