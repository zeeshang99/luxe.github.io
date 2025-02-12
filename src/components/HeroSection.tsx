
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="px-4 pt-24 pb-32">
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)"
          }}
        />
        
        <div className="relative z-10 text-center text-white space-y-6 px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Luxury Cars Reimagined
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
            Discover the finest collection of premium vehicles
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
              asChild
            >
              <a href="#cars">Browse Collection</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
