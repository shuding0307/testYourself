import React from "react";
import { useLanguageStore } from "../../store/useLanguageStore";
import BaseIntro from "../../components/common/BaseIntro";
import { mentalAgeTranslations } from "../data/translations";

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
  const { lang, common } = useLanguageStore();
  const t = mentalAgeTranslations[lang];

  return (
    <BaseIntro
      icon="🤔"
      title={t.title}
      subtitle={t.subtitle}
      buttonText={common.common.startButton}
      onStart={onStart}
    >
      <div className="input-group">
        <input
          type="number"
          placeholder={common.common.agePlaceholder}
          value={actualAge}
          onChange={(e) => setActualAge(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onStart()}
        />
        <span className="unit">{common.common.ageUnit}</span>
      </div>
    </BaseIntro>
  );
};

export default MentalAgeIntro;
