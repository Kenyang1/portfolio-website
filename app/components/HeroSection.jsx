'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

// URL of the PDF resume file
const PDF_FILE_URL = 'http://localhost:3000/resume_pdf.pdf';

// Function to download a file from a given URL
const HeroSection = () => {
  const downloadFileAtURL = (url) => {
    // Extracting the file name from the URL
    const fileName = url.split('/').pop();
    // Creating an anchor tag to trigger the download
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  // Function to handle the download button click
  const handleDownloadCV = () => {
    downloadFileAtURL(PDF_FILE_URL);
  };

  // Return the JSX for the Hero Section
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm Kenyang!
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Software Engineer',
                500,
                'Web Developer',
                500,
                'Mobile Developer',
                500,
              ]}
              wrapper="span" // Changed to lowercase "span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* Hero Section description */}
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Driven by an unwavering passion for technology, 
            I am on a mission to reshape the world's landscape, one innovation at a time. 
            Join me in harnessing the boundless potential of technology to create a brighter, 
            more connected future for all.
          </p>
          {/* Buttons to hire and download CV */}
          <div>
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
              onClick={handleDownloadCV}
            >
              Hire Me
            </button>
            <button
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 hover:bg-slate-800 text-white mt-3"
              onClick={handleDownloadCV}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        {/* Image section on the right */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.jpg"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;