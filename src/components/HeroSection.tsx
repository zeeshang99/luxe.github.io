
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      />
      
      <div className="relative z-10 text-center text-white space-y-6 px-4 animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Luxury Cars Reimagined
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
          Discover the finest collection of premium vehicles
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
            asChild
          >
            <a href="#cars">Browse Collection</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
            asChild
          >
            <a href="#sell">Sell Your Car</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
