export default function Resume() {
  return (

    <section
      id="resume"
      className="bg-[#0f172a] text-white py-20 px-6 sm:px-10"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Text content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
              Resume
            </span>
          </h2>
          <p className="text-gray-400">
            Download my resume to learn more about my professional journey, skills, and experience. Let’s connect and create something awesome together!
          </p>

          <a
            href="" // Make sure this file exists in your public folder
            download
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition-transform font-semibold"
          >
            📄 Download Resume
          </a>
        </div>

        {/* Right - Illustration */}
        <div className="flex justify-center md:justify-end">
          <div className="h-56 sm:h-64"></div>
        </div>
      </div>
    </section>
  );
}
