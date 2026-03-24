import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import MentalAgeTest from "./mentalAge/MentalAgeTest";
import Header from "./components/Header";
import DopamineTest from "./dopamine/DopamineTest";
import StrengthTest from "./strengthTest/StrengthTest";
import { useLanguageStore } from "./store/useLanguageStore";

function App() {
  const navigate = useNavigate();
  const { common } = useLanguageStore();

  return (
    <div className="main-container">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <div className="home-content">
              <div className="home-logo floating">🧐</div>
              <h1 className="home-title">
                {common.home.title
                  .split("\n")
                  .map((line: string, i: number) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
              </h1>
              <p className="home-subtitle">{common.home.subtitle}</p>
              <div className="main-button-group">
                <div
                  className="test-card"
                  onClick={() => navigate("/mental-age")}
                >
                  <button className="main-test-btn mental-btn">
                    {common.home.startButton}
                  </button>
                  <p className="test-description">
                    {common.home.startDescription}
                  </p>
                </div>

                <div className="test-card" onClick={() => navigate("/dopamine")}>
                  <button className="main-test-btn dopamine-btn">
                    {common.home.dopamineButton}
                  </button>
                  <p className="test-description">
                    {common.home.dopamineDescription}
                  </p>
                </div>

                <div className="test-card" onClick={() => navigate("/strength")}>
                  <button className="main-test-btn strength-btn">
                    {common.home.strengthButton}
                  </button>
                  <p className="test-description">
                    {common.home.strengthDescription}
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
