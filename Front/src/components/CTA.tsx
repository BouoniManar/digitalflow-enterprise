// FILE: src/components/CTA.tsx
'use client'

import { translations, type Locale } from '../i18n'

interface CTAProps {
  lang: Locale
  darkMode?: boolean
}

export default function CTA({ lang, darkMode = false }: CTAProps) {
  const t = translations[lang]?.cta || translations['fr'].cta
  const isRTL = lang === 'ar'

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: darkMode
          ? 'linear-gradient(to bottom, #020617, #090d16, #020617)'
          : 'linear-gradient(135deg, #BFE0FF 0%, #EAF4FF 50%, #FFFFFF 100%)',
        padding: '100px 24px 80px 24px',
        transition: 'background 0.5s ease',
      }}
    >
      {/* ── Top border ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '8%',
          right: '8%',
          height: 1,
          background: darkMode
            ? 'linear-gradient(to right, transparent, rgba(56,189,248,.25), transparent)'
            : 'linear-gradient(to right, transparent, rgba(0,119,255,.30), transparent)',
        }}
      />

      {/* ── Background blobs ── */}
      <div
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          left: '50%',
          top: -60,
          transform: 'translateX(-50%)',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: darkMode
            ? 'radial-gradient(circle, rgba(56,189,248,.05) 0%, transparent 65%)'
            : 'radial-gradient(circle, rgba(0,119,255,.08) 0%, transparent 65%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          bottom: -100,
          right: -80,
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: darkMode
            ? 'radial-gradient(circle, rgba(56,189,248,.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99,179,255,.10) 0%, transparent 70%)',
        }}
      />

      {/* ══ CARD ══ */}
      <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 32,
            border: darkMode
              ? '1px solid rgba(56,189,248,.15)'
              : '1px solid rgba(0,119,255,.18)',
            background: darkMode
              ? '#0f172a'
              : 'linear-gradient(135deg, #E6F2FF 0%, #F3F8FF 50%, #FFFFFF 100%)',
            padding: '72px 56px',
            boxShadow: darkMode
              ? '0 2px 16px rgba(0,0,0,.3)'
              : '0 10px 70px rgba(0,119,255,.12)',
            textAlign: 'center',
            transition: 'background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease',
          }}
        >
          {/* Top line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background: darkMode
                ? 'linear-gradient(to right, transparent, rgba(56,189,248,.3), transparent)'
                : 'linear-gradient(to right, transparent, rgba(0,119,255,.35), transparent)',
            }}
          />

          {/* Center glow */}
          <div
            style={{
              position: 'absolute',
              pointerEvents: 'none',
              left: '50%',
              top: 0,
              transform: 'translateX(-50%)',
              width: 320,
              height: 320,
              borderRadius: '50%',
              background: darkMode
                ? 'radial-gradient(circle, rgba(56,189,248,.08) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(0,119,255,.07) 0%, transparent 70%)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 10 }}>
            {/* ── BADGE ── */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 20px',
                borderRadius: 999,
                border: darkMode
                  ? '1px solid rgba(56,189,248,.3)'
                  : '1px solid rgba(0,119,255,.25)',
                background: darkMode
                  ? 'rgba(56,189,248,.1)'
                  : 'rgba(0,119,255,.08)',
                marginBottom: 32,
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: darkMode
                    ? 'radial-gradient(circle, rgba(56,189,248,.9) 0%, rgba(56,189,248,.2) 70%)'
                    : 'radial-gradient(circle, rgba(0,119,255,.9) 0%, rgba(0,119,255,.2) 70%)',
                  boxShadow: darkMode
                    ? '0 0 10px rgba(56,189,248,.5)'
                    : '0 0 10px rgba(0,119,255,.5)',
                }}
              />
              <span
                style={{
                  color: darkMode ? '#38bdf8' : '#1D4ED8',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                {t.badge}
              </span>
            </div>

            {/* ── TITLE ── */}
            <h2
              style={{
                fontFamily: 'Inter, SF Pro Display, sans-serif',
                fontSize: 'clamp(1.8rem, 3.8vw, 2.9rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: darkMode ? '#F8FAFC' : '#0F172A',
                maxWidth: 680,
                margin: '0 auto 20px',
              }}
            >
              {t.title}
            </h2>

            {/* ── SUBTITLE ── */}
            <p
              style={{
                maxWidth: 580,
                margin: '0 auto 44px',
                fontSize: '1rem',
                lineHeight: 1.9,
                color: darkMode ? '#94A3B8' : '#64748B',
              }}
            >
              {t.subtitle}
            </p>

            {/* ── BUTTONS ── */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 14,
                justifyContent: 'center',
              }}
            >
              {/* Primary */}
              <a
                href="#contact"
                style={{
                  minWidth: 200,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 14,
                  background: darkMode
                    ? '#38bdf8'
                    : 'linear-gradient(135deg, #0077FF 0%, #3B82F6 100%)',
                  padding: '15px 36px',
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
                {t.primaryButton}
              </a>

              {/* Secondary */}
              <a
                href="https://wa.me/21693193402"
                target="_blank"
                rel="noreferrer"
                style={{
                  minWidth: 200,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 14,
                  border: darkMode
                    ? '1px solid rgba(56,189,248,.3)'
                    : '1px solid rgba(0,119,255,.25)',
                  background: darkMode ? 'rgba(56,189,248,.08)' : 'rgba(255,255,255,.4)',
                  backdropFilter: 'blur(8px)',
                  padding: '15px 36px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: darkMode ? '#38bdf8' : '#475569',
                  textDecoration: 'none',
                  transition: 'all .25s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-2px)'
                  el.style.borderColor = darkMode ? 'rgba(56,189,248,.5)' : 'rgba(0,119,255,.4)'
                  el.style.background = darkMode ? 'rgba(56,189,248,.15)' : 'rgba(0,119,255,.08)'
                  el.style.color = darkMode ? '#38bdf8' : '#1D4ED8'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.borderColor = darkMode ? 'rgba(56,189,248,.3)' : 'rgba(0,119,255,.25)'
                  el.style.background = darkMode ? 'rgba(56,189,248,.08)' : 'rgba(255,255,255,.4)'
                  el.style.color = darkMode ? '#38bdf8' : '#475569'
                }}
              >
                {t.secondaryButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}