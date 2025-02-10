
import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
import HeroSection from "@/components/HeroSection";
import FeaturedCars from "@/components/FeaturedCars";
import SellForm from "@/components/SellForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Navbar />
      <HeroSection />
      <FeaturedCars />
      <SellForm />
    </div>
  );
};

export default Index;
