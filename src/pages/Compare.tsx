
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center mb-8">Compare Vehicles</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((index) => (
            <Card key={index} className="relative overflow-hidden">
              {carsToCompare[index] ? (
                <div className="p-6">
                  <img
                    src={carsToCompare[index].image}
                    alt={carsToCompare[index].name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{carsToCompare[index].name}</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Year:</span> {carsToCompare[index].year}</p>
                    <p><span className="font-medium">Engine:</span> {carsToCompare[index].engine}</p>
                    <p><span className="font-medium">Mileage:</span> {carsToCompare[index].mileage}</p>
                  </div>
                </div>
              ) : (
                <div className="p-6 flex flex-col items-center justify-center min-h-[400px]">
                  <Button
                    variant="outline"
                    className="w-full max-w-xs"
                    onClick={() => navigate("/inventory")}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Choose Car to Compare
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComparePage;
