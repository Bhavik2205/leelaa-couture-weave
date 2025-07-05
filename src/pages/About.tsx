
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-ivory font-montserrat">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-ivory via-blush/20 to-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl text-maroon mb-6">
              Our Story
            </h1>
            <div className="w-32 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="font-montserrat text-xl text-maroon/70 leading-relaxed">
              A journey through heritage, craftsmanship, and contemporary elegance
            </p>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-6">
                <h2 className="font-playfair text-3xl text-maroon mb-4">
                  Born from Heritage
                </h2>
                <p className="font-montserrat text-maroon/80 leading-relaxed">
                  In the heart of India's textile legacy lies LEELAA—a celebration of 
                  timeless craftsmanship meeting contemporary elegance. Born from generations 
                  of artisan wisdom, we create not just garments, but stories woven in silk 
                  and dreams embroidered in gold.
                </p>
                <p className="font-montserrat text-maroon/80 leading-relaxed">
                  Each piece in our atelier speaks the language of heritage—from the ancient 
                  art of zardozi to the delicate whispers of chikankari. We honor the hands 
                  that create, the traditions that inspire, and the modern woman who carries 
                  this legacy forward.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blush/30 to-gold/20 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-maroon/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="font-playfair text-2xl text-maroon">Heritage Craftsmanship</h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-gradient-to-br from-indigo/20 to-maroon/20 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-.74L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="font-playfair text-2xl text-maroon">Global Vision</h3>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="font-playfair text-3xl text-maroon mb-4">
                  India-rooted, World-ready
                </h2>
                <p className="font-montserrat text-maroon/80 leading-relaxed">
                  LEELAA is more than fashion; it's a bridge between the palace courtyards 
                  of our past and the global runways of our future. We believe in preserving 
                  the essence of Indian craftsmanship while creating pieces that resonate 
                  with the modern, global woman.
                </p>
                <p className="font-montserrat text-maroon/80 leading-relaxed">
                  Our collections are born from the rich tapestry of Indian culture—each 
                  thread tells a story, each embellishment carries meaning, and each 
                  silhouette celebrates the timeless elegance that is uniquely Indian, 
                  yet universally beautiful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-blush/10 to-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl text-maroon mb-4">Our Values</h2>
              <div className="w-24 h-0.5 bg-gold mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-.74L12 2z"/>
                  </svg>
                </div>
                <h3 className="font-playfair text-xl text-maroon mb-2">Excellence</h3>
                <p className="font-montserrat text-maroon/70 text-sm">
                  Every piece is crafted with meticulous attention to detail and uncompromising quality.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="font-playfair text-xl text-maroon mb-2">Heritage</h3>
                <p className="font-montserrat text-maroon/70 text-sm">
                  We honor traditional Indian craftsmanship while embracing contemporary design.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="font-playfair text-xl text-maroon mb-2">Authenticity</h3>
                <p className="font-montserrat text-maroon/70 text-sm">
                  Every creation tells an authentic story rooted in Indian culture and tradition.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
