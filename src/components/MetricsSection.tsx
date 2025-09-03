const MetricsSection = () => {
  const stats = [
    {
      value: "AED 5B+",
      label: "Disbursed",
      description: "Total funding provided"
    },
    {
      value: "50,000+",
      label: "Customers",
      description: "Satisfied clients served"
    },
    {
      value: "11,000+",
      label: "Real Estate Partners",
      description: "Trusted network"
    },
    {
      value: "4.7",
      label: "Google Rating",
      description: "Customer satisfaction"
    }
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
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
