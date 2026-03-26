import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import "./styles/Home.css";
import "./styles/Common.css";
import MentalAgeTest from "./mentalAge/MentalAgeTest";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DopamineTest from "./dopamine/DopamineTest";
import StrengthTest from "./strengthTest/StrengthTest";
import DessertTest from "./dessertTest/DessertTest";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import TermsOfService from "./components/legal/TermsOfService";
import Contact from "./components/legal/Contact";
import About from "./components/About";
import { useLanguageStore } from "./store/useLanguageStore";

function App() {
  const navigate = useNavigate();
  const { common } = useLanguageStore();

  return (
    <div className="main-container">
      <Header />

      <main className="content-wrapper">
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
                    className="test-card mental-card"
                    onClick={() => navigate("/mental-age")}
                  >
                    <div className="card-icon">🧠</div>
                    <div className="card-content">
                      <div className="card-tag">{common.home.mentalTags}</div>
                      <h2 className="card-title">{common.home.startButton}</h2>
                      <p className="card-description">
                        {common.home.startDescription}
                      </p>
                    </div>
                    <div className="card-arrow">→</div>
                  </div>

                  <div
                    className="test-card dopamine-card"
                    onClick={() => navigate("/dopamine")}
                  >
                    <div className="card-icon">⚡️</div>
                    <div className="card-content">
                      <div className="card-tag">{common.home.dopamineTags}</div>
                      <h2 className="card-title">{common.home.dopamineButton}</h2>
                      <p className="card-description">
                        {common.home.dopamineDescription}
                      </p>
                    </div>
                    <div className="card-arrow">→</div>
                  </div>

                  <div
                    className="test-card strength-card"
                    onClick={() => navigate("/strength")}
                  >
                    <div className="card-icon">💎</div>
                    <div className="card-content">
                      <div className="card-tag">{common.home.strengthTags}</div>
                      <h2 className="card-title">{common.home.strengthButton}</h2>
                      <p className="card-description">
                        {common.home.strengthDescription}
                      </p>
                    </div>
                    <div className="card-arrow">→</div>
                  </div>

                  <div
                    className="test-card dessert-card"
                    onClick={() => navigate("/dessert")}
                  >
                    <div className="card-icon">🍰</div>
                    <div className="card-content">
                      <div className="card-tag">{common.home.dessertTags}</div>
                      <h2 className="card-title">{common.home.dessertButton}</h2>
                      <p className="card-description">
                        {common.home.dessertDescription}
                      </p>
                    </div>
                    <div className="card-arrow">→</div>
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/mental-age" element={<MentalAgeTest />} />
          <Route path="/dopamine" element={<DopamineTest />} />
          <Route path="/strength" element={<StrengthTest />} />
          <Route path="/dessert" element={<DessertTest />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
