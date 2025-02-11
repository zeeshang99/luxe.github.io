
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import FeaturedCars from "@/components/FeaturedCars";
import RecentCars from "@/components/RecentCars";
import SellForm from "@/components/SellForm";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SearchSection />
      <FeaturedCars />
      <RecentCars />
      <SellForm />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
