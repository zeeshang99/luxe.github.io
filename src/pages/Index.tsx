
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCars from "@/components/FeaturedCars";
import SellForm from "@/components/SellForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturedCars />
      <SellForm />
    </div>
  );
};

export default Index;
