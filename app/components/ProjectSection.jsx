// This code sets up a section to display project cards with filtering by tags
"use client"; // This tells Next.js to render this component on the client side
import React, { useState } from 'react'; // Import React and useState to manage state
import ProjectCard from './ProjectCard'; // Import the ProjectCard component for individual project cards
import ProjectTag from './ProjectTag'; // Import the ProjectTag component for filtering options

// Data for projects, each with details like title, description, and tags
const projectData = [
  {
    id: 1,
    title: "Bank Account Application Window Forms",
    description: "Project 1 description",
    image: "/images/1.png",
    tag: ["All", "Web"], // Tags for filtering
    gitUrl: "https://github.com/Kenyang1/Bank-Account-Web-Application", // Link to GitHub
    previewUrl: "/", // Link to the project preview
  },
  { 
    id: 2,
    title: "Project 2",
    description: "Project 2 description",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // ... more project objects
];

const ProjectSection = () => {
  // State to keep track of the selected tag for filtering
  const [tag, setTag] = useState("All"); // Default is "All"

  // Function to change the selected tag
  const handleTagChange = (newTag) => {
    setTag(newTag); // Update the selected tag
  };

  // Filter projects based on the selected tag
  const filteredProjects = projectData.filter((project) => 
    project.tag.includes(tag) // Check if the project's tags include the selected tag
  );

  return (
    <section id="projects"> {/* Section for projects */}
      <h2 className="text-center text-4xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          My Projects
        </span>
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* ProjectTag components for selecting tags */}
        <ProjectTag 
          onClick={handleTagChange} // Call handleTagChange when clicked
          name="All" // Tag name
          isSelected={tag === "All"} // Check if this tag is selected
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name="Web" 
          isSelected={tag === "Web"} 
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name="Mobile" 
          isSelected={tag === "Mobile"} 
        />
      </div>
      {/* Grid to display the project cards that match the selected tag */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id} // Unique key for each project card
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

// Export the ProjectSection component so it can be used in other parts of the app
export default ProjectSection;
