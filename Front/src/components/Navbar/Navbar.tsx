import { useState, useEffect, useRef } from 'react'
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  Sun,
  Moon,
} from 'lucide-react'

import { translations, type Locale } from '../../i18n'
import logo from '../../assets/images/logo.png'

interface NavbarProps {
  lang: Locale
  setLang: (l: Locale) => void
  darkMode: boolean
  setDarkMode: (
    v: boolean | ((prev: boolean) => boolean)
  ) => void
}

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
] as const

export default function Navbar({
  lang,
  setLang,
  darkMode,
  setDarkMode,
}: NavbarProps) {
  const t = translations[lang].nav
  const isRTL = lang === 'ar'

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const closeLang = (e: MouseEvent) => {
      if (
        langRef.current &&
        !langRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false)
      }
    }

    window.addEventListener('scroll', onScroll)
    document.addEventListener('mousedown', closeLang)

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mousedown', closeLang)
    }
  }, [])

  const navLinks = [
    {
      href: '#about',
      label: t.about,
    },
    {
      href: '#services',
      label: t.services,
    },
    {
      href: '#why-DigitalFlow',
      label: t.why,
    },
    {
      href: '#contact',
      label: t.contact,
    },
  ]

  const currentLang = LANGUAGES.find(
    (l) => l.code === lang
  )!

  return (
    <>
      {/* Style local pour l'animation d'apparition du logo */}
      <style>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-logo-fade {
          animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <header
        dir={isRTL ? 'rtl' : 'ltr'}
        className={`
          fixed
          top-0
          left-0
          right-0
          z-[999]
          transition-all
          duration-500

          ${
            scrolled
              ? darkMode
                ? `
                    bg-slate-900/90
                    backdrop-blur-3xl
                    border-b
                    border-slate-800
                    shadow-[0_15px_50px_rgba(0,0,0,.3)]
                  `
                : `
                    bg-[#f1f5f9]/90
                    backdrop-blur-3xl
                    border-b
                    border-slate-200
                    shadow-[0_15px_50px_rgba(0,0,0,.08)]
                  `
              : darkMode 
                ? 'bg-slate-900/50 backdrop-blur-md' // Fond sombre léger quand on n'a pas encore scrollé en mode sombre
                : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div
            className="
              h-[88px]
              lg:h-[100px]
              flex
              items-center
              justify-between
            "
          >
            {/* LOGO */}
            <a
              href="#hero"
              className="
                shrink-0
                group
                transition
                duration-300
                hover:scale-105
              "
            >
              <img
                src={logo}
                alt="DigitalFlow"
                className="
                  h-[70px]
                  lg:h-[88px]
                  w-auto
                  object-contain
                  animate-logo-fade
                  transition-all
                  duration-300
                  hover:drop-shadow-md
                "
              />
            </a>

            {/* DESKTOP NAVIGATION */}
            <nav
              className="
                hidden
                lg:flex
                items-center
                gap-10
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`
                    relative
                    text-[16px]
                    font-medium
                    transition
                    ${scrolled ? (darkMode ? 'text-slate-200 hover:text-sky-400' : 'text-slate-800 hover:text-sky-600') : (darkMode ? 'text-slate-200 hover:text-sky-400' : 'text-white hover:text-sky-300')}

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-sky-500
                    hover:after:w-full
                    after:duration-300
                  `}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* ACTIONS */}
            <div
              className="
                hidden
                lg:flex
                items-center
                gap-3
              "
            >
              {/* THEME TOGGLE */}
              <button
                onClick={() => setDarkMode((v) => !v)}
                className={`
                  w-12
                  h-12
                  rounded-2xl
                  border
                  flex
                  items-center
                  justify-center
                  transition
                  ${
                    darkMode
                      ? 'bg-slate-800/80 border-slate-700 text-yellow-400 hover:border-sky-500 hover:bg-slate-800'
                      : 'bg-slate-200/60 border-slate-300/60 text-slate-700 hover:border-sky-500 hover:bg-slate-200'
                  }
                `}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* LANGUAGE DROPDOWN */}
              <div
                ref={langRef}
                className="relative"
              >
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className={`
                    h-[52px]
                    px-5
                    rounded-[18px]
                    flex
                    items-center
                    gap-3
                    border
                    transition-all
                    duration-300
                    ${
                      darkMode
                        ? 'bg-slate-800/80 border-slate-700 text-slate-200 hover:border-sky-500 hover:bg-slate-800'
                        : 'bg-slate-200/60 border-slate-300/60 text-slate-700 hover:border-sky-500 hover:bg-slate-200'
                    }
                  `}
                >
                  <Globe
                    size={17}
                    className={darkMode ? 'text-sky-400' : 'text-sky-600'}
                  />

                  <span className="text-[18px]">
                    {currentLang.flag}
                  </span>

                  <span
                    className="
                      text-[14px]
                      font-medium
                      uppercase
                      tracking-[0.08em]
                    "
                  >
                    {lang}
                  </span>

                  <ChevronDown
                    size={16}
                    className={`
                      transition
                      duration-300
                      ${langOpen ? 'rotate-180' : ''}
                    `}
                  />
                </button>

                <div
                  className={`
                    absolute
                    right-0
                    top-[68px]
                    w-[240px]
                    rounded-[24px]
                    border
                    backdrop-blur-xl
                    p-2
                    transition-all
                    duration-300

                    ${
                      darkMode
                        ? 'bg-slate-900 border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,.4)]'
                        : 'bg-white border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,.12)]'
                    }

                    ${
                      langOpen
                        ? `
                            opacity-100
                            translate-y-0
                            scale-100
                            pointer-events-auto
                          `
                        : `
                            opacity-0
                            translate-y-2
                            scale-[0.98]
                            pointer-events-none
                          `
                    }
                  `}
                >
                  <div className="space-y-1">
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code)
                          setLangOpen(false)
                        }}
                        className={`
                          w-full
                          px-4
                          py-[15px]
                          rounded-[16px]
                          flex
                          items-center
                          gap-4
                          transition-all
                          duration-300

                          ${
                            lang === l.code
                              ? darkMode
                                ? 'bg-sky-500/20 border border-sky-500/40 text-white'
                                : 'bg-sky-500/10 border border-sky-400/30 text-slate-900'
                              : darkMode
                              ? 'hover:bg-slate-800 text-slate-300'
                              : 'hover:bg-slate-100 text-slate-800'
                          }
                        `}
                      >
                        <span className="text-[22px]">
                          {l.flag}
                        </span>

                        <div className="flex flex-col items-start">
                          <span
                            className={`
                              text-[15px]
                              font-medium
                              ${darkMode ? 'text-white' : 'text-slate-800'}
                            `}
                          >
                            {l.label}
                          </span>

                          <span
                            className="
                              text-[11px]
                              uppercase
                              text-slate-400
                            "
                          >
                            {l.code}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA BUTTON */}
              <a
                href="#contact"
                className="
                  h-[52px]
                  px-8
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#2563eb]
                  to-[#06b6d4]
                  text-white
                  font-semibold
                  hover:scale-[1.03]
                  hover:shadow-lg
                  transition
                "
              >
                {t.cta}
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className={`
                lg:hidden
                p-2
                rounded-xl
                transition
                ${darkMode ? 'text-white hover:bg-slate-800' : 'text-slate-800 hover:bg-slate-100'}
              `}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-500
            ${
              mobileOpen
                ? 'max-h-[500px]'
                : 'max-h-0'
            }
          `}
        >
          <div
            className={`
              px-6
              pb-8
              border-t
              backdrop-blur-xl
              ${
                darkMode
                  ? 'bg-slate-900/95 border-slate-800'
                  : 'bg-white/95 border-slate-200'
              }
            `}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  block
                  py-5
                  border-b
                  transition
                  ${
                    darkMode
                      ? 'text-slate-200 border-slate-800 hover:text-sky-400'
                      : 'text-slate-800 border-slate-100 hover:text-sky-600'
                  }
                `}
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-700/30">
              {/* Mobile theme toggle */}
              <button
                onClick={() => setDarkMode((v) => !v)}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-xl border text-sm
                  ${darkMode ? 'bg-slate-800 border-slate-700 text-yellow-400' : 'bg-slate-100 border-slate-200 text-slate-700'}
                `}
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="
                mt-4
                h-[54px]
                rounded-2xl
                flex
                items-center
                justify-center
                bg-gradient-to-r
                from-[#2563eb]
                to-[#06b6d4]
                text-white
                font-semibold
              "
            >
              {t.cta}
            </a>
          </div>
        </div>
      </header>
    </>
  )
}