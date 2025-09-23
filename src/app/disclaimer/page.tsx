import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Disclaimer - Satoshi Global Village',
  description: 'Legal disclaimer and terms of use.',
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Disclaimer
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                This website and its content are for informational purposes only and do not constitute 
                investment advice or a recommendation to purchase securities.
              </p>
              <p className="mb-6">
                Real estate investments involve risk, including potential loss of principal. 
                Past performance does not guarantee future results.
              </p>
              <p>
                Please consult with qualified financial advisors before making any investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}