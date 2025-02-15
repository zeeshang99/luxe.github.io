import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchSection = () => {
  const navigate = useNavigate();
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

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    const params = new URLSearchParams();
    Object.entries(searchValues).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });

    navigate(`/inventory?${params.toString()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container mx-auto px-4 -mt-20 relative z-20">
      <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">Find Your Dream Car</h2>
          <form onSubmit={handleSearch}>
            <div className="flex flex-col md:flex-row gap-4">
              <Input 
                type="text" 
                placeholder="Search by make, model, or keyword" 
                className="flex-1"
                value={searchValues.keyword}
                onChange={(e) => setSearchValues(prev => ({ ...prev, keyword: e.target.value }))}
                onKeyPress={handleKeyPress}
              />
              <Button type="submit" className="bg-black hover:bg-black/90">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <select 
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={searchValues.make}
                onChange={(e) => setSearchValues(prev => ({ ...prev, make: e.target.value }))}
              >
                <option value="">Make</option>
                <option value="aston martin">Aston Martin</option>
                <option value="audi">Audi</option>
                <option value="bentley">Bentley</option>
                <option value="bmw">BMW</option>
                <option value="bugatti">Bugatti</option>
                <option value="ferrari">Ferrari</option>
                <option value="koenigsegg">Koenigsegg</option>
                <option value="lamborghini">Lamborghini</option>
                <option value="maserati">Maserati</option>
                <option value="mclaren">McLaren</option>
                <option value="mercedes">Mercedes-Benz</option>
                <option value="pagani">Pagani</option>
                <option value="porsche">Porsche</option>
                <option value="rolls royce">Rolls-Royce</option>
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
                <option value="convertible">Convertible</option>
                <option value="hypercar">Hypercar</option>
                <option value="supercar">Supercar</option>
                <option value="grand tourer">Grand Tourer</option>
              </select>
              <select 
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={searchValues.year}
                onChange={(e) => setSearchValues(prev => ({ ...prev, year: e.target.value }))}
              >
                <option value="">Year</option>
                {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                  <option key={year} value={year.toString()}>{year}</option>
                ))}
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
                <option value="500k">Under $500k</option>
                <option value="1000k">Under $1M</option>
                <option value="2000k">Under $2M</option>
                <option value="5000k">Under $5M</option>
              </select>
              <Button 
                type="button"
                variant="outline" 
                onClick={resetSearch}
                className="col-span-2 md:col-span-1"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
