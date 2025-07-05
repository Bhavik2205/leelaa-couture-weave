
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-ivory font-montserrat">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-ivory via-blush/20 to-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl text-maroon mb-6">
              Shipping Policy
            </h1>
            <div className="w-32 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="font-montserrat text-xl text-maroon/70 leading-relaxed">
              Delivering your handcrafted pieces with utmost care across the globe
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="font-playfair text-3xl text-maroon mb-6">Processing Time</h2>
              <p className="font-montserrat text-maroon/80 mb-6 leading-relaxed">
                Each LEELAA piece is meticulously handcrafted to order by our skilled artisans. Processing times vary by collection:
              </p>
              <ul className="font-montserrat text-maroon/80 mb-8 space-y-2 pl-6">
                <li>• Ready-to-wear pieces: 3-4 weeks</li>
                <li>• Bridal lehengas: 6-8 weeks</li>
                <li>• Custom couture: 8-12 weeks</li>
                <li>• Jewelry pieces: 2-3 weeks</li>
              </ul>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Shipping Methods</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blush/10 p-6 rounded-lg">
                  <h3 className="font-playfair text-xl text-maroon mb-3">Domestic (India)</h3>
                  <p className="font-montserrat text-maroon/80 text-sm">Express shipping: 2-3 business days</p>
                  <p className="font-montserrat text-maroon/80 text-sm">Standard shipping: 5-7 business days</p>
                </div>
                <div className="bg-blush/10 p-6 rounded-lg">
                  <h3 className="font-playfair text-xl text-maroon mb-3">International</h3>
                  <p className="font-montserrat text-maroon/80 text-sm">Express: 5-7 business days</p>
                  <p className="font-montserrat text-maroon/80 text-sm">Standard: 10-14 business days</p>
                </div>
              </div>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Packaging</h2>
              <p className="font-montserrat text-maroon/80 mb-6 leading-relaxed">
                Your LEELAA pieces arrive in our signature packaging - luxurious boxes with traditional Indian motifs, 
                complete with care instructions and authenticity certificates.
              </p>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Shipping Charges</h2>
              <p className="font-montserrat text-maroon/80 mb-6 leading-relaxed">
                Shipping costs are calculated based on destination and order value. Complimentary shipping is offered on orders above ₹50,000 (domestic) and $500 (international).
              </p>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingPolicy;
