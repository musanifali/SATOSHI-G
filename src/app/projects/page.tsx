import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects - Satoshi Global Village',
  description: 'Explore our tokenized real estate development projects worldwide.',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our revolutionary tokenized real estate development projects in paradise locations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Rum Cay, Bahamas</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Paradise Development</h3>
                <p className="text-muted-foreground mb-6">
                  Revolutionary tokenized real estate development featuring Bitcoin Village, 
                  luxury resorts, and data mining facilities across 6,608+ acres.
                </p>
                <Link href="/projects/paradise-development">
                  <Button className="w-full">
                    Explore Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow opacity-60">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-accent">Coming Soon</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Future Projects</h3>
                <p className="text-muted-foreground mb-6">
                  Additional tokenized real estate developments in premium locations 
                  across Europe, Asia, and the Americas.
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}