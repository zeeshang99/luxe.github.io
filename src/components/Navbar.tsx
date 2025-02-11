
import { Car, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Inventory", href: "#inventory" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
    { label: "Sell a Car", href: "#sell" },
    { label: "News", href: "#news" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-evenly rounded-full bg-white shadow-sm py-4">
          <a href="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8" />
            <span className="font-bold text-2xl">VIPMOTORS</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-luxury-700 hover:text-luxury-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Compare Button */}
          <div className="hidden md:block">
            <Button variant="outline">
              <a href="#compare">Compare</a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-luxury-700 hover:text-luxury-900 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#compare"
                  className="text-luxury-700 hover:text-luxury-900 transition-colors"
                >
                  Compare
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
