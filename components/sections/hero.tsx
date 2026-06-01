"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function Hero() {
  const [offsetY, setOffsetY] = useState(0)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    let ctx: any
    const initGSAP = async () => {
      const { gsap } = await import("gsap")

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        // Eyebrow fades in first
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 }
        )

        // Decorative line expands from center
        tl.fromTo(
          lineRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.6 },
          "-=0.4"
        )

        // Headline words stagger in
        if (headlineRef.current) {
          const words = headlineRef.current.querySelectorAll(".gsap-word")
          tl.fromTo(
            words,
            { opacity: 0, y: 40, rotateX: -15 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.7,
              stagger: 0.08,
            },
            "-=0.3"
          )
        }

        // Subtitle
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )

        // CTA button
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.2"
        )
      })
    }

    initGSAP()
    return () => ctx?.revert()
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-anos-vermelho-LUAXamTKJ2z59LFvuDw7k76aCxFCPB.jpeg"
          alt="D&G Decorações - Evento decorado"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-wine/80 via-wine/70 to-wine-dark/90" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          style={{ opacity: 0 }}
          className="text-gold text-sm md:text-base tracking-[0.25em] uppercase font-body mb-6"
        >
          Assessoria & Decoração · São Paulo
        </p>

        {/* Decorative line */}
        <div
          ref={lineRef}
          style={{ opacity: 0 }}
          className="hidden md:flex items-center gap-4 mb-8"
        >
          <div className="w-24 h-px bg-gold/60" />
          <div className="w-2 h-2 bg-gold rotate-45" />
          <div className="w-24 h-px bg-gold/60" />
        </div>

        {/* Headline — each word wrapped for stagger */}
        <h1
          ref={headlineRef}
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white italic font-bold max-w-4xl leading-tight"
          style={{ perspective: "800px" }}
        >
          {["Transformamos", "sonhos", "em"].map((word) => (
            <span key={word} className="gsap-word inline-block mr-[0.25em]" style={{ opacity: 0 }}>
              {word}
            </span>
          ))}
          <br />
          <span className="gsap-word inline-block mr-[0.25em] text-gold" style={{ opacity: 0 }}>
            festas
          </span>
          <span className="gsap-word inline-block mr-[0.25em] text-gold" style={{ opacity: 0 }}>
            inesquecíveis
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          style={{ opacity: 0 }}
          className="text-white/80 font-body text-sm md:text-base mt-6 tracking-wide"
        >
          Desde 2019 · São Paulo e região
        </p>

        {/* CTA Button */}
        <a
          ref={ctaRef}
          href="https://wa.me/5511984266292?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento!"
          target="_blank"
          rel="noopener noreferrer"
          style={{ opacity: 0 }}
          className="mt-10 px-8 py-4 border-2 border-gold text-gold font-body tracking-wider text-sm uppercase btn-fill transition-colors duration-300 hover:text-dark"
        >
          Solicitar Orçamento
        </a>
      </div>
    </section>
  )
}
