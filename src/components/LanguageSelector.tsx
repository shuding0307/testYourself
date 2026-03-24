import React, { useState, useRef, useEffect } from 'react';
import { type Language } from '../mentalAge/data/translations';
import { useLanguageStore } from '../store/useLanguageStore';

const LanguageSelector: React.FC = () => {
  const { lang, setLang } = useLanguageStore();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'jp', label: '日本語', flag: '🇯🇵' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'lt', label: 'Lietuvių', flag: '🇱🇹' }
  ];

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="lang-dropdown-container" ref={dropdownRef}>
      <button 
        className="lang-toggle-btn"
        onClick={() => setIsLangOpen(!isLangOpen)}
        aria-label="Select Language"
      >
        <span className="current-flag">{currentLang.flag}</span>
        <span className={`arrow ${isLangOpen ? 'up' : 'down'}`}>▾</span>
      </button>

      {isLangOpen && (
        <ul className="lang-list">
          {languages.map((l) => (
            <li key={l.code}>
              <button 
                className={`lang-item-btn ${lang === l.code ? 'active' : ''}`}
                onClick={() => {
                  setLang(l.code);
                  setIsLangOpen(false);
                }}
              >
                <span className="flag">{l.flag}</span>
                <span className="label">{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
