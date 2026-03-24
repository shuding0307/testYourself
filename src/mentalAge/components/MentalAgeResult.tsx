import React from 'react';

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
}

const MentalAgeResult: React.FC<MentalAgeResultProps> = ({ result, onRestart }) => {
  return (
    <div className="mental-test-container result-page">
      <h2>테스트 결과</h2>
      <div className="result-box">
        <div className="character-icon floating">{result.icon}</div>
        <h3>당신의 정신연령은...</h3>
        <p className="age-text">{result.mentalAge}</p>
        <div className="type-badge">{result.resultTitle}</div>
        <p className="desc-text">{result.desc}</p>
        
        <div className="indices-container">
          <div className="index-item">
            <span>동심 지수</span>
            <div className="bar">
              <div className="fill childlike" style={{ width: `${result.indices.childlike}%` }}></div>
            </div>
            <span className="val">{result.indices.childlike}%</span>
          </div>
          <div className="index-item">
            <span>꼰대 지수</span>
            <div className="bar">
              <div className="fill stubborn" style={{ width: `${result.indices.stubborn}%` }}></div>
            </div>
            <span className="val">{result.indices.stubborn}%</span>
          </div>
          <div className="index-item">
            <span>사회성 지수</span>
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
      <button className="primary-button" onClick={onRestart}>다시 테스트하기</button>
    </div>
  );
};

export default MentalAgeResult;
