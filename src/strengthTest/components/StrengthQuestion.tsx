import React from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';
import type { StrengthQuestion as QuestionType } from '../data/questions';

interface StrengthQuestionProps {
  currentStep: number;
  totalSteps: number;
  question: QuestionType;
  onAnswer: (val: 'A' | 'B' | 'C') => void;
  onBack: () => void;
}

const StrengthQuestion: React.FC<StrengthQuestionProps> = ({
  currentStep,
  totalSteps,
  question,
  onAnswer,
  onBack,
}) => {
  const { lang, transType } = useLanguageStore();
  if (!question) return null;

  return (
    <div className="mental-test-container strength-test-container">
      <div className="progress-bar">
        <div
          className="progress"
          style={{ 
            width: `${((currentStep + 1) / totalSteps) * 100}%`,
            background: 'linear-gradient(90deg, #10b981, #3b82f6)' 
          }}
        ></div>
      </div>

      <div className="question-card">
        <span className="q-number" style={{ color: '#10b981' }}>
          Q{currentStep + 1} / {totalSteps}
        </span>

        <h2 className="q-text">{question.text[lang as 'ko' | 'en'] || question.text.ko}</h2>

        <div className="answer-buttons">
          {(['A', 'B', 'C'] as const).map((key) => (
            <button 
              key={key} 
              className="answer-btn strength-option-btn" 
              onClick={() => onAnswer(key)}
              style={{ textAlign: 'left', padding: '20px' }}
            >
              {question.options[key].text[lang as 'ko' | 'en'] || question.options[key].text.ko}
            </button>
          ))}
        </div>

        {currentStep > 0 && (
          <button className="back-button" onClick={onBack} style={{ marginTop: '30px' }}>
            {transType.prevButton.replace('← ', '').replace('←', '').trim()}
          </button>
        )}
      </div>
    </div>
  );
};

export default StrengthQuestion;
