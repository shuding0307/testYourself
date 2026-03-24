import React, { useState } from "react";
import "./StrengthTest.css";
import { strengthQuestions } from "./data/questions";
import { calculateStrengthResult } from "./utils/resultCalculator";
import StrengthIntro from "./components/StrengthIntro";
import StrengthQuestion from "./components/StrengthQuestion";
import StrengthResult from "./components/StrengthResult";

const StrengthTest: React.FC = () => {
  const [phase, setPhase] = useState<"intro" | "test" | "result">("intro");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<('A' | 'B' | 'C')[]>([]);

  const startTest = () => {
    setCurrentStep(0);
    setAnswers([]);
    setPhase("test");
  };

  const handleAnswer = (val: 'A' | 'B' | 'C') => {
    const nextAnswers = [...answers, val];
    setAnswers(nextAnswers);

    if (currentStep < strengthQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setPhase("result");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  if (phase === "intro") {
    return <StrengthIntro onStart={startTest} />;
  }

  if (phase === "result") {
    const result = calculateStrengthResult(strengthQuestions, answers);
    return <StrengthResult result={result} onRestart={() => setPhase("intro")} />;
  }

  return (
    <div className="strength-theme">
      <StrengthQuestion
        currentStep={currentStep}
        totalSteps={strengthQuestions.length}
        question={strengthQuestions[currentStep]}
        onAnswer={handleAnswer}
        onBack={handleBack}
      />
    </div>
  );
};

export default StrengthTest;
