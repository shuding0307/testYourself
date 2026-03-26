import React from "react";
import BaseIntro from "../../components/common/BaseIntro";
import { useLanguageStore } from "../../store/useLanguageStore";
import { relationshipTranslations } from "../data/translations";

interface RelationshipIntroProps {
  onStart: () => void;
}

const RelationshipIntro: React.FC<RelationshipIntroProps> = ({ onStart }) => {
  const { lang } = useLanguageStore();
  const t = relationshipTranslations[lang] || relationshipTranslations.ko;

  return (
    <BaseIntro
      title={t.title}
      subtitle={t.subtitle}
      icon="💑"
      onStart={onStart}
      buttonText={t.startBtn}
    />
  );
};

export default RelationshipIntro;
