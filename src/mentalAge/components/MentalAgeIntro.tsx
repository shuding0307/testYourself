import React from "react";
import { useLanguageStore } from "../../store/useLanguageStore";
import BaseIntro from "../../components/common/BaseIntro";

interface MentalAgeIntroProps {
  actualAge: string;
  setActualAge: (age: string) => void;
  onStart: () => void;
}

const MentalAgeIntro: React.FC<MentalAgeIntroProps> = ({
  actualAge,
  setActualAge,
  onStart,
}) => {
  const { transType } = useLanguageStore();

  return (
    <BaseIntro
      icon="🤔"
      title={transType.title}
      subtitle={transType.subtitle}
      buttonText={transType.startButton}
      onStart={onStart}
    >
      <div className="input-group">
        <input
          type="number"
          placeholder={transType.agePlaceholder}
          value={actualAge}
          onChange={(e) => setActualAge(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onStart()}
        />
        <span className="unit">{transType.ageUnit}</span>
      </div>
    </BaseIntro>
  );
};

export default MentalAgeIntro;
