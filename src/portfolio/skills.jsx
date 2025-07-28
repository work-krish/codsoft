import React from 'react';
import CertificationSection from './certificate';
import Resume from './Resume';

const skills = [
  {
    title: 'HTML & CSS',
    description: 'Building structured, responsive, and accessible layouts.',
    icon: '📄',
    color: 'from-orange-400 to-red-500',
  },
  {
    title: 'React.js',
    description: 'Building dynamic SPAs with hooks, components, and state.',
    icon: '⚛️',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Tailwind CSS',
    description: 'Rapid UI development with utility-first styling.',
    icon: '🌬️',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'JavaScript',
    description: 'Creating interactive features with ES6+ and clean logic.',
    icon: '🧠',
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    title: 'Git & GitHub',
    description: 'Managing source code and collaboration workflows.',
    icon: '🔧',
    color: 'from-gray-400 to-gray-600',
  },
];

const SkillsSection = () => {
  return (
    <>
    <section className="bg-[#0f172a] py-20 px-6 sm:px-10 text-white text-center">
      <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-14">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
          Skills
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-white/5 border border-white/10 rounded-2xl shadow-md hover:scale-[1.03] transition-all p-6 flex flex-col items-center justify-center text-center`}
          >
            <div
              className={`text-4xl mb-4 bg-gradient-to-r ${skill.color} text-white p-4 rounded-full`}
            >
              {skill.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-300 text-sm sm:text-base">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
    <CertificationSection/>
    <Resume/>
    </>
  );
};

export default SkillsSection;
