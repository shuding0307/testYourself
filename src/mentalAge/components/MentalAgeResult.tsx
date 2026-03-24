import React from 'react';
import { translations } from '../data/translations';

type TranslationType = typeof translations['ko'];

interface MentalAgeResultProps {
  result: {
    mentalAge: string;
    resultTitle: string;
    desc: string;
    comparisonMsg: string;
    icon: string;
    indices: {
      social: number;
      childlike: number;
      stubborn: number;
    };
    specialMsg: string;
  };
  onRestart: () => void;
  t: TranslationType;
}

const MentalAgeResult: React.FC<MentalAgeResultProps> = ({ result, onRestart, t }) => {
  return (
    <div className="mental-test-container result-page">
      <h2>{t.resultTitle}</h2>
      <div className="result-box">
        <div className="character-icon floating">{result.icon}</div>
        <h3>{t.resultSub}</h3>
        <p className="age-text">{result.mentalAge}</p>
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
            <span>{t.indices.childlike}</span>
            <div className="bar">
              <div className="fill childlike" style={{ width: `${result.indices.childlike}%` }}></div>
            </div>
            <span className="val">{result.indices.childlike}%</span>
          </div>
          <div className="index-item">
            <span>{t.indices.stubborn}</span>
            <div className="bar">
              <div className="fill stubborn" style={{ width: `${result.indices.stubborn}%` }}></div>
            </div>
            <span className="val">{result.indices.stubborn}%</span>
          </div>
          <div className="index-item">
            <span>{t.indices.social}</span>
            <div className="bar">
              <div className="fill social" style={{ width: `${result.indices.social}%` }}></div>
            </div>
            <span className="val">{result.indices.social}%</span>
          </div>
        </div>

        {result.specialMsg && <p className="special-msg">{result.specialMsg}</p>}
        
        <div className="divider"></div>
        <p className="comparison-text">{result.comparisonMsg}</p>
      </div>
      <button className="primary-button" onClick={onRestart}>{t.restartButton}</button>
    </div>
  );
};

export default MentalAgeResult;
