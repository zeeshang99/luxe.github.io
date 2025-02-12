import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchSection from "@/components/SearchSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Plus } from "lucide-react";

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
    mileage: "50 mi",
    location: "Dubai, UAE",
    type: "Hypercar",
    engine: "8.0L W16 Quad-Turbo",
    color: "Black/Blue",
    status: "Available",
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
    mileage: "100 mi",
    location: "Dubai, UAE",
    type: "Luxury",
    engine: "6.75L V12",
    color: "Midnight Blue",
    status: "Available",
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
    mileage: "250 mi",
    location: "Abu Dhabi, UAE",
    type: "Supercar",
    engine: "6.5L V12",
    color: "Red",
    status: "Available",
  },
  {
    id: 4,
    name: "Ferrari SF90 Stradale",
    price: {
      USD: 625000,
      AED: 2290000,
      EUR: 562000
    },
    year: 2024,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
    mileage: "150 mi",
    location: "Dubai, UAE",
    type: "Supercar",
    engine: "8.0L V12",
    color: "Red",
    status: "Available",
  },
  {
    id: 5,
    name: "Porsche 911 GT3 RS",
    price: {
      USD: 225000,
      AED: 800000,
      EUR: 180000
    },
    year: 2024,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    mileage: "180 mi",
    location: "Dubai, UAE",
    type: "Sports Car",
    engine: "3.0L V6",
    color: "Black",
    status: "Available",
  },
  {
    id: 6,
    name: "McLaren 720S",
    price: {
      USD: 315000,
      AED: 1160000,
      EUR: 243000
    },
    year: 2023,
    image: "https://images.unsplash.com/photo-1621135802920-933f4b6e85a6",
    mileage: "200 mi",
    location: "Abu Dhabi, UAE",
    type: "Supercar",
    engine: "6.5L V12",
    color: "Red",
    status: "Available",
  },
];

const InventoryPage = () => {
  const [currency, setCurrency] = React.useState<"USD" | "AED" | "EUR">("USD");
  const currencySymbols = {
    USD: "$",
    AED: "AED",
    EUR: "€"
  };

  const formatPrice = (price: { [key: string]: number }) => {
    return `${currencySymbols[currency]} ${price[currency].toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Our Inventory</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Explore our extensive collection of luxury and exotic vehicles
          </p>
        </div>
      </div>

      {/* Search Section */}
      <SearchSection />

      {/* Currency Toggle */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end gap-2 mb-6">
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

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <Card key={car.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 space-x-2">
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
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
                <div className="space-y-3 text-sm text-luxury-600">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-luxury-800">Engine</p>
                      <p>{car.engine}</p>
                    </div>
                    <div>
                      <p className="font-medium text-luxury-800">Year</p>
                      <p>{car.year}</p>
                    </div>
                    <div>
                      <p className="font-medium text-luxury-800">Mileage</p>
                      <p>{car.mileage}</p>
                    </div>
                    <div>
                      <p className="font-medium text-luxury-800">Color</p>
                      <p>{car.color}</p>
                    </div>
                  </div>
                  <div className="pt-2">
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
