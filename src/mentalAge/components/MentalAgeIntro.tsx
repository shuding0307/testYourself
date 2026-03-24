import React from 'react';
import { translations, type Language } from '../data/translations';

type TranslationType = typeof translations['ko'];

interface MentalAgeIntroProps {
  actualAge: string;
  setActualAge: (age: string) => void;
  onStart: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationType;
}

const MentalAgeIntro: React.FC<MentalAgeIntroProps> = ({ 
  actualAge, 
  setActualAge, 
  onStart, 
  lang, 
  setLang, 
  t 
}) => {
  return (
    <div className="mental-test-container intro-page">
      <div className="character-icon floating">🤔</div>
      <h2>{t.title}</h2>
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
