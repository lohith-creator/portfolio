import React from 'react';
import linkedinLogo from '../assets/linkedin.jpg';
import githubLogo from '../assets/github.jpg';

function Home() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover brightness-75"
      >
        <source src="https://res.cloudinary.com/dhcoqed13/video/upload/v1747869868/icuuyal36w8mestgxwdr.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        {/* Social Logos - Clean Circular Icons */}
        <div className="flex space-x-4 mb-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lohith-kukkadapu-454b571a6/"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/lohith-creator"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
          >
            <img src={githubLogo} alt="GitHub" className="w-8 h-8" />
          </a>
        </div>

        {/* Intro Text */}
        <h1 className="text-white text-5xl font-bold">I am Lohith Kukkadapu</h1>
        <p className="text-white text-xl mt-4">
          Enthusiast in AI, Code & Creative Solutions
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex space-x-4">
          <a
  href="https://drive.google.com/file/d/1s5xwCIlasHL09gnQBw8RMFbeAS31BGgX/view"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-red-500 border-2 border-red-500 text-white rounded-md hover:bg-red-500 transition"
>
  Get Resume
</a>


          <a
            href="#about"
            className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
