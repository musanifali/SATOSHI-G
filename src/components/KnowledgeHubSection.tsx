import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Calendar, User, Clock, TrendingUp, BookOpen, FileText } from 'lucide-react'

const KnowledgeHubSection = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "UAE Real Estate Market Outlook 2025",
      excerpt: "Comprehensive analysis of market trends, investment opportunities, and regulatory changes shaping the UAE property landscape.",
      category: "Market Analysis",
      author: "SATOSHI Research Team",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      image: "/api/placeholder/400/240",
      featured: true
    },
    {
      id: 2,
      title: "Golden Visa Investment Guide",
      excerpt: "Complete guide to securing UAE residency through property investment. Requirements, processes, and best practices.",
      category: "Investment Guide",
      author: "Visa Advisory Team",
      date: "Jan 12, 2025",
      readTime: "12 min read",
      image: "/api/placeholder/400/240",
      featured: true
    },
    {
      id: 3,
      title: "Mortgage Rate Trends in Dubai",
      excerpt: "Latest mortgage rates, lending criteria changes, and tips for securing the best financing for your property purchase.",
      category: "Finance",
      author: "Mortgage Specialists",
      date: "Jan 10, 2025",
      readTime: "6 min read",
      image: "/api/placeholder/400/240",
      featured: false
    },
    {
      id: 4,
      title: "Off-Plan vs Ready Properties",
      excerpt: "Detailed comparison of investment strategies, risks, and returns between off-plan and ready properties.",
      category: "Investment Strategy",
      author: "Property Analysts",
      date: "Jan 8, 2025",
      readTime: "10 min read",
      image: "/api/placeholder/400/240",
      featured: false
    },
    {
      id: 5,
      title: "Dubai Creek Harbour Development Update",
      excerpt: "Latest developments, infrastructure progress, and investment opportunities in one of Dubai's most ambitious projects.",
      category: "Area Guide",
      author: "Area Specialists",
      date: "Jan 5, 2025",
      readTime: "7 min read",
      image: "/api/placeholder/400/240",
      featured: false
    },
    {
      id: 6,
      title: "Property Management Best Practices",
      excerpt: "Essential tips for property investors on maximizing rental yields and maintaining property value over time.",
      category: "Property Management",
      author: "Management Team",
      date: "Jan 3, 2025",
      readTime: "9 min read",
      image: "/api/placeholder/400/240",
      featured: false
    }
  ]

  const categories = [
    { name: "Market Analysis", count: 15, icon: TrendingUp },
    { name: "Investment Guides", count: 12, icon: BookOpen },
    { name: "Legal & Regulatory", count: 8, icon: FileText },
    { name: "Area Guides", count: 20, icon: User }
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      "Market Analysis": "bg-primary/10 text-primary",
      "Investment Guide": "bg-accent/10 text-accent",
      "Finance": "bg-secondary/10 text-secondary-foreground",
      "Investment Strategy": "bg-primary/10 text-primary",
      "Area Guide": "bg-accent/10 text-accent",
      "Property Management": "bg-secondary/10 text-secondary-foreground"
    }
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground"
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="h-4 w-4" />
            <span>KNOWLEDGE HUB</span>
          </div>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-balance mb-6 tracking-tight">
            Insights & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Stay ahead with expert insights, market analysis, and comprehensive guides 
            from SATOSHI's team of real estate professionals
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="mx-auto w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-semibold text-sm text-foreground mb-1">
                    {category.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {category.count} articles
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Featured Articles Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Featured Article */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl mb-4">📊</div>
                  <div className="text-lg font-semibold">{featuredArticles[0].title}</div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredArticles[0].category)}`}>
                    {featuredArticles[0].category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredArticles[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredArticles[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredArticles[0].readTime}
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">
                  {featuredArticles[0].title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {featuredArticles[0].excerpt}
                </p>
                <Button className="w-full">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Secondary Featured Article */}
          <div>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
              <div className="aspect-square relative">
                {/* Placeholder for Article Image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-3xl mb-3">🏆</div>
                    <div className="text-base font-semibold text-foreground/70">
                      Article Image Placeholder
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      Featured Article Image
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredArticles[1].category)}`}>
                    {featuredArticles[1].category}
                  </span>
                </div>
                <h4 className="font-semibold text-base mb-2 text-foreground">
                  {featuredArticles[1].title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {featuredArticles[1].excerpt}
                </p>
                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  {featuredArticles[1].date}
                  <span className="mx-2">•</span>
                  <Clock className="h-3 w-3 mr-1" />
                  {featuredArticles[1].readTime}
                </div>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Articles Grid */}
        <div className="mb-12">
          <h3 className="font-bold text-2xl mb-8 text-foreground">Latest Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArticles.slice(2).map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.date}
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full text-xs">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
          <h3 className="font-bold text-2xl md:text-3xl mb-4 text-foreground">
            Stay Updated with Market Insights
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get weekly market updates, investment tips, and exclusive insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
              VIEW ALL BLOGS
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KnowledgeHubSection
