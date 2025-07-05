
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Jewellery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jewelry = [
    {
      name: "Kundan Chandelier Earrings",
      material: "22K Gold, Uncut Diamonds, Pearls",
      description: "Traditional Rajasthani kundan work with cascading pearl drops. Each earring is handcrafted by master artisans using the ancient technique of kundan setting.",
      category: "Earrings"
    },
    {
      name: "Meenakari Royal Necklace",
      material: "Gold, Enamel Work, Precious Stones",
      description: "Hand-painted enamel florals with ruby and emerald accents. This necklace showcases the exquisite art of meenakari, where colors dance on gold.",
      category: "Necklaces"
    },
    {
      name: "Temple Jewelry Set",
      material: "Gold Plated, South Sea Pearls",
      description: "Sacred motifs inspired by ancient temple architecture. This complete set includes necklace, earrings, and maang tikka with divine temple carvings.",
      category: "Sets"
    },
    {
      name: "Polki Diamond Choker",
      material: "Uncut Diamonds, Rose Gold",
      description: "Vintage-inspired design with raw diamond brilliance. The uncut diamonds retain their natural beauty in this stunning choker design.",
      category: "Chokers"
    },
    {
      name: "Jadau Maang Tikka",
      material: "Gold, Precious Stones, Pearls",
      description: "Intricate gem-setting technique passed down through generations. This maang tikka features the traditional jadau work with uncut gems.",
      category: "Maang Tikka"
    },
    {
      name: "Pearl Chandelier Set",
      material: "South Sea Pearls, Diamond Accents",
      description: "Elegant cascading pearls with subtle diamond highlights. Perfect for the bride who loves classic elegance with a contemporary twist.",
      category: "Sets"
    },
    {
      name: "Antique Gold Bangles",
      material: "22K Gold, Traditional Motifs",
      description: "Hand-engraved bangles with traditional Indian motifs. Each bangle tells a story of heritage and craftsmanship passed through generations.",
      category: "Bangles"
    },
    {
      name: "Ruby Pendant Necklace",
      material: "Gold, Burmese Rubies, Diamonds",
      description: "A statement piece featuring the finest Burmese rubies set in intricate gold work. The pendant captures light beautifully with every movement.",
      category: "Pendants"
    },
    {
      name: "Emerald Drop Earrings",
      material: "Colombian Emeralds, Gold",
      description: "Elegant drop earrings featuring Colombian emeralds in traditional Indian setting. The perfect blend of luxury and heritage craftsmanship.",
      category: "Earrings"
    }
  ];

  const categories = ["All", "Earrings", "Necklaces", "Sets", "Chokers", "Maang Tikka", "Bangles", "Pendants"];

  const filteredJewelry = selectedCategory === "All" 
    ? jewelry 
    : jewelry.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-ivory font-montserrat">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-ivory via-blush/20 to-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl text-maroon mb-6">
              Handcrafted Jewellery
            </h1>
            <div className="w-32 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="font-montserrat text-xl text-maroon/70 leading-relaxed">
              Each piece is meticulously crafted using traditional techniques, 
              featuring precious metals and stones that tell stories of Indian artistry.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 font-montserrat border rounded-full transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-maroon text-ivory border-maroon'
                      : 'text-maroon border-maroon/20 hover:bg-maroon hover:text-ivory'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Jewelry Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJewelry.map((item, index) => (
                <div 
                  key={item.name}
                  className="group bg-ivory rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                >
                  {/* Image Placeholder with Velvet Effect */}
                  <div className="relative h-64 bg-gradient-to-br from-maroon/10 via-indigo/5 to-bronze/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-maroon/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center">
                        <svg className="w-10 h-10 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5 16L3 5h5.5l1.5 3h3L15 5h5.5L18 16H5zm1.9-2h10.2l1.4-7H15l-1.5 3h-3L9 7H6.5L7.9 14z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 bg-maroon/80 text-ivory px-3 py-1 rounded-full">
                      <span className="font-montserrat text-xs">{item.category}</span>
                    </div>
                    
                    {/* Velvet Pouch Effect */}
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-maroon/30 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gold rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-playfair text-xl text-maroon mb-2 group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="font-montserrat text-sm text-bronze mb-3 tracking-wide">
                      {item.material}
                    </p>
                    <p className="font-montserrat text-maroon/70 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Link to="/contact?inquiry=jewelry" className="font-montserrat text-gold font-medium hover:text-maroon transition-colors duration-300">
                        Price Upon Request
                      </Link>
                      <Link to="/contact?inquiry=jewelry" className="text-maroon hover:text-gold transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-blush/10 to-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-3xl text-maroon mb-6">
              Custom Jewelry Design
            </h2>
            <p className="font-montserrat text-maroon/70 mb-8 leading-relaxed">
              Have a vision for your perfect piece? Our master craftsmen can bring your 
              dreams to life with bespoke jewelry designed exclusively for you.
            </p>
            <Link 
              to="/contact?inquiry=custom-jewelry"
              className="group relative inline-flex items-center px-8 py-4 border-2 border-gold text-maroon font-montserrat font-medium tracking-wide hover:text-ivory transition-colors duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative">Start Custom Design</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Jewellery;
