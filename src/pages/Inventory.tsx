
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Bugatti Chiron",
    price: "$3,000,000",
    year: 2024,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
    mileage: "50 mi",
    location: "Dubai, UAE",
    type: "Hypercar",
  },
  {
    id: 2,
    name: "Rolls-Royce Phantom",
    price: "$580,000",
    year: 2024,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a",
    mileage: "100 mi",
    location: "Dubai, UAE",
    type: "Luxury",
  },
  {
    id: 3,
    name: "Lamborghini Aventador",
    price: "$450,000",
    year: 2023,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
    mileage: "250 mi",
    location: "Abu Dhabi, UAE",
    type: "Supercar",
  },
  {
    id: 4,
    name: "Ferrari SF90 Stradale",
    price: "$625,000",
    year: 2024,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
    mileage: "150 mi",
    location: "Dubai, UAE",
    type: "Supercar",
  },
  {
    id: 5,
    name: "Porsche 911 GT3 RS",
    price: "$225,000",
    year: 2024,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    mileage: "180 mi",
    location: "Dubai, UAE",
    type: "Sports Car",
  },
  {
    id: 6,
    name: "McLaren 720S",
    price: "$315,000",
    year: 2023,
    image: "https://images.unsplash.com/photo-1621135802920-933f4b6e85a6",
    mileage: "200 mi",
    location: "Abu Dhabi, UAE",
    type: "Supercar",
  },
];

const InventoryPage = () => {
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

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-2">
              <Input 
                type="text" 
                placeholder="Search by make, model, or keyword"
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <Button className="flex-1">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <Card key={car.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold">{car.name}</CardTitle>
                  <span className="text-lg font-bold text-luxury-800">{car.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-luxury-600">
                  <p>Year: {car.year}</p>
                  <p>Mileage: {car.mileage}</p>
                  <p>Location: {car.location}</p>
                  <p>Type: {car.type}</p>
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
