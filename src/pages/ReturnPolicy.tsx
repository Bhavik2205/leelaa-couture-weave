
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-ivory font-montserrat">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-ivory via-blush/20 to-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl text-maroon mb-6">
              Return Policy
            </h1>
            <div className="w-32 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="font-montserrat text-xl text-maroon/70 leading-relaxed">
              Your satisfaction is our priority
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="font-playfair text-3xl text-maroon mb-6">Return Window</h2>
              <p className="font-montserrat text-maroon/80 mb-6 leading-relaxed">
                We offer a 7-day return window from the date of delivery for ready-to-wear items. 
                Custom and made-to-order pieces are generally non-returnable due to their bespoke nature.
              </p>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Eligible Returns</h2>
              <ul className="font-montserrat text-maroon/80 mb-8 space-y-2 pl-6">
                <li>• Items in original condition with tags attached</li>
                <li>• Items not worn or altered</li>
                <li>• Items in original packaging</li>
                <li>• Manufacturing defects or damages during shipping</li>
              </ul>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Non-Returnable Items</h2>
              <ul className="font-montserrat text-maroon/80 mb-8 space-y-2 pl-6">
                <li>• Custom-made or altered pieces</li>
                <li>• Bridal lehengas and couture pieces</li>
                <li>• Jewelry items (unless defective)</li>
                <li>• Items worn to events</li>
              </ul>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Exchange Policy</h2>
              <p className="font-montserrat text-maroon/80 mb-6 leading-relaxed">
                We offer size exchanges within 14 days of delivery, subject to availability. 
                Additional alteration charges may apply for significant size adjustments.
              </p>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Refund Process</h2>
              <p className="font-montserrat text-maroon/80 mb-6 leading-relaxed">
                Approved returns will be processed within 7-10 business days. 
                Refunds will be issued to the original payment method. Shipping charges are non-refundable unless the return is due to our error.
              </p>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ReturnPolicy;
