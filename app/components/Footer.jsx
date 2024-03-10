import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        {/* Logo image */}
        <span>
          <Image src="/images/logo-image.png" alt="logo-image" width={120} height={120} />
        </span>
        {/* Copyright text */}
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
