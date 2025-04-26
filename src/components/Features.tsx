
import { MessageCircle, Video, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <MessageCircle className="w-12 h-12 text-whatsapp-primary" />,
      title: "Message Privately",
      description: "Simple, reliable, private messaging and calling for free*",
    },
    {
      icon: <Video className="w-12 h-12 text-whatsapp-primary" />,
      title: "Video Calling",
      description: "Make secure video calls with up to 8 people for free",
    },
    {
      icon: <Shield className="w-12 h-12 text-whatsapp-primary" />,
      title: "End-to-End Encryption",
      description: "Your messages and calls are secured so only you and the person you're communicating with can read or listen to them",
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose WhatsApp</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
