
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-nexogen-purple/20 via-nexogen-dark to-nexogen-blue/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nexogen-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nexogen-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-nexogen-blue to-nexogen-purple bg-clip-text text-transparent text-glow">
                NEXOGEN
              </span>
              <br />
              <span className="text-white">LABZ</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Advanced peptide research and development for the next generation of 
              <span className="text-nexogen-blue font-semibold"> performance enhancement</span>
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="glass px-8 py-4 rounded-lg text-white font-semibold hover:bg-nexogen-blue/20 transition-all duration-300 transform hover:scale-105 border border-nexogen-blue/30"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg text-nexogen-blue border border-nexogen-blue font-semibold hover:bg-nexogen-blue hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div> */}
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/klow-122.png"
                alt="KLOW Peptide"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
