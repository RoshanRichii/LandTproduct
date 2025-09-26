import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import heroImage from "@/assets/oneplus-nord-ce5-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-background via-background to-card">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold bg-hero-gradient bg-clip-text text-transparent leading-tight">
              OnePlus Nord CE 5
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-lg">
              Flagship performance meets exceptional battery life. Experience the future of mobile technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Buy Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-oneplus-red">6.77"</div>
              <div className="text-sm text-muted-foreground">AMOLED Display</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-oneplus-orange">120Hz</div>
              <div className="text-sm text-muted-foreground">Refresh Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-oneplus-red">50MP</div>
              <div className="text-sm text-muted-foreground">Main Camera</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-oneplus-orange">7100mAh</div>
              <div className="text-sm text-muted-foreground">Battery</div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-hero-gradient rounded-full blur-3xl opacity-30 animate-glow"></div>
            <img 
              src={heroImage} 
              alt="OnePlus Nord CE 5 smartphone"
              className="relative z-10 max-w-md w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;