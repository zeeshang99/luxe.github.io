import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  BarChart2,
  Mail,
  Share2,
  Check,
  Plus
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const cars = [
  {
    id: 1,
    name: "Bugatti Chiron",
    price: {
      USD: 3000000,
      AED: 11020000,
      EUR: 2760000
    },
    year: 2024,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
    mileage: "50",
    location: "Dubai, UAE",
    type: "Hypercar",
    engine: "8.0L W16 Quad-Turbo",
    color: "Black/Blue",
    status: "Available",
    specs: "GCC",
    warranty: "5 Years",
    transmission: "Automatic",
    bodyType: "Coupe",
    fuelType: "Petrol",
    doors: 2,
    cylinders: 16,
    horsepower: 1500,
    make: "bugatti"
  },
  {
    id: 2,
    name: "Rolls-Royce Phantom",
    price: {
      USD: 580000,
      AED: 2130000,
      EUR: 533000
    },
    year: 2024,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a",
    mileage: "100",
    location: "Dubai, UAE",
    type: "Luxury",
    engine: "6.75L V12",
    color: "Midnight Blue",
    status: "Available",
    specs: "GCC",
    warranty: "4 Years",
    transmission: "Automatic",
    bodyType: "Sedan",
    fuelType: "Petrol",
    doors: 4,
    cylinders: 12,
    horsepower: 563,
    make: "rolls royce"
  },
  {
    id: 3,
    name: "Lamborghini Aventador",
    price: {
      USD: 450000,
      AED: 1560000,
      EUR: 372000
    },
    year: 2023,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
    mileage: "250",
    location: "Abu Dhabi, UAE",
    type: "Supercar",
    engine: "6.5L V12",
    color: "Red",
    status: "Available",
    specs: "European",
    warranty: "3 Years",
    transmission: "Automatic",
    bodyType: "Coupe",
    fuelType: "Petrol",
    doors: 2,
    cylinders: 12,
    horsepower: 770,
    make: "lamborghini"
  },
];

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

const formatPrice = (price: { [key: string]: number }, currency: string) => {
  const currencySymbols = {
    USD: "$",
    AED: "AED",
    EUR: "€"
  };
  return {
    symbol: currencySymbols[currency as keyof typeof currencySymbols],
    value: price[currency].toLocaleString()
  };
};

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const carId = Number(id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isInCompare, setIsInCompare] = useState(false);

  const car = cars.find((c) => c.id === carId);
  const images = carImages[carId] || [];

  useEffect(() => {
    const carsToCompare = JSON.parse(localStorage.getItem("carsToCompare") || "[]");
    setIsInCompare(carsToCompare.some((c: typeof car) => c.id === carId));
  }, [carId]);

  const handleCompare = () => {
    const carsToCompare = JSON.parse(localStorage.getItem("carsToCompare") || "[]");
    
    if (isInCompare) {
      const updatedCars = carsToCompare.filter((c: typeof car) => c.id !== carId);
      localStorage.setItem("carsToCompare", JSON.stringify(updatedCars));
      setIsInCompare(false);
      
      toast({
        title: "Car removed from compare",
        description: "The car has been removed from your comparison list.",
      });
    } else {
      if (carsToCompare.length >= 10) {
        toast({
          title: "Compare limit reached",
          description: "You can only compare up to 10 cars at a time.",
          variant: "destructive",
        });
        return;
      }
      
      const updatedCars = [...carsToCompare, car];
      localStorage.setItem("carsToCompare", JSON.stringify(updatedCars));
      setIsInCompare(true);
      
      toast({
        title: "Car added to compare",
        description: `${updatedCars.length === 1 ? 'Add one more car to start comparing' : 'Navigate to the compare page to view your selection.'}`,
      });
      
      if (updatedCars.length >= 2) {
        navigate("/compare");
      }
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: car?.name,
        url: window.location.href,
      });
    }
  };

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

  const formattedPrice = formatPrice(car.price, selectedCurrency);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <Button
          variant="outline"
          onClick={() => navigate("/inventory")}
          className="mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Inventory
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
              <img
                src={images[currentImageIndex]}
                alt={car.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={handlePrevImage}
                  className="rounded-full bg-white/80 hover:bg-white"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={handleNextImage}
                  className="rounded-full bg-white/80 hover:bg-white"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  car.status === "Available" ? "bg-green-500" : "bg-red-500"
                } text-white shadow-lg`}>
                  {car.status}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`aspect-video overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity ${
                    currentImageIndex === index ? "ring-2 ring-black" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
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
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
              <div className="flex items-center gap-2">
                <Select
                  value={selectedCurrency}
                  onValueChange={setSelectedCurrency}
                >
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="AED">AED</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-2xl font-bold">
                  <span className="text-gray-500">{formattedPrice.symbol}</span>
                  <span className="text-red-500">{formattedPrice.value}</span>
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex-1 bg-black hover:bg-black/90">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Us
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="cursor-pointer">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>04 323 2999</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>contact@example.com</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={handleCompare}
              >
                {isInCompare ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Added
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4 mr-2" />
                    Compare
                  </>
                )}
              </Button>
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
