import React from 'react';
import { type Language } from '../mentalAge/data/translations';
import { useLanguageStore } from '../store/useLanguageStore';

interface BaseQuestion {
  id: number;
  text: Record<Language, string>;
}

interface TestQuestionProps {
  currentStep: number;
  totalSteps: number;
  question: BaseQuestion;
  onAnswer: (score: number) => void;
  onBack: () => void;
}

const TestQuestion: React.FC<TestQuestionProps> = ({
  currentStep,
  totalSteps,
  question,
  onAnswer,
  onBack,
}) => {
  const { lang, transType } = useLanguageStore();
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
          {transType.questionLabel} {currentStep + 1} / {totalSteps}
        </span>

        <h2 className="q-text">{question.text[lang]}</h2>

        <div className="answer-buttons">
          <button className="answer-btn agree-very" onClick={() => onAnswer(5)}>{transType.answers.agreeVery}</button>
          <button className="answer-btn agree" onClick={() => onAnswer(4)}>{transType.answers.agree}</button>
          <button className="answer-btn neutral" onClick={() => onAnswer(3)}>{transType.answers.neutral}</button>
          <button className="answer-btn disagree" onClick={() => onAnswer(2)}>{transType.answers.disagree}</button>
          <button className="answer-btn disagree-very" onClick={() => onAnswer(1)}>{transType.answers.disagreeVery}</button>
        </div>

        {currentStep > 0 && (
          <button className="back-button" onClick={onBack}>
            {transType.prevButton.replace('← ', '').replace('←', '').trim()}
          </button>
        )}
      </div>
    </div>
  );
};
export default TestQuestion;
