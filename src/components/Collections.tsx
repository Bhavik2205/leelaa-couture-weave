import { Link } from 'react-router-dom';

const Collections = () => {
  const collections = [
    {
      name: "Virasat",
      subtitle: "Royal Heritage",
      description: "Deep jewel tones and regal silhouettes inspired by the grandeur of Indian palaces. Rich velvets, intricate zardozi, and timeless elegance for the modern maharani.",
      color: "from-indigo/20 to-maroon/20",
      accent: "text-indigo",
      route: "/virasat"
    },
    {
      name: "Neyaa Saawan",
      subtitle: "Monsoon Poetry",
      description: "Flowing fabrics in monsoon hues that dance with every step. Delicate embroidery celebrating the romance of rain-kissed gardens and gentle breezes.",
      color: "from-blush/30 to-gold/20",
      accent: "text-gold",
      route: "/neyaa-saawan"
    },
    {
      name: "Madhurya",
      subtitle: "Sweet Romance",
      description: "Soft blushes and gentle roses for the romantic soul. Dreamy pastels with intricate pearl work and delicate florals that whisper tales of love.",
      color: "from-blush/40 to-ivory",
      accent: "text-maroon",
      route: "/madhurya"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-gradient-to-b from-ivory to-blush/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl text-maroon mb-4">
            Our Collections
          </h2>
          <div className="w-32 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="font-montserrat text-lg text-maroon/70 max-w-2xl mx-auto">
            Three distinct narratives of Indian elegance, each telling its own story 
            of heritage, craftsmanship, and contemporary grace.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={collection.name}
              to={collection.route}
              className={`group relative overflow-hidden rounded-lg bg-gradient-to-br ${collection.color} p-8 h-96 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl block`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full bg-repeat-y" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23600f2f' fill-opacity='0.2'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>

              <div className="relative h-full flex flex-col justify-between">
                <div>
                  <h3 className={`font-playfair text-3xl ${collection.accent} mb-2`}>
                    {collection.name}
                  </h3>
                  <p className="font-montserrat text-sm text-maroon/60 mb-4 tracking-widest uppercase">
                    {collection.subtitle}
                  </p>
                  <p className="font-montserrat text-maroon/80 leading-relaxed">
                    {collection.description}
                  </p>
                </div>

                <div className="pt-6">
                  <span className="group/btn relative inline-flex items-center text-maroon font-montserrat font-medium tracking-wide hover:text-gold transition-colors duration-300">
                    <span className="relative">View Collection</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;