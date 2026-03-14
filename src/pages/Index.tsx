import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionsGrid from "@/components/CollectionsGrid";
import AtelierSection from "@/components/AtelierSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import OurStorySection from "@/components/OurStorySection";

// 1. Import the Lenis Provider
import { ReactLenis } from '@studio-freight/react-lenis';

const Index = () => {
  return (
 
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <OurStorySection />
        <CollectionsGrid />
        <AtelierSection />
        <QuoteSection />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Index;