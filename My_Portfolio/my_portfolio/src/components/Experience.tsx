"use client";
import React from 'react';

type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions',
      duration: 'Jan 2022 - Present',
      description:
        'Developed modern web applications using React.js and Tailwind CSS. Focused on performance optimization and user-centric design.',
    },
    {
      role: 'UI/UX Designer',
      company: 'Creative Agency',
      duration: 'Mar 2020 - Dec 2021',
      description:
        'Designed intuitive user interfaces and conducted user testing to ensure seamless user experiences.',
    },
    {
      role: 'Intern',
      company: 'Startup Inc.',
      duration: 'Jun 2019 - Feb 2020',
      description:
        'Collaborated on building responsive websites and participated in brainstorming sessions for innovative solutions.',
    },
  ];

  return (
    <section id="experience" className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-purple-500 py-16">
      <div className="absolute inset-0 bg-black bg-opacity-50 blur-sm"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-white">
                {exp.role} - <span className="text-yellow-300">{exp.company}</span>
              </h3>
              <p className="text-gray-300 text-sm">{exp.duration}</p>
              <p className="mt-2 text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
  