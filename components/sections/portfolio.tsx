"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const portfolioImages = [
  {
    src: "sonic.jpeg",
    alt: "Festa tema Sonic",
    featured: true,
    position: "object-[51%_85%]",
  },
  {
    src: "tema-infantil.jpeg",
    alt: "Aniversário de 6 anos tema stitch",
    position: "object-[45%_80%]",
  },
  {
    src: "branca-neve-baloes.jpeg",
    alt: "festa de 1 aninho com branca de neve",
    position: "object-[55%_70%]",
  },
  {
    src: "60-30-anos.jpeg",
    alt: "Festa de 60 e 30 anos juntos",
    position: "object-[44%_50%]",
  },
  {
    src: "flores.jpeg",
    alt: "Festa 1 aninho com tema flores",
    position: "object-[45%_65%]",
  },
]

export function Portfolio() {
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
    <section ref={sectionRef} className="bg-dark py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div
          className={`text-center mb-14 fade-up ${
            isVisible ? "visible" : ""
          }`}
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-body mb-4">
            Portfólio
          </p>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
            Em <em className="italic">Destaque</em>
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">

          {/* Featured image */}
          <div
            className={`row-span-2 fade-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="group relative h-[640px] overflow-hidden rounded-3xl cursor-pointer">

              <Image
                src={portfolioImages[0].src}
                alt={portfolioImages[0].alt}
                fill
                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${portfolioImages[0].position}`}
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
            </div>
          </div>

          {/* Secondary images */}
          {portfolioImages.slice(1).map((image, index) => (
            <div
              key={image.src}
              className={`fade-up ${
                isVisible ? "visible" : ""
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="group relative h-[310px] overflow-hidden rounded-3xl cursor-pointer">

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${image.position}`}
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-5">

          {portfolioImages.map((image, index) => (
            <div
              key={image.src}
              className={`fade-up ${
                isVisible ? "visible" : ""
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >

              <div
                className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                  index === 0
                    ? "h-[420px]"
                    : "h-[300px]"
                }`}
              >

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${image.position}`}
                />

                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
