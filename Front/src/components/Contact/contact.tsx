import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import toast, { Toaster } from 'react-hot-toast';
import type { ContactFormData } from './contact.schema';
import api from '../../services/api';
import { 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  Building2, 
  Send, 
  MessageSquare, 
  Sparkles 
} from 'lucide-react';
import './contact.css';

interface ContactProps {
  darkMode?: boolean
  lang?: string
}

const Contact: React.FC<ContactProps> = ({ darkMode = false, lang }) => {
  const { t } = useTranslation();
  const isRTL = lang === 'ar';

  const [formData, setFormData] = useState<ContactFormData & { countryCode: string }>({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    projectDetails: '',
    countryCode: '+216'
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      setFormData((prev) => ({ ...prev, phone: numericValue }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t('contact.invalidEmail', "Veuillez entrer une adresse email valide (ex: exemple@domaine.com)."));
      return false;
    }

    if (formData.phone.length < 8) {
      toast.error(t('contact.invalidPhone', "Veuillez entrer un numéro de téléphone valide (au moins 8 chiffres)."));
      return false;
    }

    return true;
  };

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      // On adapte les clés pour correspondre exactement au serializer Django
      const payload = {
        full_name: formData.fullName,
        company: formData.company,
        phone: `${formData.countryCode} ${formData.phone}`,
        email: formData.email,
        project_details: formData.projectDetails
      };

      await api.post('contact/', payload);
      
      toast.success(t('contact.successMessage', 'Votre message a été envoyé avec succès !'));
      
      setFormData({
        fullName: '',
        company: '',
        phone: '',
        email: '',
        projectDetails: '',
        countryCode: '+216'
      });
    } catch (error) {
      console.error(error);
      toast.error(t('contact.errorMessage', "Une erreur est survenue lors de l'envoi."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className={`contact-container ${darkMode ? 'dark-mode' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        background: darkMode
          ? 'linear-gradient(to bottom, #020617, #090d16, #020617)'
          : undefined,
        color: darkMode ? '#F8FAFC' : undefined,
        transition: 'background 0.5s ease, color 0.5s ease',
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      
      <div className="contact-wrapper">
        
        {/* PARTIE GAUCHE */}
        <div 
          className="contact-info-side"
          style={{
            background: darkMode ? '#0f172a' : undefined,
            borderColor: darkMode ? 'rgba(56,189,248,.15)' : undefined,
            boxShadow: darkMode ? '0 2px 16px rgba(0,0,0,.3)' : undefined,
            transition: 'background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease',
          }}
        >
          <div 
            className="badge-wrapper"
            style={{
              borderColor: darkMode ? 'rgba(56,189,248,.3)' : undefined,
              background: darkMode ? 'rgba(56,189,248,.1)' : undefined,
            }}
          >
            <Sparkles className="badge-icon" color={darkMode ? '#38bdf8' : undefined} />
            <span style={{ color: darkMode ? '#38bdf8' : undefined }}>DigitalFlow Solutions</span>
          </div>

          <div>
            <h2 style={{ color: darkMode ? '#F8FAFC' : undefined }}>DigitalFlow</h2>
            <h3 style={{ color: darkMode ? '#E2E8F0' : undefined }}>{t('contact.leftTitle', 'Accélérez votre transformation digitale')}</h3>
          </div>

          <p style={{ color: darkMode ? '#94A3B8' : undefined }}>
            {t('contact.leftDesc1', 'Nous accompagnons les entreprises dans leur transition numérique en concevant des solutions logistiques, web et sur-mesure adaptées à vos besoins stratégiques.')}
          </p>
          <p className="desc-sub" style={{ color: darkMode ? '#94A3B8' : undefined }}>
            {t('contact.leftDesc2', 'Discutons ensemble de votre projet pour propulser votre activité vers de nouveaux sommets.')}
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div 
                className="icon-box"
                style={{
                  background: darkMode ? 'rgba(56,189,248,.15)' : undefined,
                  borderColor: darkMode ? 'rgba(56,189,248,.25)' : undefined,
                }}
              >
                <Phone size={18} color={darkMode ? '#38bdf8' : undefined} />
              </div>
              <span style={{ color: darkMode ? '#E2E8F0' : undefined }}>+216 93 193 402</span>
            </div>
            <div className="contact-item">
              <div 
                className="icon-box"
                style={{
                  background: darkMode ? 'rgba(56,189,248,.15)' : undefined,
                  borderColor: darkMode ? 'rgba(56,189,248,.25)' : undefined,
                }}
              >
                <Mail size={18} color={darkMode ? '#38bdf8' : undefined} />
              </div>
              <span style={{ color: darkMode ? '#E2E8F0' : undefined }}>manarbouoni@gmail.com</span>
            </div>
            <div className="contact-item">
              <div 
                className="icon-box"
                style={{
                  background: darkMode ? 'rgba(56,189,248,.15)' : undefined,
                  borderColor: darkMode ? 'rgba(56,189,248,.25)' : undefined,
                }}
              >
                <MapPin size={18} color={darkMode ? '#38bdf8' : undefined} />
              </div>
              <span style={{ color: darkMode ? '#E2E8F0' : undefined }}>{t('contact.location', 'Tunis, Tunisie')}</span>
            </div>
          </div>
        </div>

        {/* PARTIE DROITE (Formulaire) */}
        <div 
          className="contact-form-side"
          style={{
            background: darkMode ? '#0f172a' : undefined,
            borderColor: darkMode ? 'rgba(56,189,248,.15)' : undefined,
            boxShadow: darkMode ? '0 2px 16px rgba(0,0,0,.3)' : undefined,
            transition: 'background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease',
          }}
        >
          <div className="form-header">
            <h3 style={{ color: darkMode ? '#F8FAFC' : undefined }}>
              <MessageSquare className="header-icon" size={22} color={darkMode ? '#38bdf8' : undefined} />
              {t('contact.formTitle', 'Send us a Message')}
            </h3>
            <p className="form-subtitle" style={{ color: darkMode ? '#94A3B8' : undefined }}>Remplissez ce formulaire et notre équipe vous recontactera rapidement.</p>
          </div>

          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label style={{ color: darkMode ? '#E2E8F0' : undefined }}>
                <User size={14} className="label-icon" color={darkMode ? '#38bdf8' : undefined} />
                {t('contact.fullName', 'Full name *')}
              </label>
              <input 
                type="text" 
                name="fullName" 
                placeholder={t('contact.fullNamePlaceholder', 'John Doe')} 
                value={formData.fullName} 
                onChange={handleChange} 
                style={{
                  background: darkMode ? '#020617' : undefined,
                  borderColor: darkMode ? 'rgba(56,189,248,.25)' : undefined,
                  color: darkMode ? '#F8FAFC' : undefined,
                }}
                required 
              />
            </div>

            <div className="form-group">
              <label style={{ color: darkMode ? '#E2E8F0' : undefined }}>
                <Building2 size={14} className="label-icon" color={darkMode ? '#38bdf8' : undefined} />
                {t('contact.company', 'Company *')}
              </label>
              <input 
                type="text" 
                name="company" 
                placeholder={t('contact.companyPlaceholder', 'Your company')} 
                value={formData.company} 
                onChange={handleChange} 
                style={{
                  background: darkMode ? '#020617' : undefined,
                  borderColor: darkMode ? 'rgba(56,189,248,.25)' : undefined,
                  color: darkMode ? '#F8FAFC' : undefined,
                }}
                required 
              />
            </div>

            <div className="form-group">
              <label style={{ color: darkMode ? '#E2E8F0' : undefined }}>
                <Phone size={14} className="label-icon" color={darkMode ? '#38bdf8' : undefined} />
                {t('contact.phone', 'Phone *')}
              </label>
              <div className="phone-input-group">
                <select 
                  name="countryCode" 
                  value={formData.countryCode} 
                  onChange={handleChange}
                  style={{
                    background: darkMode ? '#020617' : undefined,
                    borderColor: darkMode ? 'rgba(56,189,248,.25)' : undefined,
                    color: darkMode ? '#F8FAFC' : undefined,
                  }}
                >
                  <option value="+216">🇹🇳 +216</option>
                  <option value="+33">🇫🇷 +33</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+49">🇩🇪 +49</option>
                  <option value="+971">🇦🇪 +971</option>
                </select>
                <input 
                  type="text" 
                  name="phone" 
                  placeholder="Your phone number" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  style={{
                    background: darkMode ? '#020617' : undefined,
                    borderColor: darkMode ? 'rgba(56,189,248,.25)' : undefined,
                    color: darkMode ? '#F8FAFC' : undefined,
                  }}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label style={{ color: darkMode ? '#E2E8F0' : undefined }}>
                <Mail size={14} className="label-icon" color={darkMode ? '#38bdf8' : undefined} />
                {t('contact.email', 'Email Address *')}
              </label>
              <input 
                type="email" 
                name="email" 
                placeholder="name@gmail.com" 
                value={formData.email} 
                onChange={handleChange} 
                style={{
                  background: darkMode ? '#020617' : undefined,
                  borderColor: darkMode ? 'rgba(56,189,248,.25)' : undefined,
                  color: darkMode ? '#F8FAFC' : undefined,
                }}
                required 
              />
            </div>

            <div className="form-group">
              <label style={{ color: darkMode ? '#E2E8F0' : undefined }}>
                <MessageSquare size={14} className="label-icon" color={darkMode ? '#38bdf8' : undefined} />
                {t('contact.projectDetails', 'Project Details *')}
              </label>
              <textarea 
                name="projectDetails" 
                rows={3} 
                placeholder={t('contact.projectDetailsPlaceholder', 'Tell us about your project, needs, or objectives...')} 
                value={formData.projectDetails} 
                onChange={handleChange} 
                style={{
                  background: darkMode ? '#020617' : undefined,
                  borderColor: darkMode ? 'rgba(56,189,248,.25)' : undefined,
                  color: darkMode ? '#F8FAFC' : undefined,
                }}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn" 
              disabled={loading}
              style={{
                background: darkMode ? '#38bdf8' : undefined,
                color: darkMode ? '#020617' : undefined,
                boxShadow: darkMode ? '0 4px 22px rgba(56,189,248,.3)' : undefined,
              }}
            >
              {loading ? (
                <span className="spinner"></span>
              ) : (
                <>
                  <span>{t('contact.sendButton', 'Send Message')}</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;