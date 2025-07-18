import React, { useEffect, useState, useRef } from 'react';
import { ShieldIcon, ServerIcon, KeyIcon, AlertCircleIcon } from 'lucide-react';
export const HowItWorks = () => {
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
  return <section id="how-it-works" className="py-24 w-full relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-thin mb-4">
            Layered Security Architecture
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our multi-dimensional approach creates an impenetrable defense
            system that evolves with emerging threats.
          </p>
        </div>
        <div className="relative">
          {/* Security architecture visualization */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10 pointer-events-none"></div>
          <div className="relative z-20 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[{
              icon: <ShieldIcon size={28} className="mb-4 text-blue-400" />,
              title: 'Endpoint Protection',
              description: 'Advanced threat detection at every device touchpoint with AI-powered analysis.',
              delay: 200
            }, {
              icon: <ServerIcon size={28} className="mb-4 text-indigo-400" />,
              title: 'Network Defense',
              description: 'Real-time monitoring of traffic patterns to identify and neutralize anomalies.',
              delay: 400
            }, {
              icon: <KeyIcon size={28} className="mb-4 text-purple-400" />,
              title: 'Access Management',
              description: 'Zero-trust architecture with biometric and behavioral authentication.',
              delay: 600
            }].map((item, index) => <div key={index} className={`p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
              transitionDelay: `${item.delay}ms`
            }}>
                  <div className="transform transition-transform duration-300 hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-light mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>)}
            </div>
            {/* Architecture diagram with enhanced animations */}
            <div className={`relative h-64 md:h-96 rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{
            transitionDelay: '600ms'
          }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur-md opacity-20 animate-pulse-slow"></div>
              </div>
              {/* Concentric circles with enhanced animations */}
              {[64, 48, 32, 16].map((size, i) => <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full" style={{
              width: `${size}%`,
              height: `${size}%`,
              animationDelay: `${i * 0.5}s`,
              animation: 'pulse 3s infinite ease-in-out'
            }}></div>)}
              {/* Enhanced data flow lines */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => <div key={i} className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" style={{
                top: `${15 + i * 10}%`,
                left: '0',
                right: '0',
                animation: `dataFlow ${3 + i * 0.5}s infinite linear`,
                animationDelay: `${i * 0.2}s`,
                opacity: 0.2 + i % 3 * 0.1
              }}></div>)}
              </div>
              {/* Animated nodes */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => {
                const size = 4 + i % 3 * 2;
                const top = 20 + i * 5 % 60;
                const left = 20 + i * 7 % 60;
                const delay = i * 0.5;
                return <div key={i} className="absolute rounded-full bg-white/30" style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animation: 'nodeFloat 8s infinite ease-in-out',
                  animationDelay: `${delay}s`
                }}></div>;
              })}
              </div>
              {/* Alert nodes with enhanced animations */}
              <div className="absolute top-1/4 right-1/4 animate-float-slow">
                <div className="relative">
                  <AlertCircleIcon size={20} className="text-red-400 animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping-slow"></div>
                </div>
              </div>
              <div className="absolute bottom-1/3 left-1/3 animate-float-slow-reverse">
                <div className="relative">
                  <AlertCircleIcon size={16} className="text-yellow-400 animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-yellow-500/20 animate-ping-slow"></div>
                </div>
              </div>
              {/* Animated connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{
              opacity: 0.15
            }}>
                <line x1="25%" y1="25%" x2="75%" y2="75%" stroke="url(#lineGradient)" strokeWidth="0.5" strokeDasharray="5,5" className="animate-line-dash" />
                <line x1="75%" y1="25%" x2="25%" y2="75%" stroke="url(#lineGradient)" strokeWidth="0.5" strokeDasharray="5,5" className="animate-line-dash-reverse" />
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
        }
        @keyframes dataFlow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes pulse-slow {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes nodeFloat {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(10px, 10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        @keyframes float-slow {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes float-slow-reverse {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes line-dash {
          to {
            stroke-dashoffset: 20;
          }
        }
        @keyframes line-dash-reverse {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite ease-in-out;
        }
        .animate-ping-slow {
          animation: ping-slow 3s infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s infinite ease-in-out;
        }
        .animate-float-slow-reverse {
          animation: float-slow-reverse 4s infinite ease-in-out;
        }
        .animate-line-dash {
          animation: line-dash 30s infinite linear;
        }
        .animate-line-dash-reverse {
          animation: line-dash-reverse 20s infinite linear;
        }
      `}</style>
    </section>;
};