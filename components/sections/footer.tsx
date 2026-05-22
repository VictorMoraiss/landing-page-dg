export function Footer() {
  return (
    <footer className="bg-dark py-12 md:py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Logo */}
        <p className="font-serif text-2xl md:text-3xl text-gold">
          D&G Decorações
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-wine mx-auto my-6" />

        {/* Copyright */}
        <p className="text-white/50 font-body text-sm">
          © {new Date().getFullYear()} D&G Decorações. Todos os direitos reservados.
        </p>

        {/* Credit */}
        <p className="text-white/30 font-body text-xs mt-4">
          Site desenvolvido por{" "}

          <a
            href="https://wa.me/5511919061009?text=Olá!%20Vim%20pelo%20site%20da%20D%26G%20Decorações%20e%20gostaria%20de%20fazer%20um%20orçamento%20com%20a%20EAV%20DIGITAL."

            target="_blank"
            rel="noopener noreferrer"

            className="text-gold/70 hover:text-gold transition-all duration-300 hover:underline"
          >
            EAV DIGITAL
          </a>
        </p>
      </div>
    </footer>
  );
}
