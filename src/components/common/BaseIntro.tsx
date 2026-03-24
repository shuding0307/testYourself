import React from 'react';

interface BaseIntroProps {
  icon: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onStart: () => void;
  children?: React.ReactNode;
  containerClass?: string;
  buttonClass?: string;
}

const BaseIntro: React.FC<BaseIntroProps> = ({
  icon,
  title,
  subtitle,
  buttonText,
  onStart,
  children,
  containerClass = "",
  buttonClass = "",
}) => {
  return (
    <div className={`mental-test-container intro-page ${containerClass}`}>
      <div className="character-icon floating">{icon}</div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      
      {children}

      <button className={`primary-button ${buttonClass}`} onClick={onStart}>
        {buttonText}
      </button>
    </div>
  );
};

export default BaseIntro;
