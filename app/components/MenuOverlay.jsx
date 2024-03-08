// MenuOverlay component for the portfolio website
import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links }) => {
  return (
    // List of links displayed vertically
    <ul className="flex flex-col py-4 items-center">
      {/* Mapping through the array of links */}
      {links.map((link, index) => (
        <li key={index}>
          {/* Each link is rendered using the NavLink component */}
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
