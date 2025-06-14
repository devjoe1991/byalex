
import { Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-pink text-brand-background">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-brand-background tracking-wider font-heading">ALEX PEREZ</h3>
            <p className="font-sans">at The Brondesage, Kilburn</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity"><Instagram size={28} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity"><Youtube size={28} /></a>
          </div>
          <div className="flex space-x-6 font-bold">
            <Link to="/reviews" className="hover:underline">Reviews</Link>
            <Link to="/about" className="hover:underline">Contact</Link>
            <Link to="#" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
