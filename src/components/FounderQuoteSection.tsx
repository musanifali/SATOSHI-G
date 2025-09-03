import { Quote } from 'lucide-react'

const FounderQuoteSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Quote Icon */}
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8">
            <Quote className="h-8 w-8 text-primary" />
          </div>

          {/* Main Quote */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-8 text-balance">
            "Real estate should empower dreams, not complicate them. At SATOSHI, we're not just facilitating transactions—we're enabling life transformations."
          </blockquote>

          {/* Attribution */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                AS
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl text-foreground">Amira Sajwani</div>
              <div className="text-muted-foreground">Founder & CEO, SATOSHI</div>
              <div className="text-sm text-muted-foreground mt-2">Visionary Leader in Real Estate Innovation</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl">
            <h3 className="font-bold text-xl mb-4 text-foreground">Own Your Future</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join the thousands who have already taken control of their real estate destiny. 
              Your journey to property ownership and investment success starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">#OwnIt</div>
                <div className="text-sm text-muted-foreground">Real Estate Freedom</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground">Ready to start?</div>
                <div className="text-sm text-muted-foreground">Connect with our experts today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderQuoteSection
