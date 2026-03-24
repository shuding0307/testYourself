import React from 'react';
import { type Language } from '../data/commonTranslations';
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
  const { lang, common } = useLanguageStore();
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
          {common.common.questionLabel} {currentStep + 1} / {totalSteps}
        </span>

        <h2 className="q-text">{question.text[lang]}</h2>

        <div className="answer-buttons">
          <button className="answer-btn agree-very" onClick={() => onAnswer(5)}>{common.answers.agreeVery}</button>
          <button className="answer-btn agree" onClick={() => onAnswer(4)}>{common.answers.agree}</button>
          <button className="answer-btn neutral" onClick={() => onAnswer(3)}>{common.answers.neutral}</button>
          <button className="answer-btn disagree" onClick={() => onAnswer(2)}>{common.answers.disagree}</button>
          <button className="answer-btn disagree-very" onClick={() => onAnswer(1)}>{common.answers.disagreeVery}</button>
        </div>

        {currentStep > 0 && (
          <button className="back-button" onClick={onBack}>
            {common.common.prevButton.replace('← ', '').replace('←', '').trim()}
          </button>
        )}
      </div>
    </div>
  );
};
export default TestQuestion;
