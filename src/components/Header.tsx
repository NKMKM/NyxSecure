import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-thin tracking-wider text-white">
            <span className="font-normal">Nyx</span>Secure
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {['Solutions', 'How It Works', 'Products', 'Use Cases', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/70 hover:text-white text-sm tracking-wider transition-colors duration-300">
              {item}
            </a>)}
          <button className="ml-4 px-6 py-2 border border-white/20 bg-white/5 hover:bg-white/10 rounded-full text-sm tracking-wider transition-all duration-300 hover:border-white/40">
            Get Started
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white/70 hover:text-white">
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/5">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            {['Solutions', 'How It Works', 'Products', 'Use Cases', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/70 hover:text-white text-sm tracking-wider transition-colors duration-300 py-2" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>)}
            <button className="mt-2 px-6 py-2 border border-white/20 bg-white/5 hover:bg-white/10 rounded-full text-sm tracking-wider transition-all duration-300 hover:border-white/40 w-full">
              Get Started
            </button>
          </div>
        </div>}
    </header>;
};