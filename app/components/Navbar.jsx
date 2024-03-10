"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Image from "next/image"; // Import Image component

import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

// Array of navigation links with titles and corresponding section IDs
const navLinks = [
  {
    title: "About",
    path: "#about", // ID of the section you want to scroll to
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
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    // Navigation bar with a fixed position at the top
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* Logo linking to home page */}
        <Link href={"/"}>
          <Image src="/images/logo-image.png" alt="logo-image" width={130} height={130} /> {/* Updated to use Image */}
        </Link>

        {/* Mobile menu button */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <FaBars className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <FaTimes className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Desktop menu */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {/* Mapping through the array of navLinks to create menu items */}
            {navLinks.map((link, index) => (
              <li key={index}>
                {/* NavLink component for each menu item */}
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Conditional rendering of the MenuOverlay for mobile view */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
