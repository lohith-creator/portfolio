import React from 'react';
import profileImage from '../assets/Profile.jpg';// <-- Place with image path

function About() {
  return (
    <section id="about" className="pt-24 px-6 py-12 bg-[#1e2235] text-white">
      <h2 className="text-4xl font-bold text-center mb-2">About Me</h2>
      <p className="text-center text-lg text-gray-300 mb-10">
        Artificial Intelligence Enthusiast
      </p>

      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto space-y-10 md:space-y-0 md:space-x-12">
        {/* Profile Image */}
     <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-md md:mr-8 md:-mt-8 md:-ml-4">
  <img
    src={profileImage}
    alt="Lohith"
    className="w-full h-full object-cover"
  />
</div>



        {/* Intro Text */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-4">Hi There</h3>
          <p className="text-gray-300 leading-relaxed max-w-xl mb-6">
            I'm Lohith Kukkadapu, an AI and Machine Learning enthusiast passionate about
            solving problems using intelligent systems. I love working with technologies
            like Python, React, Flask, and cloud platforms. My focus is on building
            scalable applications that apply ML in creative, real-world scenarios.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-blue-400 font-bold">Name:</p>
              <p>Lohith Kukkadapu</p>
            </div>
            <div>
              <p className="text-blue-400 font-bold">Email:</p>
              <p>kukkadapulohith@gmail.com</p>
            </div>
            <div>
              <p className="text-blue-400 font-bold">Phone:</p>
              <p>+1 331-294-9099</p>
            </div>
            <div>
              <p className="text-blue-400 font-bold">LinkedIn:</p>
              <p>Lohith Kukkadapu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
