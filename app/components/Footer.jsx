// Import React to use React components
import React from "react";
// Import Image component from Next.js for handling images efficiently
import Image from "next/image";

// Footer component to show a section at the bottom of the webpage
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      {/* Container to hold the content in the footer */}
      <div className="container p-12 flex justify-between">
        
        {/* Logo image on the left side of the footer */}
        <span>
          <Image 
            src="/images/logo-image.png" // Path to the logo image file
            alt="logo-image" // Description for the image if it doesn't load
            width={120} // Width of the logo image
            height={120} // Height of the logo image
          />
        </span>
        
        {/* Text to show copyright information on the right side */}
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

// Export the Footer component so it can be used on other pages
export default Footer;
