import React, { useState } from "react";
import "./DopamineTest.css";
import { dopamineQuestions } from "./data/questions";
import TestQuestion from "../components/TestQuestion";
import DopamineIntro from "./components/DopamineIntro";
import DopamineResult from "./components/DopamineResult";
import { calculateDopamineResult } from "./utils/resultCalculator";
import { useLanguageStore } from "../store/useLanguageStore";

const DopamineTest: React.FC = () => {
  const { t } = useLanguageStore();
  const [phase, setPhase] = useState<"intro" | "test" | "result">("intro");
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<number[]>([]);

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
    return <DopamineIntro onStart={startTest} />;
  }

  if (phase === "result") {
    const result = calculateDopamineResult(dopamineQuestions, scores, t);

    return (
      <div className="dopamine-theme">
        <DopamineResult
          result={result}
          onRestart={() => setPhase("intro")}
        />
      </div>
    );
  }

  return (
    <div className="dopamine-theme">
      <TestQuestion
        currentStep={currentStep}
        totalSteps={dopamineQuestions.length}
        question={dopamineQuestions[currentStep]}
        onAnswer={handleAnswer}
        onBack={handleBack}
      />
    </div>
  );
};

export default DopamineTest;
