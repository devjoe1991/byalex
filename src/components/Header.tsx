import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from './ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'The Chef', path: '/about' },
  { name: 'Find Us', path: '/location' },
  { name: 'Reviews', path: '/reviews' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-brand-background/80 backdrop-blur-lg sticky top-0 z-50 w-full">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black text-brand-white tracking-wider font-heading">
          ALEX PEREZ
        </Link>
        
        {isMobile ? (
          <button onClick={toggleMenu} className="text-brand-white z-50">
            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        ) : (
          <div className="flex items-center space-x-6">
            {navLinks.map(link => (
              <Link key={link.name} to={link.path} className="text-brand-lightBlue hover:text-brand-green transition-colors duration-300">
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-brand-pink hover:bg-brand-pink/80 text-brand-white font-bold rounded-sm">
                <Link to="/booking">Book a Table</Link>
            </Button>
          </div>
        )}
      </nav>
      {isMobile && isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-brand-background flex flex-col items-center justify-center space-y-8">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} onClick={toggleMenu} className="text-3xl text-brand-lightBlue hover:text-brand-green transition-colors duration-300">
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-brand-pink hover:bg-brand-pink/80 text-brand-white font-bold text-2xl py-6 px-10 rounded-sm">
            <Link to="/booking" onClick={toggleMenu}>Book a Table</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
