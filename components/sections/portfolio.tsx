"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const portfolioImages = [
  { src: "sonic.jpeg", alt: "Festa tema Sonic", featured: true, position: "object-[51%_85%]" },
  { src: "tema-infantil.jpeg", alt: "Aniversário de 6 anos tema stitch", position: "object-[45%_80%]" },
  { src: "branca-neve-baloes.jpeg", alt: "festa de 1 aninho com branca de neve", position: "object-[55%_70%]" },
  { src: "60-30-anos.jpeg", alt: "Festa de 60 e 30 anos juntos", position: "object-[44%_50%]" },
  { src: "flores.jpeg", alt: "Festa 1 aninho com tema flores", position: "object-[45%_65%]" },
]

export function Portfolio() {
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
          ".portfolio-header",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".portfolio-header",
              start: "top 85%",
            },
          }
        )

        // Featured image — slides in from left
        gsap.fromTo(
          ".portfolio-featured",
          { opacity: 0, x: -50, scale: 0.97 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".portfolio-featured",
              start: "top 85%",
            },
          }
        )

        // Secondary images — stagger from right
        gsap.fromTo(
          ".portfolio-secondary",
          { opacity: 0, x: 40, scale: 0.97 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".portfolio-secondary",
              start: "top 90%",
            },
          }
        )

        // Mobile items
        gsap.fromTo(
          ".portfolio-mobile-item",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".portfolio-mobile-item",
              start: "top 90%",
            },
          }
        )
      }, sectionRef)
    }

    initGSAP()
    return () => ctx?.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-dark py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="portfolio-header text-center mb-14" style={{ opacity: 0 }}>
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-body mb-4">
            Portfólio
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
            Em <em className="italic">Destaque</em>
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {/* Featured */}
          <div className="portfolio-featured row-span-2" style={{ opacity: 0 }}>
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

          {/* Secondary */}
          {portfolioImages.slice(1).map((image) => (
            <div
              key={image.src}
              className="portfolio-secondary"
              style={{ opacity: 0 }}
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

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-5">
          {portfolioImages.map((image, index) => (
            <div key={image.src} className="portfolio-mobile-item" style={{ opacity: 0 }}>
              <div className={`group relative overflow-hidden rounded-3xl cursor-pointer ${index === 0 ? "h-[420px]" : "h-[300px]"}`}>
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
