import React from "react";
import { Link } from "react-router-dom";
import { useLanguageStore } from "../store/useLanguageStore";

const Footer: React.FC = () => {
  const { common } = useLanguageStore();
  const { footer } = common;

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-info">
            <h3 className="footer-logo">🧐 Test Yourself</h3>
            <p className="footer-description">{footer.description}</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Platform</h4>
              <Link to="/">{footer.about}</Link>
              <Link to="/contact">{footer.contact}</Link>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <Link to="/privacy">{footer.privacy}</Link>
              <Link to="/terms">{footer.terms}</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-rights">{footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
