"use client"

import { useEffect, useState } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-serif text-xl md:text-2xl">
          <span className={isScrolled ? "text-gold" : "text-gold"}>D</span>&<span className={isScrolled ? "text-gold" : "text-gold"}>G</span>
          <span className={isScrolled ? "text-dark" : "text-white"}> Decorações</span>
        </a>
        <a
          href="https://wa.me/5511984266292?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento!"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-block px-6 py-2 border transition-all duration-300 font-body text-sm tracking-wide ${
            isScrolled
              ? "border-wine text-wine hover:bg-wine hover:text-white"
              : "border-gold text-gold hover:bg-gold hover:text-dark"
          }`}
        >
          Contato
        </a>
      </div>
    </nav>
  )
}
