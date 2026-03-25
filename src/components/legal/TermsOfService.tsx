import React from "react";
import { useLanguageStore } from "../../store/useLanguageStore";

const TermsOfService: React.FC = () => {
  const { common } = useLanguageStore();
  const { footer } = common;

  return (
    <div className="legal-page">
      <h1>{footer.terms}</h1>
      <p>Last updated: March 25, 2026</p>
      
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>By using Test Yourself, you agree to these terms. If you do not agree, please do not use the service.</p>
      </section>

      <section>
        <h2>2. Use of Service</h2>
        <p>The tests are for entertainment and self-reflection purposes only. They are not professional psychological diagnoses.</p>
      </section>

      <section>
        <h2>3. Intellectual Property</h2>
        <p>All content on this site is the property of Test Yourself and may not be reproduced without permission.</p>
      </section>
      
      <style>{`
        .legal-page {
          max-width: 800px;
          margin: 40px auto;
          padding: 40px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          line-height: 1.6;
          color: #2c3e50;
        }
        .legal-page h1 { margin-bottom: 30px; color: #a777e3; }
        .legal-page h2 { margin-top: 30px; margin-bottom: 15px; font-size: 1.4rem; }
        .legal-page p { margin-bottom: 15px; color: #7f8c8d; }
        .legal-page section { margin-bottom: 40px; }
      `}</style>
    </div>
  );
};

export default TermsOfService;
