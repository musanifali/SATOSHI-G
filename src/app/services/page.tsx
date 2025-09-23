import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services - Satoshi Global Village',
  description: 'Our comprehensive services for tokenized real estate investment and development.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tokenized real estate investment and development services.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}