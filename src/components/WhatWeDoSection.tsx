"use client"

const WhatWeDoSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-balance mb-6 tracking-tight">
            What We Do
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-balance">
            We are building the region's leading real estate ecosystem
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-bold text-2xl md:text-3xl text-foreground">
              Your Complete Real Estate Partner
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SATOSHI is revolutionizing the real estate industry by providing a unified platform 
              that brings together all essential services under one roof. From securing the perfect 
              mortgage to finding premium investment opportunities and navigating visa requirements, 
              we simplify every aspect of your real estate journey.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our comprehensive ecosystem connects buyers, investors, and partners through innovative 
              technology and personalized service, making real estate accessible and transparent for everyone.
            </p>
          </div>
          
          <div className="relative">
            {/* Main Ecosystem Video */}
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 mb-6">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-64 object-cover rounded-xl shadow-lg"
                onError={(e) => {
                  console.error('Video failed to load:', e);
                  // Fallback to image if video fails
                  const target = e.target as HTMLVideoElement;
                  const img = document.createElement('img');
                  img.src = '/images/real-estate/real-estate-ecosystem.jpg';
                  img.alt = 'SATOSHI Real Estate Ecosystem - Complete Platform';
                  img.className = 'w-full h-64 object-cover rounded-xl shadow-lg';
                  target.parentNode?.replaceChild(img, target);
                }}
              >
                <source src="/images/illustrations/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          
            {/* Stats Grid Below Image */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">360°</div>
                <div className="text-sm text-muted-foreground">Complete Service</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-secondary-foreground mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Digital Process</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Properties Listed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDoSection
