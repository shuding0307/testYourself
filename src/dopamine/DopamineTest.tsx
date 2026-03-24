import React, { useState } from "react";
import "./DopamineTest.css";
import { dopamineQuestions, type DopamineQuestion } from "./data/questions";
import { translations, type Language } from "../mentalAge/data/translations";
import MentalAgeQuestion from "../mentalAge/components/MentalAgeQuestion";
import DopamineResult from "./components/DopamineResult";
import { calculateDopamineResult } from "./utils/resultCalculator";

interface DopamineTestProps {
  externalLang: Language;
  onExternalLangChange: (lang: Language) => void;
}

const DopamineTest: React.FC<DopamineTestProps> = ({ externalLang, onExternalLangChange }) => {
  const [phase, setPhase] = useState<"intro" | "test" | "result">("intro");
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<number[]>([]);

  const t = translations[externalLang];

  const startTest = () => {
    setCurrentStep(0);
    setScores([]);
    setPhase("test");
  };

  const handleAnswer = (value: number) => {
    const newScores = [...scores, value];
    setScores(newScores);

    if (currentStep < dopamineQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setPhase("result");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setScores(scores.slice(0, -1));
    }
  };

  if (phase === "intro") {
    return (
      <div className="mental-test-container intro-page dopamine-theme">
        <div className="character-icon floating">📱</div>
        <h2>{t.dopamineTitle}</h2>
        <p>{t.dopamineSub}</p>
        <button className="primary-button dopamine-btn" onClick={startTest}>
          {t.startButton}
        </button>
      </div>
    );
  }

  if (phase === "result") {
    const result = calculateDopamineResult(dopamineQuestions, scores, t);
    
    return (
      <div className="dopamine-theme">
        <DopamineResult
          result={result}
          onRestart={() => setPhase("intro")}
          t={t}
        />
      </div>
    );
  }

  return (
    <div className="dopamine-theme">
      <MentalAgeQuestion
        currentStep={currentStep}
        totalSteps={dopamineQuestions.length}
        question={dopamineQuestions[currentStep] as any} // 구조가 유사하므로 캐스팅
        onAnswer={handleAnswer}
        onBack={handleBack}
        lang={externalLang}
        t={t}
      />
    </div>
  );
};

export default DopamineTest;
