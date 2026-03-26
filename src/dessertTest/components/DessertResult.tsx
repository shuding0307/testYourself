import React from "react";
import BaseResult from "../../components/common/BaseResult";
import { useLanguageStore } from "../../store/useLanguageStore";
import { dessertTranslations } from "../data/translations";
import type { DessertType } from "../data/types";

interface DessertResultProps {
  result: DessertType;
  onRestart: () => void;
}

const dessertIcons: Record<DessertType, string> = {
  macaron: "🥯", // Using closest available or specific
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
  const resultData = t.results[result];

  const compatibilityTitles = {
    ko: { best: "💘 잘 맞는 디저트", worst: "💥 안 맞는 디저트", features: "🧠 숨겨진 특징 3가지", meme: "🎭 한 줄 밈" },
    en: { best: "💘 Best Match", worst: "💥 Worst Match", features: "🧠 3 Hidden Features", meme: "🎭 One-line Meme" },
    jp: { best: "💘 相性の良いデザート", worst: "💥 相性の悪いデザート", features: "🧠 3つの隠れた特徴", meme: "🎭 一言ミーム" },
    zh: { best: "💘 最佳拍档", worst: "💥 互斥队友", features: "🧠 3个隐藏特征", meme: "🎭 一句话梗" },
    lt: { best: "💘 Geriausias derinys", worst: "💥 Blogiausias derinys", features: "🧠 3 paslėptos savybės", meme: "🎭 Vieno sakinio memas" },
  };

  const ct = compatibilityTitles[lang] || compatibilityTitles.ko;

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
          <h3>{ct.features}</h3>
          <ul>
            {resultData.features?.map((f: string, i: number) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>
        </div>

        <div className="meme-section">
          <h3>{ct.meme}</h3>
          <p className="meme-text">"{resultData.memes?.[0]}"</p>
        </div>

        <div className="compatibility-section">
          <div className="comp-item best">
            <span className="comp-label">{ct.best}</span>
            <span className="comp-value">{resultData.bestMatch}</span>
          </div>
          <div className="comp-item worst">
            <span className="comp-label">{ct.worst}</span>
            <span className="comp-value">{resultData.worstMatch}</span>
          </div>
        </div>
      </div>
    </BaseResult>
  );
};

export default DessertResult;
