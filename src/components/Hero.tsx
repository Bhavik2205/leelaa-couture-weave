
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ivory via-blush/20 to-ivory">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23600f2f' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Main Logo/Brand Name */}
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-maroon mb-6 tracking-wide">
            LEELAA
          </h1>
          
          {/* Tagline */}
          <div className="relative">
            <h2 className="font-montserrat text-lg md:text-xl text-maroon/80 mb-8 tracking-widest uppercase">
              The Timeless Indian Elegance
            </h2>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>

          {/* Launch Date */}
          <div className={`mt-12 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="font-montserrat text-2xl md:text-3xl text-maroon mb-2">
              Launching
            </p>
            <p className="font-playfair text-4xl md:text-5xl text-gold font-semibold">
              October 2025
            </p>
          </div>

          {/* CTA Button */}
          <div className={`mt-12 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Link 
              to="/contact"
              className="group relative inline-flex items-center px-8 py-4 border-2 border-gold text-maroon font-montserrat font-medium tracking-wide hover:text-ivory transition-colors duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative">Notify Me</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-maroon/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-maroon/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
