
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/home' || location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-maroon text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link 
              to="/home" 
              onClick={handleLogoClick}
              className="font-playfair text-4xl font-bold text-ivory hover:text-gold transition-colors duration-300 mb-6 block"
            >
              LEELAA
            </Link>
            <p className="font-montserrat text-ivory/80 mb-6 leading-relaxed max-w-md">
              A luxury couture house celebrating the timeless elegance of Indian heritage 
              through contemporary design and artisan craftsmanship.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="font-playfair text-xl text-gold">Stay Connected</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-ivory/10 border border-ivory/20 rounded-lg sm:rounded-r-none focus:outline-none focus:border-gold text-ivory placeholder-ivory/60 min-w-0"
                />
                <button className="px-6 py-2 bg-gold text-maroon font-montserrat font-medium rounded-lg sm:rounded-l-none hover:bg-gold/90 transition-colors duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl text-gold mb-6">Collections</h3>
            <ul className="space-y-3 font-montserrat text-ivory/80">
              <li><Link to="/virasat" className="hover:text-gold transition-colors duration-300">Virasat</Link></li>
              <li><Link to="/neyaa-saawan" className="hover:text-gold transition-colors duration-300">Neyaa Saawan</Link></li>
              <li><Link to="/madhurya" className="hover:text-gold transition-colors duration-300">Madhurya</Link></li>
              <li><Link to="/jewellery" className="hover:text-gold transition-colors duration-300">Jewellery</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-playfair text-xl text-gold mb-6">Support</h3>
            <ul className="space-y-3 font-montserrat text-ivory/80">
              <li><Link to="/sizing-guide" className="hover:text-gold transition-colors duration-300">Sizing Guide</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-gold transition-colors duration-300">Shipping Policy</Link></li>
              <li><Link to="/return-policy" className="hover:text-gold transition-colors duration-300">Return Policy</Link></li>
              <li><Link to="/care-instructions" className="hover:text-gold transition-colors duration-300">Care Instructions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gold transition-colors duration-300">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-ivory/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/leelaa.couture/" target="_blank" rel="noopener noreferrer" className="text-ivory/60 hover:text-gold transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="font-montserrat text-ivory/60 text-sm">
                © 2025 LEELAA. All rights reserved.
              </p>
              <p className="font-montserrat text-ivory/40 text-xs mt-1">
                The House of Leelaa | Handcrafted with ♥ in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
