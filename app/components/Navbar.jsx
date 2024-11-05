// This code sets up a navigation bar for a website
"use client"; // This tells Next.js to render this component on the client side
import React, { useState } from "react"; // Import React and useState to manage state
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the menu button
import { Link } from 'react-scroll'; // Import Link for smooth scrolling to sections
import Image from "next/image"; // Import Image component for images

import NavLink from "./NavLink"; // Import NavLink component for menu items
import MenuOverlay from "./MenuOverlay"; // Import MenuOverlay for mobile menu

// Array containing navigation links with titles and paths
const navLinks = [
  {
    title: "About", // Title of the link
    path: "#about", // ID of the section to scroll to
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  // State to track if the mobile navbar is open or closed
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    // Navigation bar that stays at the top of the page
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* Logo that links to the homepage */}
        <Link href={"/"}>
          <Image src="/images/logo-image.png" alt="logo-image" width={130} height={130} /> {/* Logo image */}
        </Link>

        {/* Mobile menu button */}
        <div className="mobile-menu block md:hidden">
          {/* If the navbar is not open, show the "menu" icon */}
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)} // Opens the menu
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <FaBars className="h-5 w-5" /> {/* Hamburger icon */}
            </button>
          ) : (
            // If the navbar is open, show the "close" icon
            <button
              onClick={() => setNavbarOpen(false)} // Closes the menu
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <FaTimes className="h-5 w-5" /> {/* Close icon */}
            </button>
          )}
        </div>

        {/* Desktop menu items */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {/* Loop through navLinks to create each menu item */}
            {navLinks.map((link, index) => (
              <li key={index}>
                {/* NavLink for each item in the menu */}
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Show the MenuOverlay component if the mobile navbar is open */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

// Export the Navbar component so it can be used in other parts of the app
export default Navbar;
