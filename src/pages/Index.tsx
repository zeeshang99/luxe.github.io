
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCars from "@/components/FeaturedCars";
import RecentCars from "@/components/RecentCars";
import SellForm from "@/components/SellForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturedCars />
      <RecentCars />
      <SellForm />
    </div>
  );
};

export default Index;
