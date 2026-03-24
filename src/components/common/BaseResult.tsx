import React from 'react';

interface BaseResultProps {
  title: string;
  icon: string;
  badgeText: string;
  desc: string;
  onRestart: () => void;
  restartButtonText: string;
  children?: React.ReactNode;
  containerClass?: string;
  boxClass?: string;
  buttonClass?: string;
}

const BaseResult: React.FC<BaseResultProps> = ({
  title,
  icon,
  badgeText,
  desc,
  onRestart,
  restartButtonText,
  children,
  containerClass = "",
  boxClass = "",
  buttonClass = "",
}) => {
  return (
    <div className={`mental-test-container result-page ${containerClass}`}>
      <h2>{title}</h2>
      <div className={`result-box ${boxClass}`}>
        <div className="character-icon floating">{icon}</div>
        
        {children}

        <div className="type-badge">{badgeText}</div>
        <div className="desc-text">
          {desc.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
      <button 
        className={`primary-button ${buttonClass}`} 
        onClick={onRestart}
      >
        {restartButtonText}
      </button>
    </div>
  );
};

export default BaseResult;
