
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Press = () => {
  const pressFeatures = [
    {
      publication: "Vogue India",
      title: "The Renaissance of Indian Couture",
      excerpt: "LEELAA emerges as a beacon of traditional craftsmanship meeting contemporary elegance...",
      date: "March 2025",
      category: "Fashion Feature"
    },
    {
      publication: "Brides Today",
      title: "Crafting Dreams: The LEELAA Story",
      excerpt: "From palace courtyards to modern runways, LEELAA bridges heritage with innovation...",
      date: "February 2025",
      category: "Bridal Feature"
    },
    {
      publication: "Harper's Bazaar",
      title: "India's New Luxury Landscape",
      excerpt: "A new generation of designers is redefining Indian luxury, with LEELAA leading the charge...",
      date: "January 2025",
      category: "Luxury Report"
    },
    {
      publication: "Elle India",
      title: "The Art of Slow Fashion",
      excerpt: "In an era of fast fashion, LEELAA champions the timeless appeal of artisan craftsmanship...",
      date: "December 2024",
      category: "Sustainability"
    },
    {
      publication: "Condé Nast Traveller",
      title: "Rajasthan's Craft Legacy Lives On",
      excerpt: "Traditional techniques find new expression in contemporary designs at LEELAA...",
      date: "November 2024",
      category: "Culture & Travel"
    },
    {
      publication: "Grazia India",
      title: "Rising Stars of Indian Fashion",
      excerpt: "Meet the visionaries shaping the future of Indian couture, featuring LEELAA's innovative approach...",
      date: "October 2024",
      category: "Designer Spotlight"
    }
  ];

  const awards = [
    {
      title: "Best Emerging Designer",
      organization: "India Fashion Awards",
      year: "2024"
    },
    {
      title: "Excellence in Craftsmanship",
      organization: "Luxury Lifestyle Awards",
      year: "2024"
    },
    {
      title: "Sustainable Fashion Pioneer",
      organization: "Fashion Revolution India",
      year: "2024"
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
              Press & Media
            </h1>
            <div className="w-32 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="font-montserrat text-xl text-maroon/70 leading-relaxed">
              Discover what fashion's leading voices are saying about LEELAA's 
              journey in redefining Indian couture.
            </p>
          </div>
        </section>

        {/* Press Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl text-maroon mb-4">Featured Stories</h2>
              <div className="w-24 h-0.5 bg-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pressFeatures.map((feature, index) => (
                <article key={feature.title} className="bg-ivory border border-maroon/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {/* Mock Magazine Cover */}
                  <div className="relative h-48 bg-gradient-to-br from-maroon/10 to-gold/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-maroon/20 rounded-full flex items-center justify-center mb-3">
                        <svg className="w-8 h-8 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                      </div>
                      <p className="font-playfair text-lg text-maroon font-semibold">{feature.publication}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-gold/80 text-maroon px-2 py-1 rounded text-xs font-montserrat">
                      {feature.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-playfair text-xl text-maroon mb-2 hover:text-gold transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="font-montserrat text-sm text-bronze mb-3">{feature.date}</p>
                    <p className="font-montserrat text-maroon/70 text-sm leading-relaxed mb-4">
                      {feature.excerpt}
                    </p>
                    <button className="font-montserrat text-gold text-sm font-medium hover:text-maroon transition-colors duration-300">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-20 bg-gradient-to-b from-blush/10 to-ivory">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl text-maroon mb-4">Awards & Recognition</h2>
              <div className="w-24 h-0.5 bg-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={award.title} className="text-center p-8 bg-ivory rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-.74L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="font-playfair text-xl text-maroon mb-2">{award.title}</h3>
                  <p className="font-montserrat text-bronze text-sm mb-2">{award.organization}</p>
                  <p className="font-montserrat text-gold font-semibold">{award.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Inquiries */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-4xl text-maroon mb-6">Press Inquiries</h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="font-montserrat text-lg text-maroon/70 mb-8 leading-relaxed">
              For press inquiries, interview requests, or high-resolution images, 
              please contact our media relations team.
            </p>
            
            <div className="bg-gradient-to-br from-blush/20 to-gold/10 rounded-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-montserrat font-semibold text-maroon mb-2">Media Contact</h4>
                  <p className="font-montserrat text-maroon/70 text-sm">press@leelaa.com</p>
                  <p className="font-montserrat text-maroon/70 text-sm">+91 98765 43210</p>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-maroon mb-2">Brand Partnership</h4>
                  <p className="font-montserrat text-maroon/70 text-sm">partnerships@leelaa.com</p>
                  <p className="font-montserrat text-maroon/70 text-sm">+91 98765 43211</p>
                </div>
              </div>
            </div>

            <div className="space-x-4">
              <button className="group relative inline-flex items-center px-6 py-3 border-2 border-gold text-maroon font-montserrat font-medium tracking-wide hover:text-ivory transition-colors duration-300 overflow-hidden">
                <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative">Download Press Kit</span>
              </button>
              <button className="font-montserrat text-maroon hover:text-gold transition-colors duration-300">
                Request Interview →
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Press;
