import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black text-red-600 tracking-tighter cursor-pointer" onClick={() => scrollTo('hero')}>
          SEXFLIX
        </div>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex gap-8 text-sm font-bold text-gray-300">
          <button onClick={() => scrollTo('island')} className="hover:text-red-500 transition-colors">ISLAND</button>
          <button onClick={() => scrollTo('resort')} className="hover:text-red-500 transition-colors">RESORT</button>
          <button onClick={() => scrollTo('rules')} className="hover:text-red-500 transition-colors">RULES</button>
          <button onClick={() => scrollTo('routine')} className="hover:text-red-500 transition-colors">ROUTINE</button>
          <button onClick={() => scrollTo('contestants')} className="hover:text-red-500 transition-colors">CONTESTANTS</button>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* 모바일 메뉴 펼침 */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-gray-800 p-6 flex flex-col gap-6 text-center">
          <button onClick={() => scrollTo('island')} className="text-lg font-bold text-gray-300">ISLAND</button>
          <button onClick={() => scrollTo('resort')} className="text-lg font-bold text-gray-300">RESORT</button>
          <button onClick={() => scrollTo('rules')} className="text-lg font-bold text-gray-300">RULES</button>
          <button onClick={() => scrollTo('routine')} className="text-lg font-bold text-gray-300">ROUTINE</button>
          <button onClick={() => scrollTo('contestants')} className="text-lg font-bold text-red-500">CONTESTANTS</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;