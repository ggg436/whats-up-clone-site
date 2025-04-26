
import { Button } from "@/components/ui/button";
import { MessageCircle, Video, Shield } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Simple. Secure. Reliable messaging.
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              With WhatsApp, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-whatsapp-primary hover:bg-whatsapp-dark text-white px-8 py-6">
                Download Now
              </Button>
              <Button variant="outline" className="px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Messaging Platform" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
