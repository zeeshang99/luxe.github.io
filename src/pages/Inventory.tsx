import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchSection from "@/components/SearchSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Plus, Facebook, Twitter, Linkedin, Link } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

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

const InventoryPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currency, setCurrency] = useState<"USD" | "AED" | "EUR">("USD");
  const [filter, setFilter] = useState<"all" | "available" | "sold">("all");
  const [filteredCars, setFilteredCars] = useState(cars);
  
  const currencySymbols = {
    USD: "$",
    AED: "AED",
    EUR: "€"
  };

  useEffect(() => {
    let filtered = [...cars];
    
    // Apply search filters from URL params
    const keyword = searchParams.get("keyword")?.toLowerCase();
    const make = searchParams.get("make")?.toLowerCase();
    const model = searchParams.get("model")?.toLowerCase();
    const year = searchParams.get("year");
    const price = searchParams.get("price");
    const mileage = searchParams.get("mileage");

    if (keyword) {
      filtered = filtered.filter(car => 
        car.name.toLowerCase().includes(keyword) ||
        car.type.toLowerCase().includes(keyword) ||
        car.engine.toLowerCase().includes(keyword)
      );
    }

    if (make) {
      filtered = filtered.filter(car => 
        car.name.toLowerCase().includes(make)
      );
    }

    if (model) {
      filtered = filtered.filter(car => 
        car.type.toLowerCase().includes(model)
      );
    }

    if (year) {
      filtered = filtered.filter(car => 
        car.year.toString() === year
      );
    }

    if (price) {
      const priceLimit = parseInt(price.replace(/\D/g, '')) * 1000;
      filtered = filtered.filter(car => 
        car.price.USD <= priceLimit
      );
    }

    if (mileage) {
      const [min, max] = mileage.split('-').map(v => parseInt(v) || 0);
      filtered = filtered.filter(car => {
        const carMileage = parseInt(car.mileage);
        if (mileage.includes('+')) {
          return carMileage >= min;
        }
        return carMileage >= min && carMileage <= max;
      });
    }

    // Apply availability filter
    if (filter !== "all") {
      filtered = filtered.filter(car => 
        filter === "available" ? car.status === "Available" : car.status === "Sold"
      );
    }

    setFilteredCars(filtered);
  }, [searchParams, filter]);

  const formatPrice = (price: { [key: string]: number }) => {
    return `${currencySymbols[currency]} ${price[currency].toLocaleString()}`;
  };

  const handleShare = (car: typeof cars[0], platform: string) => {
    const shareUrl = window.location.href;
    const text = `Check out this ${car.year} ${car.name} at ${formatPrice(car.price)}!`;
    
    let shareLink = '';
    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link copied!",
          description: "The car link has been copied to your clipboard.",
        });
        return;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=400');
    }
  };

  const handleCompare = (car: typeof cars[0]) => {
    const carsToCompare = JSON.parse(localStorage.getItem("carsToCompare") || "[]");
    if (carsToCompare.length >= 10) {
      toast({
        title: "Compare limit reached",
        description: "You can only compare up to 10 cars at a time.",
        variant: "destructive",
      });
      return;
    }
    
    if (carsToCompare.some((c: typeof car) => c.id === car.id)) {
      toast({
        title: "Car already added",
        description: "This car is already in your comparison list.",
        variant: "destructive",
      });
      return;
    }
    
    const updatedCars = [...carsToCompare, car];
    localStorage.setItem("carsToCompare", JSON.stringify(updatedCars));
    
    toast({
      title: "Car added to compare",
      description: `${updatedCars.length === 1 ? 'Add one more car to start comparing' : 'Navigate to the compare page to view your selection.'}`,
    });
    
    if (updatedCars.length >= 2) {
      navigate("/compare");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <div 
        className="relative pt-40 pb-24 bg-black"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-white mb-6">
            Explore the Inventory
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-2xl mx-auto">
            Discover our exclusive collection of luxury and exotic vehicles
          </p>
        </div>
      </div>

      {/* Search Section */}
      <SearchSection />

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Status Filter */}
          <div className="flex gap-2">
            {(["all", "available", "sold"] as const).map((status) => (
              <Button
                key={status}
                variant={filter === status ? "default" : "outline"}
                onClick={() => setFilter(status)}
                className="capitalize"
              >
                {status}
              </Button>
            ))}
          </div>
          
          {/* Currency Toggle */}
          <div className="flex gap-2">
            {(["USD", "AED", "EUR"] as const).map((curr) => (
              <Button
                key={curr}
                variant={currency === curr ? "default" : "outline"}
                onClick={() => setCurrency(curr)}
                className="w-20"
              >
                {curr}
              </Button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredCars.map((car) => (
            <Card key={car.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 space-x-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => handleShare(car, 'facebook')}>
                        <Facebook className="h-4 w-4 mr-2" /> Facebook
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleShare(car, 'twitter')}>
                        <Twitter className="h-4 w-4 mr-2" /> Twitter
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleShare(car, 'linkedin')}>
                        <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleShare(car, 'copy')}>
                        <Link className="h-4 w-4 mr-2" /> Copy Link
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
                    onClick={() => handleCompare(car)}
                  >
                    <Plus className="h-4 w-4" />
                    Compare
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    car.status === "Available" ? "bg-green-500" : "bg-red-500"
                  } text-white`}>
                    {car.status}
                  </span>
                </div>
              </div>
              <CardHeader className="pt-6">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold">{car.name}</CardTitle>
                  <span className="text-lg font-bold text-luxury-800">
                    {formatPrice(car.price)}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-luxury-600">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-luxury-800">Year</p>
                      <p>{car.year}</p>
                    </div>
                    <div>
                      <p className="font-medium text-luxury-800">Kilometers</p>
                      <p>{car.mileage} km</p>
                    </div>
                    <div>
                      <p className="font-medium text-luxury-800">Warranty</p>
                      <p>{car.warranty}</p>
                    </div>
                    <div>
                      <p className="font-medium text-luxury-800">Specs</p>
                      <p>{car.specs}</p>
                    </div>
                    <div>
                      <p className="font-medium text-luxury-800">Transmission</p>
                      <p>{car.transmission}</p>
                    </div>
                    <div>
                      <p className="font-medium text-luxury-800">Body Type</p>
                      <p>{car.bodyType}</p>
                    </div>
                    <div>
                      <p className="font-medium text-luxury-800">Fuel Type</p>
                      <p>{car.fuelType}</p>
                    </div>
                    <div>
                      <p className="font-medium text-luxury-800">Color</p>
                      <p>{car.color}</p>
                    </div>
                    <div>
                      <p className="font-medium text-luxury-800">Doors</p>
                      <p>{car.doors}</p>
                    </div>
                    <div>
                      <p className="font-medium text-luxury-800">Cylinders</p>
                      <p>{car.cylinders}</p>
                    </div>
                    <div>
                      <p className="font-medium text-luxury-800">Horsepower</p>
                      <p>{car.horsepower} HP</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-luxury-800">Location</p>
                    <p>{car.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InventoryPage;
