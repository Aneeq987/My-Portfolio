"use client";
import Footer from '@/components/Footer';
import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section id="about" className="relative flex-grow bg-gradient-to-r from-purple-600 via-blue-600 to-purple-500 py-20 flex flex-col justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            <div className="flex justify-center">
              <Image
                src="/profile.png"
                alt="Profile"
                width={256}
                height={256}
                className="rounded-full shadow-lg shadow-gray-900"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-300">About Me</h2>
              <p className="mt-4">
                Hello! I’m a passionate developer with expertise in building
                beautiful, functional, and responsive websites. I enjoy turning ideas into
                reality with code and continuously improving my skills.
              </p>
              <p className="mt-4">
                Beyond coding, I love exploring new technologies, reading books, and spending
                time outdoors.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
