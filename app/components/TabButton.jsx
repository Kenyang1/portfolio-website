// TabButton component for rendering tab buttons
import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
    // Set button classes based on active state
    const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]';

    return (
        <button onClick={selectTab}>
            {/* Render tab button with appropriate classes */}
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
};

export default TabButton;
