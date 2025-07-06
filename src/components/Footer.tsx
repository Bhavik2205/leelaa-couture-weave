
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/leelaa.couture/" target="_blank" rel="noopener noreferrer" className="text-ivory/60 hover:text-gold transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />                </svg>
              </a>
              <a href="https://www.instagram.com/leelaa.couture/" target="_blank" rel="noopener noreferrer" className="text-ivory/60 hover:text-gold transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12C0 17.084 2.797 21.504 6.897 23.226C6.785 22.232 6.695 20.696 6.946 19.614C7.173 18.632 8.391 13.386 8.391 13.386C8.391 13.386 8.016 12.636 8.016 11.544C8.016 9.847 9.033 8.578 10.297 8.578C11.372 8.578 11.888 9.375 11.888 10.335C11.888 11.423 11.203 13.056 10.847 14.556C10.55 15.803 11.437 16.823 12.671 16.823C14.905 16.823 16.626 14.482 16.626 11.09C16.626 8.069 14.426 6.004 11.954 6.004C9.047 6.004 7.331 8.198 7.331 10.391C7.331 11.479 7.768 12.664 8.322 13.306C8.424 13.427 8.438 13.536 8.407 13.658C8.329 13.976 8.162 14.668 8.127 14.801C8.081 14.976 7.961 15.023 7.782 14.935C6.214 14.208 5.279 11.939 5.279 10.346C5.279 6.82 7.92 3.657 12.257 3.657C15.735 3.657 18.449 6.151 18.449 11.047C18.449 16.122 15.951 20.25 12.378 20.25C11.099 20.25 9.905 19.598 9.506 18.826C9.506 18.826 8.895 21.268 8.736 21.892C8.453 22.971 7.721 24.341 7.236 25.186C8.447 25.711 9.782 26 11.186 26C17.814 26 23.186 20.628 23.186 14C23.186 7.372 18.627 2 12 2V0Z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.instagram.com/leelaa.couture/" target="_blank" rel="noopener noreferrer" className="text-ivory/60 hover:text-gold transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.564H7.078V12.073H10.125V9.41C10.125 6.387 11.917 4.716 14.658 4.716C15.97 4.716 17.344 4.953 17.344 4.953V7.898H15.83C14.341 7.898 13.875 8.8 13.875 9.727V12.073H17.203L16.671 15.564H13.875V24C19.612 23.094 24 18.1 24 12.073Z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/leelaa-couture/" target="_blank" rel="noopener noreferrer" className="text-ivory/60 hover:text-gold transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.296zM5.337 7.433a2.062 2.062 0 01-2.064-2.064 2.062 2.062 0 012.064-2.063 2.062 2.062 0 012.063 2.063 2.062 2.062 0 01-2.063 2.064zm1.782 13.019H3.554V9h3.565v11.452z" />
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
