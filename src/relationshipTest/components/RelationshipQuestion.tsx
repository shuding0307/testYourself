import React from "react";
import { relationshipQuestions } from "../data/questions";
import { useLanguageStore } from "../../store/useLanguageStore";

interface RelationshipQuestionProps {
  currentStep: number;
  onAnswer: (value: string) => void;
  onBack: () => void;
  totalSteps: number;
}

const RelationshipQuestion: React.FC<RelationshipQuestionProps> = ({
  currentStep,
  onAnswer,
  onBack,
  totalSteps,
}) => {
  const { lang, common } = useLanguageStore();
  const question = relationshipQuestions[currentStep];

  if (!question) return null;

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

        <h2 className="q-text">{question.text[lang] || question.text.ko}</h2>

        <div className="answer-buttons">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="answer-btn"
              onClick={() => onAnswer(option.value)}
              style={{ textAlign: "left", padding: "18px" }}
            >
              {option.text[lang] || option.text.ko}
            </button>
          ))}
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

export default RelationshipQuestion;
