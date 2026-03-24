import React from 'react';
import { type Question } from '../data/questions';
import { type Language, type TranslationType } from '../data/translations';

interface MentalAgeQuestionProps {
  currentStep: number;
  totalSteps: number;
  question: Question;
  onAnswer: (score: number) => void;
  onBack: () => void;
  lang: Language;
  t: TranslationType;
}

const MentalAgeQuestion: React.FC<MentalAgeQuestionProps> = ({ 
  currentStep, 
  totalSteps, 
  question, 
  onAnswer, 
  onBack,
  lang,
  t
}) => {
  if (!question || !question.text) return null;

  return (
    <div className="mental-test-container">
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        ></div>
      </div>
      
      <div className="question-card">
        <span className="q-number">
          {t.questionLabel} {currentStep + 1} / {totalSteps}
        </span>
        
        <h2 className="q-text">{question.text[lang]}</h2>
        
        <div className="answer-buttons">
          <button className="answer-btn agree-very" onClick={() => onAnswer(5)}>{t.answers.agreeVery}</button>
          <button className="answer-btn agree" onClick={() => onAnswer(4)}>{t.answers.agree}</button>
          <button className="answer-btn neutral" onClick={() => onAnswer(3)}>{t.answers.neutral}</button>
          <button className="answer-btn disagree" onClick={() => onAnswer(2)}>{t.answers.disagree}</button>
          <button className="answer-btn disagree-very" onClick={() => onAnswer(1)}>{t.answers.disagreeVery}</button>
        </div>

        {currentStep > 0 && (
          <button className="back-button" onClick={onBack}>
            {t.prevButton.replace('← ', '').replace('←', '').trim()}
          </button>
        )}
      </div>
    </div>
  );
};

export default MentalAgeQuestion;
