// 'use client' means this code is for the client-side (the user's browser)
'use client';

// Import React to create components and hooks for our web page
import React from 'react';
// Import Image component from Next.js to load images efficiently
import Image from 'next/image';
// Import TypeAnimation component to add animated typing effects
import { TypeAnimation } from 'react-type-animation';

// The URL of the PDF resume file
const PDF_FILE_URL = 'http://localhost:3000/resume_pdf.pdf';

// This is the HeroSection component, which shows the introduction part of a webpage
const HeroSection = () => {
  
  // Function to download a file from a given URL
  const downloadFileAtURL = (url) => {
    // Extract the file name from the URL
    const fileName = url.split('/').pop(); // Takes the last part of the URL as the file name
    // Create a temporary anchor tag (a link) to trigger the download
    const aTag = document.createElement('a');
    aTag.href = url; // Set the URL as the link
    aTag.setAttribute('download', fileName); // Set download attribute with the file name
    document.body.appendChild(aTag); // Add this link to the webpage
    aTag.click(); // Simulate a click on the link to download the file
    aTag.remove(); // Remove the link after the file is downloaded
  };

  // Function that runs when the user clicks the "Download CV" or "Hire Me" button
  const handleDownloadCV = () => {
    downloadFileAtURL(PDF_FILE_URL); // Call the download function with the resume URL
  };

  // This is what gets shown on the webpage
  return (
    <section>
      {/* Grid layout for organizing content in two sections: text on the left, image on the right */}
      <div className="grid grid-cols-1 sm:grid-cols-12">
        
        {/* Left section with a greeting and animated text */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-4xl font-extrabold">
            {/* Greeting text with gradient color effect */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m Kenyang!
            </span>
            <br />
            {/* Typing animation that changes text between "Software Engineer", "Web Developer", and "Mobile Developer" */}
            <TypeAnimation
              sequence={[
                'Software Engineer', 500, // Shows "Software Engineer" for 500ms
                'Web Developer', 500, // Then shows "Web Developer"
                'Mobile Developer', 500, // Finally, shows "Mobile Developer"
              ]}
              wrapper="span" // Displays the animated text inside a span element
              speed={50} // Speed of typing
              repeat={Infinity} // The animation repeats forever
            />
          </h1>

          {/* Description below the greeting text */}
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Driven by an unwavering passion for technology, 
            I am on a mission to reshape the world&apos;s landscape, one innovation at a time. 
            Join me in harnessing the boundless potential of technology to create a brighter, 
            more connected future for all.
          </p>
          
          {/* Two buttons: one to "Hire Me" and another to download the CV */}
          <div>
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
              onClick={handleDownloadCV} // Calls the function to download the CV
            >
              Hire Me
            </button>
            <button
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 hover:bg-slate-800 text-white mt-3"
              onClick={handleDownloadCV} // Calls the function to download the CV
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>

        {/* Right section with an image */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            {/* The hero image (like a profile picture or logo) */}
            <Image
              src="/images/hero-image.jpg" // Path to the image
              alt="hero-image" // Description for the image if it doesn't load
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500} // Image width
              height={500} // Image height
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the HeroSection so it can be used on other pages
export default HeroSection;
