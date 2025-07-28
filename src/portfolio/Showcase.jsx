// ShowcaseSection.tsx — All sections in one scrollable page
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

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

export default function ShowcaseSection() {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#020617] text-white">
      <section className="min-h-screen px-6 sm:px-12 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Skills</h2>
        <div className="flex flex-col gap-16 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex flex-col md:flex-row items-center bg-white/5 border border-white/10 hover:bg-white/10 p-4 sm:p-6 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] ${index % 2 === 0 ? 'self-start' : 'self-end'} w-full sm:w-[90%] md:w-[80%]`}
            >
              <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center items-center">
                <div className={`w-[150px] h-[150px] bg-gradient-to-r ${skill.color} text-white rounded-2xl shadow-lg flex items-center justify-center text-4xl`}> 
                  {skill.icon}
                </div>
              </div>
              <div className="flex-1 mt-4 md:mt-0 md:ml-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="min-h-screen px-6 sm:px-12 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Certificates</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Certificate cards go here */}
        </div>
      </section>

      <section className="min-h-screen px-6 sm:px-12 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Project cards go here */}
        </div>
      </section>
    </div>
  );
}
