import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Trust & Security - Satoshi Global Village',
  description: 'Trust, security, and transparency in tokenized real estate investment.',
}

export default function TrustPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Trust & Security
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building trust through transparency, security, and blockchain technology.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}