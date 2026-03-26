import React from "react";
import BaseResult from "../../components/common/BaseResult";
import { useLanguageStore } from "../../store/useLanguageStore";
import { relationshipTranslations } from "../data/translations";
import { strengthTranslations, type StrengthTranslationType } from "../../strengthTest/data/translations";
import type { RelationshipType } from "../data/types";
import type { StrengthTypeKey } from "../../strengthTest/data/types";

interface RelationshipResultProps {
  result: RelationshipType;
  onRestart: () => void;
}

const relationshipIcons: Record<RelationshipType, string> = {
  direct_lover: "🔥",
  wary_flirt: "👀",
  devoted_giver: "🫶",
  emotion_hider: "🧊",
  immersive_obsessive: "🎯",
  stability_seeker: "🐢",
  atmosphere_sensitive: "🎭",
  deep_emotionalist: "🌊",
};

const RelationshipResult: React.FC<RelationshipResultProps> = ({ result, onRestart }) => {
  const { lang } = useLanguageStore();
  
  // Get relationship translation for the current language or fallback to Korean
  const t = relationshipTranslations[lang] || relationshipTranslations.ko;
  
  // Get strength translation for the current language or fallback to Korean
  const st = (strengthTranslations as Record<string, StrengthTranslationType>)[lang] || strengthTranslations.ko;
  
  const resultData = t.results[result];
  const strengthId = resultData.strengthId as StrengthTypeKey;
  const strengthData = st.results[strengthId];

  return (
    <BaseResult
      title={resultData.title}
      badgeText={resultData.subTitle}
      icon={relationshipIcons[result]}
      desc={resultData.desc}
      onRestart={onRestart}
      restartButtonText={t.retryBtn}
    >
      <div className="relationship-strength-link">
        <div className="strength-card">
          <p className="strength-label">{t.strengthLabel} {strengthData?.title}</p>
          <p className="strength-reason">
            {t.strengthDescription.replace("{desc}", resultData.strengthReason)}
          </p>
        </div>
      </div>
    </BaseResult>
  );
};

export default RelationshipResult;
