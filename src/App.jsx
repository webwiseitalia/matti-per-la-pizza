import { useState, useEffect } from 'react'

import logo from './assets/logo.webp'
import foto1 from './assets/foto/foto-1.webp'
import foto2 from './assets/foto/foto-2.webp'
import foto3 from './assets/foto/foto-3.webp'
import foto4 from './assets/foto/foto-4.webp'
import foto5 from './assets/foto/foto-5.webp'
import foto6 from './assets/foto/foto-6.webp'
import foto7 from './assets/foto/foto-7.webp'
import foto8 from './assets/foto/foto-8.webp'
import foto9 from './assets/foto/foto-9.webp'
import foto10 from './assets/foto/foto-10.webp'
import foto11 from './assets/foto/foto-11.webp'
import foto12 from './assets/foto/foto-12.webp'
import foto13 from './assets/foto/foto-13.webp'
import foto14 from './assets/foto/foto-14.webp'
import foto15 from './assets/foto/foto-15.webp'
import foto16 from './assets/foto/foto-16.webp'
import foto17 from './assets/foto/foto-17.webp'
import foto18 from './assets/foto/foto-18.webp'

/* ───────── DATA ───────── */

const galleryImages = [
  { src: foto5, alt: 'Margherita classica con pomodoro e mozzarella' },
  { src: foto6, alt: 'Pizza con crudo e mozzarella' },
  { src: foto3, alt: 'Pizza vegetariana con peperoni e verdure' },
  { src: foto4, alt: 'Pizza bianca con gamberi e rucola' },
  { src: foto8, alt: 'Pizza ai funghi porcini' },
  { src: foto9, alt: 'Pizza capricciosa con prosciutto, funghi e olive' },
  { src: foto7, alt: 'Pizza con melanzane e mozzarella' },
  { src: foto11, alt: 'Pizza gorgonzola e salame piccante' },
  { src: foto12, alt: 'Pizza bianca con speck, noci e miele' },
  { src: foto14, alt: 'Pizza bianca con pesto e prosciutto' },
  { src: foto16, alt: 'Pizza bianca con cime di rapa e burrata' },
  { src: foto17, alt: 'Pizza bianca con speck, noci e crema' },
  { src: foto18, alt: 'Pizza bianca con mortadella e stracciatella' },
  { src: foto1, alt: 'Calzone ai quattro formaggi' },
  { src: foto10, alt: 'Pizza rustica con salsiccia e peperoni' },
  { src: foto2, alt: 'Pizza con wurstel e patatine' },
  { src: foto13, alt: 'Pizza con carciofi e verdure' },
  { src: foto15, alt: 'Focaccia con crema di nocciole' },
]

const menuCategories = [
  {
    name: 'Classiche',
    icon: '🍕',
    description: 'Le grandi tradizionali, preparate con farine non raffinate e ingredienti italiani.',
  },
  {
    name: 'Classiche +',
    icon: '🍕',
    description: 'Le classiche con qualcosa in più: ingredienti selezionati per un gusto superiore.',
  },
  {
    name: 'Speciali',
    icon: '⭐',
    description: 'Le creazioni di Mattia: abbinamenti unici e ingredienti ricercati sul territorio.',
  },
  {
    name: 'Bianche e Calzoni',
    icon: '🥟',
    description: 'Senza pomodoro, con farciture ricche e gustose. Anche calzoni farciti al forno.',
  },
  {
    name: 'Bibite',
    icon: '🥤',
    description: 'Bevande, birre artigianali, acqua e bibite per accompagnare la tua pizza.',
  },
]

const orari = [
  { giorno: 'Lunedì', orario: 'Chiuso' },
  { giorno: 'Martedì', orario: '18:00 – 22:00' },
  { giorno: 'Mercoledì', orario: '18:00 – 22:00' },
  { giorno: 'Giovedì', orario: '18:00 – 22:00' },
  { giorno: 'Venerdì', orario: '18:00 – 22:30' },
  { giorno: 'Sabato', orario: '18:00 – 22:30' },
  { giorno: 'Domenica', orario: '18:00 – 22:00' },
]

/* ───────── ICONS ───────── */

function PhoneIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  )
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
    </svg>
  )
}

function MapPinIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
    </svg>
  )
}

function ClockIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
  )
}

function ChevronDownIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

function MenuIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

function XIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

function ExternalLinkIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  )
}

/* ───────── NAVBAR ───────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Chi Siamo', href: '#chi-siamo' },
    { label: 'Menu', href: '#menu' },
    { label: 'Galleria', href: '#galleria' },
    { label: 'Contatti', href: '#contatti' },
    { label: 'Dove Siamo', href: '#dove-siamo' },
  ]

  const handleClick = () => setMobileOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Matti per la Pizza" className="h-10 sm:h-12 w-auto" />
            <span className={`font-heading font-bold text-lg sm:text-xl transition-colors duration-300 ${scrolled ? 'text-rosso-500' : 'text-white'}`}>
              Matti per la Pizza
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-rosso-500 ${
                  scrolled ? 'text-antracite-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+393476737328"
              className="bg-rosso-500 hover:bg-rosso-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-rosso-500/25 hover:shadow-rosso-500/40"
            >
              <PhoneIcon className="w-4 h-4" />
              Ordina Ora
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-antracite-700' : 'text-white'}`}
            aria-label="Menu"
          >
            {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-4 space-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className="block px-4 py-3 rounded-lg text-antracite-700 font-medium hover:bg-rosso-50 hover:text-rosso-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+393476737328"
            onClick={handleClick}
            className="flex items-center justify-center gap-2 mt-3 bg-rosso-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            <PhoneIcon className="w-4 h-4" />
            Ordina Ora
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ───────── HERO ───────── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={foto5}
          alt="Pizza artigianale Matti per la Pizza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <img
          src={logo}
          alt="Matti per la Pizza Logo"
          className="w-28 sm:w-36 lg:w-40 mx-auto mb-6 drop-shadow-2xl"
        />

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
          Matti per la <span className="text-rosso-400">Pizza</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-sans mb-8 max-w-2xl mx-auto">
          Farine non raffinate. Ingredienti italiani. Passione artigianale.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { icon: '🌾', text: 'Farine non raffinate' },
            { icon: '🇮🇹', text: '100% Made in Italy' },
            { icon: '⭐', text: '4.8/5 su Google' },
          ].map((badge) => (
            <span
              key={badge.text}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full"
            >
              <span>{badge.icon}</span>
              {badge.text}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/393476737328?text=Ciao!%20Vorrei%20ordinare%20una%20pizza"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rosso-500 hover:bg-rosso-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-xl shadow-rosso-500/30 hover:shadow-rosso-500/50 hover:scale-105 flex items-center gap-3"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Ordina su WhatsApp
          </a>
          <a
            href="#menu"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Scopri il Menu
            <ChevronDownIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="w-8 h-8 text-white/50" />
      </div>
    </section>
  )
}

/* ───────── CHI SIAMO ───────── */

function ChiSiamo() {
  return (
    <section id="chi-siamo" className="section-padding bg-crema-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-rosso-500 font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            La nostra storia
          </span>
          <h2 className="section-title text-antracite-800">
            Matti per la <span className="text-rosso-500">qualità</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Images grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <img
                src={foto5}
                alt="Pizza margherita artigianale"
                className="rounded-2xl object-cover w-full h-40 sm:h-52 shadow-lg"
              />
              <img
                src={foto8}
                alt="Pizza ai funghi"
                className="rounded-2xl object-cover w-full h-52 sm:h-64 shadow-lg"
              />
            </div>
            <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
              <img
                src={foto6}
                alt="Pizza con prosciutto crudo"
                className="rounded-2xl object-cover w-full h-52 sm:h-64 shadow-lg"
              />
              <img
                src={foto16}
                alt="Pizza bianca con burrata"
                className="rounded-2xl object-cover w-full h-40 sm:h-52 shadow-lg"
              />
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
              Da <strong className="text-rosso-500">Matti per la Pizza</strong> crediamo che una buona pizza inizi dalla farina. Per questo utilizziamo solo{' '}
              <strong>farine non raffinate e integrali</strong>, più digeribili e ricche di nutrienti.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
              Niente scorciatoie, niente compromessi. I nostri ingredienti sono tutti rigorosamente{' '}
              <strong>italiani</strong>, selezionati con cura sul territorio. Il risultato è una pizza dal{' '}
              <strong>cornicione alto e soffice</strong>, sottile al centro, croccante fuori e morbida dentro.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              <strong>Mattia</strong>, il nostro pizzaiolo, mette passione e competenza in ogni pizza.
              Non è solo lavoro: è amore per il buon cibo fatto bene.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🌾', title: 'Farine non raffinate', desc: 'Più digeribili e nutrienti' },
                { icon: '🇮🇹', title: '100% Italiano', desc: 'Ingredienti selezionati' },
                { icon: '👨‍🍳', title: 'Fatto con passione', desc: 'Da Mattia, ogni giorno' },
                { icon: '🏆', title: 'Restaurant Guru Award', desc: '4.8/5 stelle' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-heading font-semibold text-antracite-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── MENU ───────── */

function Menu() {
  return (
    <section id="menu" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-rosso-500 font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Scopri le nostre pizze
          </span>
          <h2 className="section-title text-antracite-800">
            Il nostro <span className="text-rosso-500">Menu</span>
          </h2>
          <p className="section-subtitle">
            Tutte preparate con farine non raffinate e ingredienti di prima qualità.
            Opzioni vegane e vegetariane disponibili.
          </p>
        </div>

        {/* Menu Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {menuCategories.map((cat) => (
            <div
              key={cat.name}
              className="bg-crema-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-crema-200"
            >
              <span className="text-4xl block mb-4">{cat.icon}</span>
              <h3 className="font-heading font-bold text-xl text-antracite-800 mb-2">
                {cat.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-rosso-500 rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-center items-center text-center hover:bg-rosso-600 transition-colors duration-300">
            <span className="text-4xl block mb-4">📖</span>
            <h3 className="font-heading font-bold text-xl mb-2">
              Menu Completo
            </h3>
            <p className="text-white/80 text-sm mb-6">
              Sfoglia tutte le pizze con prezzi e ingredienti
            </p>
            <a
              href="https://www.leggimenu.it/menu/mattiperlapizza/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-rosso-500 px-6 py-3 rounded-full font-bold hover:bg-crema-50 transition-colors"
            >
              Apri il Menu
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Info banner */}
        <div className="bg-grano-100 border border-grano-300 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="text-3xl shrink-0">ℹ️</span>
          <div>
            <p className="font-semibold text-antracite-800">Informazioni su allergeni e intolleranze</p>
            <p className="text-sm text-gray-600">Consulta il nostro menu digitale per tutti i dettagli sugli ingredienti e gli allergeni. Opzioni vegane e vegetariane sempre disponibili.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── GALLERY ───────── */

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goNext = () => setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  const goPrev = () => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightboxOpen])

  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxOpen])

  return (
    <section id="galleria" className="section-padding bg-crema-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-rosso-500 font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Guarda che bontà
          </span>
          <h2 className="section-title text-antracite-800">
            Le nostre <span className="text-rosso-500">pizze</span>
          </h2>
          <p className="section-subtitle">
            Ogni pizza è un'opera d'arte. Guarda con i tuoi occhi la qualità dei nostri ingredienti.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square cursor-pointer focus:outline-none focus:ring-2 focus:ring-rosso-500 focus:ring-offset-2"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl">
                  🔍
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Instagram link */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/matti_per_la_pizza/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-rosso-500 hover:text-rosso-600 font-semibold transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
            Seguici su Instagram per altre foto
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
            aria-label="Chiudi"
          >
            <XIcon className="w-8 h-8" />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-2 sm:left-6 text-white/70 hover:text-white p-2 z-10"
            aria-label="Precedente"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-2 sm:right-6 text-white/70 hover:text-white p-2 z-10"
            aria-label="Successiva"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  )
}

/* ───────── CONTATTI / ORDINA ───────── */

function Contatti() {
  const oggi = new Date().getDay()

  return (
    <section id="contatti" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-rosso-500 font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Fai il tuo ordine
          </span>
          <h2 className="section-title text-antracite-800">
            Ordina la tua <span className="text-rosso-500">pizza</span>
          </h2>
          <p className="section-subtitle">
            Chiamaci o scrivici su WhatsApp per ordinare. Ritiro in negozio o mangia qui da noi!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Come ordinare */}
          <div className="bg-rosso-500 text-white rounded-2xl p-8 lg:row-span-2">
            <h3 className="font-heading font-bold text-2xl mb-6">Come ordinare</h3>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Consulta il menu', desc: 'Sfoglia le nostre pizze online' },
                { step: '2', title: 'Chiamaci o scrivici', desc: 'Telefono o WhatsApp' },
                { step: '3', title: 'Ritira calda!', desc: 'Pronta in pochi minuti' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white font-bold text-lg shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-white/70 text-sm mb-4">💡 Consigliamo la prenotazione nei weekend</p>
              <div className="space-y-3">
                <a
                  href="tel:+393476737328"
                  className="flex items-center justify-center gap-2 bg-white text-rosso-500 px-6 py-3 rounded-full font-bold hover:bg-crema-50 transition-colors w-full"
                >
                  <PhoneIcon className="w-5 h-5" />
                  347 673 7328
                </a>
                <a
                  href="https://wa.me/393476737328?text=Ciao!%20Vorrei%20ordinare%20una%20pizza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-colors w-full"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Orari */}
          <div className="bg-crema-50 rounded-2xl p-8 border border-crema-200">
            <div className="flex items-center gap-3 mb-6">
              <ClockIcon className="w-6 h-6 text-rosso-500" />
              <h3 className="font-heading font-bold text-xl text-antracite-800">Orari di apertura</h3>
            </div>
            <div className="space-y-3">
              {orari.map((o, i) => {
                const isToday = i === (oggi === 0 ? 6 : oggi - 1)
                const isClosed = o.orario === 'Chiuso'
                return (
                  <div
                    key={o.giorno}
                    className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                      isToday ? 'bg-rosso-50 border border-rosso-200' : ''
                    }`}
                  >
                    <span className={`font-medium ${isToday ? 'text-rosso-500' : 'text-antracite-700'}`}>
                      {isToday && '● '}{o.giorno}
                    </span>
                    <span className={`text-sm ${isClosed ? 'text-red-400 font-semibold' : 'text-gray-600'}`}>
                      {o.orario}
                    </span>
                  </div>
                )
              })}
            </div>
            <p className="mt-4 text-xs text-gray-400 italic">Chiuso a pranzo. Solo servizio serale.</p>
          </div>

          {/* Contatti e social */}
          <div className="bg-crema-50 rounded-2xl p-8 border border-crema-200">
            <h3 className="font-heading font-bold text-xl text-antracite-800 mb-6">Contatti</h3>

            <div className="space-y-4 mb-8">
              <a href="tel:+393476737328" className="flex items-center gap-3 text-antracite-700 hover:text-rosso-500 transition-colors">
                <PhoneIcon className="w-5 h-5 text-rosso-500 shrink-0" />
                <span>+39 347 673 7328</span>
              </a>
              <a
                href="https://wa.me/393476737328"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-antracite-700 hover:text-green-600 transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 text-green-600 shrink-0" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center gap-3 text-antracite-700">
                <MapPinIcon className="w-5 h-5 text-rosso-500 shrink-0" />
                <span>Via San Marco 16/c, 25055 Pisogne (BS)</span>
              </div>
            </div>

            <h4 className="font-heading font-semibold text-sm text-gray-500 uppercase tracking-wider mb-3">Seguici</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/matti_per_la_pizza/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/mattiperlapizza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Recensioni */}
            <div className="mt-8 pt-6 border-t border-crema-300">
              <h4 className="font-heading font-semibold text-sm text-gray-500 uppercase tracking-wider mb-3">Recensioni</h4>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${i <= 4 ? 'text-yellow-400' : 'text-yellow-300'}`}
                    />
                  ))}
                </div>
                <span className="font-bold text-antracite-800">4.8</span>
                <span className="text-sm text-gray-500">su Google</span>
              </div>
            </div>
          </div>

          {/* Pagamenti e servizi */}
          <div className="lg:col-span-2 bg-crema-50 rounded-2xl p-8 border border-crema-200">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-heading font-semibold text-antracite-800 mb-3">Servizi</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center gap-2">✅ Asporto</li>
                  <li className="flex items-center gap-2">✅ Posti a sedere (interni + esterni)</li>
                  <li className="flex items-center gap-2">✅ Accessibile in sedia a rotelle</li>
                  <li className="flex items-center gap-2">✅ Opzioni vegane e vegetariane</li>
                  <li className="flex items-center gap-2">✅ Birra e alcolici</li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-antracite-800 mb-3">Pagamenti accettati</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center gap-2">💳 Carte di credito e debito</li>
                  <li className="flex items-center gap-2">💶 Contanti</li>
                  <li className="flex items-center gap-2">📱 Pagamenti NFC / contactless</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── DOVE SIAMO ───────── */

function DoveSiamo() {
  return (
    <section id="dove-siamo" className="section-padding bg-crema-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-rosso-500 font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Vieni a trovarci
          </span>
          <h2 className="section-title text-antracite-800">
            Dove <span className="text-rosso-500">trovarci</span>
          </h2>
          <p className="section-subtitle">
            Siamo nel centro storico di Pisogne, sul Lago d'Iseo. Facili da raggiungere!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-80 sm:h-96 lg:h-full min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.3!2d10.1078!3d45.7989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47817e3c1f1c1c1f%3A0x0!2sVia+San+Marco+16%2Fc%2C+25055+Pisogne+BS!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Matti per la Pizza - Pisogne"
            />
          </div>

          {/* Info cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-crema-200">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-rosso-50 shrink-0">
                  <MapPinIcon className="w-6 h-6 text-rosso-500" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-antracite-800 mb-1">Indirizzo</h3>
                  <p className="text-gray-600">Via San Marco 16/c</p>
                  <p className="text-gray-600">25055 Pisogne (BS)</p>
                  <p className="text-sm text-gray-400 mt-1">Centro storico, vicino alla Chiesa Parrocchiale</p>
                </div>
              </div>
            </div>

            {/* Come arrivare */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-crema-200">
              <h3 className="font-heading font-bold text-lg text-antracite-800 mb-4">Come arrivare</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0">🚗</span>
                  <div>
                    <p className="font-medium text-antracite-700">In auto</p>
                    <p className="text-sm text-gray-500">SS510 Sebina Orientale, uscita Pisogne centro</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0">🚆</span>
                  <div>
                    <p className="font-medium text-antracite-700">In treno</p>
                    <p className="text-sm text-gray-500">Stazione Pisogne (linea Brescia-Iseo-Edolo), 10 min a piedi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0">🚶</span>
                  <div>
                    <p className="font-medium text-antracite-700">A piedi</p>
                    <p className="text-sm text-gray-500">Dal lungolago, 5 minuti</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parcheggio e accessibilità */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-crema-200 text-center">
                <span className="text-3xl block mb-2">🅿️</span>
                <h4 className="font-heading font-semibold text-antracite-800">Parcheggio</h4>
                <p className="text-sm text-gray-500">Gratuito nelle vicinanze</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-crema-200 text-center">
                <span className="text-3xl block mb-2">♿</span>
                <h4 className="font-heading font-semibold text-antracite-800">Accessibilità</h4>
                <p className="text-sm text-gray-500">Locale accessibile in sedia a rotelle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── FOOTER ───────── */

function Footer() {
  return (
    <footer className="bg-antracite-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Matti per la Pizza" className="w-12 h-12" />
              <span className="font-heading font-bold text-xl">Matti per la Pizza</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Pizzeria d'asporto a Pisogne. Farine non raffinate, ingredienti italiani, passione artigianale.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/matti_per_la_pizza/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/mattiperlapizza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="tel:+393476737328" className="hover:text-white transition-colors flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4 shrink-0" />
                  347 673 7328
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/393476737328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Via San Marco 16/c<br />25055 Pisogne (BS)</span>
              </li>
            </ul>
          </div>

          {/* Link utili */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Link utili</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="#chi-siamo" className="hover:text-white transition-colors">Chi Siamo</a>
              </li>
              <li>
                <a
                  href="https://www.leggimenu.it/menu/mattiperlapizza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Menu Completo
                </a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-white transition-colors">Ordina Ora</a>
              </li>
              <li>
                <a href="#dove-siamo" className="hover:text-white transition-colors">Dove Siamo</a>
              </li>
            </ul>
          </div>

          {/* Orari */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Orari</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="flex justify-between">
                <span>Lun</span>
                <span className="text-red-400">Chiuso</span>
              </li>
              <li className="flex justify-between">
                <span>Mar – Gio</span>
                <span>18:00 – 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Ven – Sab</span>
                <span>18:00 – 22:30</span>
              </li>
              <li className="flex justify-between">
                <span>Dom</span>
                <span>18:00 – 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Matti per la Pizza — Pisogne (BS)
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ───────── FLOATING CTA ───────── */

function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/393476737328?text=Ciao!%20Vorrei%20ordinare%20una%20pizza"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="Ordina su WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
      <a
        href="tel:+393476737328"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-rosso-500 text-white shadow-lg shadow-rosso-500/30 hover:bg-rosso-600 hover:scale-110 transition-all duration-300"
        aria-label="Chiama per ordinare"
      >
        <PhoneIcon className="w-6 h-6" />
      </a>
    </div>
  )
}

/* ───────── APP ───────── */

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ChiSiamo />
      <Menu />
      <Gallery />
      <Contatti />
      <DoveSiamo />
      <Footer />
      <FloatingCTA />
    </>
  )
}

export default App
