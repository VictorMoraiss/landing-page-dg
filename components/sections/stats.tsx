"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "6+", label: "Anos de experiência" },
  { value: "500+", label: "Eventos realizados" },
  { value: "100%", label: "Clientes satisfeitos" },
  { value: "SP", label: "São Paulo e região" },
]

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-dark py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center fade-up ${
                isVisible ? "visible" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              <p className="font-serif text-[1.5rem] md:text-[2.5rem] text-gold font-semibold leading-tight">
                {stat.value}
              </p>

              <p className="text-white/80 font-body text-[0.9rem] md:text-[1rem] mt-2 tracking-wide leading-relaxed">
                {stat.label}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}