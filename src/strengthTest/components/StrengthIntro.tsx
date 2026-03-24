import React from "react";
import { useLanguageStore } from "../../store/useLanguageStore";
import BaseIntro from "../../components/common/BaseIntro";

interface StrengthIntroProps {
  onStart: () => void;
}

const StrengthIntro: React.FC<StrengthIntroProps> = ({ onStart }) => {
  const { transType } = useLanguageStore();

  return (
    <BaseIntro
      icon="💎"
      title={transType.strengthTitle}
      subtitle={transType.strengthSub}
      buttonText={transType.startButton}
      onStart={onStart}
      containerClass="strength-intro-container"
      buttonClass="strength-btn"
    />
  );
};

export default StrengthIntro;
