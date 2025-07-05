
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SizingGuide = () => {
  const measurements = [
    { size: "XS", bust: "32", waist: "26", hips: "34" },
    { size: "S", bust: "34", waist: "28", hips: "36" },
    { size: "M", bust: "36", waist: "30", hips: "38" },
    { size: "L", bust: "38", waist: "32", hips: "40" },
    { size: "XL", bust: "40", waist: "34", hips: "42" },
    { size: "XXL", bust: "42", waist: "36", hips: "44" }
  ];

  return (
    <div className="min-h-screen bg-ivory font-montserrat">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-playfair text-5xl text-maroon mb-6">Sizing Guide</h1>
              <div className="w-32 h-0.5 bg-gold mx-auto mb-8"></div>
              <p className="font-montserrat text-lg text-maroon/70">
                Find your perfect fit with our comprehensive sizing guide
              </p>
            </div>

            <div className="bg-blush/10 rounded-lg p-8 mb-12">
              <h2 className="font-playfair text-2xl text-maroon mb-6">Standard Size Chart (in inches)</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-maroon/20">
                      <th className="font-montserrat text-maroon p-3 text-left">Size</th>
                      <th className="font-montserrat text-maroon p-3 text-left">Bust</th>
                      <th className="font-montserrat text-maroon p-3 text-left">Waist</th>
                      <th className="font-montserrat text-maroon p-3 text-left">Hips</th>
                    </tr>
                  </thead>
                  <tbody>
                    {measurements.map((row) => (
                      <tr key={row.size} className="border-b border-maroon/10">
                        <td className="font-montserrat text-maroon p-3 font-medium">{row.size}</td>
                        <td className="font-montserrat text-maroon/70 p-3">{row.bust}"</td>
                        <td className="font-montserrat text-maroon/70 p-3">{row.waist}"</td>
                        <td className="font-montserrat text-maroon/70 p-3">{row.hips}"</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gold/10 to-blush/10 rounded-lg p-6">
                <h3 className="font-playfair text-xl text-maroon mb-4">How to Measure</h3>
                <ul className="space-y-3 font-montserrat text-maroon/70">
                  <li><strong>Bust:</strong> Measure around the fullest part of your chest</li>
                  <li><strong>Waist:</strong> Measure around your natural waistline</li>
                  <li><strong>Hips:</strong> Measure around the fullest part of your hips</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-maroon/10 to-gold/10 rounded-lg p-6">
                <h3 className="font-playfair text-xl text-maroon mb-4">Custom Tailoring</h3>
                <p className="font-montserrat text-maroon/70 mb-4">
                  All LEELAA pieces are made-to-order with custom fitting available. 
                  We recommend scheduling a consultation for the perfect fit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SizingGuide;
