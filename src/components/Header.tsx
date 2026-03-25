import React from "react";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="site-header">
      <div className="header-content">
        <div className="header-left">
          <div className="header-logo-container" onClick={() => navigate("/")}>
            <span className="header-logo-emoji">🧐</span>
            <div className="header-logo-text-wrapper">
              <span className="header-logo-text">Naora</span>
              <span className="header-logo-subtext">test yourself</span>
            </div>
          </div>
        </div>

        <div className="header-right">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
