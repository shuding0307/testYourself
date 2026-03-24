import React, { useState, useRef, useEffect } from 'react';
import type { Language } from '../data/translations';

interface MentalAgeIntroProps {
  actualAge: string;
  setActualAge: (age: string) => void;
  onStart: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
}

const MentalAgeIntro: React.FC<MentalAgeIntroProps> = ({ 
  actualAge, 
  setActualAge, 
  onStart, 
  lang, 
  setLang, 
  t 
}) => {
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

  // 외부 클릭 시 드롭다운 닫기
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
    <div className="mental-test-container intro-page">
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

      <div className="character-icon floating">🤔</div>
...
      <p>{t.subtitle}</p>
      
      <div className="input-group">
        <input 
          type="number" 
          placeholder={t.agePlaceholder} 
          value={actualAge} 
          onChange={(e) => setActualAge(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onStart()}
        />
        <span className="unit">{t.ageUnit}</span>
      </div>
      <button className="primary-button" onClick={onStart}>{t.startButton}</button>
    </div>
  );
};

export default MentalAgeIntro;
