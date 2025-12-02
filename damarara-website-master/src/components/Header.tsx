import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');

    if (hero) {
      // Compute current header height to use in rootMargin so the header remains
      // transparent while the hero is visible under it.
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 64;

      // Use IntersectionObserver to detect when hero is out of view taking header height into account
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setHasBackground(!entry.isIntersecting);
        },
        { root: null, rootMargin: `-${headerHeight}px 0px 0px 0px`, threshold: 0 }
      );

      observer.observe(hero);
      return () => observer.disconnect();
    }

    // Fallback: if no hero element, use scroll position
    const handleScroll = () => {
      setHasBackground(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', id: 'products' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
      hasBackground 
        ? 'bg-gray-900/95 border-b border-gold-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/30 transition-colors">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Damarara Logo"
                className="w-8 h-8 object-contain drop-shadow-lg"
              />
            </div>
            <span className={`text-2xl font-bold drop-shadow-lg transition-colors whitespace-nowrap ${
              hasBackground ? 'text-gold-500' : 'text-gold-400'
            }`}>Damarara</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-lg font-medium transition-colors drop-shadow-lg py-2 text-gold-400 hover:text-gold-300`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors drop-shadow-lg text-gold-400 hover:text-gold-300`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden transition-all duration-300 ${
          hasBackground 
            ? 'bg-gray-900/95 border-t border-gold-500/20' 
            : 'bg-gray-900/70 backdrop-blur-md border-t border-gold-500/20'
        }`}>
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left py-2 text-lg font-medium transition-colors ${
                  hasBackground 
                    ? 'text-gray-200 hover:text-gold-400' 
                    : 'text-gold-400 hover:text-gold-300'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
