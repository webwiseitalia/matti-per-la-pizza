import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'

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

gsap.registerPlugin(ScrollTrigger)

/* ───────── DATA ───────── */

const galleryImages = [
  { src: foto5, alt: 'Margherita classica', tilt: 'photo-tilt-1' },
  { src: foto6, alt: 'Pizza con crudo', tilt: 'photo-tilt-2' },
  { src: foto3, alt: 'Pizza vegetariana', tilt: 'photo-tilt-3' },
  { src: foto4, alt: 'Pizza gamberi e rucola', tilt: 'photo-tilt-4' },
  { src: foto8, alt: 'Pizza ai funghi', tilt: 'photo-tilt-5' },
  { src: foto9, alt: 'Pizza capricciosa', tilt: 'photo-tilt-6' },
  { src: foto7, alt: 'Pizza melanzane', tilt: 'photo-tilt-1' },
  { src: foto11, alt: 'Pizza gorgonzola', tilt: 'photo-tilt-2' },
  { src: foto12, alt: 'Pizza speck e noci', tilt: 'photo-tilt-3' },
  { src: foto14, alt: 'Pizza pesto', tilt: 'photo-tilt-4' },
  { src: foto16, alt: 'Pizza burrata', tilt: 'photo-tilt-5' },
  { src: foto17, alt: 'Pizza crema e speck', tilt: 'photo-tilt-6' },
  { src: foto18, alt: 'Pizza mortadella', tilt: 'photo-tilt-1' },
  { src: foto1, alt: 'Calzone quattro formaggi', tilt: 'photo-tilt-2' },
  { src: foto10, alt: 'Pizza salsiccia', tilt: 'photo-tilt-3' },
  { src: foto2, alt: 'Pizza patatine', tilt: 'photo-tilt-4' },
  { src: foto13, alt: 'Pizza carciofi', tilt: 'photo-tilt-5' },
  { src: foto15, alt: 'Focaccia dolce', tilt: 'photo-tilt-6' },
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

/* ───────── SVG DOODLE COMPONENTS ───────── */

function DoodleArrow({ className }) {
  return (
    <svg className={className} viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 13 Q 18 10, 34 12 T 50 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M44 7 L 53 12 L 44 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function DoodleCircle({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 C 75 3, 97 20, 95 50 C 93 80, 70 97, 45 95 C 20 93, 3 75, 5 48 C 7 22, 28 7, 50 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function DoodleStar({ className }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2 L 23 15 L 37 14 L 26 22 L 30 36 L 20 27 L 10 36 L 14 22 L 3 14 L 17 15 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" opacity="0.15" />
      <path d="M20 2 L 23 15 L 37 14 L 26 22 L 30 36 L 20 27 L 10 36 L 14 22 L 3 14 L 17 15 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function DoodleUnderline({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M2 8 Q 30 2, 60 7 T 120 6 T 198 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  )
}

/* ───────── HAND-DRAWN SVG ICONS ───────── */

function WheatIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21 C12 21 12 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 7 C9 4 5 5 5 5 C5 5 6 9 9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 7 C15 4 19 5 19 5 C19 5 18 9 15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 12 C9 9 5 10 5 10 C5 10 6 14 9 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 12 C15 9 19 10 19 10 C19 10 18 14 15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 17 C9 14 5 15 5 15 C5 15 6 19 9 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 17 C15 14 19 15 19 15 C19 15 18 19 15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function ItalyFlagIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="6.5" height="16" rx="1" fill="#009246" opacity="0.85" />
      <rect x="8.5" y="4" width="7" height="16" rx="0" fill="#F5F5F5" opacity="0.85" />
      <rect x="15.5" y="4" width="6.5" height="16" rx="1" fill="#CE2B37" opacity="0.85" />
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function ChefIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 10 C3 10 2 7.5 3 5.5 C4 3.5 6 3 7 3.5 C7.5 1.5 9.5 0.5 11.5 1 C13 0.2 15 0.5 16.5 2 C17.5 1.5 19.5 2 20.5 4 C22 6 21 9 18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10 L6 17 C6 17 6 20 12 20 C18 20 18 17 18 17 L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M9 13 L15 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M9 16 L15 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M10 20 L10 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 20 L14 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function TrophyIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 3 L17 3 L17 10 C17 14 14.5 16 12 16 C9.5 16 7 14 7 10 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M7 5 C5 5 3 6 3 8 C3 10 5 11 7 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M17 5 C19 5 21 6 21 8 C21 10 19 11 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 16 L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 22 L16 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 19 L14 19 L14 22 L10 22 Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function CheckmarkIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M7 12.5 L10.5 16 L17 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WheelchairIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M10 8 L10 14 L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 14 L17 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="10" cy="18" r="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}

function LeafIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 21 C5 21 4 12 12 6 C20 2 21 2 21 2 C21 2 22 11 14 17 C6 23 5 21 5 21 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M5 21 C5 21 10 14 21 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function CreditCardIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M2 9 L22 9" stroke="currentColor" strokeWidth="2" />
      <path d="M6 14 L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 17 L8 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function CashIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="5" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 9.5 L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 16 L12 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="4" cy="12" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="20" cy="12" r="1" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

function NfcIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(-10 9 14)" />
      <path d="M16 8 C18 9 19.5 11.5 19.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M17 5 C20 6.5 22 10 22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function CarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 14 L3 14 C2 14 1.5 13 2 12 L4 7 C4.5 5.5 6 5 7 5 L17 5 C18 5 19.5 5.5 20 7 L22 12 C22.5 13 22 14 21 14 L19 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M5 14 L5 17 C5 18 5.5 18.5 6.5 18.5 L8 18.5 C9 18.5 9.5 18 9.5 17 L9.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M14.5 14 L14.5 17 C14.5 18 15 18.5 16 18.5 L17.5 18.5 C18.5 18.5 19 18 19 17 L19 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M5 14 L19 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function TrainIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="2" width="14" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M5 11 L19 11" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="15" r="1.2" fill="currentColor" />
      <circle cx="15" cy="15" r="1.2" fill="currentColor" />
      <path d="M5 6 L19 6" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M8 18 L6 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 18 L18 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 22 L19 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function WalkingIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="3.5" r="2.2" stroke="currentColor" strokeWidth="2" />
      <path d="M10 8 L14 8 L15.5 13 L13 13 L14 19 L11.5 19 L10 14 L8.5 19 L6 19 L9 13 L7.5 13 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function ParkingIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M9 17 L9 7 L14 7 C16.5 7 18 8.5 18 10.5 C18 12.5 16.5 14 14 14 L9 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

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

function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
  )
}

/* ───────── LENIS SMOOTH SCROLL ───────── */

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    lenis.on('scroll', ScrollTrigger.update)
    return () => lenis.destroy()
  }, [])
}

/* ───────── GSAP TEXT REVEAL ───────── */

function useTextReveal(ref, opts = {}) {
  useLayoutEffect(() => {
    if (!ref.current) return
    const split = new SplitType(ref.current, { types: 'chars,words' })
    const ctx = gsap.context(() => {
      gsap.from(split.chars || split.words, {
        y: opts.y || 60,
        opacity: 0,
        rotateX: opts.rotateX || -30,
        stagger: opts.stagger || 0.02,
        duration: opts.duration || 1,
        ease: 'power4.out',
        scrollTrigger: { trigger: ref.current, start: opts.start || 'top 85%' },
      })
    })
    return () => { ctx.revert(); split.revert() }
  }, [])
}

/* ════════════════════════════════════════
   NAVBAR
   ════════════════════════════════════════ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Chi Siamo', href: '#chi-siamo' },
    { label: 'Menu', href: '#menu' },
    { label: 'Galleria', href: '#galleria' },
    { label: 'Ordina', href: '#contatti' },
    { label: 'Dove Siamo', href: '#dove-siamo' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="flex items-center justify-between px-5 md:px-10 lg:px-14 h-16 md:h-20">
        <a href="#" className="flex items-center gap-3 z-10">
          <img src={logo} alt="Matti per la Pizza" className="h-10 md:h-12 w-auto" />
          <span className={`font-round font-bold text-lg transition-colors duration-500 ${scrolled ? 'text-[#C41E1E]' : 'text-white'}`}>
            Matti per la Pizza
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-round text-sm font-medium transition-colors duration-300 hover:text-[#C41E1E] ${scrolled ? 'text-[#2D2D2D]' : 'text-white/90'}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+393476737328"
            className="sketch-border-red bg-[#C41E1E] text-white px-5 py-2.5 font-round text-sm font-bold hover:bg-[#8B1515] transition-colors flex items-center gap-2"
          >
            <PhoneIcon className="w-4 h-4" />
            Ordina Ora
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden z-10 p-2 transition-colors ${scrolled || mobileOpen ? 'text-[#2D2D2D]' : 'text-white'}`}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#FFFDF7] z-[45] flex flex-col justify-center items-center gap-6 px-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.06 }}
                className="font-round font-bold text-3xl text-[#2D2D2D] hover:text-[#C41E1E] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="tel:+393476737328"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 sketch-border-red bg-[#C41E1E] text-white px-8 py-4 font-round font-bold flex items-center gap-3"
            >
              <PhoneIcon className="w-5 h-5" />
              347 673 7328
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

/* ════════════════════════════════════════
   HERO
   ════════════════════════════════════════ */

function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const imgRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, { scale: 1.2, duration: 2, ease: 'power3.out' })
      gsap.to(imgRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    if (!titleRef.current) return
    const split = new SplitType(titleRef.current, { types: 'chars' })
    const ctx = gsap.context(() => {
      gsap.from(split.chars, { y: 100, rotateX: -80, opacity: 0, stagger: 0.03, duration: 1.2, ease: 'power4.out', delay: 0.3 })
    })
    return () => { ctx.revert(); split.revert() }
  }, [])

  return (
    <section ref={heroRef} className="relative h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img ref={imgRef} src={foto5} alt="Pizza artigianale" className="w-full h-full object-cover will-change-transform" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end px-5 md:px-10 lg:px-14 pb-14 md:pb-20">
        {/* Logo — like a stamp, tilted */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: -6 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="absolute top-24 right-5 md:right-14 lg:right-20"
        >
          <div className="relative">
            <img src={logo} alt="Logo" className="w-24 md:w-36 lg:w-44 drop-shadow-2xl" />
            {/* Handwritten annotation */}
            <span className="absolute -bottom-6 -left-4 font-hand text-white text-lg md:text-xl rotate-[-8deg] whitespace-nowrap">
              dal 2018!
            </span>
          </div>
        </motion.div>

        <div className="max-w-[90vw] md:max-w-[70vw]">
          {/* Handwritten top line */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-hand text-[#FFF3D1] text-xl md:text-2xl mb-3 md:mb-4"
          >
            Pizzeria d'asporto a Pisogne
          </motion.p>

          <h1
            ref={titleRef}
            className="hero-title font-round font-bold text-white leading-[0.95] mb-6 md:mb-8"
            style={{ fontSize: 'clamp(3.2rem, 10vw, 8rem)', perspective: '800px' }}
          >
            Matti per<br />la Pizza
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-white/70 text-base md:text-lg max-w-md leading-relaxed mb-8"
          >
            Farine non raffinate. Ingredienti italiani. Passione artigianale.
          </motion.p>

          {/* CTAs with hand-drawn borders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap gap-3 md:gap-4"
          >
            <a
              href="https://wa.me/393476737328?text=Ciao!%20Vorrei%20ordinare%20una%20pizza"
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-border-red bg-[#C41E1E] text-white px-7 md:px-9 py-4 font-round font-bold text-base md:text-lg hover:bg-[#8B1515] transition-colors flex items-center gap-3"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Ordina ora!
            </a>
            <a
              href="#menu"
              className="sketch-border bg-transparent text-white px-7 md:px-9 py-4 font-round font-bold text-base md:text-lg hover:bg-white/10 transition-colors flex items-center gap-2 border-white"
              style={{ borderColor: 'rgba(255,255,255,0.5)' }}
            >
              Scopri il Menu
              <DoodleArrow className="w-8 h-5 text-white" />
            </a>
          </motion.div>
        </div>

        {/* Badges — handwritten style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-14 right-5 md:right-14 hidden md:flex flex-col items-end gap-2"
        >
          {[
            { icon: <WheatIcon className="w-4 h-4 inline-block" />, text: 'Farine non raffinate' },
            { icon: <ItalyFlagIcon className="w-4 h-4 inline-block" />, text: '100% Made in Italy' },
            { icon: <DoodleStar className="w-4 h-4 inline-block" />, text: '4.8/5 Google' },
          ].map((item, i) => (
            <span key={i} className="font-hand text-white/60 text-base flex items-center gap-1.5" style={{ transform: `rotate(${-2 + i}deg)` }}>
              {item.icon} {item.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════
   CHI SIAMO
   ════════════════════════════════════════ */

function ChiSiamo() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  useTextReveal(titleRef, { y: 60, stagger: 0.025, duration: 1.2 })

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.chi-reveal').forEach((el, i) => {
        gsap.from(el, {
          y: 40 + i * 10, opacity: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="chi-siamo" className="bg-paper relative overflow-hidden py-20 md:py-32">
      {/* Doodle decorations */}
      <DoodleStar className="absolute top-16 right-[15%] w-10 h-10 text-[#C41E1E] opacity-20 rotate-12" />
      <DoodleCircle className="absolute bottom-20 left-[8%] w-16 h-16 text-[#E6D5AC] opacity-30 -rotate-6" />

      <div className="px-5 md:px-10 lg:px-14">
        {/* Header with handwritten accent */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <span className="font-hand text-[#C41E1E] text-2xl md:text-3xl block mb-2" style={{ transform: 'rotate(-2deg)' }}>
            La nostra storia
          </span>
          <h2
            ref={titleRef}
            className="font-round font-bold text-[#2D2D2D] leading-[1]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Matti per la qualità
          </h2>
          <DoodleUnderline className="w-48 md:w-64 h-3 text-[#C41E1E] mt-2 opacity-60" />
        </div>

        {/* Content: photos like scattered polaroids + text */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {/* Photo cluster — like photos pinned on a board */}
          <div className="col-span-12 md:col-span-5 relative" style={{ minHeight: '450px' }}>
            {/* Photo 1 */}
            <div className="chi-reveal absolute top-0 left-0 w-[65%] z-10 photo-tilt-1">
              <div className="bg-white p-2 md:p-3 shadow-lg" style={{ transform: 'rotate(-3deg)' }}>
                <img src={foto6} alt="Pizza con prosciutto crudo" className="w-full aspect-[4/5] object-cover" />
                <p className="font-hand text-sm md:text-base text-gray-500 mt-1.5 text-center">Prosciutto crudo DOP</p>
              </div>
            </div>
            {/* Photo 2 */}
            <div className="chi-reveal absolute top-[30%] right-0 w-[55%] z-20 photo-tilt-4">
              <div className="bg-white p-2 md:p-3 shadow-lg" style={{ transform: 'rotate(2deg)' }}>
                <img src={foto16} alt="Pizza bianca burrata" className="w-full aspect-square object-cover" />
                <p className="font-hand text-sm md:text-base text-gray-500 mt-1.5 text-center">Burrata & cime di rapa</p>
              </div>
            </div>
            {/* Photo 3 */}
            <div className="chi-reveal absolute bottom-0 left-[10%] w-[50%] z-30 photo-tilt-2">
              <div className="bg-white p-2 md:p-3 shadow-lg" style={{ transform: 'rotate(-1deg)' }}>
                <img src={foto8} alt="Pizza ai funghi" className="w-full aspect-[3/4] object-cover" />
                <p className="font-hand text-sm md:text-base text-gray-500 mt-1.5 text-center">Funghi porcini</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="col-span-12 md:col-span-6 md:col-start-7 pt-4 md:pt-12">
            <div className="chi-reveal">
              <p className="text-[#2D2D2D] leading-[1.9] mb-6" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)' }}>
                Da <strong className="text-[#C41E1E] font-round">Matti per la Pizza</strong> crediamo che una buona pizza inizi dalla farina.
                Per questo utilizziamo solo <strong>farine non raffinate e integrali</strong>, più digeribili e ricche di nutrienti.
              </p>
            </div>
            <div className="chi-reveal">
              <p className="text-[#2D2D2D] leading-[1.9] mb-6" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)' }}>
                Niente scorciatoie. I nostri ingredienti sono tutti rigorosamente <strong>italiani</strong>, selezionati con cura.
                Il risultato? Un <strong>cornicione alto e soffice</strong>, sottile al centro, croccante fuori e morbido dentro.
              </p>
            </div>
            <div className="chi-reveal">
              <p className="text-[#2D2D2D] leading-[1.9] mb-10" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)' }}>
                <strong>Mattia</strong>, il nostro pizzaiolo, mette passione e competenza in ogni pizza.
                Non è solo lavoro — è amore per il buon cibo fatto bene.
              </p>
            </div>

            {/* Features as handwritten tags */}
            <div className="chi-reveal flex flex-wrap gap-3">
              {[
                { icon: <WheatIcon className="w-5 h-5 text-[#C41E1E]" />, label: 'Farine non raffinate' },
                { icon: <ItalyFlagIcon className="w-5 h-5 text-[#C41E1E]" />, label: '100% Italiano' },
                { icon: <ChefIcon className="w-5 h-5 text-[#C41E1E]" />, label: 'Fatto con passione' },
                { icon: <TrophyIcon className="w-5 h-5 text-[#C41E1E]" />, label: 'Restaurant Guru Award' },
              ].map((item, i) => (
                <span
                  key={item.label}
                  className="sketch-border-light bg-white px-4 py-2.5 flex items-center gap-2 font-round text-sm font-medium text-[#2D2D2D]"
                  style={{ transform: `rotate(${[-1, 0.5, -0.5, 1][i]}deg)` }}
                >
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="doodle-divider mt-20 md:mt-32" />
    </section>
  )
}

/* ════════════════════════════════════════
   MENU
   ════════════════════════════════════════ */

function Menu() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  useTextReveal(titleRef, { y: 60, stagger: 0.03 })

  const menuItems = [
    { name: 'Classiche', desc: 'Le grandi tradizionali, da Margherita a Diavola', img: foto5, tilt: -2 },
    { name: 'Classiche +', desc: 'Con ingredienti selezionati per un gusto superiore', img: foto9, tilt: 1.5 },
    { name: 'Speciali', desc: 'Le creazioni di Mattia, abbinamenti unici', img: foto14, tilt: -1 },
    { name: 'Bianche e Calzoni', desc: 'Senza pomodoro, farciture ricche e gustose', img: foto1, tilt: 2 },
    { name: 'Bibite', desc: 'Birre artigianali, acqua e bevande', img: foto15, tilt: -1.5 },
  ]

  return (
    <section ref={sectionRef} id="menu" className="bg-paper-warm relative overflow-hidden py-20 md:py-32">
      <DoodleStar className="absolute top-20 left-[10%] w-8 h-8 text-[#C41E1E] opacity-15 -rotate-12" />

      <div className="px-5 md:px-10 lg:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-20 gap-6">
          <div>
            <span className="font-hand text-[#C41E1E] text-2xl md:text-3xl block mb-2" style={{ transform: 'rotate(-2deg)' }}>
              Scopri le nostre pizze
            </span>
            <h2
              ref={titleRef}
              className="font-round font-bold text-[#2D2D2D] leading-[1]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Il nostro Menu
            </h2>
            <DoodleUnderline className="w-40 md:w-56 h-3 text-[#C41E1E] mt-2 opacity-60" />
          </div>
          <a
            href="https://www.leggimenu.it/menu/mattiperlapizza/"
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-border-red bg-[#C41E1E] text-white px-6 py-3.5 font-round font-bold text-sm hover:bg-[#8B1515] transition-colors flex items-center gap-2 self-start"
          >
            Menu completo con prezzi
            <DoodleArrow className="w-7 h-4 text-white" />
          </a>
        </div>

        {/* Menu items — like a chalkboard / hand-listed */}
        <div className="space-y-4 md:space-y-0">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 md:py-8 border-b-2 border-dashed border-[#E6D5AC]"
            >
              {/* Number */}
              <span className="font-hand text-[#C41E1E] text-3xl md:text-4xl opacity-40 md:w-12 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Tiny photo */}
              <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden bg-white p-1 shadow-md hidden sm:block" style={{ transform: `rotate(${item.tilt}deg)` }}>
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>

              {/* Name & desc */}
              <div className="flex-1">
                <h3 className="font-round font-bold text-[#2D2D2D] text-xl md:text-2xl group-hover:text-[#C41E1E] transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
              </div>

              {/* Arrow doodle on hover */}
              <DoodleArrow className="w-10 h-5 text-[#C41E1E] opacity-0 group-hover:opacity-40 transition-opacity hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* Allergen note — handwritten style */}
        <div className="mt-10 md:mt-14 flex items-start gap-3">
          <span className="font-hand text-2xl text-[#C41E1E]">*</span>
          <p className="font-hand text-gray-500 text-lg leading-relaxed">
            Opzioni vegane e vegetariane sempre disponibili. Info allergeni nel menu digitale.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════
   GALLERY — Scattered polaroids
   ════════════════════════════════════════ */

function Gallery() {
  const titleRef = useRef(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useTextReveal(titleRef, { y: 60, stagger: 0.03 })

  const openLightbox = (index) => { setLightboxIndex(index); setLightboxOpen(true) }
  const closeLightbox = () => setLightboxOpen(false)
  const goNext = () => setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  const goPrev = () => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

  useEffect(() => {
    if (lightboxOpen) { document.body.style.overflow = 'hidden' } else { document.body.style.overflow = '' }
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

  const tilts = [-3, 2, -1.5, 2.5, -2, 1, -1, 3, -2.5, 1.5, -0.5, 2, -3, 1, -2, 2.5, -1, 1.5]

  return (
    <section id="galleria" className="bg-paper relative overflow-hidden py-20 md:py-32">
      <DoodleCircle className="absolute top-10 right-[12%] w-20 h-20 text-[#C41E1E] opacity-10 rotate-12" />

      <div className="px-5 md:px-10 lg:px-14 mb-12 md:mb-16">
        <span className="font-hand text-[#C41E1E] text-2xl md:text-3xl block mb-2" style={{ transform: 'rotate(-2deg)' }}>
          Guarda che bontà!
        </span>
        <h2
          ref={titleRef}
          className="font-round font-bold text-[#2D2D2D] leading-[1]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Le nostre pizze
        </h2>
        <DoodleUnderline className="w-44 md:w-60 h-3 text-[#C41E1E] mt-2 opacity-60" />
      </div>

      {/* Polaroid-style scattered grid */}
      <div className="px-3 md:px-8 lg:px-12">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30, rotate: tilts[i] }}
              whileInView={{ opacity: 1, y: 0, rotate: tilts[i] }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
              onClick={() => openLightbox(i)}
              className="w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-19.2px)] bg-white p-2 md:p-2.5 shadow-md hover:shadow-xl transition-shadow cursor-pointer focus:outline-none relative group"
            >
              <img src={img.src} alt={img.alt} className="w-full aspect-square object-cover" loading="lazy" />
              <p className="font-hand text-xs md:text-sm text-gray-400 mt-1.5 text-center truncate">{img.alt}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Instagram */}
      <div className="px-5 md:px-10 lg:px-14 mt-12">
        <a
          href="https://www.instagram.com/matti_per_la_pizza/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-hand text-[#C41E1E] text-xl hover:text-[#8B1515] transition-colors"
        >
          <InstagramIcon className="w-5 h-5" />
          Seguici su Instagram per altre foto!
          <DoodleArrow className="w-8 h-5" />
        </a>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10" aria-label="Chiudi">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
            </button>
            <button onClick={(e) => { e.stopPropagation(); goPrev() }} className="absolute left-2 sm:left-6 text-white/70 hover:text-white p-2 z-10" aria-label="Precedente">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain bg-white p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); goNext() }} className="absolute right-2 sm:right-6 text-white/70 hover:text-white p-2 z-10" aria-label="Successiva">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-hand text-white/50 text-lg">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ════════════════════════════════════════
   CONTATTI / ORDINA
   ════════════════════════════════════════ */

function Contatti() {
  const titleRef = useRef(null)
  const sectionRef = useRef(null)
  const oggi = new Date().getDay()

  useTextReveal(titleRef, { y: 60, stagger: 0.03 })

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.contatti-reveal').forEach((el, i) => {
        gsap.from(el, { y: 50, opacity: 0, duration: 0.8, ease: 'power3.out', delay: i * 0.1,
          scrollTrigger: { trigger: el, start: 'top 92%' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contatti" className="bg-paper relative overflow-hidden py-20 md:py-32">
      <DoodleStar className="absolute top-16 right-[20%] w-8 h-8 text-[#C41E1E] opacity-15 rotate-6" />

      <div className="px-5 md:px-10 lg:px-14">
        <div className="mb-16 md:mb-20">
          <span className="font-hand text-[#C41E1E] text-2xl md:text-3xl block mb-2" style={{ transform: 'rotate(-2deg)' }}>
            Fai il tuo ordine!
          </span>
          <h2
            ref={titleRef}
            className="font-round font-bold text-[#2D2D2D] leading-[1]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Ordina la tua pizza
          </h2>
          <DoodleUnderline className="w-48 md:w-64 h-3 text-[#C41E1E] mt-2 opacity-60" />
        </div>

        <div className="grid grid-cols-12 gap-5 md:gap-8">
          {/* Order CTA — big, warm, like a note */}
          <div className="contatti-reveal col-span-12 md:col-span-5 sketch-border-red bg-[#C41E1E] text-white p-8 md:p-10 flex flex-col justify-between" style={{ minHeight: '480px', transform: 'rotate(-0.5deg)' }}>
            <div>
              <h3 className="font-round font-bold text-2xl mb-2">Come ordinare</h3>
              <p className="font-hand text-white/60 text-lg mb-8">Facilissimo!</p>
              <div className="space-y-7">
                {[
                  { n: 1, title: 'Consulta il menu', desc: 'Sfoglia le nostre pizze online' },
                  { n: 2, title: 'Chiamaci o scrivici', desc: 'Telefono o WhatsApp' },
                  { n: 3, title: 'Ritira calda!', desc: 'Pronta in pochi minuti' },
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-4">
                    <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full border-2 border-white/30 font-hand text-lg text-white/50">{step.n}</span>
                    <div>
                      <p className="font-round font-bold text-lg">{step.title}</p>
                      <p className="text-white/60 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <a href="tel:+393476737328" className="flex items-center justify-center gap-3 bg-white text-[#C41E1E] px-6 py-4 font-round font-bold sketch-border hover:bg-[#FFF9E8] transition-colors w-full">
                <PhoneIcon className="w-4 h-4" />
                347 673 7328
              </a>
              <a href="https://wa.me/393476737328?text=Ciao!%20Vorrei%20ordinare%20una%20pizza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 font-round font-bold sketch-border transition-colors w-full">
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
              <p className="font-hand text-white/40 text-base text-center pt-1">* Consigliamo la prenotazione nei weekend</p>
            </div>
          </div>

          {/* Right column */}
          <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-5">
            {/* Orari */}
            <div className="contatti-reveal sketch-border-light bg-white p-6 md:p-8" style={{ transform: 'rotate(0.3deg)' }}>
              <h3 className="font-round font-bold text-lg text-[#2D2D2D] mb-1">Orari di apertura</h3>
              <p className="font-hand text-[#C41E1E] text-base mb-5">Solo servizio serale</p>
              <div className="space-y-2">
                {orari.map((o, i) => {
                  const isToday = i === (oggi === 0 ? 6 : oggi - 1)
                  const isClosed = o.orario === 'Chiuso'
                  return (
                    <div key={o.giorno} className={`flex items-center justify-between py-2 px-3 rounded-lg ${isToday ? 'bg-[#fef2f2]' : ''}`}>
                      <span className={`font-medium text-sm ${isToday ? 'text-[#C41E1E] font-round font-bold' : 'text-[#2D2D2D]'}`}>
                        {isToday && '● '}{o.giorno}
                      </span>
                      <span className={`text-sm ${isClosed ? 'text-[#C41E1E] font-bold font-hand text-base' : 'text-gray-500'}`}>
                        {o.orario}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact info & social */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="contatti-reveal sketch-border-light bg-white p-6" style={{ transform: 'rotate(-0.5deg)' }}>
                <h4 className="font-round font-bold text-sm mb-4">Contatti</h4>
                <div className="space-y-3 text-sm">
                  <a href="tel:+393476737328" className="flex items-center gap-2 text-[#2D2D2D] hover:text-[#C41E1E] transition-colors">
                    <PhoneIcon className="w-4 h-4 text-[#C41E1E] shrink-0" />+39 347 673 7328
                  </a>
                  <a href="https://wa.me/393476737328" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#2D2D2D] hover:text-green-600 transition-colors">
                    <WhatsAppIcon className="w-4 h-4 text-green-600 shrink-0" />WhatsApp
                  </a>
                  <div className="flex items-start gap-2 text-[#2D2D2D]">
                    <MapPinIcon className="w-4 h-4 text-[#C41E1E] shrink-0 mt-0.5" />
                    <span>Via San Marco 16/c<br />Pisogne (BS)</span>
                  </div>
                </div>
              </div>

              <div className="contatti-reveal sketch-border-light bg-white p-6 flex flex-col justify-between" style={{ transform: 'rotate(0.4deg)' }}>
                <div>
                  <h4 className="font-round font-bold text-sm mb-4">Social</h4>
                  <div className="flex gap-3 mb-5">
                    <a href="https://www.instagram.com/matti_per_la_pizza/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white sketch-border hover:scale-110 transition-transform" aria-label="Instagram" style={{ borderColor: 'transparent' }}>
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a href="https://www.facebook.com/mattiperlapizza" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white sketch-border hover:scale-110 transition-transform" aria-label="Facebook" style={{ borderColor: 'transparent' }}>
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="pt-3 border-t border-dashed border-[#E6D5AC]">
                  <div className="flex items-center gap-2">
                    <div className="flex">{[1,2,3,4,5].map(n => <StarIcon key={n} className={`w-4 h-4 ${n <= 4 ? 'text-yellow-400' : 'text-yellow-300'}`} />)}</div>
                    <span className="font-round font-bold text-[#2D2D2D] text-sm">4.8</span>
                    <span className="font-hand text-gray-400 text-sm">su Google</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services strip */}
            <div className="contatti-reveal sketch-border-light bg-white p-5" style={{ transform: 'rotate(-0.3deg)' }}>
              <div className="flex flex-wrap gap-x-5 gap-y-2.5 text-sm text-[#2D2D2D]">
                {[
                  { icon: <CheckmarkIcon className="w-4 h-4 text-green-600" />, label: 'Asporto' },
                  { icon: <CheckmarkIcon className="w-4 h-4 text-green-600" />, label: 'Posti a sedere' },
                  { icon: <WheelchairIcon className="w-4 h-4 text-[#C41E1E]" />, label: 'Accessibile' },
                  { icon: <LeafIcon className="w-4 h-4 text-green-600" />, label: 'Vegano' },
                  { icon: <CreditCardIcon className="w-4 h-4 text-[#C41E1E]" />, label: 'Carte' },
                  { icon: <CashIcon className="w-4 h-4 text-[#C41E1E]" />, label: 'Contanti' },
                  { icon: <NfcIcon className="w-4 h-4 text-[#C41E1E]" />, label: 'NFC' },
                ].map(s => (
                  <span key={s.label} className="flex items-center gap-1.5">{s.icon} {s.label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="doodle-divider mt-20 md:mt-28" />
    </section>
  )
}

/* ════════════════════════════════════════
   DOVE SIAMO
   ════════════════════════════════════════ */

function DoveSiamo() {
  const titleRef = useRef(null)
  const sectionRef = useRef(null)

  useTextReveal(titleRef, { y: 60, stagger: 0.03 })

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.dove-reveal').forEach((el, i) => {
        gsap.from(el, { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', delay: i * 0.1,
          scrollTrigger: { trigger: el, start: 'top 92%' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="dove-siamo" className="bg-paper-warm relative overflow-hidden py-20 md:py-32">
      <div className="px-5 md:px-10 lg:px-14">
        <div className="mb-12 md:mb-20">
          <span className="font-hand text-[#C41E1E] text-2xl md:text-3xl block mb-2" style={{ transform: 'rotate(-2deg)' }}>
            Vieni a trovarci!
          </span>
          <h2
            ref={titleRef}
            className="font-round font-bold text-[#2D2D2D] leading-[1]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Dove trovarci
          </h2>
          <DoodleUnderline className="w-40 md:w-56 h-3 text-[#C41E1E] mt-2 opacity-60" />
        </div>

        <div className="grid grid-cols-12 gap-5 md:gap-8">
          {/* Map */}
          <div className="dove-reveal col-span-12 md:col-span-7 sketch-border overflow-hidden h-[320px] md:h-[480px]" style={{ transform: 'rotate(-0.5deg)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.3!2d10.1078!3d45.7989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47817e3c1f1c1c1f%3A0x0!2sVia+San+Marco+16%2Fc%2C+25055+Pisogne+BS!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Mappa Matti per la Pizza"
            />
          </div>

          {/* Info */}
          <div className="col-span-12 md:col-span-4 md:col-start-9 space-y-5">
            <div className="dove-reveal sketch-border-light bg-white p-6" style={{ transform: 'rotate(0.5deg)' }}>
              <h3 className="font-round font-bold text-lg mb-2 flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-[#C41E1E]" />
                Indirizzo
              </h3>
              <p className="text-[#2D2D2D] text-sm leading-relaxed">
                Via San Marco 16/c<br />25055 Pisogne (BS)
              </p>
              <p className="font-hand text-gray-400 text-sm mt-1">Vicino alla Chiesa Parrocchiale</p>
            </div>

            <div className="dove-reveal sketch-border-light bg-white p-6" style={{ transform: 'rotate(-0.3deg)' }}>
              <h3 className="font-round font-bold text-lg mb-4">Come arrivare</h3>
              <div className="space-y-3">
                {[
                  { icon: <CarIcon className="w-5 h-5 text-[#C41E1E]" />, label: 'In auto', desc: 'SS510, uscita Pisogne' },
                  { icon: <TrainIcon className="w-5 h-5 text-[#C41E1E]" />, label: 'In treno', desc: 'Stazione Pisogne, 10 min' },
                  { icon: <WalkingIcon className="w-5 h-5 text-[#C41E1E]" />, label: 'A piedi', desc: 'Dal lungolago, 5 min' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-sm font-round font-medium text-[#2D2D2D]">{item.label}</p>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dove-reveal flex gap-4">
              <div className="sketch-border-light bg-white p-4 text-center flex-1 flex flex-col items-center" style={{ transform: 'rotate(1deg)' }}>
                <ParkingIcon className="w-7 h-7 text-[#C41E1E] mb-1" />
                <p className="font-hand text-gray-500 text-sm">Gratis</p>
              </div>
              <div className="sketch-border-light bg-white p-4 text-center flex-1 flex flex-col items-center" style={{ transform: 'rotate(-0.5deg)' }}>
                <WheelchairIcon className="w-7 h-7 text-[#C41E1E] mb-1" />
                <p className="font-hand text-gray-500 text-sm">Accessibile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white relative overflow-hidden">
      {/* Doodle top edge */}
      <div className="doodle-divider opacity-20" />

      <div className="px-5 md:px-10 lg:px-14 py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-14">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Matti per la Pizza" className="w-14" />
              <span className="font-round font-bold text-xl">Matti per la Pizza</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Pizzeria d'asporto a Pisogne, sul Lago d'Iseo. Farine non raffinate, ingredienti italiani, passione artigianale.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/matti_per_la_pizza/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sketch-border flex items-center justify-center text-white/60 hover:text-white transition-colors" aria-label="Instagram" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/mattiperlapizza" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sketch-border flex items-center justify-center text-white/60 hover:text-white transition-colors" aria-label="Facebook" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-hand text-[#C41E1E] text-lg mb-4">Contatti</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li><a href="tel:+393476737328" className="hover:text-white transition-colors flex items-center gap-2"><PhoneIcon className="w-3.5 h-3.5 shrink-0" />347 673 7328</a></li>
                <li><a href="https://wa.me/393476737328" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />WhatsApp</a></li>
                <li className="flex items-start gap-2"><MapPinIcon className="w-3.5 h-3.5 shrink-0 mt-0.5" /><span>Via San Marco 16/c<br />Pisogne (BS)</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-hand text-[#C41E1E] text-lg mb-4">Naviga</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li><a href="#chi-siamo" className="hover:text-white transition-colors">Chi Siamo</a></li>
                <li><a href="https://www.leggimenu.it/menu/mattiperlapizza/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#contatti" className="hover:text-white transition-colors">Ordina</a></li>
                <li><a href="#dove-siamo" className="hover:text-white transition-colors">Dove Siamo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-hand text-[#C41E1E] text-lg mb-4">Orari</h4>
              <ul className="space-y-1.5 text-white/50 text-sm">
                <li className="flex justify-between gap-4"><span>Lun</span><span className="text-[#C41E1E] font-hand">Chiuso</span></li>
                <li className="flex justify-between gap-4"><span>Mar – Gio</span><span>18 – 22</span></li>
                <li className="flex justify-between gap-4"><span>Ven – Sab</span><span>18 – 22:30</span></li>
                <li className="flex justify-between gap-4"><span>Dom</span><span>18 – 22</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Matti per la Pizza — Pisogne (BS)</p>
          <div className="flex gap-5 text-white/30 text-xs">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ════════════════════════════════════════
   FLOATING CTA
   ════════════════════════════════════════ */

function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          <a
            href="https://wa.me/393476737328?text=Ciao!%20Vorrei%20ordinare%20una%20pizza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-600 text-white shadow-lg shadow-green-600/30 hover:scale-110 transition-transform sketch-border"
            aria-label="WhatsApp"
            style={{ borderColor: 'transparent' }}
          >
            <WhatsAppIcon className="w-6 h-6" />
          </a>
          <a
            href="tel:+393476737328"
            className="flex items-center justify-center w-14 h-14 bg-[#C41E1E] text-white shadow-lg shadow-[#C41E1E]/30 hover:scale-110 transition-transform sketch-border"
            aria-label="Chiama"
            style={{ borderColor: 'transparent' }}
          >
            <PhoneIcon className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ════════════════════════════════════════
   APP
   ════════════════════════════════════════ */

function App() {
  useLenis()

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
