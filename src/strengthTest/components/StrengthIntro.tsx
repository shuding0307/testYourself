import React from "react";
import { useLanguageStore } from "../../store/useLanguageStore";
import BaseIntro from "../../components/common/BaseIntro";
import { strengthTranslations } from "../data/translations";

interface StrengthIntroProps {
  onStart: () => void;
}

const StrengthIntro: React.FC<StrengthIntroProps> = ({ onStart }) => {
  const { lang, common } = useLanguageStore();
  const t = strengthTranslations[lang];

  return (
    <BaseIntro
      icon="💎"
      title={t.title}
      subtitle={t.subtitle}
      buttonText={common.common.startButton}
      onStart={onStart}
      containerClass="strength-intro-container"
      buttonClass="strength-btn"
    />
  );
};

export default StrengthIntro;
