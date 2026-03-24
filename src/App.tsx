import { useState } from "react";
import "./App.css";
import MentalAgeTest from "./mentalAge/MentalAgeTest";
import { translations, type Language } from "./mentalAge/data/translations";
import LanguageSelector from "./mentalAge/components/LanguageSelector";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "mentalAge">("home");
  const [lang, setLang] = useState<Language>("ko");

  const t = translations[lang];

  return (
    <div className="main-container">
      {/* 전역 언어 선택기 */}
      <LanguageSelector lang={lang} setLang={setLang} />

      {currentPage === "home" ? (
        <div className="home-content">
          <div className="home-logo floating">🧐</div>
          <h1 className="home-title">
            {t.home.title.split('\n').map((line: string, i: number) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
          <p className="home-subtitle">{t.home.subtitle}</p>
          <button 
            className="main-test-btn" 
            onClick={() => setCurrentPage("mentalAge")}
          >
            {t.home.startButton}
          </button>
        </div>
      ) : (
        <div className="test-wrapper">
          <button className="back-btn" onClick={() => setCurrentPage("home")}>
            <span className="back-icon">←</span> {t.home.backToHome}
          </button>
          <MentalAgeTest externalLang={lang} onExternalLangChange={setLang} />
        </div>
      )}
    </div>
  );
}

export default App;
