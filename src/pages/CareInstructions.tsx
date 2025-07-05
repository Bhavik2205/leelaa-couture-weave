
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CareInstructions = () => {
  return (
    <div className="min-h-screen bg-ivory font-montserrat">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-ivory via-blush/20 to-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl text-maroon mb-6">
              Care Instructions
            </h1>
            <div className="w-32 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="font-montserrat text-xl text-maroon/70 leading-relaxed">
              Preserving the beauty and longevity of your LEELAA pieces
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="font-playfair text-3xl text-maroon mb-6">General Care</h2>
              <ul className="font-montserrat text-maroon/80 mb-8 space-y-2 pl-6">
                <li>• Always store in breathable garment bags</li>
                <li>• Keep away from direct sunlight and moisture</li>
                <li>• Avoid contact with perfumes, deodorants, and cosmetics</li>
                <li>• Handle with clean, dry hands</li>
              </ul>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Fabric-Specific Care</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blush/10 p-6 rounded-lg">
                  <h3 className="font-playfair text-xl text-maroon mb-3">Silk & Brocade</h3>
                  <ul className="font-montserrat text-maroon/80 text-sm space-y-1">
                    <li>• Dry clean only</li>
                    <li>• Store flat or hanging</li>
                    <li>• Avoid water exposure</li>
                  </ul>
                </div>
                <div className="bg-blush/10 p-6 rounded-lg">
                  <h3 className="font-playfair text-xl text-maroon mb-3">Cotton & Linen</h3>
                  <ul className="font-montserrat text-maroon/80 text-sm space-y-1">
                    <li>• Gentle hand wash or dry clean</li>
                    <li>• Iron on medium heat</li>
                    <li>• Store in cotton bags</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Embellishment Care</h2>
              <div className="bg-gold/10 p-6 rounded-lg mb-8">
                <h3 className="font-playfair text-xl text-maroon mb-3">Zardozi & Hand Embroidery</h3>
                <ul className="font-montserrat text-maroon/80 space-y-2">
                  <li>• Professional dry cleaning recommended</li>
                  <li>• Store with tissue paper between folds</li>
                  <li>• Avoid hanging heavy embroidered pieces</li>
                  <li>• Handle embellishments gently</li>
                </ul>
              </div>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Jewelry Care</h2>
              <ul className="font-montserrat text-maroon/80 mb-8 space-y-2 pl-6">
                <li>• Clean with soft, dry cloth after each use</li>
                <li>• Store in individual pouches or compartments</li>
                <li>• Keep away from water and chemicals</li>
                <li>• Polish gold jewelry with specialized cleaners</li>
              </ul>

              <h2 className="font-playfair text-3xl text-maroon mb-6">Long-term Storage</h2>
              <p className="font-montserrat text-maroon/80 mb-6 leading-relaxed">
                For long-term storage, ensure pieces are clean and completely dry. Use acid-free tissue paper, 
                cedar blocks for natural pest control, and check periodically for any signs of damage.
              </p>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareInstructions;
