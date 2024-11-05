// This code creates a button for each project tag that can be clicked to filter projects
import React from "react"; // Import React to use its features

// The ProjectTag component takes in three props: name, onClick, and isSelected
const ProjectTag = ({ name, onClick, isSelected }) => {
  // Set button styles based on whether this tag is selected or not
  const buttonStyles = isSelected
    ? "text-white border-purple-500" // Styles for selected tag
    : "text-[#ADB7BE] border-slate-600 hover:border-white"; // Styles for unselected tag

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`} // Combine styles for the button
      onClick={() => onClick(name)} // Call the onClick function with the tag name when the button is clicked
    >
      {name} {/* Display the tag name on the button */}
    </button>
  );
};

// Export the ProjectTag component to use it in other parts of the app
export default ProjectTag;
