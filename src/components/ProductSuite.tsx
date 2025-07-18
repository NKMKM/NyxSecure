import React, { useEffect, useState, useRef } from 'react';
import { ShieldIcon, CloudIcon, FingerprintIcon } from 'lucide-react';
export const ProductSuite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  const products = [{
    icon: <ShieldIcon size={24} />,
    title: 'Endpoint',
    description: 'Complete protection for all devices across your organization with real-time threat detection.',
    features: ['AI-powered detection', 'Zero-day vulnerability protection', 'Behavioral analysis']
  }, {
    icon: <CloudIcon size={24} />,
    title: 'Cloud',
    description: 'Secure your cloud infrastructure with comprehensive monitoring and access controls.',
    features: ['Multi-cloud security', 'Container protection', 'Compliance automation']
  }, {
    icon: <FingerprintIcon size={24} />,
    title: 'Identity',
    description: 'Advanced authentication and access management with zero-trust architecture.',
    features: ['Biometric verification', 'Single sign-on', 'Behavioral authentication']
  }];
  return <section id="products" className="py-24 w-full relative bg-gradient-to-b from-black to-[#050510]" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center mb-4">
            <div className="h-px w-12 bg-white/20 mr-4"></div>
            <span className="text-white/60 text-sm tracking-widest uppercase">
              Product Suite
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-thin">
            Comprehensive Protection
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => <div key={index} className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 p-1 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
          transitionDelay: `${index * 200}ms`
        }}>
              {/* Enhanced glowing effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl rounded-xl"></div>
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl animate-gradient-shift"></div>
              <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-lg h-full flex flex-col">
                {/* Enhanced icon animation */}
                <div className="p-3 rounded-full bg-white/5 w-fit mb-6 text-blue-400 group-hover:text-blue-300 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                  {product.icon}
                </div>
                <h3 className="text-xl font-light mb-3 transition-colors duration-300 group-hover:text-blue-100">
                  {product.title}
                </h3>
                <p className="text-white/60 mb-6 text-sm flex-grow transition-colors duration-300 group-hover:text-white/80">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => <li key={i} className="flex items-center text-sm text-white/70 transition-all duration-500" style={{
                transitionDelay: `${i * 100}ms`
              }}>
                      {/* Animated bullet point */}
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-400"></div>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {feature}
                      </span>
                    </li>)}
                </ul>
                <button className="mt-auto w-full py-2.5 border border-white/10 rounded-full text-sm tracking-wider hover:bg-white/5 transition-all duration-300 group-hover:border-white/20 relative overflow-hidden">
                  <span className="relative z-10">Learn More</span>
                  <span className="absolute inset-0 w-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 transition-all duration-500 group-hover:w-full"></span>
                </button>
              </div>
            </div>)}
        </div>
      </div>
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-indigo-500/5 blur-3xl animate-float-slow-reverse pointer-events-none"></div>
      <style jsx>{`
        @keyframes float-slow {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
        @keyframes float-slow-reverse {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(20px) scale(0.9);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-float-slow {
          animation: float-slow 15s infinite ease-in-out;
        }
        .animate-float-slow-reverse {
          animation: float-slow-reverse 12s infinite ease-in-out;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>
    </section>;
};