"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const services = [
  {
    title: "Festas de Aniversário",
    description: "Do primeiro aninho aos grandes marcos",
    image: "/1-aninho-chefinha.jpeg",
    position: "object-[23%_35%]",
  },
  {
    title: "Casamentos",
    description: "O dia mais especial da sua vida",
    image: "clean.jpeg",
    position: "object-[25%_40%]",
  },
  {
    title: "Chá de Bebê",
    description: "Receba seu bebê com delicadeza",
    image: "chá-de-bebe.jpeg",
    position: "object-[45%_45%]",
  },
  {
    title: "Arcos Decorativos",
    description: "Para eventos e inaugurações",
    image: "arcos-azul.jpeg",
    position: "object-[65%_60%]",
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: any
    const initGSAP = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // Header slides up
        gsap.fromTo(
          ".services-header",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".services-header",
              start: "top 85%",
            },
          }
        )

        // Cards stagger with slight rotation for elegance
        gsap.fromTo(
          ".service-card",
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".service-card",
              start: "top 85%",
            },
          }
        )

        // Gold line separator animates width
        gsap.fromTo(
          ".services-line",
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: ".services-header",
              start: "top 85%",
            },
          }
        )
      }, sectionRef)
    }

    initGSAP()
    return () => ctx?.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="services-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-body mb-4">
            O que fazemos
          </p>
          {/* Animated line */}
          <div
            className="services-line mx-auto mb-6 h-px bg-gold/40 origin-left"
            style={{ width: "80px", transform: "scaleX(0)" }}
          />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark leading-tight">
            Cada evento, uma{" "}
            <em className="italic">obra de arte</em>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card"
              style={{ opacity: 0 }}
            >
              <div className="group relative h-[360px] md:h-[460px] overflow-hidden rounded-xl md:rounded-2xl cursor-pointer">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${service.position}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="font-serif text-[1.5rem] md:text-[1.7rem] text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/80 font-body text-sm md:text-[0.95rem] mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}