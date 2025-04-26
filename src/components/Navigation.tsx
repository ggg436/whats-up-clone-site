
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { toast } from "@/components/ui/use-toast";

const Navigation = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged out successfully"
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

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
            {user ? (
              <Button
                onClick={handleLogout}
                className="bg-whatsapp-primary hover:bg-whatsapp-dark text-white"
              >
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/auth")}
                className="bg-whatsapp-primary hover:bg-whatsapp-dark text-white"
              >
                Get Started
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
