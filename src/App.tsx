import { useState } from "react";
import "./App.css";
import MentalAgeTest from "./mentalAge/MentalAgeTest";
import LanguageSelector from "./components/LanguageSelector";
import DopamineTest from "./dopamine/DopamineTest";
import { useLanguageStore } from "./store/useLanguageStore";

function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "mentalAge" | "dopamine"
  >("home");
  const { transType } = useLanguageStore();

  return (
    <div className="main-container">
      {/* 전역 언어 선택기 */}
      <LanguageSelector />

      {currentPage === "home" ? (
        <div className="home-content">
          <div className="home-logo floating">🧐</div>
          <h1 className="home-title">
            {transType.home.title.split("\n").map((line: string, i: number) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <p className="home-subtitle">{transType.home.subtitle}</p>
          <div className="main-button-group">
            <div
              className="test-card"
              onClick={() => setCurrentPage("mentalAge")}
            >
              <button className="main-test-btn mental-btn">
                {transType.home.startButton}
              </button>
              <p className="test-description">
                {transType.home.startDescription}
              </p>
            </div>

            <div
              className="test-card"
              onClick={() => setCurrentPage("dopamine")}
            >
              <button className="main-test-btn dopamine-btn">
                {transType.home.dopamineButton}
              </button>
              <p className="test-description">
                {transType.home.dopamineDescription}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="test-wrapper">
          <button className="back-btn" onClick={() => setCurrentPage("home")}>
            <span className="back-icon">←</span> {transType.home.backToHome}
          </button>
          {currentPage === "mentalAge" ? <MentalAgeTest /> : <DopamineTest />}
        </div>
      )}
    </div>
  );
}

export default App;
