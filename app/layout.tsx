import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Cormorant_Garamond, Jost } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({ 
  subsets: ["latin"],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'D&G Decorações | Assessoria & Decoração de Eventos em São Paulo',
  description: 'Transformamos sonhos em festas inesquecíveis. Decoração de eventos, festas de aniversário, casamentos, chá de bebê e mais. Desde 2019 em São Paulo.',
  keywords: ['decoração de festas', 'eventos', 'São Paulo', 'aniversário', 'casamento', 'chá de bebê', 'decoração'],
  authors: [{ name: 'D&G Decorações' }],
  openGraph: {
    title: 'D&G Decorações | Assessoria & Decoração de Eventos',
    description: 'Transformamos sonhos em festas inesquecíveis. Desde 2019 em São Paulo.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  themeColor: '#3D0E22',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${cormorant.variable} ${jost.variable}`}>
      <body className="font-body antialiased bg-cream">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
