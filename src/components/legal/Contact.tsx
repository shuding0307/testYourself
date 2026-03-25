import React, { useState } from "react";
import { useLanguageStore } from "../../store/useLanguageStore";

const Contact: React.FC = () => {
  const { common: t } = useLanguageStore();
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  // 이메일 주소를 조각내어 봇 크롤링을 방어합니다.
  const emailUser = "testyourself.26.contact";
  const emailDomain = "gmail.com";
  const fullEmail = `${emailUser}@${emailDomain}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactT = (t as any).contact || {
    title: "Contact Us",
    subtitle: "Have any questions or feedback?",
    description: "If you have any inconveniences or ideas to suggest while using the service, please let us know. Your feedback is a great help.",
    emailLabel: "Email Address",
    revealButton: "Show Email",
    copyButton: "Copy Address",
    copied: "Copied!",
    businessHours: "We will respond within 2-3 business days."
  };

  return (
    <div className="legal-page">
      <h1>{contactT.title}</h1>
      <p className="contact-subtitle">{contactT.subtitle}</p>
      
      <div className="contact-card">
        <p className="contact-description">
          {contactT.description}
        </p>

        <div className="email-section">
          <span className="email-label">{contactT.emailLabel}:</span>
          <div className="email-display-wrapper">
            {showEmail ? (
              <div className="email-revealed">
                <span className="email-text">{fullEmail}</span>
                <button 
                  className={`copy-btn ${copied ? 'copied' : ''}`}
                  onClick={handleCopy}
                >
                  {copied ? contactT.copied : contactT.copyButton}
                </button>
              </div>
            ) : (
              <button 
                className="reveal-btn"
                onClick={() => setShowEmail(true)}
              >
                {contactT.revealButton}
              </button>
            )}
          </div>
        </div>

        <p className="business-hours">
          <small>{contactT.businessHours}</small>
        </p>
      </div>
      
      <style>{`
        .legal-page {
          max-width: 800px;
          margin: 40px auto;
          padding: 40px 20px;
          background: #fdfbff;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
          line-height: 1.6;
          color: #2c3e50;
          text-align: center;
        }
        .legal-page h1 { 
          margin-bottom: 10px; 
          color: #a777e3; 
          font-size: 2.5rem;
          font-weight: 800;
        }
        .contact-subtitle {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 40px;
        }
        .contact-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.02);
          border: 1px solid #f0f0f0;
        }
        .contact-description {
          margin-bottom: 30px;
          color: #555;
          text-align: left;
        }
        .email-section {
          margin: 30px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        .email-label {
          font-weight: 700;
          color: #2c3e50;
        }
        .email-display-wrapper {
          min-height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .reveal-btn {
          padding: 12px 30px;
          background: #a777e3;
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(167, 119, 227, 0.3);
        }
        .reveal-btn:hover {
          background: #9254de;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(167, 119, 227, 0.4);
        }
        .email-revealed {
          display: flex;
          align-items: center;
          gap: 15px;
          background: #f8f0ff;
          padding: 8px 8px 8px 20px;
          border-radius: 12px;
          border: 1px dashed #a777e3;
          animation: fadeIn 0.5s ease;
        }
        .email-text {
          font-family: monospace;
          font-size: 1.1rem;
          color: #6e45e2;
        }
        .copy-btn {
          padding: 8px 16px;
          background: white;
          border: 1px solid #a777e3;
          color: #a777e3;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .copy-btn:hover {
          background: #a777e3;
          color: white;
        }
        .copy-btn.copied {
          background: #52c41a;
          border-color: #52c41a;
          color: white;
        }
        .business-hours {
          margin-top: 30px;
          color: #999;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 600px) {
          .email-revealed {
            flex-direction: column;
            padding: 20px;
            width: 100%;
          }
          .legal-page {
            padding: 30px 15px;
            margin: 20px auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
