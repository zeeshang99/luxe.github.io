
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// This would typically come from an API, using static data for demonstration
const carImages = {
  1: [
    "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
    "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80",
    "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=60",
  ],
  2: [
    "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a",
    "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80",
    "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=60",
  ],
  3: [
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80",
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=60",
  ],
};

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const carId = Number(id);

  // Find the car from our data
  const car = cars.find((c) => c.id === carId);

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-2xl font-bold">Car not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Inventory
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {carImages[carId]?.map((img, index) => (
                <div
                  key={index}
                  className="aspect-video overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={img}
                    alt={`${car.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
              <p className="text-2xl font-bold text-luxury-800">
                {formatPrice(car.price)}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-luxury-800 mb-1">Engine</h3>
                <p>{car.engine}</p>
              </div>
              <div>
                <h3 className="font-semibold text-luxury-800 mb-1">Year</h3>
                <p>{car.year}</p>
              </div>
              <div>
                <h3 className="font-semibold text-luxury-800 mb-1">Color</h3>
                <p>{car.color}</p>
              </div>
              <div>
                <h3 className="font-semibold text-luxury-800 mb-1">Mileage</h3>
                <p>{car.mileage} km</p>
              </div>
              <div>
                <h3 className="font-semibold text-luxury-800 mb-1">Transmission</h3>
                <p>{car.transmission}</p>
              </div>
              <div>
                <h3 className="font-semibold text-luxury-800 mb-1">Body Type</h3>
                <p>{car.bodyType}</p>
              </div>
              <div>
                <h3 className="font-semibold text-luxury-800 mb-1">Fuel Type</h3>
                <p>{car.fuelType}</p>
              </div>
              <div>
                <h3 className="font-semibold text-luxury-800 mb-1">Horsepower</h3>
                <p>{car.horsepower} HP</p>
              </div>
              <div>
                <h3 className="font-semibold text-luxury-800 mb-1">Warranty</h3>
                <p>{car.warranty}</p>
              </div>
              <div>
                <h3 className="font-semibold text-luxury-800 mb-1">Specs</h3>
                <p>{car.specs}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-luxury-800 mb-1">Location</h3>
              <p>{car.location}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarDetails;
