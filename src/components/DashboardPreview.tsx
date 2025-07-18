import React, { useEffect, useState, useRef } from 'react';
import { ShieldIcon, AlertCircleIcon, AlertTriangleIcon, CheckCircleIcon, ClockIcon } from 'lucide-react';
export const DashboardPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  const fullText = 'Behavioral analysis detected unusual file access patterns in the marketing department. Recommend reviewing access permissions and implementing additional authentication for sensitive documents.';
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
  // Typing effect
  useEffect(() => {
    if (!isVisible) return;
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);
    return () => clearInterval(typingInterval);
  }, [isVisible]);
  // Activity log data with timestamps
  const activityLogs = [{
    time: '09:42',
    event: 'Suspicious login attempt',
    location: 'Tokyo, JP',
    status: 'blocked'
  }, {
    time: '09:37',
    event: 'File encryption detected',
    location: 'Internal',
    status: 'quarantined'
  }, {
    time: '09:15',
    event: 'System update completed',
    location: 'All endpoints',
    status: 'success'
  }, {
    time: '08:53',
    event: 'New device connected',
    location: 'New York, US',
    status: 'verified'
  }];
  return <section id="dashboard-preview" className="py-24 w-full relative overflow-hidden bg-gradient-to-b from-[#050510] to-black" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`mb-16 text-center md:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center mb-4 justify-center md:justify-start">
            <div className="h-px w-12 bg-white/20 mr-4"></div>
            <span className="text-white/60 text-sm tracking-widest uppercase">
              Security Dashboard
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-thin">
            Complete Visibility & Control
          </h2>
        </div>
        <div className="relative">
          {/* Dashboard UI with animations */}
          <div className={`max-w-5xl mx-auto rounded-xl border border-white/10 overflow-hidden backdrop-blur-md bg-black/40 shadow-2xl shadow-blue-900/10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-black to-[#0a0a18] border-b border-white/5 p-4 flex justify-between items-center">
              <div className="flex items-center">
                <ShieldIcon size={20} className="text-blue-400 mr-2 animate-pulse" />
                <span className="font-light">NyxSecure Command Center</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-ping-slow"></div>
                  <span className="text-white/60 text-sm">System Active</span>
                </div>
                <div className="text-sm text-white/60">
                  <ClockIcon size={14} className="inline mr-1" />
                  <span className="animate-count-up" data-value="2">
                    Last updated: 2 min ago
                  </span>
                </div>
              </div>
            </div>
            {/* Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-white/5">
              {/* Threat Summary */}
              <div className="bg-black/80 p-6 transition-all duration-500" style={{
              transitionDelay: '200ms'
            }}>
                <h3 className="text-lg font-light mb-4">Threat Summary</h3>
                <div className="space-y-4">
                  {[{
                  icon: <AlertCircleIcon size={16} className="text-red-400" />,
                  label: 'Critical Threats',
                  value: '2',
                  animate: true
                }, {
                  icon: <AlertTriangleIcon size={16} className="text-yellow-400" />,
                  label: 'Warnings',
                  value: '7',
                  animate: false
                }, {
                  icon: <CheckCircleIcon size={16} className="text-green-400" />,
                  label: 'Resolved',
                  value: '28',
                  animate: false
                }].map((item, i) => <div key={i} className={`flex items-center justify-between transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{
                  transitionDelay: `${300 + i * 100}ms`
                }}>
                      <div className="flex items-center">
                        <div className={item.animate ? 'animate-pulse' : ''}>
                          {item.icon}
                        </div>
                        <span className="ml-2 text-white/70 text-sm">
                          {item.label}
                        </span>
                      </div>
                      <span className="font-light">{item.value}</span>
                    </div>)}
                </div>
                {/* Threat Map with animation */}
                <div className={`mt-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
                transitionDelay: '700ms'
              }}>
                  <h4 className="text-sm font-light text-white/70 mb-2">
                    Global Threat Map
                  </h4>
                  <div className="h-24 bg-[#0a0a18]/50 rounded border border-white/5 relative overflow-hidden">
                    {/* World map visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="world-map w-full h-full opacity-20"></div>
                    </div>
                    {/* Threat points */}
                    {isVisible && [...Array(5)].map((_, i) => {
                    const top = 20 + i * 15 % 60;
                    const left = 10 + i * 20 % 80;
                    const size = 3 + i % 3;
                    const delay = i * 0.5;
                    return <div key={i} className="absolute rounded-full bg-red-500" style={{
                      top: `${top}%`,
                      left: `${left}%`,
                      width: `${size}px`,
                      height: `${size}px`,
                      animation: 'ping-slow 2s infinite',
                      animationDelay: `${delay}s`
                    }}></div>;
                  })}
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      {isVisible && [...Array(3)].map((_, i) => {
                      const x1 = 10 + i * 20 % 80;
                      const y1 = 20 + i * 15 % 60;
                      const x2 = 50;
                      const y2 = 50;
                      return <line key={i} x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke="rgba(239, 68, 68, 0.3)" strokeWidth="0.5" strokeDasharray="3,3" className="animate-line-dash" style={{
                        animationDuration: `${5 + i}s`
                      }} />;
                    })}
                    </svg>
                  </div>
                </div>
              </div>
              {/* Activity Log with animated entries */}
              <div className="bg-black/80 p-6 transition-all duration-500" style={{
              transitionDelay: '400ms'
            }}>
                <h3 className="text-lg font-light mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {activityLogs.map((log, i) => <div key={i} className={`text-sm border-l-2 border-blue-500/30 pl-3 py-1 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{
                  transitionDelay: `${600 + i * 150}ms`
                }}>
                      <div className="flex justify-between">
                        <span className="text-white/90">{log.event}</span>
                        <span className="text-white/40">{log.time}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-white/60">{log.location}</span>
                        <span className={`${log.status === 'blocked' || log.status === 'quarantined' ? 'text-red-400' : log.status === 'success' || log.status === 'verified' ? 'text-green-400' : 'text-yellow-400'}`}>
                          {log.status}
                        </span>
                      </div>
                    </div>)}
                </div>
                <button className={`w-full mt-4 py-2 text-xs text-white/60 hover:text-white/80 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
                transitionDelay: '1000ms'
              }}>
                  View Full Activity Log →
                </button>
              </div>
              {/* AI Analytics with typing effect */}
              <div className="bg-black/80 p-6 transition-all duration-500" style={{
              transitionDelay: '600ms'
            }}>
                <h3 className="text-lg font-light mb-4">AI Analytics</h3>
                <div className={`mb-4 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{
                transitionDelay: '700ms'
              }}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70">
                      Threat Detection Confidence
                    </span>
                    <span className="counter" data-target="98.7">
                      {isVisible ? '98.7%' : '0%'}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1500" style={{
                    width: isVisible ? '98.7%' : '0%'
                  }}></div>
                  </div>
                </div>
                <div className={`mb-6 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{
                transitionDelay: '900ms'
              }}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70">
                      System Vulnerability Score
                    </span>
                    <span>Low</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1500" style={{
                    width: isVisible ? '15%' : '0%'
                  }}></div>
                  </div>
                </div>
                {/* AI Insights with typing effect */}
                <div className={`bg-gradient-to-br from-blue-900/20 to-indigo-900/10 border border-white/5 rounded p-3 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
                transitionDelay: '1100ms'
              }}>
                  <h4 className="text-sm font-light text-white/90 mb-2 flex items-center">
                    <span>AI Insights</span>
                    <div className="ml-2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed h-16 relative">
                    {typingText}
                    <span className={isVisible && typingText === fullText ? 'hidden' : 'inline-block cursor-typing'}></span>
                  </p>
                </div>
                <button className={`w-full mt-4 py-2 text-xs border border-white/10 rounded bg-white/5 hover:bg-white/10 transition-all duration-500 relative overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
                transitionDelay: '1300ms'
              }}>
                  <span className="relative z-10">Run Deep Analysis</span>
                  <span className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 transition-all duration-500 hover:w-full"></span>
                </button>
              </div>
            </div>
          </div>
          {/* Enhanced glowing effect */}
          <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-blue-600/10 blur-3xl rounded-full transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} style={{
          transitionDelay: '800ms'
        }}></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes ping-slow {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes line-dash {
          to {
            stroke-dashoffset: 12;
          }
        }
        @keyframes cursor-blink {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        .world-map {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' width='800' height='400' style='fill:none;stroke:rgba(255,255,255,0.2);stroke-width:0.5'%3E%3Cpath d='M173,40L228,20L282,20L339,31L388,68L416,96L416,137L448,175L482,198L493,227L493,267L448,267L425,249L388,249L370,267L339,267L339,249L316,231L293,231L271,249L255,267L228,267L201,249L173,249L155,267L130,267L112,249L112,231L130,198L130,175L112,153L112,137L130,118L155,96L173,68L173,40Z'%3E%3C/path%3E%3Cpath d='M525,40L570,20L600,20L630,31L660,68L675,96L675,137L690,175L715,198L725,227L725,267L690,267L675,249L650,249L630,267L600,267L600,249L585,231L560,231L545,249L525,267L500,267L485,249L470,249L455,267L440,267L425,249L425,231L440,198L440,175L425,153L425,137L440,118L455,96L485,68L525,40Z'%3E%3C/path%3E%3Cpath d='M112,300L155,300L173,318L201,318L228,300L255,300L271,318L293,318L316,300L339,300L339,318L370,318L388,300L425,300L448,318L493,318L525,300L570,300L600,318L630,318L660,300L690,300L715,318L725,318L725,350L690,350L660,370L630,370L600,350L570,350L545,370L525,370L500,350L485,350L455,370L440,370L425,350L388,350L370,370L339,370L316,350L293,350L271,370L255,370L228,350L201,350L173,370L155,370L130,350L112,350L112,300Z'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        .cursor-typing {
          width: 2px;
          height: 14px;
          background-color: rgba(255, 255, 255, 0.7);
          display: inline-block;
          vertical-align: middle;
          margin-left: 2px;
          animation: cursor-blink 0.7s infinite;
        }
      `}</style>
    </section>;
};