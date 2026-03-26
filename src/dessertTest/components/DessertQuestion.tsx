import React from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';
import type { DessertQuestion as QuestionType } from '../data/types';

interface DessertQuestionProps {
  currentStep: number;
  totalSteps: number;
  question: QuestionType;
  onAnswer: (val: 'A' | 'B' | 'C' | 'D') => void;
  onBack: () => void;
}

const DessertQuestion: React.FC<DessertQuestionProps> = ({
  currentStep,
  totalSteps,
  question,
  onAnswer,
  onBack,
}) => {
  const { lang, common } = useLanguageStore();
  if (!question) return null;

  return (
    <div className="mental-test-container dessert-test-container">
      <div className="progress-bar">
        <div
          className="progress"
          style={{ 
            width: `${((currentStep + 1) / totalSteps) * 100}%`,
            background: 'linear-gradient(90deg, #ff9a9e, #fad0c4)' 
          }}
        ></div>
      </div>

      <div className="question-card">
        <span className="q-number" style={{ color: '#ff7eb3' }}>
          Q{currentStep + 1} / {totalSteps}
        </span>

        <h2 className="q-text">{question.text[lang] || question.text.ko}</h2>

        <div className="answer-buttons">
          {(['A', 'B', 'C', 'D'] as const).map((key) => (
            <button 
              key={key} 
              className="answer-btn dessert-option-btn" 
              onClick={() => onAnswer(key)}
              style={{ textAlign: 'left', padding: '15px' }}
            >
              {question.options[key].text[lang] || question.options[key].text.ko}
            </button>
          ))}
        </div>

        {currentStep > 0 && (
          <button className="back-button" onClick={onBack} style={{ marginTop: '20px' }}>
            {common.common.prevButton.replace('← ', '').replace('←', '').trim()}
          </button>
        )}
      </div>
    </div>
  );
};

export default DessertQuestion;
