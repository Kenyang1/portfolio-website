import React from "react";

const Footer = () => {
  return (
    // Footer section
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        {/* Logo image */}
        <span>
          <img src="/images/logo-image.png" alt="logo-image" style={{ width: '120px' }} />
        </span>
        {/* Copyright text */}
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;