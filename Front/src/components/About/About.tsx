// FILE: src/components/About.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

import aboutImage from '../../assets/images/hero.png'
import type { Locale } from '../../i18n/types'
import { translations } from '../../data/translations'

interface AboutProps {
  lang: Locale
  darkMode?: boolean
}

// Hook personnalisé pour détecter si l'élément est dans le viewport
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [threshold])

  return { ref, inView }
}

export default function About({ lang, darkMode = false }: AboutProps) {
  const t = translations[lang]?.about || translations['fr'].about
  const isRTL = lang === 'ar'
  const { ref, inView } = useInView()

  // Remplacement dynamique de l'ancien nom par DigitalFlow si présent dans la traduction
  const descriptionText = t.description ? t.description.replace(/Operyx/gi, 'DigitalFlow') : ''

  return (
    <section
      id="about"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: darkMode
          ? 'linear-gradient(to bottom, #020617, #090d16, #020617)'
          : 'linear-gradient(135deg, #FFFFFF 0%, #F4F8FB 50%, #EAF4FF 100%)',
        padding: '120px 24px 140px 24px',
        transition: 'background 0.5s ease',
      }}
    >
      {/* ── Arrière-plan décoratif (blobs & lueurs) ── */}
      <div
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          inset: 0,
          opacity: 0.6,
          background: darkMode
            ? 'radial-gradient(circle at 10% 20%, rgba(56,189,248,.06) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(0,119,255,.05) 0%, transparent 40%)'
            : 'radial-gradient(circle at 10% 20%, rgba(0,119,255,.05) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(56,189,248,.04) 0%, transparent 40%)',
        }}
      />

      <div ref={ref} style={{ maxWidth: 1300, margin: '0 auto', position: 'relative', zIndex: 10 }}>

        {/* ── Disposition asymétrique (Image à gauche, Texte à droite) ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >

          {/* Colonne de gauche : Image percutante */}
          <div
            style={{
              position: 'relative',
              borderRadius: 32,
              overflow: 'hidden',
              aspectRatio: '4/5',
              boxShadow: darkMode
                ? '0 20px 50px rgba(0,0,0,0.5)'
                : '0 20px 50px rgba(0,119,255,0.15)',
              border: darkMode
                ? '1px solid rgba(56,189,248,0.2)'
                : '1px solid rgba(0,119,255,0.2)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : (isRTL ? 'translateX(40px)' : 'translateX(-40px)'),
              transition: 'opacity 0.7s ease 0ms, transform 0.7s ease 0ms, box-shadow 0.3s ease, border-color 0.3s ease',
            }}
          >
            <img
              src={aboutImage}
              alt="DigitalFlow Team"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.7s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.3) 50%, transparent 100%)',
              }}
            />

            {/* Citation flottante intégrée à l'image */}
            <div
              style={{
                position: 'absolute',
                bottom: 24,
                left: 24,
                right: 24,
                padding: '24px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)',
                borderRadius: 20,
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <p
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: '#ffffff',
                  textAlign: isRTL ? 'right' : 'left',
                  margin: 0,
                }}
              >
                {`"Notre mission est de transformer votre vision numérique en une réalité performante, taillée pour l'excellence."`}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
                <div style={{ width: 32, height: 2, background: '#f43f5e' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fda4af' }}>
                  DigitalFlow Leadership
                </span>
              </div>
            </div>
          </div>

          {/* Colonne de droite : Contenu Textuel */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.7s ease 200ms, transform 0.7s ease 200ms',
            }}
          >
            {/* Label pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 18px',
                borderRadius: 999,
                border: darkMode
                  ? '1px solid rgba(56,189,248,0.3)'
                  : '1px solid rgba(0,119,255,0.25)',
                background: darkMode
                  ? 'rgba(56,189,248,0.1)'
                  : 'rgba(0,119,255,0.08)',
                marginBottom: 28,
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: darkMode ? '#38bdf8' : '#1D4ED8' }}>
                {t.label}
              </span>
            </div>

            {/* TITLE */}
            <h2
              style={{
                fontFamily: 'Inter, SF Pro Display, sans-serif',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                color: darkMode ? '#F8FAFC' : '#0F172A',
                marginBottom: 24,
              }}
            >
              <span>{t.title}</span>
            </h2>

            {/* Divider accent */}
            <div
              style={{
                width: 80,
                height: 4,
                borderRadius: 2,
                background: 'linear-gradient(to right, #0077FF, #f43f5e)',
                marginBottom: 32,
                marginLeft: isRTL ? 'auto' : 0,
                marginRight: isRTL ? 0 : 'auto',
              }}
            />

            {/* Main description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: darkMode ? '#94A3B8' : '#475569',
                  margin: 0,
                }}
              >
                {descriptionText}
              </p>

              {/* Mission et Valeurs */}
              <div
                style={{
                  paddingLeft: isRTL ? 0 : 20,
                  paddingRight: isRTL ? 20 : 0,
                  borderLeft: isRTL ? 'none' : '4px solid rgba(244, 63, 94, 0.4)',
                  borderRight: isRTL ? '4px solid rgba(244, 63, 94, 0.4)' : 'none',
                  marginTop: 8,
                }}
              >
                <p
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    lineHeight: 1.7,
                    color: darkMode ? '#cbd5e1' : '#334155',
                    margin: 0,
                  }}
                >
                  {t.mission}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#services"
              style={{
                marginTop: 40,
                minWidth: 200,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                height: 54,
                padding: '0 36px',
                borderRadius: 14,
                background: darkMode
                  ? '#38bdf8'
                  : 'linear-gradient(135deg, #0077FF 0%, #3B82F6 100%)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: darkMode ? '#020617' : '#ffffff',
                textDecoration: 'none',
                boxShadow: darkMode
                  ? '0 4px 22px rgba(56,189,248,.3)'
                  : '0 10px 35px rgba(0,119,255,.35)',
                transition: 'all .25s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = darkMode
                  ? '0 6px 28px rgba(56,189,248,.4)'
                  : '0 14px 45px rgba(0,119,255,.45)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = darkMode
                  ? '0 4px 22px rgba(56,189,248,.3)'
                  : '0 10px 35px rgba(0,119,255,.35)'
              }}
            >
              <span>{t.cta}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}