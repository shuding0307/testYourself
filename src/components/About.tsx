import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";

const About: React.FC = () => {
  const { common } = useLanguageStore();
  const { about } = common;

  return (
    <div className="legal-page about-page">
      <h1>{about.title}</h1>
      
      <section className="intro-section">
        <p className="main-description">
          {about.description.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </section>

      <section>
        <h2>{about.whyTitle}</h2>
        <p>
          {about.whyContent.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </section>

      <section>
        <h2>{about.howTitle}</h2>
        <p>
          {about.howContent.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </section>

      <section>
        <h2>{about.valuesTitle}</h2>
        <ul className="values-list">
          {about.values.map((value, i) => (
            <li key={i}>{value}</li>
          ))}
        </ul>
      </section>

      <section className="outro-section">
        <p className="outro-text">{about.outro}</p>
      </section>

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
          margin-bottom: 40px; 
          color: #a777e3; 
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
        }
        .legal-page h2 { 
          margin-top: 40px; 
          margin-bottom: 20px; 
          font-size: 1.5rem;
          color: #333;
          font-weight: 700;
          display: flex;
          align-items: center;
        }
        .legal-page p { 
          margin-bottom: 20px; 
          color: #555;
          text-align: justify;
        }
        .main-description {
          font-size: 1.1rem;
          color: #444 !important;
          font-weight: 500;
        }
        .values-list {
          list-style: none;
          padding-left: 0;
        }
        .values-list li {
          margin-bottom: 12px;
          padding-left: 25px;
          position: relative;
          color: #555;
        }
        .values-list li::before {
          content: "•";
          color: #a777e3;
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 1.2rem;
        }
        .outro-section {
          margin-top: 50px;
          padding-top: 30px;
          border-top: 1px solid #eee;
        }
        .outro-text {
          font-weight: 600;
          color: #a777e3 !important;
          text-align: center !important;
        }
        
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

export default About;
