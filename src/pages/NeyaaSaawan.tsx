
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NeyaaSaawan = () => {
  const pieces = [
    "Monsoon Lehenga",
    "Cloud Palazzo Set",
    "Rain Drop Saree",
    "Breeze Kurti",
    "Storm Anarkali",
    "Mist Cape Dress"
  ];

  return (
    <div className="min-h-screen bg-ivory font-montserrat">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blush/30 to-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl text-gold mb-6">
              Neyaa Saawan
            </h1>
            <div className="w-32 h-0.5 bg-maroon mx-auto mb-8"></div>
            <p className="font-montserrat text-xl text-maroon/70 leading-relaxed">
              Monsoon Poetry Collection - Flowing fabrics in monsoon hues that 
              dance with every step, celebrating nature's romantic poetry.
            </p>
          </div>
        </section>

        {/* Collection Details */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="bg-gradient-to-br from-blush/30 to-gold/20 rounded-lg p-12 h-96 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-playfair text-4xl text-gold mb-4">Neyaa Saawan</h3>
                  <p className="font-montserrat text-sm text-maroon/60 tracking-widest uppercase">Monsoon Poetry</p>
                </div>
              </div>
              <div>
                <h2 className="font-playfair text-3xl text-maroon mb-6">The Monsoon Romance</h2>
                <p className="font-montserrat text-maroon/80 leading-relaxed mb-6">
                  Neyaa Saawan captures the essence of monsoon romance through flowing silhouettes 
                  and delicate craftsmanship. Inspired by rain-washed gardens and cloudy skies, 
                  this collection celebrates the poetry of nature.
                </p>
                <p className="font-montserrat text-maroon/80 leading-relaxed mb-8">
                  This collection features soft chiffons, georgettes, and crepes in subtle blues, 
                  greys, and pearl whites, adorned with French knots and delicate threadwork that 
                  mirrors the gentle rhythm of rainfall.
                </p>
                <Link 
                  to="/contact"
                  className="group relative inline-flex items-center px-6 py-3 border-2 border-gold text-maroon font-montserrat font-medium tracking-wide hover:text-ivory transition-colors duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative">Enquire About Collection</span>
                </Link>
              </div>
            </div>

            {/* Featured Pieces */}
            <div className="text-center mb-12">
              <h3 className="font-playfair text-3xl text-maroon mb-8">Featured Pieces</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pieces.map((piece, index) => (
                  <div key={piece} className="bg-gradient-to-br from-blush/20 to-gold/10 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-.74L12 2z"/>
                      </svg>
                    </div>
                    <h4 className="font-playfair text-lg text-maroon mb-2">{piece}</h4>
                    <Link to="/contact" className="font-montserrat text-sm text-gold hover:text-maroon transition-colors duration-300">
                      Price Upon Request
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NeyaaSaawan;
