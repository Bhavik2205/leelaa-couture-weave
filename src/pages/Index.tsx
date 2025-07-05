
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collections from "@/components/Collections";
import Jewelry from "@/components/Jewelry";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-ivory font-montserrat">
      <Navigation />
      <Hero />
      <About />
      <Collections />
      <Jewelry />
      <Footer />
    </div>
  );
};

export default Index;
