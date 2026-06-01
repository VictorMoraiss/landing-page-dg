"use client"

import { useEffect, useRef } from "react"

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
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: any
    const initGSAP = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // Header
        gsap.fromTo(
          ".testimonials-header",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".testimonials-header",
              start: "top 85%",
            },
          }
        )

        // Quote marks animate separately — scale in
        gsap.fromTo(
          ".quote-mark",
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: ".testimonial-card",
              start: "top 85%",
            },
          }
        )

        // Cards fade in with slight upward movement
        gsap.fromTo(
          ".testimonial-card",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.18,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".testimonial-card",
              start: "top 85%",
            },
          }
        )

        // Stars animate after cards
        gsap.fromTo(
          ".star-row",
          { opacity: 0, x: -10 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".testimonial-card",
              start: "top 80%",
            },
          }
        )
      }, sectionRef)
    }

    initGSAP()
    return () => ctx?.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-blush-soft py-20 md:py-32">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="testimonials-header text-center mb-16" style={{ opacity: 0 }}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark">
            O que nossos clientes <em className="italic">dizem</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="testimonial-card"
              style={{ opacity: 0 }}
            >
              <div className="bg-white p-8 card-lift h-full">
                <span className="quote-mark font-serif text-6xl text-blush leading-none block -mb-4" style={{ opacity: 0 }}>
                  &ldquo;
                </span>
                <p className="font-body text-muted-foreground italic leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <p className="font-body text-xs text-wine tracking-[0.15em] uppercase mb-3">
                  {testimonial.name}
                </p>
                <div className="star-row flex gap-1" style={{ opacity: 0 }}>
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

