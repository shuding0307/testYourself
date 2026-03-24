import React from "react";
import type { StrengthResult as ResultType } from "../utils/resultCalculator";
import { useLanguageStore } from "../../store/useLanguageStore";
import { strengthTypeStyles } from "../data/types";
import BaseResult from "../../components/common/BaseResult";
import ProgressBar from "../../components/common/ProgressBar";
import type { StrengthCategory } from "../data/questions";
import { strengthLongDescs } from "../data/resultsDesc";

interface StrengthResultProps {
  result: ResultType;
  onRestart: () => void;
}

const StrengthResult: React.FC<StrengthResultProps> = ({
  result,
  onRestart,
}) => {
  const { transType, lang } = useLanguageStore();
  const style =
    strengthTypeStyles[result.typeKey] ||
    strengthTypeStyles["drive_creativity"];

  // Use translations from transType.strengthResults
  const characterTrans =
    transType.strengthResults[
      result.typeKey as keyof typeof transType.strengthResults
    ] || transType.strengthResults["default"];
  const displayTitle = characterTrans.title;
  const displayDesc = characterTrans.desc;

  // Get long description
  const longDesc =
    strengthLongDescs[lang][result.typeKey] ||
    strengthLongDescs[lang]["default"];

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
        desc={displayDesc}
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
            {displayTitle}
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
            {transType.strengthAnalysisTitle}
          </h3>
          <div
            className="indices-container"
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {(
              Object.entries(result.percentages) as [StrengthCategory, number][]
            ).map(([cat, percent]) => (
              <ProgressBar
                key={cat}
                label={transType.indices[cat]}
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

        {/* 상세 분석 섹션을 BaseResult 안으로 이동 (다시하기 버튼 위) */}
        <div
          className="strength-long-desc"
          style={{
            width: "100%",
            textAlign: "left",
            marginTop: "20px",
            padding: "20px",
            background: "rgba(255, 255, 255, 0.4)",
            borderRadius: "18px",
            lineHeight: "1.7",
            color: "#4b5563",
            fontSize: "0.95rem",
            wordBreak: "keep-all",
            whiteSpace: "pre-wrap",
            border: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <h4
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              color: style.mainColor,
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            🔍 상세 분석
          </h4>
          {longDesc}
        </div>
      </BaseResult>
    </div>
  );
};

export default StrengthResult;
