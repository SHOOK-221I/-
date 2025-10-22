import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 text-right">
            <div className="flex items-center gap-3 justify-end">
              <span className="text-2xl font-bold text-gradient-primary">عناية البحر</span>
              <img src={logo} alt="Logo" className="h-10 w-10" />
            </div>
            <p className="text-muted-foreground">
              متجرك الموثوق لمنتجات العناية بالجسم الطبيعية والفاخرة
            </p>
            <div className="flex gap-3 justify-end">
              <a href="#" className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-right">
            <h3 className="text-lg font-bold text-foreground">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-smooth">
                  المنتجات
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  الشروط والأحكام
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4 text-right">
            <h3 className="text-lg font-bold text-foreground">التصنيفات</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  زيوت العناية
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  كريمات الجسم
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  أدوات العناية
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  المجموعات الخاصة
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-right">
            <h3 className="text-lg font-bold text-foreground">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 justify-end text-muted-foreground">
                <span>info@oceancare.sa</span>
                <Mail className="h-5 w-5 text-secondary" />
              </li>
              <li className="flex items-center gap-2 justify-end text-muted-foreground">
                <span dir="ltr">+966 50 123 4567</span>
                <Phone className="h-5 w-5 text-secondary" />
              </li>
              <li className="flex items-start gap-2 justify-end text-muted-foreground">
                <span>الرياض، المملكة العربية السعودية</span>
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2024 عناية البحر. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
