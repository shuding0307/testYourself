import React from 'react';
import type { Question } from '../data/questions';

interface MentalAgeQuestionProps {
  currentStep: number;
  totalSteps: number;
  question: Question;
  onAnswer: (score: number) => void;
  onBack: () => void;
}

const MentalAgeQuestion: React.FC<MentalAgeQuestionProps> = ({ 
  currentStep, 
  totalSteps, 
  question, 
  onAnswer, 
  onBack 
}) => {
  return (
    <div className="mental-test-container">
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        ></div>
      </div>
      
      <div className="question-card">
        <span className="q-number">질문 {currentStep + 1} / {totalSteps}</span>
        <h2 className="q-text">{question?.text}</h2>
        
        <div className="answer-buttons">
          <button className="answer-btn agree-very" onClick={() => onAnswer(5)}>매우 그렇다</button>
          <button className="answer-btn agree" onClick={() => onAnswer(4)}>그렇다</button>
          <button className="answer-btn neutral" onClick={() => onAnswer(3)}>보통이다</button>
          <button className="answer-btn disagree" onClick={() => onAnswer(2)}>아니다</button>
          <button className="answer-btn disagree-very" onClick={() => onAnswer(1)}>전혀 아니다</button>
        </div>

        {currentStep > 0 && (
          <button className="back-button" onClick={onBack}>← 이전 질문으로</button>
        )}
      </div>
    </div>
  );
};

export default MentalAgeQuestion;
