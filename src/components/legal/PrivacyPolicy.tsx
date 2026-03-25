import React from "react";
import { useLanguageStore } from "../../store/useLanguageStore";

const PrivacyPolicy: React.FC = () => {
  const { common } = useLanguageStore();
  const { privacy } = common;

  return (
    <div className="legal-page">
      <h1>{privacy.title}</h1>
      <p className="last-updated">{privacy.lastUpdated}</p>
      
      {privacy.sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
      
      <style>{`
        .legal-page {
          max-width: 800px;
          margin: 40px auto;
          padding: 60px 40px;
          background: white;
          border-radius: 30px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.05);
          line-height: 1.8;
          color: #2c3e50;
        }
        .legal-page h1 { 
          margin-bottom: 10px; 
          color: #a777e3; 
          font-size: 2.5rem;
          font-weight: 800;
        }
        .last-updated {
          color: #999;
          font-size: 0.9rem;
          margin-bottom: 50px;
          border-bottom: 1px solid #eee;
          padding-bottom: 20px;
        }
        .legal-page h2 { 
          margin-top: 40px; 
          margin-bottom: 20px; 
          font-size: 1.5rem;
          color: #333;
          font-weight: 700;
        }
        .legal-page p { 
          margin-bottom: 20px; 
          color: #555;
          text-align: justify;
        }
        .legal-page section { margin-bottom: 20px; }
        
        @media (max-width: 600px) {
          .legal-page {
            margin: 20px;
            padding: 40px 20px;
          }
          .legal-page h1 { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
