import React, { useState } from 'react';
import DessertIntro from './components/DessertIntro';
import DessertQuestion from './components/DessertQuestion';
import DessertResult from './components/DessertResult';
import { dessertQuestions } from './data/questions';
import { calculateDessertResult } from './utils/resultCalculator';
import type { DessertType } from './data/types';
import './DessertTest.css';

const DessertTest: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'question' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<('A' | 'B' | 'C' | 'D')[]>([]);
  const [result, setResult] = useState<DessertType | null>(null);

  const handleStart = () => {
    setStep('question');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (answer: 'A' | 'B' | 'C' | 'D') => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);

    if (currentQuestionIndex < dessertQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const finalResult = calculateDessertResult(newAnswers);
      setResult(finalResult);
      setStep('result');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setStep('intro');
    }
  };

  const handleRestart = () => {
    setStep('intro');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="dessert-test-wrapper">
      {step === 'intro' && <DessertIntro onStart={handleStart} />}
      {step === 'question' && (
        <DessertQuestion
          currentStep={currentQuestionIndex}
          totalSteps={dessertQuestions.length}
          question={dessertQuestions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}
      {step === 'result' && result && (
        <DessertResult result={result} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default DessertTest;
