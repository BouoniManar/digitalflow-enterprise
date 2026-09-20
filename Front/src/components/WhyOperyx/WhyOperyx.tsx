// FILE: src/components/WhyOperyx/WhyOperyx.tsx

import { useEffect, useRef, useState } from 'react'
import { Target, Lightbulb, Globe } from 'lucide-react'
import { translations, type Locale } from '../../i18n'

interface WhyOperyxProps {
  lang: Locale
  darkMode: boolean
}

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function WhyOperyx({ lang, darkMode }: WhyOperyxProps) {
  const t = translations[lang].whyOperyx
  const isRTL = lang === 'ar'
  const icons = [Target, Lightbulb, Globe]
  const { ref, inView } = useInView()

  return (
    <section
      id="why-operyx"
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
      {/* ── Top border ── */}
      <div style={{
        position: 'absolute', top: 0, left: '8%', right: '8%', height: 1,
        background: darkMode
          ? 'linear-gradient(to right, transparent, rgba(56,189,248,.25), transparent)'
          : 'linear-gradient(to right, transparent, rgba(0,102,255,.22), transparent)',
      }} />

      {/* ── Background blobs ── */}
      <div style={{
        position: 'absolute', pointerEvents: 'none',
        top: -100, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: darkMode
          ? 'radial-gradient(circle, rgba(56,189,248,.1) 0%, transparent 65%)'
          : 'radial-gradient(circle, rgba(0,102,255,.06) 0%, transparent 65%)',
      }} />
      <div style={{
        position: 'absolute', pointerEvents: 'none',
        bottom: -100, right: -100,
        width: 400, height: 400, borderRadius: '50%',
        background: darkMode
          ? 'radial-gradient(circle, rgba(59,130,246,.08) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(59,130,246,.05) 0%, transparent 70%)',
      }} />

      <div
        ref={ref}
        style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 2 }}
      >

        {/* ══ HEADER ══ */}
        <div style={{
          textAlign: 'center',
          marginBottom: 72,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
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
            fontFamily: 'Inter, SF Pro Display, sans-serif',
            fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)',
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: '-0.03em',
            color: darkMode ? '#F8FAFC' : '#0F172A',
            maxWidth: 620,
            margin: '0 auto 18px',
          }}>
            {t.title}
          </h2>

          {/* Blue accent line */}
          <div style={{
            width: 56, height: 3, borderRadius: 99,
            background: darkMode
              ? 'linear-gradient(to right, #38bdf8, #60A5FA)'
              : 'linear-gradient(to right, #0066FF, #60A5FA)',
            margin: '0 auto 20px',
            boxShadow: darkMode ? '0 0 14px rgba(56,189,248,.4)' : '0 0 14px rgba(0,102,255,.4)',
          }} />

          {/* Subtitle */}
          <p style={{
            color: darkMode ? '#94A3B8' : '#64748B',
            fontSize: '1rem',
            lineHeight: 1.8,
            maxWidth: 580,
            margin: '0 auto',
          }}>
            {t.subtitle}
          </p>
        </div>

        {/* ══ ITEMS ══ */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28,
            alignItems: 'stretch',
          }}
        >
          {t.items.map((item, i) => {
            const Icon = icons[i] || Target

            return (
              <div
                key={i}
                style={{
                  position: 'relative',
                  padding: '34px 30px',
                  borderRadius: 22,
                  background: darkMode
                    ? '#0f172a'
                    : 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
                  border: darkMode ? '1px solid rgba(56,189,248,.15)' : '1px solid rgba(0,102,255,.10)',
                  boxShadow: darkMode ? '0 6px 24px rgba(0,0,0,.3)' : '0 6px 24px rgba(0,0,0,.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'left',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all .55s ease ${i * 90}ms, background .5s ease, border-color .5s ease`,
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = darkMode
                    ? '0 18px 50px rgba(56,189,248,.15)'
                    : '0 18px 50px rgba(0,102,255,.12)'
                  el.style.borderColor = darkMode ? 'rgba(56,189,248,.4)' : 'rgba(0,102,255,.25)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = darkMode ? '0 6px 24px rgba(0,0,0,.3)' : '0 6px 24px rgba(0,0,0,.04)'
                  el.style.borderColor = darkMode ? 'rgba(56,189,248,.15)' : 'rgba(0,102,255,.10)'
                }}
              >
                {/* ICON ROW */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 18,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: darkMode
                        ? 'linear-gradient(135deg, rgba(56,189,248,.15), rgba(59,130,246,.08))'
                        : 'linear-gradient(135deg, rgba(0,102,255,.12), rgba(59,130,246,.06))',
                      border: darkMode ? '1px solid rgba(56,189,248,.25)' : '1px solid rgba(0,102,255,.15)',
                    }}
                  >
                    <Icon size={22} color={darkMode ? '#38bdf8' : '#0066FF'} />
                  </div>

                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: darkMode ? 'rgba(56,189,248,.4)' : 'rgba(0,102,255,.35)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    0{i + 1}
                  </div>
                </div>

                {/* TITLE */}
                <h4
                  style={{
                    color: darkMode ? '#F8FAFC' : '#0F172A',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    marginBottom: 10,
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h4>

                {/* DESCRIPTION */}
                <p
                  style={{
                    color: darkMode ? '#94A3B8' : '#64748B',
                    fontSize: '.93rem',
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>

                {/* BOTTOM DOT */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 18,
                    right: 18,
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: darkMode ? 'rgba(56,189,248,.2)' : 'rgba(0,102,255,.18)',
                  }}
                />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}