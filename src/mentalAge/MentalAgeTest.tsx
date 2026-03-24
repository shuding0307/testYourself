import React, { useState } from "react";
import "./MentalAgeTest.css";
import { questions, type Question } from "./data/questions";
import { translations, type Language } from "./data/translations";
import MentalAgeIntro from "./components/MentalAgeIntro";
import MentalAgeQuestion from "./components/MentalAgeQuestion";
import MentalAgeResult from "./components/MentalAgeResult";
import { calculateMentalAgeResult } from "./utils/resultCalculator";

interface MentalAgeTestProps {
  externalLang: Language;
  onExternalLangChange: (lang: Language) => void;
}

const MentalAgeTest: React.FC<MentalAgeTestProps> = ({
  externalLang,
  onExternalLangChange,
}) => {
  const [phase, setPhase] = useState<"intro" | "test" | "result">("intro");
  const [actualAge, setActualAge] = useState<string>("");
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<number[]>([]);

  const t = translations[externalLang];

  const startTest = () => {
    if (!actualAge || isNaN(Number(actualAge)) || Number(actualAge) <= 0) {
      alert(t.ageError);
      return;
    }

    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setActiveQuestions(shuffled.slice(0, 15));

    setCurrentStep(0);
    setScores([]);
    setPhase("test");
  };

  const handleAnswer = (value: number) => {
    const newScores = [...scores, value];
    setScores(newScores);

    if (currentStep < activeQuestions.length - 1) {
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
      <MentalAgeIntro
        actualAge={actualAge}
        setActualAge={setActualAge}
        onStart={startTest}
        lang={externalLang}
        setLang={onExternalLangChange}
        t={t}
      />
    );
  }

  if (phase === "result") {
    const result = calculateMentalAgeResult(
      Number(actualAge),
      activeQuestions,
      scores,
      t,
    );
    return (
      <MentalAgeResult
        result={result}
        onRestart={() => setPhase("intro")}
        t={t}
      />
    );
  }

  return (
    <MentalAgeQuestion
      currentStep={currentStep}
      totalSteps={activeQuestions.length}
      question={activeQuestions[currentStep]}
      onAnswer={handleAnswer}
      onBack={handleBack}
      lang={externalLang}
      t={t}
    />
  );
};

export default MentalAgeTest;
