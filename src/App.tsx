import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import MentalAgeTest from "./mentalAge/MentalAgeTest";
import LanguageSelector from "./components/LanguageSelector";
import DopamineTest from "./dopamine/DopamineTest";
import StrengthTest from "./strengthTest/StrengthTest";
import { useLanguageStore } from "./store/useLanguageStore";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { transType } = useLanguageStore();

  const isHome = location.pathname === "/";

  return (
    <div className="main-container">
      {/* 전역 언어 선택기 */}
      <LanguageSelector />

      {!isHome && (
        <div className="test-wrapper">
          <button className="back-btn" onClick={() => navigate("/")}>
            <span className="back-icon">←</span> {transType.home.backToHome}
          </button>
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <div className="home-content">
              <div className="home-logo floating">🧐</div>
              <h1 className="home-title">
                {transType.home.title
                  .split("\n")
                  .map((line: string, i: number) => (
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
                  onClick={() => navigate("/mental-age")}
                >
                  <button className="main-test-btn mental-btn">
                    {transType.home.startButton}
                  </button>
                  <p className="test-description">
                    {transType.home.startDescription}
                  </p>
                </div>

                <div className="test-card" onClick={() => navigate("/dopamine")}>
                  <button className="main-test-btn dopamine-btn">
                    {transType.home.dopamineButton}
                  </button>
                  <p className="test-description">
                    {transType.home.dopamineDescription}
                  </p>
                </div>

                <div className="test-card" onClick={() => navigate("/strength")}>
                  <button className="main-test-btn strength-btn">
                    {transType.home.strengthButton}
                  </button>
                  <p className="test-description">
                    {transType.home.strengthDescription}
                  </p>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/mental-age" element={<MentalAgeTest />} />
        <Route path="/dopamine" element={<DopamineTest />} />
        <Route path="/strength" element={<StrengthTest />} />
      </Routes>
    </div>
  );
}

export default App;
