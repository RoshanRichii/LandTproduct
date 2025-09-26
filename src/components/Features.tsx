import { Monitor, Cpu, Camera, Battery, Zap, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: "Stunning Display",
      items: [
        "6.77-inch Fluid AMOLED display",
        "120Hz adaptive refresh rate",
        "Up to 1300 nits peak brightness",
        "10-bit color depth with HDR10+",
        "Aqua Touch for wet finger use"
      ]
    },
    {
      icon: Cpu,
      title: "Flagship Performance", 
      items: [
        "MediaTek Dimensity 8350 Apex",
        "8GB/12GB LPDDR5X RAM",
        "Large CryoVelocity graphene vapor chamber",
        "Efficient heat dissipation during gaming",
        "Flagship-level performance"
      ]
    },
    {
      icon: Camera,
      title: "Advanced Camera System",
      items: [
        "50MP Sony sensor with OIS",
        "4K 60fps video recording",
        "8MP ultra-wide lens",
        "AI Perfect Shot & AI Unblur",
        "AI Writer for enhanced creativity"
      ]
    },
    {
      icon: Battery,
      title: "Exceptional Battery Life",
      items: [
        "Large 7,100mAh battery capacity",
        "80W fast charging included",
        "4 years of healthy battery guarantee",
        "Maintains 80% capacity over time",
        "All-day power for heavy usage"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Cutting-Edge Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every detail engineered for excellence. Discover what makes the Nord CE 5 extraordinary.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <ul className="space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground text-sm flex items-start">
                    <div className="w-1.5 h-1.5 bg-oneplus-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;