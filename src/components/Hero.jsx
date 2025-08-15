import React from 'react';
import Search from './Search';

function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#eef0fc] via-white to-[#dce2f5] overflow-hidden px-4 sm:px-6">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/Background.png" 
          alt="Background Pattern" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl gap-6">
        
        <h2 className="text-base sm:text-lg text-gray-600 tracking-wide">
          🚗 Find Cars For Sale And For Rent Near You
        </h2>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Find Your <span className="text-indigo-600">Dream Car</span>
        </h1>

        {/* Search Box with Glass Effect */}
        <div className="mt-6 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-4 w-full max-w-3xl">
          <Search />
        </div>

      
      </div>

      {/* Car Image */}
      {/* <div className="absolute bottom-0 right-0 w-[350px] sm:w-[500px] md:w-[600px] opacity-90">
        <img 
          src="/TCD.png" 
          alt="Tesla Car" 
          className="w-full h-auto drop-shadow-2xl"
        />
      </div> */}
    </section>
  );
}

export default Hero;
