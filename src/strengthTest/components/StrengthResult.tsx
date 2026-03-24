import React from "react";
import type { StrengthResult as ResultType } from "../utils/resultCalculator";
import { useLanguageStore } from "../../store/useLanguageStore";
import { strengthTypeStyles } from "../data/types";
import BaseResult from "../../components/common/BaseResult";
import ProgressBar from "../../components/common/ProgressBar";

interface StrengthResultProps {
  result: ResultType;
  onRestart: () => void;
}

const StrengthResult: React.FC<StrengthResultProps> = ({
  result,
  onRestart,
}) => {
  const { transType } = useLanguageStore();
  const style =
    strengthTypeStyles[result.typeKey] ||
    strengthTypeStyles["drive_creativity"];

  const categoryLabels: Record<string, string> = {
    drive: "추진력",
    empathy: "공감 능력",
    creativity: "창의성",
    analytical: "분석력",
    patience: "인내심",
  };

  return (
    <div
      className={`strength-theme result-page-wrapper type-${result.typeKey}`}
      style={{
        background: style.subColor,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "40px 0",
      }}
    >
      <BaseResult
        title={transType.resultTitle}
        icon={result.icon}
        badgeText=""
        desc={result.description}
        onRestart={onRestart}
        restartButtonText={transType.restartButton}
        buttonClass="strength-btn"
        containerClass="strength-result-container"
      >
        <div className="result-header" style={{ marginBottom: "30px" }}>
          <h1
            className="result-title"
            style={{
              fontSize: "2.6rem",
              color: style.mainColor,
              fontWeight: 900,
              marginBottom: "15px",
              padding: "15px 0",
              lineHeight: "1.4",
              background: style.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: style.gradient ? "transparent" : "inherit",
              display: "inline-block",
              wordBreak: "keep-all",
            }}
          >
            {result.title}
          </h1>
        </div>

        <div
          className="strength-analysis"
          style={{ width: "100%", textAlign: "left", marginBottom: "30px" }}
        >
          <h3
            style={{
              fontSize: "1rem",
              color: "#9ca3af",
              fontWeight: 800,
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "4px",
                height: "16px",
                background: style.mainColor,
                borderRadius: "2px",
              }}
            ></span>
            나의 강점 분석
          </h3>
          <div
            className="indices-container"
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {Object.entries(result.percentages).map(([cat, percent]) => (
              <ProgressBar
                key={cat}
                label={categoryLabels[cat]}
                value={percent}
                className={cat}
                style={
                  {
                    "--bar-color":
                      result.typeKey === "drive_patience"
                        ? style.gradient
                        : style.mainColor,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </BaseResult>
    </div>
  );
};

export default StrengthResult;
