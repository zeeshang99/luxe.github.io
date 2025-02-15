
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About VIP Motors</h3>
            <p className="text-gray-300 max-w-md">
              The Biggest Luxury Car Showroom in UAE and the WORLD. We specialize in offering premium new and used cars with years of experience in meeting our clients' expectations.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/vipmotorsuae/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/vipmotorsuae/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://x.com/vipmotorsuae" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/vipmotorsuae" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/c/VIPMotorsUAE" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
