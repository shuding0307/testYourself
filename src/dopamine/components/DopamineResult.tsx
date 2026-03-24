import React from 'react';
import { translations } from '../../mentalAge/data/translations';

type TranslationType = typeof translations['ko'];

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
    specialMsg: string;
  };
  onRestart: () => void;
  t: TranslationType;
}

const DopamineResult: React.FC<DopamineResultProps> = ({ result, onRestart, t }) => {
  return (
    <div className="mental-test-container result-page dopamine-result">
      <h2>{t.resultTitle}</h2>
      <div className="result-box">
        <div className="character-icon floating">{result.icon}</div>
        <div className="brain-temp-badge">
          <span className="temp-label">{t.indices.brainTemp}</span>
          <span className="temp-value">{result.brainTemp}°C</span>
        </div>
        <h3 className="brain-status-text">{result.brainStatus}</h3>
        <p className="age-text">{result.scoreText}</p>
        <div className="type-badge">{result.resultTitle}</div>
        <div className="desc-text">
          {result.desc.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
        
        <div className="indices-container">
          <div className="index-item">
            <span>{t.indices.digital}</span>
            <div className="bar">
              <div className="fill digital" style={{ width: `${result.indices.digital}%` }}></div>
            </div>
            <span className="val">{result.indices.digital}%</span>
          </div>
          <div className="index-item">
            <span>{t.indices.food}</span>
            <div className="bar">
              <div className="fill food" style={{ width: `${result.indices.food}%` }}></div>
            </div>
            <span className="val">{result.indices.food}%</span>
          </div>
          <div className="index-item">
            <span>{t.indices.habit}</span>
            <div className="bar">
              <div className="fill habit" style={{ width: `${result.indices.habit}%` }}></div>
            </div>
            <span className="val">{result.indices.habit}%</span>
          </div>
          <div className="index-item">
            <span>{t.indices.emotion}</span>
            <div className="bar">
              <div className="fill emotion" style={{ width: `${result.indices.emotion}%` }}></div>
            </div>
            <span className="val">{result.indices.emotion}%</span>
          </div>
        </div>

        {result.specialMsg && <p className="special-msg">{result.specialMsg}</p>}
      </div>
      <button className="primary-button dopamine-btn" onClick={onRestart}>{t.restartButton}</button>
    </div>
  );
};

export default DopamineResult;
