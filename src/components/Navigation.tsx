import { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-cyan-500/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl transition-all ${isScrolled ? 'bg-gradient-to-br from-cyan-500 to-blue-600' : 'bg-white/10 backdrop-blur-sm'}`}>
              <Mountain className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className={`text-xl tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Dieng Jeep
              </span>
              <span className={`block text-xs transition-colors ${isScrolled ? 'text-cyan-600' : 'text-cyan-300'}`}>
                Adventure Tours
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Beranda', 'Tentang', 'Armada', 'Paket', 'Testimoni', 'Kontak'].map((item, index) => {
              const id = ['hero', 'about', 'fleet', 'packages', 'testimonials', 'contact'][index];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className={`transition-colors hover:text-cyan-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              Pesan Sekarang
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl my-4 p-2 border border-gray-100">
            {['Beranda', 'Tentang', 'Armada', 'Paket', 'Testimoni', 'Kontak'].map((item, index) => {
              const id = ['hero', 'about', 'fleet', 'packages', 'testimonials', 'contact'][index];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-700 transition-all rounded-xl font-medium"
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}