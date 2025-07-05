
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Jewellery from "./pages/Jewellery";
import Weddings from "./pages/Weddings";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import Virasat from "./pages/Virasat";
import NeyaaSaawan from "./pages/NeyaaSaawan";
import Madhurya from "./pages/Madhurya";
import SizingGuide from "./pages/SizingGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/virasat" element={<Virasat />} />
          <Route path="/neyaa-saawan" element={<NeyaaSaawan />} />
          <Route path="/madhurya" element={<Madhurya />} />
          <Route path="/sizing-guide" element={<SizingGuide />} />
          <Route path="/shipping-policy" element={<Contact />} />
          <Route path="/return-policy" element={<Contact />} />
          <Route path="/care-instructions" element={<Contact />} />
          <Route path="/privacy-policy" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
