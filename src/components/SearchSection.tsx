
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, RotateCcw } from "lucide-react";
import { useState } from "react";

const SearchSection = () => {
  const [searchValues, setSearchValues] = useState({
    keyword: "",
    make: "",
    model: "",
    year: "",
    price: "",
    mileage: ""
  });

  const resetSearch = () => {
    setSearchValues({
      keyword: "",
      make: "",
      model: "",
      year: "",
      price: "",
      mileage: ""
    });
  };

  return (
    <div className="container mx-auto px-4 -mt-32 relative z-20">
      <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">Find Your Dream Car</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <Input 
              type="text" 
              placeholder="Search by make, model, or keyword" 
              className="flex-1"
              value={searchValues.keyword}
              onChange={(e) => setSearchValues(prev => ({ ...prev, keyword: e.target.value }))}
            />
            <Button className="bg-black hover:bg-black/90">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <select 
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={searchValues.make}
              onChange={(e) => setSearchValues(prev => ({ ...prev, make: e.target.value }))}
            >
              <option value="">Make</option>
              <option value="bmw">BMW</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select 
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={searchValues.model}
              onChange={(e) => setSearchValues(prev => ({ ...prev, model: e.target.value }))}
            >
              <option value="">Model</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="coupe">Coupe</option>
            </select>
            <select 
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={searchValues.year}
              onChange={(e) => setSearchValues(prev => ({ ...prev, year: e.target.value }))}
            >
              <option value="">Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <select 
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={searchValues.mileage}
              onChange={(e) => setSearchValues(prev => ({ ...prev, mileage: e.target.value }))}
            >
              <option value="">Mileage</option>
              <option value="0-1000">0-1,000 mi</option>
              <option value="1000-5000">1,000-5,000 mi</option>
              <option value="5000-10000">5,000-10,000 mi</option>
              <option value="10000+">10,000+ mi</option>
            </select>
            <select 
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={searchValues.price}
              onChange={(e) => setSearchValues(prev => ({ ...prev, price: e.target.value }))}
            >
              <option value="">Price Range</option>
              <option value="50k">Under $50k</option>
              <option value="100k">Under $100k</option>
              <option value="200k">Under $200k</option>
            </select>
            <Button 
              variant="outline" 
              onClick={resetSearch}
              className="col-span-2 md:col-span-1"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
