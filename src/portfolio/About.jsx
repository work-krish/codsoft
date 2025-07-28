import { useState } from "react";
import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";

export default function About() {

  const [tab, setTab] = useState("bio");
  const data = [
    {
      title: "Who Am I",
      content:
        "Hi, I'm Krish — a passionate developer and creative problem solver.",
      key: "I specialize in building modern, user-focused web experiences using the latest technologies. With a strong foundation in frontend and backend development, I aim to craft impactful digital solutions that stand out.",
    },
    {
      title: "Skills & Tools",
      content: "Laungages : -  C , C++ , Python ",
      key: "Development:   -  HTML , CSS/SCSS , TailwindCSS , JavaScript , React , Node.js ",
    },
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-[#0f172a] to-[#020617] h-full text-white py-20  px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mt-10 mb-5">
        <h2 className="text-4xl font-bold mb-12 text-white">Get a closer look at who I am.</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setTab("bio")}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              tab === "bio"
                ? "bg-[#EF404A] text-white"
                : "bg-[#1f2937] hover:bg-[#EF404A] hover:text-white"
            }`}
          >
            Bio
          </button>
          <button
            onClick={() => setTab("skills")}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              tab === "skills"
                ? "bg-[#EF404A] text-white"
                : "bg-[#1f2937] hover:bg-[#EF404A] hover:text-white"
            }`}
          >
            Skills & Tools
          </button>
          <button
            onClick={() => setTab("experience")}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              tab === "experience"
                ? "bg-[#EF404A] text-white"
                : "bg-[#1f2937] hover:bg-[#EF404A] hover:text-white"
            }`}
          >
            Experience
          </button>
        </div>

        <div className="flex flex-col bg-[#1e293b] rounded-2xl overflow-hidden shadow-md">
          <div className="flex flex-col justify-center flex-1 p-8 text-gray-300 text-left">
            
            {tab === "bio" && (
              <>
                {data.map((n, idx) => (
                  <div key={idx} className="mb-8">
                    <div className="flex items-center mb-2">
                      <div className="section-line bg-[#FC4370] w-10 h-1 mr-4"></div>
                      <p className="text-2xl font-semibold text-white">{n.title}</p>
                    </div>
                    <p className="text-lg mb-2">{n.content}</p>
                    {n.key && <p className="text-lg">{n.key}</p>}
                  </div>
                ))}
              </>
            )}

            {tab === "skills" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <FaCode className="text-[#EF404A] text-3xl" />
                  <div>
                    <p className="font-bold text-white">Frontend</p>
                    <p>React, Tailwind, JavaScript, Next.js, HTML, CSS</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaPaintBrush className="text-[#EF404A] text-3xl" />
                  <div>
                    <p className="font-bold text-white">Design</p>
                    <p>Figma, Illustrator, Photoshop, After Effects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaRocket className="text-[#EF404A] text-3xl" />
                  <div>
                    <p className="font-bold text-white">Backend & Tools</p>
                    <p>Node.js, Git, Firebase, APIs</p>
                  </div>
                </div>
              </div>
            )}

            {tab === "experience" && (
              <ul className="space-y-4">
                <li>
                  <strong className="text-white">Freelance Developer</strong> – 2024 to Present
                  <br />
                  Worked on 20+ projects with a focus on better performance.
                </li>
                <li>
                  <strong className="text-white">Web Devloper Intern</strong> @ CodeSoft
                  <br />
                  I’ve assisted in solving real-world problems , scalable solutions that helped businesses grow.
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Last  Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 text-center">
          <div className="bg-[#1f2937] rounded-2xl p-6 shadow-xl hover:scale-105 transition">
            <h3 className="text-3xl font-extrabold text-[#EF404A]">2+</h3>
            <p className="text-gray-300 mt-2">Years Experience</p>
          </div>
          <div className="bg-[#1f2937] rounded-2xl p-6 shadow-xl hover:scale-105 transition">
            <h3 className="text-3xl font-extrabold text-[#EF404A]">20+</h3>
            <p className="text-gray-300 mt-2">Projects Delivered</p>
          </div>
          <div className="bg-[#1f2937] rounded-2xl p-6 shadow-xl hover:scale-105 transition">
            <h3 className="text-3xl font-extrabold text-[#EF404A]">100%</h3>
            <p className="text-gray-300 mt-2">Client Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  );
}
