
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blush/10 to-ivory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl text-maroon mb-4">
            Our Story
          </h2>
          <div className="w-32 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="font-montserrat text-lg text-maroon/70 max-w-2xl mx-auto">
            A journey through heritage, craftsmanship, and contemporary elegance
          </p>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl text-maroon mb-4">
              Born from Heritage
            </h3>
            <p className="font-montserrat text-maroon/80 leading-relaxed">
              In the heart of India's textile legacy lies LEELAA—a celebration of 
              timeless craftsmanship meeting contemporary elegance. Born from generations 
              of artisan wisdom, we create not just garments, but stories woven in silk 
              and dreams embroidered in gold.
            </p>
            <p className="font-montserrat text-maroon/80 leading-relaxed">
              Each piece in our collection speaks the language of heritage—from the ancient 
              art of zardozi to the delicate whispers of chikankari. We honor the hands 
              that create, the traditions that inspire, and the modern woman who carries 
              this legacy forward.
            </p>
            <Link 
              to="/about"
              className="group relative inline-flex items-center px-6 py-3 border-2 border-gold text-maroon font-montserrat font-medium tracking-wide hover:text-ivory transition-colors duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative">Discover Our Story</span>
            </Link>
          </div>
          <div className="bg-gradient-to-br from-blush/30 to-gold/20 rounded-lg p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-maroon/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <h4 className="font-playfair text-2xl text-maroon">Heritage Craftsmanship</h4>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link 
            to="/collections"
            className="group relative inline-flex items-center px-8 py-4 border-2 border-gold text-maroon font-montserrat font-medium tracking-wide hover:text-ivory transition-colors duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative">Explore Our Collections</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
