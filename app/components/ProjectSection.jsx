"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

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
        // copy and paste this information when you have more projects to display
    },
    { 
        id: 3,
        title: "Project 3",
        description: "Project 3 description",
        image: "/images/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
        // copy and paste this information when you have more projects to display
    },
    { 
        id: 4,
        title: "Project 4",
        description: "Project 4 description",
        image: "/images/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
        // copy and paste this information when you have more projects to display
    },
    { 
        id: 5,
        title: "Project 5",
        description: "Project 5 description",
        image: "/images/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
        // copy and paste this information when you have more projects to display
    },
    { 
        id: 6,
        title: "Project 6",
        description: "Project 6 description",
        image: "/images/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
        // copy and paste this information when you have more projects to display
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectData.filter((project) => 
        project.tag.includes(tag)
    );

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4">
                My Projects
                </h2>
                <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                    <ProjectTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag == "All"} 
                    />
                    <ProjectTag 
                    onClick={handleTagChange} 
                    name="Web" 
                    isSelected={tag == "Web"} 
                    />
                    <ProjectTag 
                    onClick={handleTagChange} 
                    name="Mobile" 
                    isSelected={tag == "Mobile"} 
                    />
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        tags={project.tags}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectSection;
