import React, { useMemo } from "react";
import BaseResult from "../../components/common/BaseResult";
import { useLanguageStore } from "../../store/useLanguageStore";
import { relationshipTranslations } from "../data/translations";
import { commonTranslations } from "../../data/commonTranslations";
import { strengthTranslations, type StrengthTranslationType } from "../../strengthTest/data/translations";
import type { RelationshipType } from "../data/types";
import type { StrengthTypeKey } from "../../strengthTest/data/types";
import { relationshipTypeTraits } from "../data/traits";
import { calculateCompatibilityScore, getCompatibilityStatus } from "../../utils/compatibility";

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
  const ct = commonTranslations[lang] || commonTranslations.ko;
  
  // Get strength translation for the current language or fallback to Korean
  const st = (strengthTranslations as Record<string, StrengthTranslationType>)[lang] || strengthTranslations.ko;
  
  const resultData = t.results[result];
  const strengthId = resultData.strengthId as StrengthTypeKey;
  const strengthData = st.results[strengthId];

  const { bestMatch, worstMatch } = useMemo(() => {
    const currentTraits = relationshipTypeTraits[result];
    const allTypes = Object.keys(relationshipTypeTraits) as RelationshipType[];
    
    const scores = allTypes
      .filter(type => type !== result)
      .map(type => ({
        type,
        score: calculateCompatibilityScore(currentTraits, relationshipTypeTraits[type])
      }))
      .sort((a, b) => b.score - a.score);

    return {
      bestMatch: scores[0],
      worstMatch: scores[scores.length - 1]
    };
  }, [result]);

  const bestStatus = getCompatibilityStatus(bestMatch.score, lang);
  const worstStatus = getCompatibilityStatus(worstMatch.score, lang);

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

      <div className="compatibility-section" style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>💘 {ct.compatibility.title}</h3>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <div style={{ flex: 1, padding: '15px', background: '#fff9fa', borderRadius: '15px', border: '1px solid #ffe3e8' }}>
            <p style={{ fontSize: '0.85rem', color: '#ff4d7d', fontWeight: 'bold', marginBottom: '10px' }}>{ct.compatibility.best}</p>
            <div style={{ fontSize: '2rem', marginBottom: '5px' }}>{relationshipIcons[bestMatch.type]}</div>
            <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{t.results[bestMatch.type].title.split(' ').pop()}</p>
            <p style={{ fontSize: '0.75rem', color: bestStatus.color, marginTop: '5px' }}>{bestMatch.score}% {bestStatus.text}</p>
          </div>
          <div style={{ flex: 1, padding: '15px', background: '#f8f9fa', borderRadius: '15px', border: '1px solid #eee' }}>
            <p style={{ fontSize: '0.85rem', color: '#868e96', fontWeight: 'bold', marginBottom: '10px' }}>{ct.compatibility.worst}</p>
            <div style={{ fontSize: '2rem', marginBottom: '5px' }}>{relationshipIcons[worstMatch.type]}</div>
            <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{t.results[worstMatch.type].title.split(' ').pop()}</p>
            <p style={{ fontSize: '0.75rem', color: worstStatus.color, marginTop: '5px' }}>{worstMatch.score}% {worstStatus.text}</p>
          </div>
        </div>
      </div>
    </BaseResult>
  );
};

export default RelationshipResult;
