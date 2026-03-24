import React from "react";
import { useLanguageStore } from "../../store/useLanguageStore";
import BaseResult from "../../components/common/BaseResult";
import ProgressBar from "../../components/common/ProgressBar";

interface MentalAgeResultProps {
  result: {
    mentalAge: string;
    resultTitle: string;
    desc: string;
    comparisonMsg: string;
    icon: string;
    indices: {
      social: number;
      childlike: number;
      stubborn: number;
    };
    specialMsg: string;
  };
  onRestart: () => void;
}

const MentalAgeResult: React.FC<MentalAgeResultProps> = ({
  result,
  onRestart,
}) => {
  const { transType } = useLanguageStore();

  return (
    <BaseResult
      title={transType.resultTitle}
      icon={result.icon}
      badgeText={result.resultTitle}
      desc={result.desc}
      onRestart={onRestart}
      restartButtonText={transType.restartButton}
    >
      <h3>{transType.resultSub}</h3>
      <p className="age-text">{result.mentalAge}</p>

      <div className="indices-container">
        <ProgressBar
          label={transType.indices.childlike}
          value={result.indices.childlike}
          className="childlike"
        />
        <ProgressBar
          label={transType.indices.stubborn}
          value={result.indices.stubborn}
          className="stubborn"
        />
        <ProgressBar
          label={transType.indices.social}
          value={result.indices.social}
          className="social"
        />
      </div>

      {result.specialMsg && <p className="special-msg">{result.specialMsg}</p>}

      <div className="divider"></div>
      <p className="comparison-text">{result.comparisonMsg}</p>
    </BaseResult>
  );
};

export default MentalAgeResult;
