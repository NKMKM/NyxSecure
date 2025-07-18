import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);
  return <section id="hero" className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className={`flex items-center mb-4 transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '200ms'
        }}>
            <div className="h-px w-12 bg-white/20 mr-4"></div>
            <span className="text-white/60 text-sm tracking-widest uppercase">
              Cybersecurity Redefined
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin mb-6 tracking-tight">
            <span className={`block transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
            transitionDelay: '400ms'
          }}>
              Trust.
            </span>
            <span className={`block transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
            transitionDelay: '600ms'
          }}>
              Reimagined.
            </span>
          </h1>
          <p className={`text-white/70 text-lg md:text-xl font-thin max-w-lg mb-10 leading-relaxed transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '800ms'
        }}>
            Next-generation security infrastructure for enterprises that demand
            uncompromising protection in a digital landscape.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '1000ms'
        }}>
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 rounded-full text-sm tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5">
              Discover Solutions
            </button>
            <button className="px-8 py-3 border border-white/20 bg-white/5 hover:bg-white/10 rounded-full text-sm tracking-wider transition-all duration-300 hover:border-white/40 transform hover:-translate-y-0.5">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <ChevronDownIcon className="text-white/30" size={36} />
        </div>
      </div>
      {/* Glowing orb with animation */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{
      background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(99,102,241,0.1) 50%, rgba(0,0,0,0) 70%)',
      animationDuration: '8s'
    }}></div>
      {/* Animated data stream */}
      <div className="absolute top-1/3 left-0 w-full h-px opacity-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-data-flow"></div>
      </div>
      <div className="absolute top-2/3 left-0 w-full h-px opacity-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-data-flow-reverse"></div>
      </div>
      <style jsx>{`
        @keyframes pulse-slow {
          0% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.15;
            transform: scale(1);
          }
        }
        @keyframes data-flow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes data-flow-reverse {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
        .animate-data-flow {
          animation: data-flow 15s infinite linear;
        }
        .animate-data-flow-reverse {
          animation: data-flow-reverse 20s infinite linear;
        }
      `}</style>
    </section>;
};