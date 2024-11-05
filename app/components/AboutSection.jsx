// 'use client' tells the code that this is running in a client-side environment (the browser)
"use client";

// Import necessary features from React
import React, { useTransition, useState } from "react";
// Import Image component to easily handle images in Next.js
import Image from "next/image";
// Import TabButton component, which will be used to create the clickable buttons for each tab
import TabButton from "./TabButton";

// Here we define the data for each tab (Skills, Education, and Experience)
const TAB_DATA = [
    {
        title: "Skills", // The name of the tab
        id: "skills",    // A unique ID to identify this tab
        content: (       // What will be shown when this tab is selected
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
        title: "Education", // The second tab for education information
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Southern New Hampshire University</li>
                <li>Manchester Memorial High School</li>
            </ul>
        ),
    },
    {
        title: "Experience", // The third tab for work/experience info
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
    // 'tab' keeps track of which tab is currently selected. 'setTab' is used to change it. Default is "skills"
    const [tab, setTab] = useState("skills");
    // 'isPending' tracks whether the transition to a new tab is happening, and 'startTransition' allows us to manage the tab change.
    const [isPending, startTransition] = useTransition();

    // Function to handle tab changes when a button is clicked
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id); // Change the selected tab to the new one (based on its 'id')
        });
    };

    // JSX that returns the structure of the About section
    return (
        <section id="about" className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px16">
                {/* This is where the image goes on the left side */}
                <Image src="/images/about-image.jpg" width={500} height={500} alt="About Image" /> {/* Add alt prop */}
                {/* This part is the text content on the right side */}
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    {/* The main paragraph describing yourself */}
                    <p className="text-base lg:text-lg">
                        I&apos;m a freshman at Southern New Hampshire University 
                        from Manchester, NH. I&apos;m majoring in Computer Science and deeply involved in Breakthrough 
                        Manchester, helping high schoolers with college prep. My coursework includes Intro to 
                        App Development, Fundamentals of Programming, Calculus, and Discrete Mathematics. 
                        Outside CS, I love reading, writing, playing music, and watching anime. My favorite anime
                        of all time is Naruto! I&apos;m also part of the Computer Science Student Association, 
                        keen on software engineering and artificial intelligence.
                    </p>
                    {/* The three buttons for changing between tabs (Skills, Education, Experience) */}
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
                    {/* Shows the content based on the selected tab (Skills, Education, or Experience) */}
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Export the AboutSection component so it can be used in other parts of the app
export default AboutSection;
