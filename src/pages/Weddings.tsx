
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Weddings = () => {
  const realBrides = [
    {
      name: "Priya Sharma",
      city: "Mumbai",
      outfit: "Virasat Royal Lehenga",
      testimonial: "LEELAA made my dream wedding come true. The intricate zardozi work was absolutely breathtaking!",
      occasion: "Traditional Wedding"
    },
    {
      name: "Ananya Patel",
      city: "Delhi",
      outfit: "Madhurya Rose Garden Set",
      testimonial: "The attention to detail and craftsmanship exceeded all my expectations. I felt like a princess!",
      occasion: "Reception"
    },
    {
      name: "Kavya Reddy",
      city: "Hyderabad",
      outfit: "Neyaa Saawan Monsoon Collection",
      testimonial: "The flowing silhouette and delicate embroidery perfectly captured my vision of ethereal elegance.",
      occasion: "Mehendi Ceremony"
    },
    {
      name: "Riya Gupta",
      city: "Bangalore",
      outfit: "Custom Bridal Ensemble",
      testimonial: "From consultation to final fitting, the team made every moment special. Truly exceptional service!",
      occasion: "Sangeet"
    }
  ];

  const weddingServices = [
    {
      title: "Bridal Consultation",
      description: "One-on-one styling session to understand your vision and create the perfect bridal look.",
      icon: "M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-.74L12 2z"
    },
    {
      title: "Custom Design",
      description: "Bespoke creations tailored to your preferences, body type, and wedding theme.",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    },
    {
      title: "Multiple Fittings",
      description: "Ensuring the perfect fit with multiple trial sessions and adjustments.",
      icon: "M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"
    },
    {
      title: "Complete Trousseau",
      description: "From ceremony wear to reception outfits, we create your entire wedding wardrobe.",
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
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
              Wedding Collections
            </h1>
            <div className="w-32 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="font-montserrat text-xl text-maroon/70 leading-relaxed">
              Where dreams meet craftsmanship. Creating unforgettable bridal moments 
              with couture that celebrates your unique love story.
            </p>
          </div>
        </section>

        {/* Wedding Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl text-maroon mb-4">Our Wedding Services</h2>
              <div className="w-24 h-0.5 bg-gold mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {weddingServices.map((service, index) => (
                <div key={service.title} className="text-center p-6 bg-gradient-to-br from-blush/20 to-ivory rounded-lg hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                      <path d={service.icon}/>
                    </svg>
                  </div>
                  <h3 className="font-playfair text-xl text-maroon mb-3">{service.title}</h3>
                  <p className="font-montserrat text-maroon/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Brides Section */}
        <section className="py-20 bg-gradient-to-b from-blush/10 to-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl text-maroon mb-4">Real Brides, Real Stories</h2>
              <div className="w-24 h-0.5 bg-gold mx-auto mb-6"></div>
              <p className="font-montserrat text-lg text-maroon/70 max-w-2xl mx-auto">
                Celebrating the beautiful brides who chose LEELAA for their special moments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {realBrides.map((bride, index) => (
                <div key={bride.name} className="bg-ivory rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-blush/30 to-gold/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-maroon/10 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto bg-gold/30 rounded-full flex items-center justify-center mb-3">
                          <svg className="w-10 h-10 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-.74L12 2z"/>
                          </svg>
                        </div>
                        <p className="font-montserrat text-maroon font-medium">{bride.occasion}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-playfair text-xl text-maroon mb-1">{bride.name}</h3>
                    <p className="font-montserrat text-sm text-bronze mb-2">{bride.city}</p>
                    <p className="font-montserrat text-sm text-gold font-medium mb-4">{bride.outfit}</p>
                    <p className="font-montserrat text-maroon/70 text-sm leading-relaxed italic">
                      "{bride.testimonial}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wedding Collections Showcase */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl text-maroon mb-4">Bridal Collections</h2>
              <div className="w-24 h-0.5 bg-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-indigo/20 to-maroon/20 p-8 h-96 transform transition-all duration-500 hover:scale-105">
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-playfair text-3xl text-indigo mb-2">Virasat Bridal</h3>
                    <p className="font-montserrat text-sm text-maroon/60 mb-4 tracking-widest uppercase">Royal Heritage</p>
                    <p className="font-montserrat text-maroon/80 leading-relaxed">
                      Regal lehengas and sarees with traditional zardozi work, perfect for the bride who embraces royal grandeur.
                    </p>
                  </div>
                  <Link to="/collections" className="font-montserrat text-maroon hover:text-gold transition-colors duration-300">
                    Explore Collection →
                  </Link>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-blush/40 to-ivory p-8 h-96 transform transition-all duration-500 hover:scale-105">
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-playfair text-3xl text-maroon mb-2">Madhurya Bridal</h3>
                    <p className="font-montserrat text-sm text-maroon/60 mb-4 tracking-widest uppercase">Sweet Romance</p>
                    <p className="font-montserrat text-maroon/80 leading-relaxed">
                      Soft pastels and romantic silhouettes with delicate pearl work for the dreamy bride.
                    </p>
                  </div>
                  <Link to="/collections" className="font-montserrat text-maroon hover:text-gold transition-colors duration-300">
                    Explore Collection →
                  </Link>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-blush/30 to-gold/20 p-8 h-96 transform transition-all duration-500 hover:scale-105">
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-playfair text-3xl text-gold mb-2">Neyaa Saawan</h3>
                    <p className="font-montserrat text-sm text-maroon/60 mb-4 tracking-widest uppercase">Monsoon Poetry</p>
                    <p className="font-montserrat text-maroon/80 leading-relaxed">
                      Flowing fabrics and ethereal designs inspired by monsoon romance and nature's beauty.
                    </p>
                  </div>
                  <Link to="/collections" className="font-montserrat text-maroon hover:text-gold transition-colors duration-300">
                    Explore Collection →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-maroon/5 to-indigo/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-4xl text-maroon mb-6">
              Begin Your Bridal Journey
            </h2>
            <p className="font-montserrat text-maroon/70 mb-8 leading-relaxed text-lg">
              Schedule a consultation with our design team to create your perfect bridal ensemble. 
              Let us bring your wedding dreams to life with couture that celebrates your unique story.
            </p>
            <Link 
              to="/contact"
              className="group relative inline-flex items-center px-8 py-4 border-2 border-gold text-maroon font-montserrat font-medium tracking-wide hover:text-ivory transition-colors duration-300 overflow-hidden mr-4"
            >
              <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative">Book Consultation</span>
            </Link>
            <Link 
              to="/collections"
              className="group relative inline-flex items-center px-8 py-4 text-maroon font-montserrat font-medium tracking-wide hover:text-gold transition-colors duration-300"
            >
              <span className="relative">View Collections</span>
              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Weddings;
