
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import FeaturedCars from "@/components/FeaturedCars";
import RecentCars from "@/components/RecentCars";
import SellForm from "@/components/SellForm";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const searchRef = useRef(null);
  const featuredRef = useRef(null);
  const recentRef = useRef(null);
  const sellRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sections = [
      { ref: searchRef, y: 50 },
      { ref: featuredRef, y: 50 },
      { ref: recentRef, y: 50 },
      { ref: sellRef, y: 50 },
      { ref: contactRef, y: 50 },
    ];

    sections.forEach((section) => {
      gsap.fromTo(
        section.ref.current,
        { opacity: 0, y: section.y },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section.ref.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <div ref={searchRef}>
        <SearchSection />
      </div>
      <div ref={featuredRef} id="inventory">
        <FeaturedCars />
      </div>
      <div ref={recentRef}>
        <RecentCars />
      </div>
      <div ref={sellRef} id="sell">
        <SellForm />
      </div>
      <AboutUs />
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
