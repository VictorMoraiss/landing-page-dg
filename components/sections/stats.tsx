"use client"

import { useEffect, useRef } from "react"

const stats = [
  { value: 6, suffix: "+", label: "Anos de experiência" },
  { value: 500, suffix: "+", label: "Eventos realizados" },
  { value: 100, suffix: "%", label: "Clientes satisfeitos" },
  { value: "SP", suffix: "", label: "São Paulo e região" },
]

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([])
  const hasAnimated = useRef(false)

  useEffect(() => {
    let ctx: any
    const initGSAP = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // Cards stagger in
        gsap.fromTo(
          ".stat-item",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        )

        // Numeric counters animate up
        stats.forEach((stat, index) => {
          if (typeof stat.value !== "number") return
          const el = counterRefs.current[index]
          if (!el) return

          const obj = { val: 0 }
          gsap.to(obj, {
            val: stat.value,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
            onUpdate: () => {
              el.textContent = Math.round(obj.val) + stat.suffix
            },
          })
        })
      })
    }

    initGSAP()
    return () => ctx?.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-dark py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-item text-center" style={{ opacity: 0 }}>
              <p className="font-serif text-[1.5rem] md:text-[2.5rem] text-gold font-semibold leading-tight">
                {typeof stat.value === "number" ? (
                  <span ref={(el) => { counterRefs.current[index] = el }}>
                    0{stat.suffix}
                  </span>
                ) : (
                  <span>{stat.value}</span>
                )}
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