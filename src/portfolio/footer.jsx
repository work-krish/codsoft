export default function Footer() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#0f172a] to-[#020617] text-white py-20 pb-3 px-6 sm:px-10 min-h-screen">

      <div className="max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Left Side - Heading and Illustration */}
        <div className="space-y-10 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
              Let's Talk!
            </span>
          </h2>
          <div className="hidden sm:block h-56 sm:h-64 mx-auto md:mx-0"></div>
        </div>

        {/* Right Side - Form */}
        <form
          className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-8  space-y-6 shadow-md backdrop-blur"
        >
          <div>
            <label htmlFor="name" className="text-sm text-gray-300 block mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-gray-300 block mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-gray-300 block mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="What would you like to share?"
              className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>

      </div>

        {/* Footer - linkedin Github */}
      <div className=" mt-10  mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm text-gray-300 text-center sm:text-left mb-4 sm:mb-0">
          © 2024 Krish Patidar
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/work-krish"
            title="GitHub"
            target="_blanck"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EF404A] hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z " />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/work-krish-patidar/"
            title="LinkedIn"
            target="_black"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EF404A] hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
