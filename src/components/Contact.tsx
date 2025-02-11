
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Have ANY Question? Feel free to ask...
          </h2>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6" />
              <span className="text-xl">04 323 2999</span>
            </div>
            <Button size="lg" className="bg-black hover:bg-black/90">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
