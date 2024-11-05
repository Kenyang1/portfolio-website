// Import React to build this component
import React from "react";
// Import Link component from Next.js for creating links to other pages
import Link from "next/link";
// Import Image component to handle images efficiently in Next.js
import Image from "next/image";

// This is the EmailSection component. It contains a section of the website where people can connect.
const EmailSection = () => {
  return (
    <section
      id="contact" // This is the 'contact' section of the website
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      style={{ zIndex: "1" }} // Makes sure this section appears above other elements
    >
      {/* This div adds a cool purple background blur effect */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stop))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      
      {/* Text section where people are invited to connect */}
      <div className="z-10 relative">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m actively seeking new opportunities and welcome any inquiries or
          greetings you may have. Don&apos;t hesitate to reach out – I&apos;ll do my
          utmost to respond promptly, whether you have a question or simply
          want to connect!
        </p>

        {/* Social media icons with links */}
        <div className="social flex flex-row gap-2">
          {/* Link to your GitHub profile */}
          <Link href="https://github.com/Kenyang1">
            <Image src="/github-icon.svg" alt="Github Icon" width={40} height={40} />
          </Link>
          {/* Link to your LinkedIn profile */}
          <Link href="https://www.linkedin.com/in/kenyanglual/">
            <Image src="/linkedin-icon.svg" alt="Linkedin Icon" width={40} height={40} />
          </Link>
        </div>
      </div>
      
      {/* Right side with an image and a contact form */}
      <div>
        {/* Bunny image for decoration */}
        <div className="relative">
          <Image
            src="/images/bunny.png"
            alt="Bunny Image" // Alt text is for accessibility and in case the image fails to load
            width={250}
            height={250}
          />
        </div>

        {/* Contact form to send a message */}
        <form
          action="https://getform.io/f/lbjnneqb" // Where the form data will be sent
          method="POST" // The form will use POST to send the data
          className="flex flex-col"
        >
          {/* Email input field */}
          <div className="mb-6">
            <label
              htmlFor="email" // Label for the email input
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email" // The name of this field in the form
              type="email" // Specifies that this input is for email addresses
              id="email" // Links the label and input together
              required // This field is required to submit the form
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jimmy.neutron.genius@gmail.com" // Example placeholder text
            />
          </div>

          {/* Subject input field */}
          <div className="mb-6">
            <label
              htmlFor="subject" // Label for the subject input
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject" // Name of this field in the form
              type="text" // Regular text input
              id="subject"
              required // This field is also required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi!" // Placeholder text
            />
          </div>

          {/* Message textarea for writing longer messages */}
          <div className="mb-6">
            <label
              htmlFor="message" // Label for the message textarea
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message" // Name of this field
              id="message" // Links the label and textarea
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..." // Placeholder text
            />
          </div>

          {/* Submit button to send the form */}
          <button
            type="submit" // Button submits the form
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

// Export the EmailSection component so it can be used elsewhere in the project
export default EmailSection;
