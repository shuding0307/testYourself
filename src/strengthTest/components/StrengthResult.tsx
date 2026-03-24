import React from "react";
import type { StrengthResult as ResultType } from "../utils/resultCalculator";
import { useLanguageStore } from "../../store/useLanguageStore";
import { strengthTypeStyles } from "../data/types";

interface StrengthResultProps {
  result: ResultType;
  onRestart: () => void;
}

const StrengthResult: React.FC<StrengthResultProps> = ({ result, onRestart }) => {
  const { transType } = useLanguageStore();
  const style = strengthTypeStyles[result.typeKey] || strengthTypeStyles["drive_creativity"];

  const categoryLabels: Record<string, string> = {
    drive: "추진력",
    empathy: "공감 능력",
    creativity: "창의성",
    analytical: "분석력",
    patience: "인내심"
  };

  return (
    <div className={`strength-theme result-page type-${result.typeKey}`} style={{ 
      background: style.subColor,
      minHeight: '100vh',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    }}>
      <div className="result-card" style={{
        background: '#ffffff',
        borderRadius: result.typeKey === 'empathy_patience' || result.typeKey === 'patience_creativity' ? '40px' : '24px',
        padding: '40px 30px',
        width: '600px',
        maxWidth: '90vw',
        minHeight: '600px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        border: result.typeKey === 'analytical_drive' || result.typeKey === 'analytical_empathy' ? `1px solid ${style.mainColor}33` : 'none',
        transform: result.typeKey === 'drive_creativity' ? 'skewY(-1deg)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* Decorative elements for creativity */}
        {result.typeKey === 'creativity_drive' && (
          <>
            <div style={{ position: 'absolute', top: -20, left: -20, width: 80, height: 80, borderRadius: '50%', background: style.mainColor, opacity: 0.2 }}></div>
            <div style={{ position: 'absolute', bottom: -10, right: -10, width: 60, height: 60, background: style.subColor, transform: 'rotate(45deg)', opacity: 0.3 }}></div>
          </>
        )}

        <div className="result-header">
          <span className="result-icon" style={{ 
            fontSize: '5rem', 
            display: 'block', 
            marginBottom: '20px',
            filter: result.typeKey === 'empathy_patience' ? 'drop-shadow(0 5px 15px rgba(255,143,177,0.4))' : 'none'
          }}>
            {result.icon}
          </span>
          <h1 className="result-title" style={{ 
            fontSize: '2.2rem', 
            color: style.mainColor, 
            fontWeight: 900,
            marginBottom: '10px',
            background: style.gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: style.gradient ? 'transparent' : 'inherit'
          }}>
            {result.title}
          </h1>
          <div className="atmosphere-tags" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
            {style.atmosphere.map(tag => (
              <span key={tag} style={{ 
                background: `${style.mainColor}15`, 
                color: style.mainColor, 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '0.85rem', 
                fontWeight: 700 
              }}>
                #{tag}
              </span>
            ))}
          </div>
          <p className="result-desc" style={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.6, 
            color: '#4b5563', 
            fontWeight: 500,
            wordBreak: 'keep-all'
          }}>
            {result.description}
          </p>
        </div>

        <div className="strength-analysis" style={{ marginTop: '40px', textAlign: 'left' }}>
          <h3 style={{ 
            fontSize: '1rem', 
            color: '#9ca3af', 
            fontWeight: 800, 
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ width: '4px', height: '16px', background: style.mainColor, borderRadius: '2px' }}></span>
            나의 강점 분석
          </h3>
          
          <div className="percentage-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {Object.entries(result.percentages).map(([cat, percent]) => (
              <div key={cat} className="analysis-item">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 700 }}>
                  <span style={{ color: '#374151' }}>{categoryLabels[cat]}</span>
                  <span style={{ color: style.mainColor }}>{percent}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#f3f4f6', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ 
                    width: `${percent}%`, 
                    height: '100%', 
                    background: result.typeKey === 'drive_patience' ? style.gradient : style.mainColor,
                    borderRadius: '4px',
                    transition: 'width 1s ease-out'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="point-box" style={{ 
          marginTop: '30px', 
          padding: '20px', 
          background: `${style.mainColor}08`, 
          borderRadius: '16px',
          borderLeft: `4px solid ${style.mainColor}`
        }}>
          <p style={{ fontSize: '0.85rem', color: style.mainColor, fontWeight: 800, marginBottom: '5px' }}>✨ Style Point</p>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', fontWeight: 600 }}>{style.point}</p>
        </div>

        <button 
          className="restart-btn" 
          onClick={onRestart} 
          style={{ 
            background: style.gradient || style.mainColor,
            color: '#fff',
            width: '100%', 
            marginTop: '40px',
            padding: '20px',
            borderRadius: '18px',
            fontSize: '1.1rem',
            fontWeight: '800',
            border: 'none',
            cursor: 'pointer',
            boxShadow: `0 10px 20px ${style.mainColor}33`,
            transition: 'transform 0.2s'
          }}
        >
          {transType.restartButton}
        </button>
      </div>
    </div>
  );
};

export default StrengthResult;
