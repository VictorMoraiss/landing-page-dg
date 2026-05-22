"use client"

import { useEffect, useRef, useState } from "react"
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
    image:
      "clean.jpeg",
    position: "object-[25%_40%]",
  },
  {
    title: "Chá de Bebê",
    description: "Receba seu bebê com delicadeza",
    image:
      "chá-de-bebe.jpeg",
    position: "object-[45%_45%]",
  },
  {
    title: "Arcos Decorativos",
    description: "Para eventos e inaugurações",
    image:
      "arcos-azul.jpeg",
    position: "object-[65%_60%]",
  },
]

export function Services() {
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
    <section
      ref={sectionRef}
      className="bg-white py-20 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div
          className={`text-center mb-16 fade-up ${
            isVisible ? "visible" : ""
          }`}
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-body mb-4">
            O que fazemos
          </p>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark leading-tight">
            Cada evento, uma{" "}
            <em className="italic">obra de arte</em>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

          {services.map((service, index) => (
            <div
              key={service.title}
              className={`fade-up ${
                isVisible ? "visible" : ""
              }`}
              style={{
                animationDelay: `${0.1 + index * 0.1}s`,
              }}
            >

              <div className="group relative h-[360px] md:h-[460px] overflow-hidden rounded-xl md:rounded-2xl cursor-pointer">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${service.position}`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500" />

                {/* Content */}
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