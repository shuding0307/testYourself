import React from "react";
import { useLanguageStore } from "../../store/useLanguageStore";

const PrivacyPolicy: React.FC = () => {
  const { footer } = useLanguageStore();

  return (
    <div className="legal-page">
      <h1>{footer.privacy}</h1>
      <p>Last updated: March 25, 2026</p>
      
      <section>
        <h2>1. Information We Collect</h2>
        <p>We do not collect any personally identifiable information. Test results are processed locally in your browser and are not stored on our servers.</p>
      </section>

      <section>
        <h2>2. Cookies and Tracking</h2>
        <p>We use Google AdSense to serve ads. Google may use cookies to serve ads based on your prior visits to this or other websites.</p>
      </section>

      <section>
        <h2>3. Third Party Services</h2>
        <p>This site uses Google AdSense. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Ads Settings</a>.</p>
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

export default PrivacyPolicy;
