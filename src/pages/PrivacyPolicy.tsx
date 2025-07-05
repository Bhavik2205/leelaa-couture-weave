
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-ivory font-montserrat">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-ivory via-blush/20 to-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl text-maroon mb-6">
              Privacy Policy
            </h1>
            <div className="w-32 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="font-montserrat text-xl text-maroon/70 leading-relaxed">
              Your privacy and trust are precious to us
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="font-playfair text-3xl text-maroon mb-6">Information We Collect</h2>
              <ul className="font-montserrat text-maroon/80 mb-8 space-y-2 pl-6">
                <li>• Personal details: Name, email, phone number, address</li>
                <li>• Measurement information for custom fittings</li>
                <li>• Payment and billing information</li>
                <li>• Communication preferences and history</li>
                <li>• Website usage and analytics data</li>
              </ul>

              <h2 className="font-playfair text-3xl text-maroon mb-6">How We Use Your Information</h2>
              <ul className="font-montserrat text-maroon/80 mb-8 space-y-2 pl-6">
                <li>• Processing and fulfilling your orders</li>
                <li>• Providing customer support and communication</li>
                <li>• Personalizing your shopping experience</li>
                <li>• Sending updates about new collections and offers</li>
                <li>• Improving our services and website functionality</li>
              </ul>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Data Protection</h2>
              <p className="font-montserrat text-maroon/80 mb-6 leading-relaxed">
                We implement industry-standard security measures to protect your personal information. 
                All payment transactions are processed through secure, encrypted connections. 
                We never store complete payment card details on our servers.
              </p>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Information Sharing</h2>
              <p className="font-montserrat text-maroon/80 mb-6 leading-relaxed">
                We do not sell, rent, or share your personal information with third parties except:
              </p>
              <ul className="font-montserrat text-maroon/80 mb-8 space-y-2 pl-6">
                <li>• Trusted service providers who assist in order fulfillment</li>
                <li>• Payment processors for secure transaction handling</li>
                <li>• Legal requirements or protection of our rights</li>
              </ul>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Your Rights</h2>
              <ul className="font-montserrat text-maroon/80 mb-8 space-y-2 pl-6">
                <li>• Access and review your personal information</li>
                <li>• Request corrections to inaccurate data</li>
                <li>• Unsubscribe from marketing communications</li>
                <li>• Request deletion of your account and data</li>
              </ul>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Contact Us</h2>
              <p className="font-montserrat text-maroon/80 mb-6 leading-relaxed">
                For any privacy-related questions or requests, please contact us at privacy@leelaa.com 
                or through our contact page. We will respond within 48 hours.
              </p>

              <p className="font-montserrat text-maroon/60 text-sm">
                Last updated: January 2025
              </p>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
