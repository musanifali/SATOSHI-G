'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Al-Mansouri",
      title: "Property Investor",
      location: "Dubai, UAE",
      rating: 5,
  content: "SATOSHI made my real estate investment journey seamless. Their mortgage team found me the best rates, and the entire process was transparent and professional. I've now purchased 3 properties through their platform.",
      avatar: "/images/testimonials/sarah-al-mansouri.jpg",
      initials: "SA"
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      title: "First-time Homebuyer",
      location: "Abu Dhabi, UAE",
      rating: 5,
  content: "As a first-time buyer, I was overwhelmed by the process. SATOSHI's team guided me every step of the way, from finding the right property to securing my golden visa. Exceptional service!",
      avatar: "/images/testimonials/ahmed-hassan.jpg",
      initials: "AH"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      title: "Real Estate Professional",
      location: "Dubai, UAE",
      rating: 5,
  content: "Working with SATOSHI as a partner has been incredible. Their SATOSHI One platform streamlines everything for my clients. The technology and support team are world-class.",
      avatar: "/images/testimonials/maria-rodriguez.jpg",
      initials: "MR"
    },
    {
      id: 4,
      name: "James Thompson",
      title: "Expat Investor",
      location: "Sharjah, UAE",
      rating: 5,
  content: "The golden visa process was so much smoother than I expected. SATOSHI handled everything professionally and kept me informed throughout. Now I'm a permanent resident through my property investment!",
      avatar: "/images/testimonials/james-thompson.jpg",
      initials: "JT"
    },
    {
      id: 5,
      name: "Fatima Al-Zahra",
      title: "Property Developer",
      location: "Dubai, UAE",
      rating: 5,
  content: "SATOSHI's blocks platform has been a game-changer for our project sales. The integration with their ecosystem brings serious, qualified investors to our developments.",
      avatar: "/images/testimonials/fatima-al-zahra.jpg",
      initials: "FZ"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerPage = 3

  const nextTestimonials = () => {
    setCurrentIndex((prev) => 
      prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage
    )
  }

  const prevTestimonials = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - testimonialsPerPage) : prev - testimonialsPerPage
    )
  }

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-balance mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Join thousands of satisfied customers who have transformed their real estate journey with SATOSHI
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonials}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }, (_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentIndex / testimonialsPerPage) === i
                      ? 'bg-primary'
                      : 'bg-muted'
                  }`}
                  onClick={() => setCurrentIndex(i * testimonialsPerPage)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonials}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12 p-6 bg-muted/30 rounded-xl">
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.7/5</div>
              <div className="text-sm text-muted-foreground">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">1000+</div>
              <div className="text-sm text-muted-foreground">5-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
