
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 pt-24 pb-48">
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/50 z-[1]" /> {/* Overlay */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/6RJoBYL4SHM?autoplay=1&mute=1&loop=1&playlist=6RJoBYL4SHM&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="Background Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',
              pointerEvents: 'none',
              border: 'none',
              scale: '1.5'
            }}
          />
        </div>
        
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
              onClick={() => navigate('/inventory')}
            >
              Browse Collection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
