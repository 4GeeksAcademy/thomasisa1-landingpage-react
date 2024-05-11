import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Your Website:
        <a className="text-dark" href="#">YourWebsite.com</a>
      </div>
    </footer>
  );
};

export default Footer;