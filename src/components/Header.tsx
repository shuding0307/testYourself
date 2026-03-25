import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useLanguageStore } from "../store/useLanguageStore";
import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { common } = useLanguageStore();

  const isHome = location.pathname === "/";

  return (
    <header className="site-header">
      <div className="header-content">
        <div className="header-left">
          {!isHome && (
            <button className="header-back-btn" onClick={() => navigate("/")}>
              <span className="back-icon">←</span> {common.home.backToHome}
            </button>
          )}
          {isHome && (
            <div className="header-logo-container" onClick={() => navigate("/")}>
              <span className="header-logo-emoji">🧐</span>
              <span className="header-logo-text">Test Yourself</span>
            </div>
          )}
        </div>

        <div className="header-right">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
