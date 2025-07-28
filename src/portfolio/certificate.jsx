import React from 'react';

const certifications = [
  {
    title: 'Frontend Development',
    organization: 'FreeCodeCamp',
    date: 'June 2024',
    icon: '📜',
    link: 'https://www.freecodecamp.org/certification/krish--codes/responsive-web-design',
  },
  { 
    title: 'JavaScript Essentials',
    organization: 'GeeksForGeeks',
    date: 'April 2024',
    icon: '🧠',
    link: 'https://media.geeksforgeeks.org/courses/certificates/b394297e127018f5d620b1612dcee90c.pdf',
  },
  {
    title: 'React Developer',
    organization: 'Coursera',
    date: 'May 2024',
    icon: '⚛️',
    link: '#',
  },
  {
    title: 'Tailwind CSS Mastery',
    organization: 'ChaiAurCode',
    date: 'March 2024',
    icon: '🌬️',
    link: '#',
  },
  {
    title: 'Git & GitHub',
    organization: 'Great Learning',
    date: 'Feb 2024',
    icon: '🔧',
    link: '#',
  },
];

const CertificationSection = () => {
  return (

    <section className="bg-[#0f172a] text-white py-20 px-6 sm:px-10 text-center">
      <h2 className="text-4xl sm:text-5xl font-bold mb-16">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Certifications
        </span>
      </h2>

      {/* First row: 3 centered cards */}
      <div className="flex flex-wrap justify-center gap-10 mb-14">
        {certifications.slice(0, 3).map((cert, index) => (
          <div
            key={index}
            className="w-full sm:w-[280px] bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.03] transition-all shadow-md flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-3 bg-gradient-to-r from-indigo-400 to-purple-600 p-4 rounded-full">
              {cert.icon}
            </div>
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-sm text-gray-300">{cert.organization}</p>
            <p className="text-xs text-gray-500 mb-4">{cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>

      {/* Second row: 2 centered cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {certifications.slice(3, 5).map((cert, index) => (
          <div
            key={index}
            className="w-full sm:w-[280px] bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.03] transition-all shadow-md flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-3 bg-gradient-to-r from-pink-500 to-rose-600 p-4 rounded-full">
              {cert.icon}
            </div>
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-sm text-gray-300">{cert.organization}</p>
            <p className="text-xs text-gray-500 mb-4">{cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
