import React from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';
import BaseResult from '../../components/common/BaseResult';
import ProgressBar from '../../components/common/ProgressBar';

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
  const { transType } = useLanguageStore();
  const actionData = transType.dopamineActions[result.worstCategory];

  return (
    <BaseResult
      title={transType.resultTitle}
      icon={result.icon}
      badgeText={result.resultTitle}
      desc={result.desc}
      onRestart={onRestart}
      restartButtonText={transType.restartButton}
      containerClass="dopamine-result"
      buttonClass="dopamine-btn"
    >
      <div className="brain-temp-badge">
        <span className="temp-label">{transType.indices.brainTemp}</span>
        <span className="temp-value">{result.brainTemp}°C</span>
      </div>
      <h3 className="brain-status-text">{result.brainStatus}</h3>
      <p className="age-text">{result.scoreText}</p>

      <div className="indices-container">
        <ProgressBar label={transType.indices.digital} value={result.indices.digital} className="digital" />
        <ProgressBar label={transType.indices.food} value={result.indices.food} className="food" />
        <ProgressBar label={transType.indices.habit} value={result.indices.habit} className="habit" />
        <ProgressBar label={transType.indices.emotion} value={result.indices.emotion} className="emotion" />
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
