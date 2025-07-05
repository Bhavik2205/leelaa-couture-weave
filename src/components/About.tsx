
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-20 bg-ivory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl text-maroon mb-6 leading-tight">
                A couture house <br />
                <span className="text-gold">born from heritage</span>
              </h2>
              <div className="w-24 h-0.5 bg-gold mb-8"></div>
            </div>
            
            <div className="space-y-6 font-montserrat text-maroon/80 text-lg leading-relaxed">
              <p>
                In the heart of India's textile legacy lies LEELAA—a celebration of 
                timeless craftsmanship meeting contemporary elegance. Born from generations 
                of artisan wisdom, we create not just garments, but stories woven in silk 
                and dreams embroidered in gold.
              </p>
              
              <p>
                Each piece in our atelier speaks the language of heritage—from the ancient 
                art of zardozi to the delicate whispers of chikankari. We honor the hands 
                that create, the traditions that inspire, and the modern woman who carries 
                this legacy forward.
              </p>
              
              <p>
                LEELAA is more than fashion; it's a bridge between the palace courtyards 
                of our past and the global runways of our future. India-rooted, 
                world-ready, eternally elegant.
              </p>
            </div>

            <div className="pt-6">
              <Link 
                to="/about"
                className="group relative inline-flex items-center px-6 py-3 text-maroon font-montserrat font-medium tracking-wide hover:text-gold transition-colors duration-300"
              >
                <span className="relative">Discover Our Story</span>
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blush/30 to-gold/20 rounded-lg p-8 h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-maroon/5 to-indigo/10 rounded-lg"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                      <path d="M8 11l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <h3 className="font-playfair text-2xl text-maroon">
                    Artisan Crafted
                  </h3>
                  <p className="font-montserrat text-maroon/70 text-sm">
                    Every piece tells a story of<br />skilled hands and timeless tradition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
