import { ArrowRight, Briefcase, ClipboardList, BarChart3 } from 'lucide-react'
import { translations, type Locale } from '../../i18n'

interface HeroProps {
  lang: Locale
  darkMode: boolean
}

export default function Hero({ lang, darkMode }: HeroProps) {
  const h = translations[lang].hero
  const isRTL = lang === 'ar'

  const icons = [
    Briefcase,
    ClipboardList,
    BarChart3,
    Briefcase,
    ClipboardList,
  ]

  return (
    <section
      id="hero"
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`
        pt-[110px] pb-[50px] relative overflow-hidden transition-colors duration-500
        ${
          darkMode
            ? 'bg-slate-950 text-slate-100'
            : 'bg-[linear-gradient(135deg,#F0F6FF_0%,#E2EFFF_50%,#F8FAFC_100%)] text-slate-900'
        }
      `}
    >
      {/* ── GRILLE TECH AVEC EFFET PULSATION ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Lignes de grille tech */}
        <div
          className={`
            absolute inset-0 transition-opacity duration-500
            ${darkMode ? 'opacity-[0.03] bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)]' : 'opacity-[0.07] bg-[linear-gradient(to_right,#005DFF_1px,transparent_1px),linear-gradient(to_bottom,#005DFF_1px,transparent_1px)]'}
            [background-size:32px_32px]
          `}
        />
        
        {/* Effet de lueur radiale au centre */}
        <div
          className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl
            ${darkMode ? 'bg-gradient-to-r from-sky-500/10 to-blue-600/10' : 'bg-gradient-to-r from-blue-500/10 to-indigo-500/10'}
          `}
        />
      </div>

      <div className="max-w-[1650px] mx-auto px-5 relative z-10">

        {/* HERO MAIN BOX */}
        <div
          className={`
            relative
            rounded-[22px]
            overflow-hidden
            min-h-[480px]
            mb-12
            flex
            items-center
            px-10
            md:px-16
            py-16
            shadow-2xl
            transition-colors
            duration-500
            ${
              darkMode
                ? 'bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-slate-800 shadow-blue-950/40'
                : 'bg-gradient-to-r from-[#003899] via-[#005DFF] to-[#2563EB] shadow-blue-500/20'
            }
          `}
        >
          {/* Subtle overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* HERO CONTENT */}
          <div className="relative z-10 max-w-4xl">
            <h1
              className="
                text-white
                font-normal
                text-[40px]
                md:text-[50px]
                leading-[1.18]
                tracking-tight
                mb-6
              "
            >
              <span className="block font-medium mb-1">
                {`${h.title1}`}
              </span>
              <span className="block text-blue-100 font-light">
                {`${h.title2} ${h.title3}`}
              </span>
            </h1>

            <a
              href="#contact"
              className={`
                inline-flex
                items-center
                gap-3
                h-[54px]
                px-8
                rounded-[12px]
                font-medium
                transition-all
                duration-300
                shadow-lg
                hover:shadow-xl
                hover:translate-y-[-2px]
                ${
                  darkMode
                    ? 'bg-sky-500 text-slate-950 hover:bg-sky-400'
                    : 'bg-white text-[#005DFF] hover:bg-blue-50'
                }
              `}
            >
              <span>{h.primaryButton}</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

 
      </div>
    </section>
  )
}