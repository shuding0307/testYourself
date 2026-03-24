import React from 'react';
import type { Language } from '../data/translations';
import LanguageSelector from './LanguageSelector';

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
  return (
    <div className="mental-test-container intro-page">
      {/* 
        테스트 내부에 있을 때는 이미 App.tsx에 Selector가 있으므로 
        여기서는 중복 표시하지 않거나, 필요 시 배치할 수 있습니다. 
        사용자 경험상 우측 상단에 고정된 Selector가 하나만 있는 것이 깔끔합니다.
      */}
      
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
