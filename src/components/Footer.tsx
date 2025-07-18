import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="w-full py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <span className="text-xl font-thin tracking-wider text-white">
                <span className="font-normal">Nyx</span>Secure
              </span>
            </div>
            <p className="text-white/60 text-sm mb-4">
              Next-generation cybersecurity for the modern enterprise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/40 hover:text-white/80 transition-colors duration-300">
                <TwitterIcon size={18} />
              </a>
              <a href="#" className="text-white/40 hover:text-white/80 transition-colors duration-300">
                <LinkedinIcon size={18} />
              </a>
              <a href="#" className="text-white/40 hover:text-white/80 transition-colors duration-300">
                <GithubIcon size={18} />
              </a>
            </div>
          </div>
          {[{
          title: 'Products',
          links: ['Endpoint Security', 'Cloud Protection', 'Identity Management', 'Network Defense', 'Threat Intelligence']
        }, {
          title: 'Company',
          links: ['About Us', 'Leadership', 'Careers', 'Press', 'Contact']
        }, {
          title: 'Resources',
          links: ['Documentation', 'Blog', 'Webinars', 'Case Studies', 'Support']
        }].map((column, i) => <div key={i}>
              <h3 className="text-sm font-normal mb-4 tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, j) => <li key={j}>
                    <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                      {link}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} NyxSecure. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => <a key={i} href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors duration-300">
                  {item}
                </a>)}
          </div>
        </div>
      </div>
    </footer>;
};