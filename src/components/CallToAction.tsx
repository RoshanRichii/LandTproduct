import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-card via-background to-card">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Experience the Future
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't wait. Get your hands on the OnePlus Nord CE 5 today and discover what flagship performance really means.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 animate-glow">
              <ShoppingCart className="w-6 h-6 mr-3" />
              Buy Now - Starting at $399
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-oneplus-red text-oneplus-red hover:bg-oneplus-red hover:text-white">
              <ArrowRight className="w-6 h-6 mr-3" />
              Learn More
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-oneplus-red rounded-full"></div>
              Free shipping worldwide
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-oneplus-orange rounded-full"></div>
              30-day money back guarantee
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-oneplus-red rounded-full"></div>
              2-year warranty included
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;