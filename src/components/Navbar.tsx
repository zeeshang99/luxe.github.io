
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      // If we're already on the home page, just scroll to the anchor
      if (location.pathname === '/') {
        const element = document.querySelector(href.replace('/', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If we're on another page, navigate to home first then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href.replace('/', ''));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(href);
    }
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Inventory", href: "/inventory" },
    { label: "About Us", href: "/#about" },
    { label: "Contact Us", href: "/#contact" },
    { label: "Sell a Car", href: "/#sell" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between rounded-full bg-white/90 backdrop-blur-sm shadow-sm py-4 px-8 max-w-5xl mx-auto">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-2xl">VIPMOTORS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className="text-luxury-700 hover:text-luxury-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Compare Button */}
          <div className="hidden md:block">
            <Button variant="outline">
              <Link to="/compare">Compare</Link>
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
                  <button
                    key={item.label}
                    onClick={() => {
                      handleNavigation(item.href);
                      const closeButton = document.querySelector('[data-radix-collection-item]');
                      (closeButton as HTMLElement)?.click();
                    }}
                    className="text-luxury-700 hover:text-luxury-900 transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <Link
                  to="/compare"
                  className="text-luxury-700 hover:text-luxury-900 transition-colors"
                >
                  Compare
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
