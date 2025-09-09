const MetricsSection = () => {
  const stats = [
    {
      value: "AED 5B+",
      label: "Disbursed",
      description: "Total funding provided",
      icon: "💰",
      color: "from-green-500/20 to-green-500/10"
    },
    {
      value: "50,000+",
      label: "Customers",
      description: "Satisfied clients served",
      icon: "👥",
      color: "from-blue-500/20 to-blue-500/10"
    },
    {
      value: "11,000+",
      label: "Real Estate Partners",
      description: "Trusted network",
      icon: "🏢",
      color: "from-purple-500/20 to-purple-500/10"
    },
    {
      value: "4.7",
      label: "Google Rating",
      description: "Customer satisfaction",
      icon: "⭐",
      color: "from-yellow-500/20 to-yellow-500/10"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Join the growing community of successful real estate investors.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center bg-gradient-to-br ${stat.color} rounded-2xl p-6 border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="font-bold text-3xl md:text-4xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MetricsSection
