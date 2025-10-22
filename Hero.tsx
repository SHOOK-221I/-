import { Button } from "@/components/ui/button";
import { Waves, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 gradient-ocean opacity-50 z-0" />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-right space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-accent-foreground">منتجات طبيعية 100%</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient-primary">عناية فاخرة</span>
              <br />
              <span className="text-foreground">لبشرة صحية</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              اكتشف مجموعة منتجاتنا الفاخرة للعناية بالجسم، مستوحاة من نقاء البحر وجمال الطبيعة
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button variant="hero" size="lg">
                <Waves className="ml-2 h-5 w-5" />
                تسوق الآن
              </Button>
              <Button variant="outline" size="lg">
                اكتشف المزيد
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center lg:text-right">
                <div className="text-3xl font-bold text-gradient-primary">+500</div>
                <div className="text-sm text-muted-foreground">منتج طبيعي</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl font-bold text-gradient-secondary">+2000</div>
                <div className="text-sm text-muted-foreground">عميل سعيد</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl font-bold text-gradient-primary">100%</div>
                <div className="text-sm text-muted-foreground">مكونات طبيعية</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImage}
              alt="Body care products"
              className="relative rounded-3xl shadow-elegant w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Decorative waves */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-20 text-background"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
