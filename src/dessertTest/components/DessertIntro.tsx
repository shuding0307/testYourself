import React from 'react';
import BaseIntro from '../../components/common/BaseIntro';
import { useLanguageStore } from '../../store/useLanguageStore';
import { dessertTranslations } from '../data/translations';

interface DessertIntroProps {
  onStart: () => void;
}

const DessertIntro: React.FC<DessertIntroProps> = ({ onStart }) => {
  const { lang } = useLanguageStore();
  const t = dessertTranslations[lang] || dessertTranslations.ko;

  return (
    <BaseIntro
      title={t.title}
      subtitle={t.subtitle}
      onStart={onStart}
      buttonText={t.startBtn}
      icon="🍰"
    />
  );
};

export default DessertIntro;
