
const Jewelry = () => {
  const jewelry = [
    {
      name: "Kundan Chandelier Earrings",
      material: "22K Gold, Uncut Diamonds, Pearls",
      description: "Traditional Rajasthani kundan work with cascading pearl drops"
    },
    {
      name: "Meenakari Royal Necklace",
      material: "Gold, Enamel Work, Precious Stones",
      description: "Hand-painted enamel florals with ruby and emerald accents"
    },
    {
      name: "Temple Jewelry Set",
      material: "Gold Plated, South Sea Pearls",
      description: "Sacred motifs inspired by ancient temple architecture"
    },
    {
      name: "Polki Diamond Choker",
      material: "Uncut Diamonds, Rose Gold",
      description: "Vintage-inspired design with raw diamond brilliance"
    },
    {
      name: "Jadau Maang Tikka",
      material: "Gold, Precious Stones, Pearls",
      description: "Intricate gem-setting technique passed down through generations"
    },
    {
      name: "Pearl Chandelier Set",
      material: "South Sea Pearls, Diamond Accents",
      description: "Elegant cascading pearls with subtle diamond highlights"
    }
  ];

  return (
    <section id="jewellery" className="py-20 bg-gradient-to-b from-indigo/5 to-maroon/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl text-maroon mb-4">
            Handcrafted Jewellery
          </h2>
          <div className="w-32 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="font-montserrat text-lg text-maroon/70 max-w-2xl mx-auto">
            Each piece is meticulously crafted using traditional techniques, 
            featuring precious metals and stones that tell stories of Indian artistry.
          </p>
        </div>

        {/* Jewelry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {jewelry.map((item, index) => (
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
                  <span className="font-montserrat text-gold font-medium">
                    Price Upon Request
                  </span>
                  <button className="text-maroon hover:text-gold transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="group relative inline-flex items-center px-8 py-4 border-2 border-gold text-maroon font-montserrat font-medium tracking-wide hover:text-ivory transition-colors duration-300 overflow-hidden">
            <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative">View Complete Collection</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Jewelry;
