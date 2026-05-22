"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-cream py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className={`fade-up ${isVisible ? "visible" : ""}`}>
            <div className="image-zoom relative h-[250px] md:h-[460px] w-full overflow-hidden">
              <Image
                src="/logo-dg-dourado.jpeg"
                alt="D&G Decorações - Nossa história"
                fill
                className="object-cover object-[center_50%]"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`fade-up ${isVisible ? "visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">
              Nossa história
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark leading-tight">
              Uma história de{" "}
              <em className="italic">amor</em> e{" "}
              <em className="italic">dedicação</em>
            </h2>
            
            <div className="w-16 h-px bg-gold mt-6 mb-8" />
            
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
              A D&G Decorações nasceu em 2019 de um sonho compartilhado entre mãe e filha: 
              transformar momentos especiais em memórias que duram para sempre. Ao longo dos anos, 
              tornamo-nos referência em decoração de eventos em São Paulo — de festas íntimas e 
              encantadoras a grandes celebrações corporativas, sempre com o mesmo carinho e atenção 
              a cada detalhe.
            </p>
            
            <p className="font-serif text-xl md:text-2xl text-wine italic mt-8">
              <span className="text-gold">D</span>&<span className="text-gold">G</span> Decorações
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
