import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">1+</span>
          </div>
          <span className="text-xl font-bold text-foreground">OnePlus</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
          <Button variant="hero" size="sm">
            <UserPlus className="w-4 h-4 mr-2" />
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;