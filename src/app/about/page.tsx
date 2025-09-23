import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About - Satoshi Global Village',
  description: 'Learn about Satoshi Global Village and our revolutionary approach to tokenized real estate development.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              About Satoshi Global Village
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionary tokenized real estate development in paradise locations worldwide.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}