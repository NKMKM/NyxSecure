import React from 'react';
import { BuildingIcon, GlobeIcon, LandmarkIcon } from 'lucide-react';
export const UseCases = () => {
  const useCases = [{
    icon: <BuildingIcon size={32} className="text-blue-400" />,
    title: 'Business',
    description: 'Tailored security solutions for small to medium businesses protecting sensitive data and customer trust.',
    benefits: ['Cost-effective implementation', 'Simplified management', 'Comprehensive threat protection']
  }, {
    icon: <GlobeIcon size={32} className="text-indigo-400" />,
    title: 'Enterprise',
    description: 'Enterprise-grade security infrastructure designed for global organizations with complex needs.',
    benefits: ['Global threat intelligence', 'Custom security policies', 'Seamless integration with existing systems']
  }, {
    icon: <LandmarkIcon size={32} className="text-purple-400" />,
    title: 'Government',
    description: 'High-assurance security solutions meeting the strictest regulatory requirements for public sector.',
    benefits: ['Compliance with FedRAMP, FISMA', 'Classified data protection', 'Critical infrastructure security']
  }];
  return <section id="use-cases" className="py-24 w-full relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <div className="h-px w-12 bg-white/20 mr-4"></div>
            <span className="text-white/60 text-sm tracking-widest uppercase">
              Use Cases
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-thin">
            Tailored For Your Industry
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {useCases.map((useCase, index) => <div key={index} className="relative">
              <div className="mb-6 flex items-center">
                <div className="mr-4">{useCase.icon}</div>
                <h3 className="text-2xl font-light">{useCase.title}</h3>
              </div>
              <p className="text-white/70 mb-6">{useCase.description}</p>
              <ul className="space-y-3">
                {useCase.benefits.map((benefit, i) => <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 mt-2"></div>
                    <span className="text-white/60 text-sm">{benefit}</span>
                  </li>)}
              </ul>
              {/* Decorative line */}
              <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-blue-500/30 via-indigo-500/20 to-transparent opacity-70 lg:block hidden"></div>
            </div>)}
        </div>
        {/* Case study teaser */}
        <div className="mt-20 rounded-xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center lg:text-left">
                <h4 className="text-xl font-light mb-2">Case Study</h4>
                <p className="text-2xl md:text-3xl font-thin mb-6">
                  How Fortune 500 Financial Institution Secured Their Global
                  Operations
                </p>
                <button className="px-6 py-2 border border-white/20 bg-white/5 hover:bg-white/10 rounded-full text-sm tracking-wider transition-all duration-300 hover:border-white/40">
                  Read Case Study
                </button>
              </div>
            </div>
            <div className="lg:col-span-3 p-8 lg:p-12">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <p className="text-white/70 mb-6">
                    "NyxSecure's comprehensive security platform allowed us to
                    consolidate multiple security vendors into a single,
                    coherent system while improving our overall security
                    posture."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mr-4 flex items-center justify-center text-sm font-medium">
                      JP
                    </div>
                    <div>
                      <p className="font-light">James Peterson</p>
                      <p className="text-white/60 text-sm">
                        Chief Information Security Officer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[{
                  label: 'Reduction in incidents',
                  value: '87%'
                }, {
                  label: 'Implementation time',
                  value: '3 weeks'
                }, {
                  label: 'ROI',
                  value: '320%'
                }].map((stat, i) => <div key={i} className="text-center lg:text-left">
                      <p className="text-2xl md:text-3xl font-thin text-blue-400">
                        {stat.value}
                      </p>
                      <p className="text-white/60 text-xs">{stat.label}</p>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};