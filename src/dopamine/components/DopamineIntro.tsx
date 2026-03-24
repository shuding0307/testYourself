import React from "react";
import { useLanguageStore } from "../../store/useLanguageStore";
import BaseIntro from "../../components/common/BaseIntro";

interface DopamineIntroProps {
  onStart: () => void;
}

const DopamineIntro: React.FC<DopamineIntroProps> = ({ onStart }) => {
  const { transType } = useLanguageStore();

  return (
    <BaseIntro
      icon="📱"
      title={transType.dopamineTitle}
      subtitle={transType.dopamineSub}
      buttonText={transType.startButton}
      onStart={onStart}
      containerClass="dopamine-theme"
      buttonClass="dopamine-btn"
    />
  );
};

export default DopamineIntro;
