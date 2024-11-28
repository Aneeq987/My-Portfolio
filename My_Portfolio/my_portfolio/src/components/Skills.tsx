import React from 'react';

type Skill = {
  name: string;
  level: string;
};

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', level: '90%' },
    { name: 'React.js', level: '85%' },
    { name: 'Next.js', level: '80%' },
    { name: 'Tailwind CSS', level: '88%' },
    { name: 'TypeScript', level: '75%' },
  ];

  return (
    <section id="skills" className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 py-20">
      <div className="absolute inset-0 bg-black bg-opacity-50 blur-sm"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl font-bold  mb-6 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800  rounded-lg shadow-lg hover:shadow-xl transition text-center"
            >
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              <div className="relative pt-4">
                <div className="h-2 w-full bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-violet-500 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <p className="mt-2 text-sm font-medium text-gray-400">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
