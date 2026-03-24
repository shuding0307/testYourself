import React from 'react';

interface ProgressBarProps {
  label: string;
  value: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, className }) => {
  return (
    <div className="index-item">
      <span>{label}</span>
      <div className="bar">
        <div 
          className={`fill ${className || ''}`} 
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <span className="val">{value}%</span>
    </div>
  );
};

export default ProgressBar;
