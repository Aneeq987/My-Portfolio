"use client";
import React from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Countdown Timer',
      description: 'An interactive Countdown Timer built with Next.js and Tailwind CSS.',
      link: 'https://count-down-timer-eosin.vercel.app/',
      image: '/countdown-timer.png',
    },
    {
      title: 'Todo List',
      description: 'A sleek and responsive Todo List app to manage tasks efficiently.',
      link: 'https://todo-list-7ien.vercel.app/',
      image: '/todo-list.png',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      <section
        id="projects"
        className="flex-grow relative bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 py-16 flex flex-col justify-center"
      >
        
        <div className="absolute inset-0 bg-black bg-opacity-50 blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-yellow-300">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => window.open(project.link, '_blank')}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer hover:scale-105 transform duration-300 ease-in-out"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-300 mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-400 hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
