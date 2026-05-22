"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    text: "A D&G transformou o sonho da festa da minha filha em realidade. Cada detalhe foi pensado com tanto carinho! Superou todas as expectativas.",
    name: "Marina Santos",
  },
  {
    text: "Profissionalismo impecável do início ao fim. A decoração do meu casamento ficou absolutamente incrível. Recomendo de olhos fechados!",
    name: "Fernanda Lima",
  },
  {
    text: "Já é a terceira festa que fazemos com a D&G e cada uma é mais especial que a anterior. Uma equipe nota mil!",
    name: "Carla Oliveira",
  },
]

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-gold" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-blush-soft py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 fade-up ${isVisible ? "visible" : ""}`}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark">
            O que nossos clientes <em className="italic">dizem</em>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`fade-up ${isVisible ? "visible" : ""}`}
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="bg-white p-8 card-lift h-full">
                {/* Quote mark */}
                <span className="font-serif text-6xl text-blush leading-none block -mb-4">
                  &ldquo;
                </span>
                
                {/* Text */}
                <p className="font-body text-muted-foreground italic leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                
                {/* Name */}
                <p className="font-body text-xs text-wine tracking-[0.15em] uppercase mb-3">
                  {testimonial.name}
                </p>
                
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
