
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Collections = () => {
  const collections = [
    {
      name: "Virasat",
      subtitle: "Royal Heritage",
      description: "Deep jewel tones and regal silhouettes inspired by the grandeur of Indian palaces. Rich velvets, intricate zardozi, and timeless elegance for the modern maharani.",
      fullDescription: "The Virasat collection embodies the opulence of Indian royalty. Each piece is meticulously crafted with rich fabrics like velvet and silk, adorned with traditional zardozi embroidery using gold and silver threads. This collection features deep maroons, royal blues, and emerald greens that speak to the grandeur of palace halls and royal courts.",
      color: "from-indigo/20 to-maroon/20",
      accent: "text-indigo",
      pieces: ["Royal Lehenga Set", "Palace Anarkali", "Maharani Sharara", "Heritage Saree"],
      route: "/virasat"
    },
    {
      name: "Neyaa Saawan",
      subtitle: "Monsoon Poetry",
      description: "Flowing fabrics in monsoon hues that dance with every step. Delicate embroidery celebrating the romance of rain-kissed gardens and gentle breezes.",
      fullDescription: "Neyaa Saawan captures the essence of monsoon romance through flowing silhouettes and delicate craftsmanship. Inspired by rain-washed gardens and cloudy skies, this collection features soft chiffons, georgettes, and crepes in subtle blues, greys, and pearl whites, adorned with French knots and delicate threadwork.",
      color: "from-blush/30 to-gold/20",
      accent: "text-gold",
      pieces: ["Monsoon Lehenga", "Cloud Palazzo Set", "Rain Drop Saree", "Breeze Kurti"],
      route: "/neyaa-saawan"
    },
    {
      name: "Madhurya",
      subtitle: "Sweet Romance",
      description: "Soft blushes and gentle roses for the romantic soul. Dreamy pastels with intricate pearl work and delicate florals that whisper tales of love.",
      fullDescription: "Madhurya celebrates feminine grace through soft pastels and romantic silhouettes. This collection features blush pinks, powder blues, and cream tones, enhanced with pearl work, floral embroidery, and delicate sequin details. Perfect for the bride who dreams of fairy-tale romance.",
      color: "from-blush/40 to-ivory",
      accent: "text-maroon",
      pieces: ["Rose Garden Lehenga", "Pearl Romance Set", "Blush Anarkali", "Sweet Dreams Saree"],
      route: "/madhurya"
    }
  ];

  return (
    <div className="min-h-screen bg-ivory font-montserrat">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-ivory via-blush/20 to-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl text-maroon mb-6">
              Our Collections
            </h1>
            <div className="w-32 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="font-montserrat text-xl text-maroon/70 leading-relaxed">
              Three distinct narratives of Indian elegance, each telling its own story 
              of heritage, craftsmanship, and contemporary grace.
            </p>
          </div>
        </section>

        {/* Collections Detail */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {collections.map((collection, index) => (
              <div key={collection.name} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-16 items-center`}>
                <div className="lg:w-1/2">
                  <Link 
                    to={collection.route}
                    className={`block relative overflow-hidden rounded-lg bg-gradient-to-br ${collection.color} p-12 h-96 hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div className="h-full w-full bg-repeat-y" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23600f2f' fill-opacity='0.2'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}></div>
                    </div>
                    <div className="relative h-full flex items-center justify-center">
                      <div className="text-center">
                        <h3 className={`font-playfair text-4xl ${collection.accent} mb-4`}>
                          {collection.name}
                        </h3>
                        <p className="font-montserrat text-sm text-maroon/60 tracking-widest uppercase">
                          {collection.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <h2 className="font-playfair text-3xl text-maroon">
                    {collection.name}
                  </h2>
                  <p className="font-montserrat text-maroon/80 leading-relaxed">
                    {collection.fullDescription}
                  </p>
                  
                  <div>
                    <h4 className="font-montserrat font-semibold text-maroon mb-3">Featured Pieces:</h4>
                    <ul className="space-y-2">
                      {collection.pieces.map((piece) => (
                        <li key={piece} className="font-montserrat text-maroon/70 flex items-center">
                          <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                          {piece}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Link 
                      to={collection.route}
                      className="group relative inline-flex items-center px-6 py-3 border-2 border-gold text-maroon font-montserrat font-medium tracking-wide hover:text-ivory transition-colors duration-300 overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      <span className="relative">View Collection</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
