
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collections from "@/components/Collections";
import Jewelry from "@/components/Jewelry";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

export default Home;
