// Import React to create our component
import React from 'react';
// Import the NavLink component, which will be used to create links
import NavLink from './NavLink';

// MenuOverlay component for displaying a menu of links
const MenuOverlay = ({ links }) => {
  return (
    // This creates a vertical list of links
    <ul className="flex flex-col py-4 items-center">
      {/* Loop through the array of links to create a list item for each one */}
      {links.map((link, index) => (
        <li key={index}> {/* Each list item needs a unique key */}
          {/* Render each link using the NavLink component */}
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

// Export the MenuOverlay component so it can be used in other parts of the app
export default MenuOverlay;
