// This component defines the About Section of the portfolio website
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Data for the tabs (Skills, Education, Experience)
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>MySQL</li>
                <li>C++</li>
                <li>C#</li>
                <li>Python</li>
                <li>React</li>
                <li>JavaScript</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Southern New Hampshire University</li>
                <li>Manchester Memorial High School</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Headstart Fellowship Fall 2023-Present</li>
                <li>SEO First Year Academy Winter 2024-Present</li>
                <li>ColorStack Fellowship Fall 2023-Present</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    // Function to handle tab changes
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    // Return the JSX for the About Section
    return ( 
        <section id="about" className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px16">
                {/* Image section on the left */}
                <Image src="/images/about-image.jpg" width={500} height={500} alt="About Me Image" />
                {/* Content section on the right */}
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    {/* Main description */}
                    <p className="text-base lg:text-lg">
                        I&apos;m a freshman at Southern New Hampshire University 
                        from Manchester, NH. I&apos;m majoring in Computer Science and deeply involved in Breakthrough 
                        Manchester, helping high schoolers with college prep. My coursework includes Intro to 
                        App Development, Fundamentals of Programming, Calculus, and Discrete Mathematics. 
                        Outside CS, I love reading, writing, playing music, and watching anime. My favorite anime
                        of all time is Naruto! I&apos;m also part of the Computer Science Student Association, 
                        keen on software engineering and artificial intelligence.
                    </p>
                    {/* Tab buttons */}
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"} 
                        > 
                            Skills 
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"} 
                        > 
                            Education 
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("experience")} 
                            active={tab === "experience"} 
                        > 
                            Experience 
                        </TabButton>
                    </div>
                    {/* Render content based on selected tab */}
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
