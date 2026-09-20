// FILE: src/components/Footer.tsx
'use client'

import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';
import { translations } from '../../data/translations';
import type { Locale } from '../../i18n';


interface FooterProps {
  className?: string;
  lang?: Locale;
  darkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ className = '', lang = 'fr', darkMode = false }) => {
  const t = translations[lang]?.footer || translations['fr'].footer || {
    description: "International Consulting & Remote Support. Accompagnement stratégique et solutions technologiques sur mesure pour propulser votre entreprise.",
    servicesTitle: "Services",
    navigationTitle: "Navigation",
    contactTitle: "Contact Us",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  };

  const isRTL = lang === 'ar';

  return (
    <footer
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`custom-footer ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: darkMode
          ? 'linear-gradient(to bottom, #020617, #090d16)'
          : 'linear-gradient(180deg, #F8FAFC 0%, #EEF4F8 100%)',
        borderTop: darkMode
          ? '1px solid rgba(56,189,248,0.15)'
          : '1px solid rgba(0,119,255,0.12)',
        color: darkMode ? '#94A3B8' : '#475569',
        padding: '80px 24px 30px 24px',
        transition: 'background 0.5s ease, border-color 0.5s ease, color 0.5s ease',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }} className="footer-container">
        
        {/* Grille principale */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
          className="footer-grid"
        >
          {/* Colonne 1 : Logo & Présentation */}
          <div className="footer-col-logo">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }} className="footer-logo-wrapper">
              <img src={logo} alt="DigitalFlow Logo" style={{ height: 38, width: 'auto' }} className="footer-logo-img" />
            </div>
            <p
              style={{
                fontSize: '0.92rem',
                lineHeight: 1.8,
                color: darkMode ? '#94A3B8' : '#64748B',
              }}
              className="footer-description"
            >
              {t.description || "International Consulting & Remote Support. Accompagnement stratégique et solutions technologiques sur mesure pour propulser votre entreprise."}
            </p>
          </div>

          {/* Colonne 2 : Nos Services */}
          <div>
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: darkMode ? '#F8FAFC' : '#0F172A',
                marginBottom: '20px',
              }}
              className="footer-title"
            >
              {t.servicesTitle || "Services"}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }} className="footer-links">
              {[
                { name: "Process & Workflow Consulting", href: "#services" },
                { name: "Business Analysis", href: "#services" },
                { name: "Digital Transformation", href: "#services" },
                { name: "Process Optimization", href: "#services" },
                { name: "Automation Solutions", href: "#services" },
                { name: "ERP / CRM Systems", href: "#services" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      color: darkMode ? '#94A3B8' : '#64748B',
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = darkMode ? '#38bdf8' : '#0077FF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = darkMode ? '#94A3B8' : '#64748B')}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Navigation & Liens rapides */}
          <div>
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: darkMode ? '#F8FAFC' : '#0F172A',
                marginBottom: '20px',
              }}
              className="footer-title"
            >
              {t.navigationTitle || "Navigation"}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }} className="footer-links">
              {[
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Why DigitalFlow", href: "#why-operyx" },
                { name: "Contact", href: "#contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      color: darkMode ? '#94A3B8' : '#64748B',
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = darkMode ? '#38bdf8' : '#0077FF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = darkMode ? '#94A3B8' : '#64748B')}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Contact & Support */}
          <div>
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: darkMode ? '#F8FAFC' : '#0F172A',
                marginBottom: '20px',
              }}
              className="footer-title"
            >
              {t.contactTitle || "Contact Us"}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }} className="footer-links">
              <li>
                <a href="mailto:contact@digitalflow.com" style={{ color: darkMode ? '#94A3B8' : '#64748B', textDecoration: 'none', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '8px' }} className="footer-contact-item">
                  <span>✉️ contact@digitalflow.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+21693193402" style={{ color: darkMode ? '#94A3B8' : '#64748B', textDecoration: 'none', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '8px' }} className="footer-contact-item">
                  <span>📞 +216 93 193 402</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/21693193402"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    background: darkMode ? 'rgba(56,189,248,0.1)' : 'rgba(0,119,255,0.08)',
                    color: darkMode ? '#38bdf8' : '#0077FF',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    transition: 'all 0.2s ease',
                  }}
                  className="footer-whatsapp"
                >
                  <span>💬 WhatsApp Business</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Ligne de séparation & Bas de page */}
        <div
          style={{
            paddingTop: '30px',
            borderTop: darkMode
              ? '1px solid rgba(56,189,248,0.1)'
              : '1px solid rgba(0,119,255,0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.88rem',
          }}
          className="footer-bottom"
        >
          <p style={{ margin: 0 }}>© 2026 DigitalFlow. All rights reserved.</p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="footer-legal-links">
            <a href="#privacy" style={{ color: darkMode ? '#94A3B8' : '#64748B', textDecoration: 'none' }} className="footer-legal-link">{t.privacy || "Privacy Policy"}</a>
            <span style={{ color: darkMode ? '#475569' : '#CBD5E1' }} className="footer-dot">·</span>
            <a href="#terms" style={{ color: darkMode ? '#94A3B8' : '#64748B', textDecoration: 'none' }} className="footer-legal-link">{t.terms || "Terms & Conditions"}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;