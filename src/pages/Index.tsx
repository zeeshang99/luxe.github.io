
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
    <div 
      className="min-h-screen relative"
      style={{
        background: `
          linear-gradient(
            to bottom,
            #1A1F2C,
            #403E43
          )
        `,
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}
    >
      {/* 3D Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(26, 31, 44, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(26, 31, 44, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
        }}
      />

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(26, 31, 44, 0.8) 100%)'
        }}
      />

      {/* Ambient Light Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
          `
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <div>
          <SearchSection />
        </div>
        <div id="inventory" className="bg-white/[0.02] backdrop-blur-sm">
          <FeaturedCars />
        </div>
        <div className="bg-white/[0.02] backdrop-blur-sm">
          <RecentCars />
        </div>
        <div id="sell" className="bg-white/[0.02] backdrop-blur-sm">
          <SellForm />
        </div>
        <div id="about" className="bg-white/[0.02] backdrop-blur-sm">
          <AboutUs />
        </div>
        <div id="contact" className="bg-white/[0.02] backdrop-blur-sm">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
