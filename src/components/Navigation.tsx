
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-whatsapp-dark">WhatsApp</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Privacy</Button>
            <Button variant="ghost">Help Center</Button>
            <Button className="bg-whatsapp-primary hover:bg-whatsapp-dark text-white">
              Download
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
