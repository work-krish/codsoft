import React from 'react';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 sm:px-10 pt-36 pb-10">
      
      <div className="max-w-6xl mx-auto text-left">
        
        <h2 className="text-5xl sm:text-7xl font-bold mb-6">
          Hello! <span role="img" aria-label="wave">👋🏼</span>
        </h2>
        
        <h3 className="text-5xl sm:text-7xl font-bold mb-4 leading-tight">
          My name is Krish   Patidar
        </h3>
        
        <h4 className="text-4xl sm:text-6xl font-bold mb-8 leading-snug">
          I’m a Full Stack{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Developer
          </span>
        </h4>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl">
          Let me help you grow your business and make your product look pretty while at it
        </p>

        <Link to="/footer">
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg sm:text-xl py-3 px-8 rounded-xl shadow-lg border border-blue-400 transition duration-300">
          Say Hello
        </button>
        </Link>

      </div>

    </section>
  );
};

export default HeroSection;
