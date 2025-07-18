import React, { useEffect, useState, useRef } from 'react';
import { SendIcon } from 'lucide-react';
export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
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
  return <section id="contact" className="py-24 w-full relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center mb-4">
                <div className="h-px w-12 bg-white/20 mr-4"></div>
                <span className="text-white/60 text-sm tracking-widest uppercase">
                  Contact
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-thin mb-6">
                Ready to transform your security posture?
              </h2>
              <p className="text-white/70 mb-8">
                Our security experts are ready to analyze your specific needs
                and provide a tailored solution that addresses your unique
                challenges.
              </p>
              <div className="space-y-6 mb-8">
                {[{
                label: 'Enterprise Solutions',
                description: 'For organizations with 500+ employees'
              }, {
                label: 'Business Solutions',
                description: 'For small to medium businesses'
              }, {
                label: 'Government & Public Sector',
                description: 'For federal, state and local agencies'
              }].map((item, i) => <div key={i} className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{
                transitionDelay: `${i * 200}ms`
              }}>
                    <h3 className="text-lg font-light mb-1">{item.label}</h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>)}
              </div>
            </div>
            <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: '400ms'
          }}>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 relative overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute -inset-40 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-spin-very-slow"></div>
                <h3 className="text-xl font-light mb-6 relative">
                  Schedule a Consultation
                </h3>
                <form className="space-y-4 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-1">
                        First Name
                      </label>
                      <input type="text" className={`w-full bg-white/5 border transition-all duration-300 rounded-lg px-4 py-2 focus:outline-none ${activeField === 'firstName' ? 'border-blue-500/50 shadow-sm shadow-blue-500/20' : 'border-white/10'}`} onFocus={() => setActiveField('firstName')} onBlur={() => setActiveField(null)} />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-1">
                        Last Name
                      </label>
                      <input type="text" className={`w-full bg-white/5 border transition-all duration-300 rounded-lg px-4 py-2 focus:outline-none ${activeField === 'lastName' ? 'border-blue-500/50 shadow-sm shadow-blue-500/20' : 'border-white/10'}`} onFocus={() => setActiveField('lastName')} onBlur={() => setActiveField(null)} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-1">
                      Email
                    </label>
                    <input type="email" className={`w-full bg-white/5 border transition-all duration-300 rounded-lg px-4 py-2 focus:outline-none ${activeField === 'email' ? 'border-blue-500/50 shadow-sm shadow-blue-500/20' : 'border-white/10'}`} onFocus={() => setActiveField('email')} onBlur={() => setActiveField(null)} />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-1">
                      Company
                    </label>
                    <input type="text" className={`w-full bg-white/5 border transition-all duration-300 rounded-lg px-4 py-2 focus:outline-none ${activeField === 'company' ? 'border-blue-500/50 shadow-sm shadow-blue-500/20' : 'border-white/10'}`} onFocus={() => setActiveField('company')} onBlur={() => setActiveField(null)} />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-1">
                      Message
                    </label>
                    <textarea rows={4} className={`w-full bg-white/5 border transition-all duration-300 rounded-lg px-4 py-2 focus:outline-none ${activeField === 'message' ? 'border-blue-500/50 shadow-sm shadow-blue-500/20' : 'border-white/10'}`} onFocus={() => setActiveField('message')} onBlur={() => setActiveField(null)}></textarea>
                  </div>
                  <div className="pt-2">
                    <button type="submit" className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 relative overflow-hidden group">
                      <span className="relative z-10 flex items-center">
                        <span className="mr-2">Send Message</span>
                        <SendIcon size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </span>
                      <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Animated background elements */}
      <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-600/5 blur-3xl transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
      animationDuration: '25s'
    }}></div>
      <style jsx>{`
        @keyframes spin-very-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-very-slow {
          animation: spin-very-slow 30s linear infinite;
        }
      `}</style>
    </section>;
};