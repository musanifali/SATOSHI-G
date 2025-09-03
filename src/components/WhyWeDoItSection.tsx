import { Heart, Users, Shield, Zap } from 'lucide-react'

const WhyWeDoItSection = () => {
  const principles = [
    {
      icon: Heart,
      title: "Passion for People",
      description: "Every decision we make puts our customers first, ensuring their real estate dreams become reality."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "We believe in creating lasting relationships and building communities that thrive together."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Complete transparency in every transaction, building trust through honest and open communication."
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Leveraging cutting-edge technology to make real estate accessible and efficient for everyone."
    }
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-balance mb-6 tracking-tight">
            Why We Do It
          </h2>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            "We enable Real Estate Freedom for everyone"
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Our mission goes beyond transactions. We're committed to democratizing real estate, 
            making it accessible, transparent, and empowering for every individual and family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon
            return (
              <div key={index} className="text-center group">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-foreground">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-bold text-2xl md:text-3xl mb-4 text-foreground">
            Real Estate Freedom Means
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Choice</div>
              <p className="text-sm text-muted-foreground">Access to diverse property options and investment opportunities</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">Control</div>
              <p className="text-sm text-muted-foreground">Full transparency and control over your real estate decisions</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-foreground mb-2">Confidence</div>
              <p className="text-sm text-muted-foreground">Expert guidance and support throughout your journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyWeDoItSection
