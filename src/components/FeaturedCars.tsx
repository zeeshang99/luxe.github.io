
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const cars = [
  {
    id: 1,
    name: "Porsche 911 GT3",
    price: "$162,450",
    year: 2023,
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    mileage: "1,200 mi",
    location: "Los Angeles, CA",
  },
  {
    id: 2,
    name: "Mercedes-AMG GT",
    price: "$148,800",
    year: 2023,
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    mileage: "890 mi",
    location: "Miami, FL",
  },
  {
    id: 3,
    name: "Aston Martin DB11",
    price: "$205,600",
    year: 2023,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    mileage: "450 mi",
    location: "New York, NY",
  },
];

const FeaturedCars = () => {
  return (
    <section id="cars" className="py-20 bg-luxury-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Featured Vehicles</Badge>
          <h2 className="text-3xl font-bold mb-4">Our Premium Selection</h2>
          <p className="text-luxury-600 max-w-2xl mx-auto">
            Discover our handpicked collection of the world's finest automobiles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
