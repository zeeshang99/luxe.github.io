
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

interface Car {
  id: number;
  name: string;
  price: {
    USD: number;
    AED: number;
    EUR: number;
  };
  year: number;
  image: string;
  mileage: string;
  location: string;
  type: string;
  engine: string;
  color: string;
  status: string;
}

const ComparePage = () => {
  const navigate = useNavigate();
  const carsToCompare = JSON.parse(localStorage.getItem("carsToCompare") || "[]") as Car[];
  
  // Mock additional images for each car (in real app, these would come from your data)
  const [carImages] = useState<{ [key: number]: string[] }>(() => {
    const images: { [key: number]: string[] } = {};
    carsToCompare.forEach(car => {
      images[car.id] = [
        car.image,
        car.image.replace('?', '?v=1'),
        car.image.replace('?', '?v=2'),
        car.image.replace('?', '?v=3'),
      ];
    });
    return images;
  });
  
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    if (carsToCompare.length === 1) {
      toast({
        title: "Add one more car",
        description: "You need at least 2 cars to compare.",
        variant: "destructive",
      });
    }
  }, [carsToCompare.length]);

  const removeCar = (carId: number) => {
    const updatedCars = carsToCompare.filter(car => car.id !== carId);
    localStorage.setItem("carsToCompare", JSON.stringify(updatedCars));
    window.location.reload();
  };

  const formatSpecification = (label: string, value: string) => (
    <div className="py-2 border-b border-gray-100 last:border-0">
      <p className="font-medium text-gray-700">{label}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  );

  const nextImage = (carId: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [carId]: ((prev[carId] || 0) + 1) % (carImages[carId]?.length || 1)
    }));
  };

  const prevImage = (carId: number) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [carId]: ((prev[carId] || 0) - 1 + (carImages[carId]?.length || 1)) % (carImages[carId]?.length || 1)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Compare Vehicles</h1>
          <p className="text-gray-600">
            {carsToCompare.length} of 10 vehicles selected
          </p>
        </div>

        {carsToCompare.length < 2 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-yellow-800">
              Please select at least 2 vehicles to compare. You can add up to 10 vehicles.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carsToCompare.map((car) => (
            <Card key={car.id} className="relative overflow-hidden">
              <button
                onClick={() => removeCar(car.id)}
                className="absolute top-2 right-2 p-1 bg-white/80 rounded-full hover:bg-white/90 transition-colors z-10"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>
              <div className="p-6">
                <div className="relative group">
                  <img
                    src={carImages[car.id]?.[currentImageIndexes[car.id] || 0]}
                    alt={car.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="bg-white/80 hover:bg-white/90"
                      onClick={(e) => {
                        e.preventDefault();
                        prevImage(car.id);
                      }}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="bg-white/80 hover:bg-white/90"
                      onClick={(e) => {
                        e.preventDefault();
                        nextImage(car.id);
                      }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                    {carImages[car.id]?.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          (currentImageIndexes[car.id] || 0) === index
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                        onClick={() => setCurrentImageIndexes(prev => ({
                          ...prev,
                          [car.id]: index
                        }))}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{car.name}</h3>
                
                <div className="space-y-1">
                  {formatSpecification("Year", car.year.toString())}
                  {formatSpecification("Engine", car.engine)}
                  {formatSpecification("Mileage", car.mileage)}
                  {formatSpecification("Exterior Color", car.color)}
                  {formatSpecification("Type", car.type)}
                  {formatSpecification("Location", car.location)}
                  {formatSpecification("Status", car.status)}
                </div>
              </div>
            </Card>
          ))}

          {carsToCompare.length < 10 && (
            <Card className="relative overflow-hidden">
              <div className="p-6 flex flex-col items-center justify-center min-h-[400px]">
                <Button
                  variant="outline"
                  className="w-full max-w-xs"
                  onClick={() => navigate("/inventory")}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Vehicle to Compare
                </Button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  {carsToCompare.length === 0
                    ? "Select 2-10 vehicles to compare"
                    : `${10 - carsToCompare.length} more vehicles can be added`}
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComparePage;
