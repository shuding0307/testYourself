import React, { useState } from "react";
import RelationshipIntro from "./components/RelationshipIntro";
import RelationshipQuestion from "./components/RelationshipQuestion";
import RelationshipResult from "./components/RelationshipResult";
import { relationshipQuestions } from "./data/questions";
import { calculateRelationshipResult } from "./utils/resultCalculator";
import type { RelationshipType } from "./data/types";
import "./RelationshipTest.css";

const RelationshipTest: React.FC = () => {
  const [step, setStep] = useState<"intro" | "question" | "result">("intro");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<RelationshipType | null>(null);

  const handleStart = () => {
    setStep("question");
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentStep < relationshipQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const finalResult = calculateRelationshipResult(newAnswers);
      setResult(finalResult);
      setStep("result");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleRestart = () => {
    setStep("intro");
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="relationship-test-wrapper">
      {step === "intro" && <RelationshipIntro onStart={handleStart} />}
      {step === "question" && (
        <RelationshipQuestion
          currentStep={currentStep}
          totalSteps={relationshipQuestions.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}
      {step === "result" && result && (
        <RelationshipResult result={result} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default RelationshipTest;
