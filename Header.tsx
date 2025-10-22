import { ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-gradient-primary">عناية البحر</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
            الرئيسية
          </a>
          <a href="#products" className="text-foreground hover:text-primary transition-smooth font-medium">
            المنتجات
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
            من نحن
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
            تواصل معنا
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              0
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
