
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const recentCars = [
  {
    id: 1,
    name: "BMW M8 Competition",
    price: "$139,900",
    year: 2024,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
    mileage: "150 mi",
    location: "Dubai, UAE",
  },
  {
    id: 2,
    name: "Lamborghini Huracán",
    price: "$268,000",
    year: 2023,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
    mileage: "320 mi",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 3,
    name: "Ferrari F8 Tributo",
    price: "$279,500",
    year: 2024,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
    mileage: "90 mi",
    location: "Dubai, UAE",
  },
];

const RecentCars = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Latest Arrivals</Badge>
          <h2 className="text-3xl font-bold mb-4">Recently Added</h2>
          <p className="text-luxury-600 max-w-2xl mx-auto">
            Explore our newest additions to the luxury vehicle collection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentCars.map((car) => (
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

export default RecentCars;
