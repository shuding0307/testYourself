import React from "react";
import { useLanguageStore } from "../../store/useLanguageStore";

const Contact: React.FC = () => {
  const { footer } = useLanguageStore();

  return (
    <div className="legal-page">
      <h1>{footer.contact}</h1>
      <p>If you have any questions or feedback, please feel free to reach out to us.</p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> support@testyourself.com</p>
      </div>
      
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
        .contact-info {
          margin-top: 30px;
          padding: 20px;
          background: #fdfaff;
          border-radius: 12px;
          border-left: 5px solid #a777e3;
        }
      `}</style>
    </div>
  );
};

export default Contact;
