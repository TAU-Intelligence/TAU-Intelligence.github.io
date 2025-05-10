import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} TAU Intelligence. All rights reserved.</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          margin-top: 4rem;
          padding: 2rem 0;
          border-top: 1px solid rgba(230, 116, 23, 0.3);
          text-align: center;
        }
      `}</style>
    </footer>
  );
};

export default Footer;