"use client";
// ProjectSection component to display project cards based on selected tags
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

// Data for projects with their details
const projectData = [
  {
    id: 1,
    title: "Bank Account Application Window Forms",
    description: "Project 1 description",
    image: "/images/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
  { 
    id: 3,
    title: "Project 3",
    description: "Project 3 description",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  { 
    id: 4,
    title: "Project 4",
    description: "Project 4 description",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  { 
    id: 5,
    title: "Project 5",
    description: "Project 5 description",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  { 
    id: 6,
    title: "Project 6",
    description: "Project 6 description",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  // State to keep track of the selected tag
  const [tag, setTag] = useState("All");

  // Function to handle tag change
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Filtered projects based on the selected tag
  const filteredProjects = projectData.filter((project) => 
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          My Projects
        </span>
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* ProjectTag components for filtering */}
        <ProjectTag 
          onClick={handleTagChange} 
          name="All" 
          isSelected={tag === "All"} 
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
      {/* Grid to display filtered project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
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

export default ProjectSection;
