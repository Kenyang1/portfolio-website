"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return ( 
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px16">
                <Image src="/images/about-image.jpg" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sapiente ipsum error quidem corporis non sunt ea culpa, 
                        at sint vero velit, exercitationem pariatur necessitatibus odio, 
                        illum consequuntur minima deserunt reprehenderit. Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Consequuntur nulla inventore fugiat quis 
                        magnam totam voluptas omnis excepturi assumenda, provident labore. 
                        Dolore eaque, deserunt aperiam blanditiis enim odio molestiae ratione?
                    </p>
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
                    <div className="mt-8">{TAB_DATA.find((t) => t.id ==tab).content} </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

