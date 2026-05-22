"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function Hero() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
        <p className="text-gold text-sm md:text-base tracking-[0.25em] uppercase font-body mb-6">
          Assessoria & Decoração · São Paulo
        </p>

        {/* Decorative line - hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 mb-8">
          <div className="w-24 h-px bg-gold/60" />
          <div className="w-2 h-2 bg-gold rotate-45" />
          <div className="w-24 h-px bg-gold/60" />
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white italic font-bold max-w-4xl leading-tight">
          Transformamos{" "}
          sonhos
          <br />
          em <span className="text-gold">festas inesquecíveis</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 font-body text-sm md:text-base mt-6 tracking-wide">
          Desde 2019 · São Paulo e região
        </p>

        {/* CTA Button */}
        <a
          href="https://wa.me/5511984266292?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento!"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 px-8 py-4 border-2 border-gold text-gold font-body tracking-wider text-sm uppercase btn-fill transition-colors duration-300 hover:text-dark"
        >
          Solicitar Orçamento
        </a>
      </div>

    </section>
  )
}
