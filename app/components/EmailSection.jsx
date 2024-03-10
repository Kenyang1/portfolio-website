import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      style={{ zIndex: "1" }} // Set a higher z-index to ensure it's above the navbar
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stop))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 relative"> {/* Adjust z-index */}
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm actively seeking new opportunities and welcome any inquiries or
          greetings you may have. Don't hesitate to reach out – I'll do my
          utmost to respond promptly, whether you have a question or simply
          want to connect!
        </p>
        <div className="social flex flex-row gap-2">
          <Link href="https://github.com/Kenyang1">
            <Image src="/github-icon.svg" alt="Github Icon" width={40} height={40} />
          </Link>
          <Link href="https://www.linkedin.com/in/kenyanglual/">
            <Image src="/linkedin-icon.svg" alt="Linkedin Icon" width={40} height={40} />
          </Link>
        </div>
      </div>
      <div>
        {/* Ensure proper positioning of the bunny image */}
        <div className="relative">
          <Image
            src="/images/bunny.png"
            alt="Bunny Image"
            width={250} // Set the width directly
            height={250} // Set the height directly
          />
        </div>
        <form
          action="https://getform.io/f/lbjnneqb"
          method="POST"
          className="flex flex-col"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jimmy.neutron.genius@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
