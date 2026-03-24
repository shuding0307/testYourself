import React from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';
import BaseResult from '../../components/common/BaseResult';
import ProgressBar from '../../components/common/ProgressBar';
import { dopamineTranslations } from '../data/translations';

interface DopamineResultProps {
  result: {
    score: number;
    scoreText: string;
    resultTitle: string;
    desc: string;
    icon: string;
    brainTemp: number;
    brainStatus: string;
    indices: {
      digital: number;
      food: number;
      habit: number;
      emotion: number;
    };
    worstCategory: 'digital' | 'food' | 'habit' | 'emotion';
    specialMsg: string;
  };
  onRestart: () => void;
}

const DopamineResult: React.FC<DopamineResultProps> = ({ result, onRestart }) => {
  const { lang, common } = useLanguageStore();
  const t = dopamineTranslations[lang];
  const actionData = t.actions[result.worstCategory];

  return (
    <BaseResult
      title={common.common.resultTitle}
      icon={result.icon}
      badgeText={result.resultTitle}
      desc={result.desc}
      onRestart={onRestart}
      restartButtonText={common.common.restartButton}
      containerClass="dopamine-result"
      buttonClass="dopamine-btn"
    >
      <div className="brain-temp-badge">
        <span className="temp-label">{t.indices.brainTemp}</span>
        <span className="temp-value">{result.brainTemp}°C</span>
      </div>
      <h3 className="brain-status-text">{result.brainStatus}</h3>
      <p className="age-text">{result.scoreText}</p>

      <div className="indices-container">
        <ProgressBar label={t.indices.digital} value={result.indices.digital} className="digital" />
        <ProgressBar label={t.indices.food} value={result.indices.food} className="food" />
        <ProgressBar label={t.indices.habit} value={result.indices.habit} className="habit" />
        <ProgressBar label={t.indices.emotion} value={result.indices.emotion} className="emotion" />
      </div>

      <div className="action-items-section">
        <h4 className="action-title">{actionData.title}</h4>
        <ul className="action-list">
          {actionData.items.map((item, idx) => (
            <li key={idx} className="action-item">{item}</li>
          ))}
        </ul>
      </div>

      {result.specialMsg && <p className="special-msg">{result.specialMsg}</p>}
    </BaseResult>
  );
};

export default DopamineResult;
