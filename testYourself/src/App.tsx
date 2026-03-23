import { useState } from "react";
import "./App.css";
import MentalAgeTest from "./mentalAge/MentalAgeTest";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "mentalAge">("home");

  return (
    <div className="main-container">
      {currentPage === "home" ? (
        <div className="home-content">
          <div className="home-logo">🧐</div>
          <h1 className="home-title">나를 알아가는<br />테스트 플랫폼</h1>
          <p className="home-subtitle">당신의 내면을 들여다보는 시간</p>
          <button 
            className="main-test-btn" 
            onClick={() => setCurrentPage("mentalAge")}
          >
            정신연령 테스트 시작하기
          </button>
        </div>
      ) : (
        <div className="test-wrapper">
          <button className="back-btn" onClick={() => setCurrentPage("home")}>
            <span className="back-icon">←</span> 처음으로
          </button>
          <MentalAgeTest />
        </div>
      )}
    </div>
  );
}

export default App;
