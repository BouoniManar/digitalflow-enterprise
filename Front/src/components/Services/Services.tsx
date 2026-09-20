// FILE: src/components/Services/Services.tsx

import { useEffect, useRef, useState } from 'react'
import {
  Workflow,
  BarChart3,
  Cpu,
  GaugeCircle,
  Bot,
  Database,
  Globe2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { translations, type Locale } from '../../i18n'

interface ServicesProps {
  lang: Locale
  darkMode: boolean
}

function useInView(threshold = 0.12) {
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
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function Services({ lang, darkMode }: ServicesProps) {
  const isRTL = lang === 'ar'
  const { ref, inView } = useInView()
  const t = translations[lang].services

  const icons = [Workflow, BarChart3, Cpu, GaugeCircle, Bot, Database, Globe2]

  return (
    <section
      id="services"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        position: 'relative',
        padding: '110px 0',
        background: darkMode
          ? 'linear-gradient(to bottom, #020617, #090d16, #020617)'
          : 'linear-gradient(to bottom, #BFE0FF, #EAF4FF, #FFFFFF)',
        overflow: 'hidden',
        transition: 'background 0.5s ease',
      }}
    >
      {/* ── Background blobs ── */}
      <div style={{
        position: 'absolute', top: -200, right: -200,
        width: 500, height: 500, borderRadius: '50%',
        background: darkMode
          ? 'radial-gradient(circle, rgba(0,102,255,.12) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(0,102,255,.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -160, left: -140,
        width: 400, height: 400, borderRadius: '50%',
        background: darkMode
          ? 'radial-gradient(circle, rgba(59,130,246,.10) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(59,130,246,.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── Top border ── */}
      <div style={{
        position: 'absolute', top: 0, left: '8%', right: '8%', height: 1,
        background: darkMode
          ? 'linear-gradient(to right, transparent, rgba(56,189,248,.25), transparent)'
          : 'linear-gradient(to right, transparent, rgba(0,102,255,.22), transparent)',
      }} />

      <div
        ref={ref}
        style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 2 }}
      >

        {/* ══ HEADER ══ */}
        <div style={{
          maxWidth: 700,
          margin: '0 auto 72px',
          textAlign: 'center',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity .6s ease, transform .6s ease',
        }}>

          {/* Label pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 18px', borderRadius: 999,
            border: darkMode ? '1px solid rgba(56,189,248,.3)' : '1px solid rgba(0,102,255,.22)',
            background: darkMode ? 'rgba(56,189,248,.1)' : 'rgba(0,102,255,.07)',
            marginBottom: 24,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: darkMode ? '#38bdf8' : '#0066FF',
              boxShadow: darkMode ? '0 0 8px rgba(56,189,248,.8)' : '0 0 8px rgba(0,102,255,.8)',
            }} />
            <span style={{ color: darkMode ? '#38bdf8' : '#0055CC', fontSize: 12, fontWeight: 600, letterSpacing: '.08em' }}>
              {t.label}
            </span>
          </div>

          {/* Title */}
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(2rem, 3vw, 2.5rem)',
            fontWeight: 600,
            lineHeight: 1.3,
            letterSpacing: 'normal',
            color: darkMode ? '#F8FAFC' : '#0F172A',
            marginBottom: 18,
          }}>
            {t.title}
          </h2>

          {/* Subtitle */}
          <p style={{
            color: darkMode ? '#94A3B8' : '#64748B',
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.05rem',
            fontWeight: 400,
            lineHeight: 1.75,
            letterSpacing: 'normal',
          }}>
            {t.subtitle}
          </p>
        </div>

        {/* ══ SERVICES GRID ══ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: 22,
          marginBottom: 80,
        }}>
          {t.list.map((service, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                style={{
                  position: 'relative',
                  padding: '32px 28px',
                  borderRadius: 20,
                  background: darkMode ? '#0f172a' : '#ffffff',
                  border: darkMode ? '1px solid rgba(56,189,248,.15)' : '1px solid rgba(0,102,255,.09)',
                  boxShadow: darkMode ? '0 2px 16px rgba(0,0,0,.3)' : '0 2px 16px rgba(0,0,0,.04)',
                  overflow: 'hidden',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(22px)',
                  transition: `opacity .5s ease ${index * 80}ms, transform .5s ease ${index * 80}ms, box-shadow .25s ease, border-color .25s ease, background .5s ease`,
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-6px)'
                  el.style.borderColor = darkMode ? 'rgba(56,189,248,.4)' : 'rgba(0,102,255,.28)'
                  el.style.boxShadow = darkMode ? '0 16px 48px rgba(56,189,248,.15)' : '0 16px 48px rgba(0,102,255,.10)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.borderColor = darkMode ? 'rgba(56,189,248,.15)' : 'rgba(0,102,255,.09)'
                  el.style.boxShadow = darkMode ? '0 2px 16px rgba(0,0,0,.3)' : '0 2px 16px rgba(0,0,0,.04)'
                }}
              >
                {/* Corner glow */}
                <div style={{
                  position: 'absolute', top: -40, right: -40,
                  width: 110, height: 110, borderRadius: '50%',
                  background: darkMode
                    ? 'radial-gradient(circle, rgba(56,189,248,.1) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(0,102,255,.06) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                {/* Icon box */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                  background: darkMode
                    ? 'linear-gradient(135deg, rgba(56,189,248,.15), rgba(59,130,246,.08))'
                    : 'linear-gradient(135deg, rgba(0,102,255,.10), rgba(59,130,246,.05))',
                  border: darkMode ? '1px solid rgba(56,189,248,.25)' : '1px solid rgba(0,102,255,.16)',
                }}>
                  <Icon size={24} color={darkMode ? '#38bdf8' : '#0066FF'} />
                </div>

                {/* Title */}
                <h3 style={{
                  color: darkMode ? '#F8FAFC' : '#0F172A',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  lineHeight: 1.5,
                  letterSpacing: 'normal',
                  marginBottom: 10,
                }}>
                  {service.title}
                </h3>

                {/* Desc */}
                <p style={{
                  color: darkMode ? '#94A3B8' : '#64748B',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.98rem',
                  fontWeight: 400,
                  lineHeight: 1.75,
                  letterSpacing: 'normal',
                }}>
                  {service.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* ══ SUPPORT BLOCK ══ */}
        <div style={{
          position: 'relative',
          borderRadius: 28,
          padding: '52px 48px',
          overflow: 'hidden',
          background: darkMode
            ? 'linear-gradient(135deg, #0b1329 0%, #090d16 50%, #020617 100%)'
            : 'linear-gradient(135deg, #EEF4FF 0%, #F0F7FF 50%, #ffffff 100%)',
          border: darkMode ? '1px solid rgba(56,189,248,.2)' : '1px solid rgba(0,102,255,.14)',
          boxShadow: darkMode ? '0 4px 40px rgba(0,0,0,.4)' : '0 4px 40px rgba(0,102,255,.07)',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity .7s ease 320ms, transform .7s ease 320ms, background .5s ease, border-color .5s ease',
        }}>

          {/* Blob inside */}
          <div style={{
            position: 'absolute', top: -60, right: -60,
            width: 260, height: 260, borderRadius: '50%',
            background: darkMode
              ? 'radial-gradient(circle, rgba(56,189,248,.12) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(0,102,255,.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 48,
            alignItems: 'center',
            position: 'relative', zIndex: 1,
          }}>

            {/* Left — text + CTA */}
            <div>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1.7rem, 2.2vw, 2rem)',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  letterSpacing: 'normal',
                  color: darkMode ? '#F8FAFC' : '#1E293B',
                  marginBottom: 18,
                }}
              >
                {t.supportTitle}
              </h3>
              <p style={{
                color: darkMode ? '#94A3B8' : '#475569',
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.8,
                letterSpacing: 'normal',
                marginBottom: 28,
              }}>
                {t.supportText}
              </p>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '13px 26px', borderRadius: 12,
                  textDecoration: 'none',
                  background: darkMode ? '#38bdf8' : '#0066FF', 
                  color: darkMode ? '#020617' : '#fff',
                  fontWeight: 600, fontSize: '.92rem',
                  boxShadow: darkMode ? '0 4px 22px rgba(56,189,248,.3)' : '0 4px 22px rgba(0,102,255,.28)',
                  transition: 'all .25s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = darkMode ? '#7dd3fc' : '#0052CC'
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = darkMode ? '0 8px 32px rgba(56,189,248,.45)' : '0 8px 32px rgba(0,102,255,.40)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = darkMode ? '#38bdf8' : '#0066FF'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = darkMode ? '0 4px 22px rgba(56,189,248,.3)' : '0 4px 22px rgba(0,102,255,.28)'
                }}
              >
                {t.cta}
                <ArrowRight size={16} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
              </a>
            </div>

            {/* Right — support items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {t.supportItems.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '16px 20px', borderRadius: 14,
                  background: darkMode ? '#0f172a' : '#ffffff',
                  border: darkMode ? '1px solid rgba(56,189,248,.15)' : '1px solid rgba(0,102,255,.10)',
                  boxShadow: darkMode ? '0 2px 10px rgba(0,0,0,.2)' : '0 2px 10px rgba(0,0,0,.04)',
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: darkMode ? 'rgba(56,189,248,.15)' : 'rgba(0,102,255,.08)',
                    border: darkMode ? '1px solid rgba(56,189,248,.25)' : '1px solid rgba(0,102,255,.14)',
                  }}>
                    <CheckCircle2 size={18} color={darkMode ? '#38bdf8' : '#0066FF'} />
                  </div>
                  <span style={{ color: darkMode ? '#F8FAFC' : '#1E293B', fontWeight: 500, fontSize: '.95rem' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}