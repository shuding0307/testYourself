import React from "react";
import { useLanguageStore } from "../../store/useLanguageStore";
import BaseIntro from "../../components/common/BaseIntro";

interface DopamineIntroProps {
  onStart: () => void;
}

const DopamineIntro: React.FC<DopamineIntroProps> = ({ onStart }) => {
  const { t } = useLanguageStore();
  
  return (
    <BaseIntro
      icon="📱"
      title={t.dopamineTitle}
      subtitle={t.dopamineSub}
      buttonText={t.startButton}
      onStart={onStart}
      containerClass="dopamine-theme"
      buttonClass="dopamine-btn"
    />
  );
};

export default DopamineIntro;
