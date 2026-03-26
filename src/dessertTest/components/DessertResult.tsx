import React, { useMemo } from "react";
import BaseResult from "../../components/common/BaseResult";
import { useLanguageStore } from "../../store/useLanguageStore";
import { dessertTranslations } from "../data/translations";
import { commonTranslations } from "../../data/commonTranslations";
import type { DessertType } from "../data/types";
import { dessertTypeTraits } from "../data/traits";
import { calculateCompatibilityScore, getCompatibilityStatus } from "../../utils/compatibility";

interface DessertResultProps {
  result: DessertType;
  onRestart: () => void;
}

const dessertIcons: Record<DessertType, string> = {
  macaron: "🥯",
  brownie: "🍫",
  pudding: "🍮",
  gelato: "🍦",
  baklava: "🍯",
  bingsu: "🍧",
  mochi: "🍡",
  creme_brulee: "🍮",
  egg_tart: "🥧",
  tiramisu: "☕",
};

const DessertResult: React.FC<DessertResultProps> = ({ result, onRestart }) => {
  const { lang } = useLanguageStore();
  const t = dessertTranslations[lang] || dessertTranslations.ko;
  const ct = commonTranslations[lang] || commonTranslations.ko;
  const resultData = t.results[result];

  const { bestMatch, worstMatch } = useMemo(() => {
    const currentTraits = dessertTypeTraits[result];
    const allTypes = Object.keys(dessertTypeTraits) as DessertType[];
    
    const scores = allTypes
      .filter(type => type !== result)
      .map(type => ({
        type,
        score: calculateCompatibilityScore(currentTraits, dessertTypeTraits[type])
      }))
      .sort((a, b) => b.score - a.score);

    return {
      bestMatch: scores[0],
      worstMatch: scores[scores.length - 1]
    };
  }, [result]);

  const bestStatus = getCompatibilityStatus(bestMatch.score, lang);
  const worstStatus = getCompatibilityStatus(worstMatch.score, lang);

  const extraTitles = {
    ko: { features: "🧠 숨겨진 특징 3가지", meme: "🎭 한 줄 밈" },
    en: { features: "🧠 3 Hidden Features", meme: "🎭 One-line Meme" },
    jp: { features: "🧠 3つの隠れた特徴", meme: "🎭 一言ミーム" },
    zh: { features: "🧠 3个隐藏特征", meme: "🎭 一句话梗" },
    lt: { features: "🧠 3 paslėptos savybės", meme: "🎭 Vieno sakinio memas" },
  };

  const et = extraTitles[lang] || extraTitles.ko;

  return (
    <BaseResult
      title={resultData.title}
      badgeText={resultData.subTitle}
      icon={dessertIcons[result]}
      desc={resultData.desc}
      onRestart={onRestart}
      restartButtonText={t.retryBtn}
    >
      <div className="dessert-extra-info">
        <div className="features-section">
          <h3>{et.features}</h3>
          <ul>
            {resultData.features?.map((f: string, i: number) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>
        </div>

        <div className="meme-section">
          <h3>{et.meme}</h3>
          <p className="meme-text">"{resultData.memes?.[0]}"</p>
        </div>

        <div className="compatibility-section" style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>🍰 {ct.compatibility.title}</h3>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <div style={{ flex: 1, padding: '15px', background: '#fff9fa', borderRadius: '15px', border: '1px solid #ffe3e8' }}>
              <p style={{ fontSize: '0.85rem', color: '#ff4d7d', fontWeight: 'bold', marginBottom: '10px' }}>{ct.compatibility.best}</p>
              <div style={{ fontSize: '2rem', marginBottom: '5px' }}>{dessertIcons[bestMatch.type]}</div>
              <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{t.results[bestMatch.type].title.split("'")[1] || t.results[bestMatch.type].title.split(" ").pop()}</p>
              <p style={{ fontSize: '0.75rem', color: bestStatus.color, marginTop: '5px' }}>{bestMatch.score}% {bestStatus.text}</p>
            </div>
            <div style={{ flex: 1, padding: '15px', background: '#f8f9fa', borderRadius: '15px', border: '1px solid #eee' }}>
              <p style={{ fontSize: '0.85rem', color: '#868e96', fontWeight: 'bold', marginBottom: '10px' }}>{ct.compatibility.worst}</p>
              <div style={{ fontSize: '2rem', marginBottom: '5px' }}>{dessertIcons[worstMatch.type]}</div>
              <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{t.results[worstMatch.type].title.split("'")[1] || t.results[worstMatch.type].title.split(" ").pop()}</p>
              <p style={{ fontSize: '0.75rem', color: worstStatus.color, marginTop: '5px' }}>{worstMatch.score}% {worstStatus.text}</p>
            </div>
          </div>
        </div>
      </div>
    </BaseResult>
  );
};

export default DessertResult;
