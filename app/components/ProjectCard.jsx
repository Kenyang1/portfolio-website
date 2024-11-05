// Import React to use React features like components
import React from 'react';
// Import icons (CodeBracketIcon, EyeIcon) to use for GitHub and preview links
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
// Import Link component to make clickable links that direct to other pages
import Link from 'next/link';

// This is the ProjectCard component. It displays individual project details on the screen.
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        // 'group' here is used for hover effects on multiple items together
        <div className="relative group">
            {/* This div is for the project's image background */}
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                // Set the background image to the project’s image URL and make sure the background covers the space fully
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
            >
                {/* This section appears as an overlay when you hover over the image */}
                <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    {/* GitHub link with the CodeBracketIcon */}
                    <Link href={gitUrl} passHref
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group">
                            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:text-white" />
                    </Link>
                    {/* Preview link with the EyeIcon */}
                    <Link href={previewUrl}
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group">
                            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:text-white" />
                    </Link>
                </div>
            </div>
            {/* This div contains the title and description of the project */}
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                {/* Display the title of the project */}
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                {/* Display the description of the project */}
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    );
};

// Export the ProjectCard component so it can be used in other parts of the app
export default ProjectCard;
