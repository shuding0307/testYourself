import React from "react";
import { useLanguageStore } from "../../store/useLanguageStore";
import BaseIntro from "../../components/common/BaseIntro";
import { dopamineTranslations } from "../data/translations";

interface DopamineIntroProps {
  onStart: () => void;
}

const DopamineIntro: React.FC<DopamineIntroProps> = ({ onStart }) => {
  const { lang, common } = useLanguageStore();
  const t = dopamineTranslations[lang];

  return (
    <BaseIntro
      icon="📱"
      title={t.title}
      subtitle={t.subtitle}
      buttonText={common.common.startButton}
      onStart={onStart}
      containerClass="dopamine-theme"
      buttonClass="dopamine-btn"
    />
  );
};

export default DopamineIntro;
